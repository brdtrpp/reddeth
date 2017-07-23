pragma solidity ^0.4.11;


contract CreatePost {

    struct Post {
        bytes32 title;
        bytes content;
    }

    uint public value;
    bytes32 public title;
    address owner;

    event CreatedPost(
        address _from
    );

    //this function only gets ran once the contract is deployed
    //it is only ran once
    function createAPost() {
        owner = msg.sender;
        CreatedPost(msg.sender);
    }

}
