// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchImageByNameResponseBodyAuctions extends $dara.Model {
  /**
   * @remarks
   * The category of the image.
   * 
   * @example
   * 20
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
   * The attribute, which is an integer.
   * 
   * @example
   * 2
   */
  intAttr?: number;
  /**
   * @example
   * 20
   */
  intAttr2?: number;
  intAttr3?: number;
  intAttr4?: number;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * 2092061_1.jpg
   */
  picName?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * 2092061_1
   */
  productId?: string;
  /**
   * @remarks
   * The similarity score of the returned image. Valid values: 0 to 1.
   * 
   * >  To use this feature, you must upgrade the SDK to version 3.1.1.
   * 
   * @example
   * 1
   */
  score?: number;
  /**
   * @remarks
   * The score information about the image.
   * 
   * > *   This parameter is not supported. We recommend that you use the Score parameter.
   * >*   The SortExprValues parameter indicates a 2-tuple in which values are separated by a semicolon (;). The first value indicates the correlation score of the returned image. A greater value indicates a higher correlation with the sample image. Different algorithms are used.
   * >*   If the value of CategoryId is within the value range from 0 to 2, the value range of SortExprValues is from 0 to 7.33136443711219e+24.
   * >*   If the value of CategoryId is not within the value range from 0 to 2, the value range of SortExprValues is from 0 to 5.37633353624177e+24. If the returned image is identical with the sample image, the highest correlation score is generated.
   * 
   * @example
   * 5.37633353624177e+24;0
   */
  sortExprValues?: string;
  /**
   * @remarks
   * The attribute, which is a string.
   * 
   * @example
   * ss
   */
  strAttr?: string;
  /**
   * @example
   * test
   */
  strAttr2?: string;
  strAttr3?: string;
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
   * The number of images returned.
   * 
   * @example
   * 10
   */
  docsFound?: number;
  /**
   * @remarks
   * The number of images that match the search conditions on the Image Search instance.
   * 
   * @example
   * 10000
   */
  docsReturn?: number;
  /**
   * @remarks
   * The time it takes to complete the search process. Unit: milliseconds.
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
   * The ID of the category.
   * 
   * @example
   * other
   */
  id?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * 88888888
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
   * The result of subject recognition.
   * 
   * The subject area of the image, in the format of x1,x2,y1,y2. Specifically, x1 and y1 specify the upper-left pixel, and x2 and y2 specify the lower-right pixel. If a subject area is specified in the request, the specified subject area prevails.
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
   * The categories that are supported by the system.
   */
  allCategories?: SearchImageByNameResponseBodyPicInfoAllCategories[];
  /**
   * @remarks
   * The category selected by the system.
   * 
   * If a category is specified in the request, the specified category prevails.
   * 
   * @example
   * 20
   */
  categoryId?: number;
  /**
   * @remarks
   * The recognized subjects.
   */
  multiRegion?: SearchImageByNameResponseBodyPicInfoMultiRegion[];
  /**
   * @remarks
   * The result of subject recognition.
   * 
   * The subject area of the image, in the format of x1,x2,y1,y2. Specifically, x1 and y1 specify the upper-left pixel, and x2 and y2 specify the lower-right pixel. If a subject area is specified in the request, the specified subject area prevails.
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
   * The product descriptions returned.
   */
  auctions?: SearchImageByNameResponseBodyAuctions[];
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The summary of the search result.
   */
  head?: SearchImageByNameResponseBodyHead;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * The information such as the system-selected category and result of subject recognition.
   */
  picInfo?: SearchImageByNameResponseBodyPicInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 36C43E96-8F68-44AA-B1AF-B1F7AB94A6C1
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

