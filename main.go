package main

import (
	"fmt"

	dsa "github.com/devsamahd/dsa/GoDSA"
)

func main(){
	mylist := dsa.LinkedList{}
	node1 := &dsa.Node{Data: 10}
	node2 := &dsa.Node{Data: 20}


	mylist.Prepend(node1)
	mylist.Prepend(node2)

	fmt.Println(mylist)
}