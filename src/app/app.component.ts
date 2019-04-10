import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  showhideProduct: boolean = false
  showhideCart: boolean = false
  selectItemIndex: number = null
  plusItemIndex: number = null
  minusItemIndex: number = null
  addCartItemIndex: number = null
  clearCartItemIndex: number = null
  removeItemIndex: number = null
  totalPrice: number = null
  isCart: number = 0

  showProducts() {
    this.showhideProduct = true;
    this.showhideCart = false;
  }

  checkSelected(index: number): string {
    if (index === this.selectItemIndex) {
      return "#efefef"
    }
    return "white"
  }

  selectItem(index: number) {
    this.selectItemIndex = index
  }

  quantityPlus(index: number) {
    let proQuantity = this.productList[index]
    if (this.selectItemIndex == null || index !== this.selectItemIndex) {
      alert("Item not selected!")
    }
    else if (index === this.selectItemIndex) {
      proQuantity.quantity += 1
    }
  }

  quantityMinus(index: number) {
    let proQuantity = this.productList[index]
    if (this.selectItemIndex == null || index !== this.selectItemIndex) {
      alert("Item not selected!")
    }
    else if (index === this.selectItemIndex && proQuantity.quantity > 0) {
      proQuantity.quantity -= 1
    }
    else {
      alert("Quantity already 0!")
    }
  }

  addCart() {
    let cartQuantity = this.productList[this.selectItemIndex]
    if (this.selectItemIndex == null) {
      alert("No item selected!")
    }
    else if (cartQuantity.quantity == 0) {
      alert("Quantity is 0!")
    }
    else {
      cartQuantity.cartQty = cartQuantity.cartQty + cartQuantity.quantity
      cartQuantity.quantity = 0
      this.isCart += 1
      this.totalPrice += (cartQuantity.cartQty * cartQuantity.price)
    }
    this.selectItemIndex = null
  }

  clearCart() {
    const cartQuantity = Object.keys(this.productList)
    for (let i = 0; i < cartQuantity.length; i++) {
      let cart = this.productList[i]
      if (cart.cartQty > 0) {
        this.isCart -= 1
        cart.cartQty = 0
        this.totalPrice = null
      }
    }
    if (this.isCart === 0) {
      alert("Empty cart!")
    }
  }

  showCart() {
    this.showhideProduct = false;
    this.showhideCart = true;
  }

  removeItem(index: number) {
    const removeItem = Object.keys(this.productList)
    this.removeItemIndex = index
    let cartQuantity = this.productList[index]
    this.totalPrice -= (cartQuantity.cartQty * cartQuantity.price)
    cartQuantity.cartQty = 0;
    this.isCart -= 1
  }

  productList =
    [
      {
        id: 0,
        price: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 1,
        price: 1000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 2,
        price: 600,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 3,
        price: 2000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 4,
        price: 3000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 5,
        price: 4000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 6,
        price: 8000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 7,
        price: 200,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 8,
        price: 800,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 9,
        price: 500,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 10,
        price: 20,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      },
      {
        id: 11,
        price: 9999,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo autem, modi repudiandae nam alias, minima tempore eum dolores itaque illum vero ipsum nesciunt sed quaerat magni laboriosam magnam? Et, dolorem.",
        image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05962448.png",
        quantity: 0,
        cartQty: 0
      }
    ]


}
