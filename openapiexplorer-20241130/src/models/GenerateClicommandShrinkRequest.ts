// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCLICommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Enable aggregation. If enabled, the CLI automatically reads full data using pagination and aggregates the results.
   * 
   * >Warning: 
   * 
   * You can use this option only with List operations that support pagination.
   * 
   * 
   * 
   * - true: Enable
   * 
   * - false: Disable
   * 
   * @example
   * true
   */
  aggregatePagination?: boolean;
  /**
   * @remarks
   * API name.
   * 
   * This parameter is required.
   * 
   * @example
   * DescribeRegions
   */
  api?: string;
  /**
   * @remarks
   * Request parameters.
   * 
   * @deprecated
   */
  apiParamsShrink?: string;
  /**
   * @remarks
   * API version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @remarks
   * API input parameters in JSON format. This parameter has lower priority than apiParams. If you set apiParams, this parameter is ignored.
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
   * Product code.
   * 
   * - Call the GetRequestLog operation and get the product code from the response.
   * 
   * - Find the product code in the OpenAPI portal URL. For example, the OpenAPI portal URL for Short Message Service is https\\://api.aliyun.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi. In international regions, the URL is https\\://api.alibabacloud.com/product/Dysmsapi. The product code remains Dysmsapi.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  product?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatePagination: 'aggregatePagination',
      api: 'api',
      apiParamsShrink: 'apiParams',
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
      apiParamsShrink: 'string',
      apiVersion: 'string',
      jsonApiParams: 'string',
      product: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

