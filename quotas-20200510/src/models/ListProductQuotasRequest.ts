// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductQuotasRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * >  The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * >  The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: ListProductQuotasRequestDimensions[];
  /**
   * @remarks
   * The code of the dimension group.
   * 
   * @example
   * entconsole_w1j3msbo2g
   */
  groupCode?: string;
  /**
   * @remarks
   * The keyword that you want to use to search for the quotas.
   * 
   * >  This parameter is available only for quotas that belong to ECS Quotas by Instance Type. The keyword is used to match the values of `QuotaName` and `QuotaActionCode`.
   * 
   * @example
   * ecs-spec
   */
  keyWord?: string;
  /**
   * @remarks
   * The maximum number of records that can be returned for the query.
   * 
   * Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * *   You do not need to specify this parameter for the first and last requests.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of the `ProductCode` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-spec
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * ecs.g5.2xlarge
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The type of the quota.
   * 
   * Default value: CommonQuota.
   * 
   * Valid values:
   * 
   * *   FlowControl: API rate limit
   * *   WhiteListLabel: privilege
   * *   CommonQuota: general quota
   * 
   * @example
   * FlowControl
   */
  quotaCategory?: string;
  /**
   * @remarks
   * The field based on which you want to sort the returned records.
   * 
   * >  This parameter is available only for quotas that belong to ECS Quotas by Instance Type. You can leave this parameter empty.
   * 
   * Valid values:
   * 
   * *   TOTAL: sorts the returned records based on the total quota.
   * *   TIME: sorts the returned records based on the time when the quota was last modified.
   * *   RESERVED: sorts the returned records based on the reserved quota.
   * 
   * @example
   * TIME
   */
  sortField?: string;
  /**
   * @remarks
   * The order in which you want to sort the returned records.
   * 
   * >  This parameter is available only for quotas that belong to ECS Quotas by Instance Type. You can leave this parameter empty.
   * 
   * Valid values:
   * 
   * *   Descending
   * *   Ascending
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      groupCode: 'GroupCode',
      keyWord: 'KeyWord',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': ListProductQuotasRequestDimensions },
      groupCode: 'string',
      keyWord: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
      sortField: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimensions)) {
      $dara.Model.validateArray(this.dimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

