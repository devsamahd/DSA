package dsa

type Node struct{
		Data int
		Next *Node
}

type LinkedList struct{
	Head *Node
	Length int
}

func (l *LinkedList) Prepend(n *Node){
	second := l.Head
	l.Head = n
	l.Head.Next =second
	l.Length++
}