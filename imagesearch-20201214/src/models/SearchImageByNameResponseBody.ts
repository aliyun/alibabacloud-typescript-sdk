// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByNameResponseBodyAuctions extends $dara.Model {
  /**
   * @remarks
   * The image category.
   * 
   * @example
   * 20
   */
  categoryId?: number;
  /**
   * @remarks
   * The custom content defined by the user.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The integer attribute.
   * 
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @remarks
   * The integer attribute.
   * 
   * @example
   * 20
   */
  intAttr2?: number;
  /**
   * @remarks
   * The integer attribute. This field can be used for filtering during queries and is returned in query results.
   * 
   * @example
   * 1
   */
  intAttr3?: number;
  /**
   * @remarks
   * The integer attribute. This field can be used for filtering during queries and is returned in query results.
   * 
   * @example
   * 1
   */
  intAttr4?: number;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The image similarity score. Valid values: 0 to 1.
   * > You must upgrade to V3.1.1 or later to use this field.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * The system scoring information.
   * > - This field is deprecated. Use Score instead.
   * - SortExprValues is a semicolon-separated pair. The first value indicates the relevance score of the image. A higher value indicates higher relevance to the query image. The scoring varies depending on the algorithm model.
   * - When the category is 0 to 2, the value range of SortExprValues is 0 to 7.33136443711219e+24.
   * - For other category values, the value range of SortExprValues is 0 to 5.37633353624177e+24. This score reaches its maximum when two images are identical.
   * 
   * @example
   * 5.37633353624177e+24;0
   */
  sortExprValues?: string;
  /**
   * @remarks
   * The string attribute.
   * 
   * @example
   * ss
   */
  strAttr?: string;
  /**
   * @remarks
   * The string attribute.
   * 
   * @example
   * test
   */
  strAttr2?: string;
  /**
   * @remarks
   * The string attribute. The maximum length is 128 characters. This field can be used for filtering during queries and is returned in query results.
   * 
   * @example
   * test
   */
  strAttr3?: string;
  /**
   * @remarks
   * The string attribute. The maximum length is 128 characters. This field can be used for filtering during queries and is returned in query results.
   * 
   * @example
   * test
   */
  strAttr4?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      customContent: 'CustomContent',
      intAttr: 'IntAttr',
      intAttr2: 'IntAttr2',
      intAttr3: 'IntAttr3',
      intAttr4: 'IntAttr4',
      picName: 'PicName',
      productId: 'ProductId',
      score: 'Score',
      sortExprValues: 'SortExprValues',
      strAttr: 'StrAttr',
      strAttr2: 'StrAttr2',
      strAttr3: 'StrAttr3',
      strAttr4: 'StrAttr4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      customContent: 'string',
      intAttr: 'number',
      intAttr2: 'number',
      intAttr3: 'number',
      intAttr4: 'number',
      picName: 'string',
      productId: 'string',
      score: 'number',
      sortExprValues: 'string',
      strAttr: 'string',
      strAttr2: 'string',
      strAttr3: 'string',
      strAttr4: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyHead extends $dara.Model {
  /**
   * @remarks
   * The number of results returned.
   * 
   * @example
   * 10
   */
  docsFound?: number;
  /**
   * @remarks
   * The number of matched results in the instance.
   * 
   * @example
   * 10000
   */
  docsReturn?: number;
  /**
   * @remarks
   * The search duration, in milliseconds.
   * 
   * @example
   * 95
   */
  searchTime?: number;
  static names(): { [key: string]: string } {
    return {
      docsFound: 'DocsFound',
      docsReturn: 'DocsReturn',
      searchTime: 'SearchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docsFound: 'number',
      docsReturn: 'number',
      searchTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfoAllCategories extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 88888888
   */
  id?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * other
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfoMultiRegion extends $dara.Model {
  /**
   * @remarks
   * The subject identification result.
   * The subject region of the image, in the format of x1,x2,y1,y2, where x1,y1 is the upper-left point and x2,y2 is the lower-right point. If the user specifies a subject region in the request, the specified region is used.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBodyPicInfo extends $dara.Model {
  /**
   * @remarks
   * The information about all categories supported by the system.
   */
  allCategories?: SearchImageByNameResponseBodyPicInfoAllCategories[];
  /**
   * @remarks
   * The category prediction result.
   * If the user specifies a category in the request, the specified category is used.
   * 
   * @example
   * 20
   */
  categoryId?: number;
  /**
   * @remarks
   * The subject identification collection.
   */
  multiRegion?: SearchImageByNameResponseBodyPicInfoMultiRegion[];
  /**
   * @remarks
   * The subject identification result.
   * The subject region of the image, in the format of x1,x2,y1,y2, where x1,y1 is the upper-left point and x2,y2 is the lower-right point. If the user specifies a subject region in the request, the specified region is used.
   * 
   * @example
   * 280,486,232,351
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      allCategories: 'AllCategories',
      categoryId: 'CategoryId',
      multiRegion: 'MultiRegion',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allCategories: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyPicInfoAllCategories },
      categoryId: 'number',
      multiRegion: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyPicInfoMultiRegion },
      region: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allCategories)) {
      $dara.Model.validateArray(this.allCategories);
    }
    if(Array.isArray(this.multiRegion)) {
      $dara.Model.validateArray(this.multiRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The descriptions of all returned products.
   */
  auctions?: SearchImageByNameResponseBodyAuctions[];
  /**
   * @remarks
   * The error code. Valid values:
   * - 0: success.
   * - Non-zero: failure.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The overview of the search results.
   */
  head?: SearchImageByNameResponseBodyHead;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The information such as category prediction and subject identification results.
   */
  picInfo?: SearchImageByNameResponseBodyPicInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auctions: 'Auctions',
      code: 'Code',
      head: 'Head',
      msg: 'Msg',
      picInfo: 'PicInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctions: { 'type': 'array', 'itemType': SearchImageByNameResponseBodyAuctions },
      code: 'number',
      head: SearchImageByNameResponseBodyHead,
      msg: 'string',
      picInfo: SearchImageByNameResponseBodyPicInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.auctions)) {
      $dara.Model.validateArray(this.auctions);
    }
    if(this.head && typeof (this.head as any).validate === 'function') {
      (this.head as any).validate();
    }
    if(this.picInfo && typeof (this.picInfo as any).validate === 'function') {
      (this.picInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

