// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace extends $dara.Model {
  faceId?: string;
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces extends $dara.Model {
  face?: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace[];
  static names(): { [key: string]: string } {
    return {
      face: 'Face',
    };
  }

  static types(): { [key: string]: any } {
    return {
      face: { 'type': 'array', 'itemType': ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFacesFace },
    };
  }

  validate() {
    if(Array.isArray(this.face)) {
      $dara.Model.validateArray(this.face);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson extends $dara.Model {
  faces?: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces;
  personDescription?: string;
  personId?: string;
  personName?: string;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      personDescription: 'PersonDescription',
      personId: 'PersonId',
      personName: 'PersonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPersonFaces,
      personDescription: 'string',
      personId: 'string',
      personName: 'string',
    };
  }

  validate() {
    if(this.faces && typeof (this.faces as any).validate === 'function') {
      (this.faces as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategoriesCategoryPersons extends $dara.Model {
  person?: ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson[];
  static names(): { [key: string]: string } {
    return {
      person: 'Person',
    };
  }

  static types(): { [key: string]: any } {
    return {
      person: { 'type': 'array', 'itemType': ListCustomPersonsResponseBodyCategoriesCategoryPersonsPerson },
    };
  }

  validate() {
    if(Array.isArray(this.person)) {
      $dara.Model.validateArray(this.person);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategoriesCategory extends $dara.Model {
  categoryDescription?: string;
  categoryId?: string;
  categoryName?: string;
  persons?: ListCustomPersonsResponseBodyCategoriesCategoryPersons;
  static names(): { [key: string]: string } {
    return {
      categoryDescription: 'CategoryDescription',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      persons: 'Persons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryDescription: 'string',
      categoryId: 'string',
      categoryName: 'string',
      persons: ListCustomPersonsResponseBodyCategoriesCategoryPersons,
    };
  }

  validate() {
    if(this.persons && typeof (this.persons as any).validate === 'function') {
      (this.persons as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBodyCategories extends $dara.Model {
  category?: ListCustomPersonsResponseBodyCategoriesCategory[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': ListCustomPersonsResponseBodyCategoriesCategory },
    };
  }

  validate() {
    if(Array.isArray(this.category)) {
      $dara.Model.validateArray(this.category);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomPersonsResponseBody extends $dara.Model {
  categories?: ListCustomPersonsResponseBodyCategories;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FD4DED6B-0C26-5A8B-A6BE-4FA542AE4D57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: ListCustomPersonsResponseBodyCategories,
      requestId: 'string',
    };
  }

  validate() {
    if(this.categories && typeof (this.categories as any).validate === 'function') {
      (this.categories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

