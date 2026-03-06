// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCLICommandRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable aggregation. If you enable this feature, the CLI automatically reads full data by page and aggregates the results.
   * 
   * >Warning: 
   * 
   * Only List operations that support paging can use this switch.
   * 
   * 
   * 
   * - true: enables aggregation.
   * 
   * - false: disables aggregation.
   * 
   * @example
   * true
   */
  aggregatePagination?: boolean;
  /**
   * @remarks
   * The name of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * DescribeRegions
   */
  api?: string;
  /**
   * @remarks
   * The request parameters.
   * 
   * @deprecated
   */
  apiParams?: { [key: string]: any };
  /**
   * @remarks
   * The version of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @remarks
   * The request parameters for the API in JSON format. This parameter has a lower priority than \\`apiParams\\`. If \\`apiParams\\` is set, this parameter is ignored.
   * 
   * @example
   * {
   *     "InstanceChargeType": "PostPaid",
   *     "ResourceType": "instance",
   *     "AcceptLanguage": "en-US"
   * }
   */
  jsonApiParams?: string;
  /**
   * @remarks
   * The product code.
   * 
   * - Call the GetRequestLog operation to obtain the product code from the response.
   * 
   * - Find the product code in the URL of the product in OpenAPI Portal. For example, <props="china">the OpenAPI Portal URL for Short Message Service is https\\://api.aliyun.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
   *   <props="intl">the OpenAPI Portal URL for Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  product?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatePagination: 'aggregatePagination',
      api: 'api',
      apiParams: 'apiParams',
      apiVersion: 'apiVersion',
      jsonApiParams: 'jsonApiParams',
      product: 'product',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatePagination: 'boolean',
      api: 'string',
      apiParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      apiVersion: 'string',
      jsonApiParams: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.apiParams) {
      $dara.Model.validateMap(this.apiParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

