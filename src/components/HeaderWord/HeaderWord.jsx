import React, { Component } from 'react'

export default class HeaderWord extends Component {
    componentDidMount(){
        var wordInterval;
    var currentWord = 0;
    var words = [];
    var wordArray = [];

    startWords();

    function startWords () {
        try {
        words = document.getElementsByClassName('word');
        console.log("start words started")

        currentWord = 0;
        wordArray = [];

        words[currentWord].style.opacity = 1;
        for (var i = 0; i < words.length; i++) {
            splitLetters(words[i]);
        }

        changeWord();
        clearInterval(wordInterval);
        wordInterval = setInterval(changeWord, 4000);
        
        } catch (error) {
        // Ruh-roh - there are no wordz
        // No worries
        }
    }

    function changeWord() {
        console.log("change words started")
        var cw = wordArray[currentWord];
        var nw = currentWord === words.length-1 ? wordArray[0] : wordArray[currentWord+1];
        for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
        }

        for (var i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = 1;
            animateLetterIn(nw, i);
        }

    currentWord = (currentWord === wordArray.length-1) ? 0 : currentWord+1;
    }

    function animateLetterOut(cw, i) {
        console.log("animate letter out started")
        setTimeout(function() {
    		cw[i].className = 'letter out';
        }, i*80);
    }

    function animateLetterIn(nw, i) {
        console.log("animate letter in started")
        setTimeout(function() {
    		nw[i].className = 'letter in';
        }, 340+(i*80));
    }

    function splitLetters(word) {
        console.log("split letters started")
        var content = word.innerText;
        word.innerText = '';
        var letters = [];

        for (var i = 0; i < content.length; i++) {
            var letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerText = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }
    wordArray.push(letters);
    }
    }
    render() {
    
        return (
            <div>
                <h1>
                    <span className='word' style={{opacity:1}} >
                        <span className="letter in">J</span>
                        <span className="letter in">o</span>
                        <span className="letter in">s</span>
                        <span className="letter in">e</span>
                        <span className="letter in">p</span>
                        <span className="letter in">h</span>
                        <span className="letter in">{'\u00A0'}</span>
                        <span className="letter in">B</span>
                        <span className="letter in">e</span>
                        <span className="letter in">e</span>
                        <span className="letter in">c</span>
                        <span className="letter in">h</span>
                    </span>
                    <span className='word' style={{opacity:1}}>
                        <span className='letter out'>C</span>
                        <span className='letter out'>o</span>
                        <span className='letter out'>o</span>
                        <span className='letter out'>l</span>
                        <span className='letter out'>{'\u00A0'}</span>
                        <span className='letter out'>G</span>
                        <span className='letter out'>u</span>
                        <span className='letter out'>y</span>
                        <span className='letter out'>.</span>
                    </span> 
                </h1>
            </div>
        )
    }
}
