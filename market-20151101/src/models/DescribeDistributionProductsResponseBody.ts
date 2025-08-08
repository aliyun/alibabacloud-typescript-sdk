// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDistributionProductsResponseBodyResults extends $dara.Model {
  /**
   * @example
   * cmap*****
   */
  code?: string;
  firstCategoryName?: string;
  /**
   * @example
   * //photogallery.oss-cn-hangzhou.aliyuncs.com/photo/1744526877246715/09605255-87fd-44d1-8143-96ebc8019d46.jpeg
   */
  imageUrl?: string;
  name?: string;
  /**
   * @example
   * 100
   */
  price?: string;
  /**
   * @example
   * 5
   */
  score?: string;
  secondCategoryName?: string;
  shortDescription?: string;
  /**
   * @example
   * 30
   */
  submissionRadio?: string;
  supplierName?: string;
  /**
   * @example
   * 1911534921******
   */
  supplierUId?: string;
  /**
   * @example
   * 109
   */
  tradeCount?: string;
  type?: string;
  /**
   * @example
   * 55
   */
  userCommentCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      firstCategoryName: 'FirstCategoryName',
      imageUrl: 'ImageUrl',
      name: 'Name',
      price: 'Price',
      score: 'Score',
      secondCategoryName: 'SecondCategoryName',
      shortDescription: 'ShortDescription',
      submissionRadio: 'SubmissionRadio',
      supplierName: 'SupplierName',
      supplierUId: 'SupplierUId',
      tradeCount: 'TradeCount',
      type: 'Type',
      userCommentCount: 'UserCommentCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      firstCategoryName: 'string',
      imageUrl: 'string',
      name: 'string',
      price: 'string',
      score: 'string',
      secondCategoryName: 'string',
      shortDescription: 'string',
      submissionRadio: 'string',
      supplierName: 'string',
      supplierUId: 'string',
      tradeCount: 'string',
      type: 'string',
      userCommentCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5BD09171-MB74-18D8-890E-C70C067527BE
   */
  requestId?: string;
  results?: DescribeDistributionProductsResponseBodyResults[];
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      results: 'Results',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DescribeDistributionProductsResponseBodyResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

