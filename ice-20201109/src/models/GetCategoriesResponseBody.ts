// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoriesResponseBodyCategory extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 46
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   */
  cateName?: string;
  /**
   * @remarks
   * The level of the category. A value of **0** indicates a level-1 category, a value of **1** indicates a level-2 category, and a value of **2** indicates a level-3 category.
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
   * -1
   */
  parentId?: number;
  /**
   * @remarks
   * The type of the category. Valid values:
   * 
   * *   **default**: audio, video, and image files. This is the default value.
   * *   **material**: short video materials.
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
   * The category ID.
   * 
   * @example
   * 129
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * *   The value can be up to 64 bytes in length.
   * *   The value is encoded in UTF-8.
   */
  cateName?: string;
  /**
   * @remarks
   * The level of the category. A value of **0** indicates a level-1 category, a value of **1** indicates a level-2 category, and a value of **2** indicates a level-3 category.
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
   * 46
   */
  parentId?: number;
  /**
   * @remarks
   * The total number of subcategories.
   * 
   * @example
   * 100
   */
  subTotal?: number;
  /**
   * @remarks
   * The type of the category. Valid values:
   * 
   * *   **default**: audio, video, and image files. This is the default value.
   * *   **material**: short video materials.
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
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The subcategories in the category.
   */
  subCategories?: GetCategoriesResponseBodySubCategories;
  /**
   * @remarks
   * The total number of subcategories.
   * 
   * @example
   * 100
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

