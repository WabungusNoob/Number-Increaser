

const CountLabel = document.getElementById("Number");
const NumberDecrement = document.getElementById("NumberDecrement");
const NumberReset = document.getElementById("NumberReset");
const NumberIncrement = document.getElementById("NumberIncrement");
let Count = 0;







NumberDecrement.onclick = function Decrement()
{
    Count--;
    CountLabel.textContent = Count;
};

NumberReset.onclick = function Reset()
{
    Count = 0
    CountLabel.textContent = Count;
};

NumberIncrement.onclick = function Increment()
{
    Count++;
    console.log(Count)
    CountLabel.textContent = Count;
};




