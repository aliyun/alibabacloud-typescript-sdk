// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiDefinitionsRequest extends $dara.Model {
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
   * The product code.
   * 
   * - Call the GetRequestLog operation to obtain the product code from the response.
   * 
   * - Find the product code in the URL of the OpenAPI Portal. For example, <props="china">the URL of the OpenAPI Portal for Short Message Service is https\\://api.aliyun.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
   *   <props="intl">the URL of the OpenAPI Portal for Short Message Service is https\\://api.alibabacloud.com/product/Dysmsapi. The product code for Short Message Service is Dysmsapi.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'apiVersion',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

