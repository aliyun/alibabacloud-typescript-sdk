// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoriesResponseBodyCategory extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 100
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * film
   */
  cateName?: string;
  /**
   * @remarks
   * The level of the category. Valid values:
   * 
   * *   **0**: level 1 category
   * *   **1**: level 2 category
   * *   **2**: level 3 category
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The ID of the parent category.
   * 
   * @example
   * 100012****
   */
  parentId?: number;
  /**
   * @remarks
   * The type of the category. Valid values:
   * 
   * *   **default**: audio, video, and image files
   * *   **material**: short video materials
   * 
   * @example
   * default
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponseBodySubCategoriesCategory extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 100
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * film
   */
  cateName?: string;
  /**
   * @remarks
   * The level of the category. Valid values:
   * 
   * *   **0**: level 1 category
   * *   **1**: level 2 category
   * *   **2**: level 3 category
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The ID of the parent category.
   * 
   * @example
   * 10020****
   */
  parentId?: number;
  /**
   * @remarks
   * The total number of subcategories.
   * 
   * @example
   * 1
   */
  subTotal?: number;
  /**
   * @remarks
   * The type of the subcategory. Valid values:
   * 
   * *   **default**: audio, video, and image files
   * *   **material**: short video materials
   * 
   * @example
   * default
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
      subTotal: 'SubTotal',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
      subTotal: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCategoriesResponseBodySubCategories extends $dara.Model {
  category?: GetCategoriesResponseBodySubCategoriesCategory[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: { 'type': 'array', 'itemType': GetCategoriesResponseBodySubCategoriesCategory },
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

export class GetCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the category.
   */
  category?: GetCategoriesResponseBodyCategory;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the subcategory.
   */
  subCategories?: GetCategoriesResponseBodySubCategories;
  /**
   * @remarks
   * The total number of subcategories.
   * 
   * @example
   * 3795
   */
  subTotal?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      requestId: 'RequestId',
      subCategories: 'SubCategories',
      subTotal: 'SubTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: GetCategoriesResponseBodyCategory,
      requestId: 'string',
      subCategories: GetCategoriesResponseBodySubCategories,
      subTotal: 'number',
    };
  }

  validate() {
    if(this.category && typeof (this.category as any).validate === 'function') {
      (this.category as any).validate();
    }
    if(this.subCategories && typeof (this.subCategories as any).validate === 'function') {
      (this.subCategories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

