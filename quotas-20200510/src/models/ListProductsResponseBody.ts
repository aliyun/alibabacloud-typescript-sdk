// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProductInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether general quotas are supported. Valid values:
   * 
   * - support: Supported.
   * 
   * - unsupport: Not supported.
   * 
   * @example
   * support
   */
  commonQuotaSupport?: string;
  /**
   * @remarks
   * <notice>**[Deprecated]** We recommend that you do not use this parameter.</notice>
   * 
   * Specifies whether dynamic quota adjustment is supported. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  dynamic?: boolean;
  /**
   * @remarks
   * Specifies whether API rate limits are supported. Valid values:
   * 
   * - support: Supported.
   * 
   * - unsupport: Not supported.
   * 
   * @example
   * unsupport
   */
  flowControlSupport?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * @example
   * Elastic Compute Service (ECS)
   */
  productName?: string;
  /**
   * @remarks
   * The English name of the Alibaba Cloud service.
   * 
   * @example
   * Elastic Compute Service
   */
  productNameEn?: string;
  /**
   * @remarks
   * The ID of the service category.
   * 
   * @example
   * 5
   */
  secondCategoryId?: number;
  /**
   * @remarks
   * The name of the service category.
   * 
   * @example
   * Elastic Compute
   */
  secondCategoryName?: string;
  /**
   * @remarks
   * The English name of the service category.
   * 
   * @example
   * Elastic Compute
   */
  secondCategoryNameEn?: string;
  /**
   * @remarks
   * Specifies whether privileges are supported. Valid values:
   * 
   * - support: Supported.
   * 
   * - unsupport: Not supported.
   * 
   * @example
   * support
   */
  whiteListLabelQuotaSupport?: string;
  static names(): { [key: string]: string } {
    return {
      commonQuotaSupport: 'CommonQuotaSupport',
      dynamic: 'Dynamic',
      flowControlSupport: 'FlowControlSupport',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productNameEn: 'ProductNameEn',
      secondCategoryId: 'SecondCategoryId',
      secondCategoryName: 'SecondCategoryName',
      secondCategoryNameEn: 'SecondCategoryNameEn',
      whiteListLabelQuotaSupport: 'WhiteListLabelQuotaSupport',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonQuotaSupport: 'string',
      dynamic: 'boolean',
      flowControlSupport: 'string',
      productCode: 'string',
      productName: 'string',
      productNameEn: 'string',
      secondCategoryId: 'number',
      secondCategoryName: 'string',
      secondCategoryNameEn: 'string',
      whiteListLabelQuotaSupport: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned for this query.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position of the returned query data. An empty value indicates that all data has been queried.
   * 
   * @example
   * 4
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the Alibaba Cloud service.
   */
  productInfo?: ListProductsResponseBodyProductInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DA9C136-11BC-4C39-ADC6-B86276128072
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned for this request.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productInfo: 'ProductInfo',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      productInfo: { 'type': 'array', 'itemType': ListProductsResponseBodyProductInfo },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.productInfo)) {
      $dara.Model.validateArray(this.productInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

