// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaApplicationTemplatesRequestDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   You must specify both Key and Value for each quota dimension.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   You must specify both Key and Value for each quota dimension.
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

export class ListQuotaApplicationTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The quota dimensions.
   */
  dimensions?: ListQuotaApplicationTemplatesRequestDimensions[];
  /**
   * @remarks
   * The ID of the quota item.
   * 
   * @example
   * 1****
   */
  id?: string;
  /**
   * @remarks
   * The maximum number of records that can be returned for the query. Valid values: 1 to 100. Default value: 30.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query.
   * 
   * > If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440555.html) operation and check the value of `ProductCode` in the response.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the quota.
   * 
   * @example
   * q_security-groups
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   CommonQuota: general quota.
   * *   WhiteListLabel: whitelist quota.
   * *   FlowControl: API rate limit.
   * 
   * @example
   * CommonQuota
   */
  quotaCategory?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      id: 'Id',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaCategory: 'QuotaCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'array', 'itemType': ListQuotaApplicationTemplatesRequestDimensions },
      id: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaCategory: 'string',
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

