// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByPicResponseBodyAuctions extends $dara.Model {
  /**
   * @remarks
   * The image category.
   * 
   * @example
   * 8888888
   */
  categoryId?: number;
  /**
   * @remarks
   * The user-defined content.
   * 
   * @example
   * zidingyi
   */
  customContent?: string;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 20
   */
  intAttr2?: number;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
   */
  intAttr3?: number;
  /**
   * @remarks
   * The integer type attribute.
   * 
   * @example
   * 2
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
   * > You must upgrade to V3.1.1 to use this feature.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * The system scoring information.
   * > - This field is deprecated. Use Score instead. 
   * - SortExprValues is a semicolon-separated tuple. The first value indicates the relevance score of the image. A higher value indicates higher relevance to the query image. The scoring varies depending on the algorithm model.
   * - When the category is 0 to 2, the value range of SortExprValues is 0 to 7.33136443711219e+24.
   * - For other category values, the value range of SortExprValues is 0 to 5.37633353624177e+24. This score reaches its maximum when two images are identical.
   * 
   * @example
   * 5.37633353624177e+24;0
   */
  sortExprValues?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * test
   */
  strAttr?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * test
   */
  strAttr2?: string;
  /**
   * @remarks
   * The string type attribute.
   * 
   * @example
   * test
   */
  strAttr3?: string;
  /**
   * @remarks
   * The string type attribute.
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

export class SearchImageByPicResponseBodyHead extends $dara.Model {
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
   * The number of results matched in the instance.
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

export class SearchImageByPicResponseBodyPicInfoAllCategories extends $dara.Model {
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

export class SearchImageByPicResponseBodyPicInfoMultiRegion extends $dara.Model {
  /**
   * @remarks
   * The subject identification result. The subject region of the image, in the format of x1,x2,y1,y2, where x1,y1 is the upper-left point and x2,y2 is the lower-right point. If the subject region is specified in the request, the value specified in the request is used.
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

export class SearchImageByPicResponseBodyPicInfo extends $dara.Model {
  /**
   * @remarks
   * The information about all categories supported by the system.
   */
  allCategories?: SearchImageByPicResponseBodyPicInfoAllCategories[];
  /**
   * @remarks
   * The category prediction result. If the category is specified in the request, the value specified in the request is used.
   * 
   * @example
   * 88888888
   */
  categoryId?: number;
  /**
   * @remarks
   * The collection of subject identification results.
   * > You must upgrade to V3.1.1 to use this feature.
   */
  multiRegion?: SearchImageByPicResponseBodyPicInfoMultiRegion[];
  /**
   * @remarks
   * The subject identification result. The subject region of the image, in the format of x1,x2,y1,y2, where x1,y1 is the upper-left point and x2,y2 is the lower-right point. If the subject region is specified in the request, the value specified in the request is used.
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
      allCategories: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyPicInfoAllCategories },
      categoryId: 'number',
      multiRegion: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyPicInfoMultiRegion },
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

export class SearchImageByPicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The descriptions of all returned products.
   */
  auctions?: SearchImageByPicResponseBodyAuctions[];
  /**
   * @remarks
   * The error code.
   * - 0: successful.
   * - Non-zero: failed.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The overview of the search results.
   */
  head?: SearchImageByPicResponseBodyHead;
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
  picInfo?: SearchImageByPicResponseBodyPicInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B3137727-7D6E-488C-BA21-0E034C38A879
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      auctions: { 'type': 'array', 'itemType': SearchImageByPicResponseBodyAuctions },
      code: 'number',
      head: SearchImageByPicResponseBodyHead,
      msg: 'string',
      picInfo: SearchImageByPicResponseBodyPicInfo,
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

