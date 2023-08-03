const hasDuplicateIds = require("./hasDuplicateIds");

describe("Dom tree has duplicate ID's", () => {
    let root;
    beforeEach(() =>{
        //Create mock elements
         root = document.createElement("div");
         const child1 = document.createElement("div");
         const child2 = document.createElement("div");

         root.appendChild(child1);
         root.appendChild(child2);
    } );

    afterEach(() => {
        //reset after each test
        root = null;
    })

    it ("should be a function", () => {
        expect(typeof hasDuplicateIds).toEqual("function");
    })
    it("should return a boolean", () => {
        expect(typeof hasDuplicateIds()).toEqual("boolean")
    });
    it("should return false if no root", () => {
        expect(hasDuplicateIds()).toBeFalsy();
    });
      it("should return true if there are duplicate ID's", () => {
      
        //Add duplicate ID's
        root.id = "root";
        root.children[0].id = "child"
        root.children[1].id = "child"

        const result = hasDuplicateIds(root);

        expect(result).toEqual(true);
      });


       it("should return false if there are NO duplicate ID's", () => {
    
         //Add ID's
         root.id = "root";
         root.children[0].id = "child1";
         root.children[1].id = "child2";
        
         const result = hasDuplicateIds(root);

         expect(result).toEqual(false);
       });
})