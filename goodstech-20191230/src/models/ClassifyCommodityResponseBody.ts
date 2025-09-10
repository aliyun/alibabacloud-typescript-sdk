// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ClassifyCommodityResponseBodyDataCategories extends $dara.Model {
  /**
   * @example
   * 584
   */
  categoryId?: string;
  categoryName?: string;
  /**
   * @example
   * 0.417248
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyCommodityResponseBodyData extends $dara.Model {
  categories?: ClassifyCommodityResponseBodyDataCategories[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': ClassifyCommodityResponseBodyDataCategories },
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClassifyCommodityResponseBody extends $dara.Model {
  data?: ClassifyCommodityResponseBodyData;
  /**
   * @example
   * 87C5AF93-F641-54C2-873D-0501E637489C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ClassifyCommodityResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

