// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsResponseBodyProductInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud service supports general quotas. Valid values:
   * 
   * *   support: The Alibaba Cloud service supports general quotas.
   * *   unsupport: The Alibaba Cloud service does not support general quotas.
   * 
   * @example
   * support
   */
  commonQuotaSupport?: string;
  /**
   * @remarks
   * >  This parameter is discontinued and is not recommended.
   * 
   * Indicates whether the Alibaba Cloud service supports dynamic quota adjustment. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  dynamic?: boolean;
  /**
   * @remarks
   * Indicates whether the Alibaba Cloud service supports API rate limits. Valid values:
   * 
   * *   support: The Alibaba Cloud service supports API rate limits.
   * *   unsupport: The Alibaba Cloud service does not support API rate limits.
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
   * Indicates whether the Alibaba Cloud service supports whitelist quotas. Valid values:
   * 
   * *   support: The Alibaba Cloud service supports whitelist quotas.
   * *   unsupport: The Alibaba Cloud service does not support whitelist quotas.
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
   * The maximum number of records that are returned for the query.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position at which the query ends. An empty value indicates that all data is returned.
   * 
   * @example
   * 4
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the Alibaba Cloud services.
   */
  productInfo?: ListProductsResponseBodyProductInfo[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1DA9C136-11BC-4C39-ADC6-B86276128072
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that are returned for the query.
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

