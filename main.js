const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "blue" },
        { id: 2234, color: "green" },
      ],
      sizes: [
        { id: 1111, code: "XS" },
        { id: 1112, code: "S" },
        { id: 1113, code: "M" },
        { id: 1114, code: "L" },
        { id: 1115, code: "XL" },
      ],
    };
  },
});
