import CreatePostContract from '../../../../build/contracts/CreatePost.json'
import store from '../../../store'

const contract = require('truffle-contract')

export function createPost(title){
  let web3 = store.getState().web3.web3Instance

  if (typeof web3 !== 'undefined'){
    return function(dispatch){
      const post = contract(CreatePostContract)
      post.setProvider(web3.currentProvider)
      // console.log(post)
      // post.createAPost(web3)

      var postInstance

      web3.eth.getCoinbase((error, coinbase) => {
        if(error){
          console.error(error);
        }

        post.deployed().then(function(instance) {
          postInstance = instance
          console.log(postInstance)
          postInstance.createAPost({from:coinbase})
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.')
  }
}
