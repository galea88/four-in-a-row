class Player{

    constructor(name, id, color, active = false, tokens){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    createTokens(num){
        let tokens = [];
        for(let x=0;x<num;x++){
            let token = new Token(x, this);
            tokens.push(token);
        }
        return tokens;
    }

    get unusedTokens(){
        return this.tokens.filter(token =>  !token.dropped);
        
    }

    get activeToken(){
        return this.unusedTokens[0];    
    }

    checkTokens(){
        return this.unusedTokens.length == 0 ? false : true;
    }
    
}