// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * The API name.
   * 
   * This parameter is required.
   * 
   * @example
   * DescribeRegions
   */
  api?: string;
  /**
   * @remarks
   * The API version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2014-05-26
   */
  apiVersion?: string;
  /**
   * @remarks
   * The product code.
   * 
   * - Call the GetRequestLog operation to obtain the product code from the response.
   * 
   * - Find the product code in the product\\"s OpenAPI Portal URL. <props="china">For example, the OpenAPI Portal URL for Short Message Service is https\\://api.aliyun.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
   *   <props="intl">For example, the OpenAPI Portal URL for Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      apiVersion: 'apiVersion',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      apiVersion: 'string',
      product: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

