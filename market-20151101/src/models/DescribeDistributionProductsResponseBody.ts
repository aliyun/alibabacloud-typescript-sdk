// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDistributionProductsResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * cmap*****
   */
  code?: string;
  /**
   * @remarks
   * The first-level category name of the product.
   * 
   * @example
   * API市场
   */
  firstCategoryName?: string;
  /**
   * @remarks
   * The URL of the product main image.
   * 
   * @example
   * //photogallery.oss-cn-hangzhou.aliyuncs.com/photo/1744526877246715/09605255-87fd-44d1-8143-96ebc8019d46.jpeg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * 手机号码在网状态查询
   */
  name?: string;
  /**
   * @remarks
   * The price of the default product specification. For example, 100 indicates CNY 100.
   * 
   * @example
   * 100
   */
  price?: string;
  /**
   * @remarks
   * The user rating of the product.
   * 
   * @example
   * 5
   */
  score?: string;
  /**
   * @remarks
   * The second-level category name of the product.
   * 
   * @example
   * 生活服务
   */
  secondCategoryName?: string;
  /**
   * @remarks
   * The brief description of the product.
   * 
   * @example
   * 运营商号码状态查询】精准实时空号检测，手机号在网状态查询，返回正常、空号、通话中、在网但不可用、关机、呼叫转移、疑似关机、携号转网、号码错误、停机等多种状态。
   */
  shortDescription?: string;
  /**
   * @remarks
   * The commission rebate ratio for the product. For example, 30 indicates 30%.
   * 
   * @example
   * 30
   */
  submissionRadio?: string;
  /**
   * @remarks
   * The name of the promotion service provider.
   * 
   * @example
   * 深圳市****有限公司
   */
  supplierName?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the promotion service provider (product supplier).
   * 
   * @example
   * 1911534921******
   */
  supplierUId?: string;
  /**
   * @remarks
   * The number of transactions for the product in the last 180 days.
   * 
   * @example
   * 109
   */
  tradeCount?: string;
  /**
   * @remarks
   * The product type. Valid values:
   *         APP: application
   *         SERVICE: service
   *         CHENGPIN_SITE: ready-made website
   *         SITE_CUSTOM_SERVICE: custom website
   *         SITE_PROMOTION_RUN: website promotion and operations
   *         ENT_APP_SOFT: application software
   *         CLOUD_SERVICE: cloud service
   *         EIF: enterprise information
   *         BASIC_TOOLS: basic tools
   *         BASIC_SERVICES: basic services
   *         JIANZHAN_XITONG: website building system
   *         APP_COUPLES: application companion
   *         MIRRORS_MARKET: image marketplace
   *         MIRRORS_MARKET_BASIC_ENVIRONMENT: basic environment
   *         MIRRORS_MARKET_APPLICATION_SOFTWARE: application software
   *         MIRROR: image
   *         DINGDING: DingTalk
   *         DOWNLOAD: download
   *         EXTENDED: unknown
   *         API_SERVICE: API
   *         ROS: resource orchestration
   *         DOCKER: container
   *         LICENSE: license key
   *         SAAS_WUYING: application software - Wuying application.
   * 
   * @example
   * API类
   */
  type?: string;
  /**
   * @remarks
   * The number of buyer comments for the product.
   * 
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
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of promotional products per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BD09171-MB74-18D8-890E-C70C067527BE
   */
  requestId?: string;
  /**
   * @remarks
   * The promotional product information.
   */
  results?: DescribeDistributionProductsResponseBodyResults[];
  /**
   * @remarks
   * The total number of promotional products that match the search conditions.
   * 
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

