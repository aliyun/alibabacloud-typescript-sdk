// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The product code.
   * 
   * - Call the GetRequestLog operation and find the product code in the response.
   * 
   * - Find the product code in the URL of the OpenAPI Portal page for the product. For example, <props="china">the URL for the Short Message Service (SMS) OpenAPI Portal page is https\\://api.aliyun.com/product/Dysmsapi. The product code is Dysmsapi.
   *   <props="intl">the URL for the Short Message Service (SMS) OpenAPI Portal page is https\\://api.alibabacloud.com/product/Dysmsapi. The product code is Dysmsapi.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

