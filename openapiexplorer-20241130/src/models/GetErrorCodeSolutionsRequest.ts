// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorCodeSolutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the solution. Valid values: zh-CN and en-US. Not all of the solutions are available in English. If you set this parameter to en-US, but the corresponding solution is actually not available in English, no response is returned.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The error code based on which you want to query a solution.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234-56789012
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message for which you want to query a solution. This parameter must be configured together with the errorCode parameter.
   * 
   * @example
   * An error occurred while processing your request.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The product code. You can use one of the following methods to query a product code:
   * 
   * *   Call the GetRequestLog operation to query a product code from the response.
   * *   Query the code of a product in the OpenAPI Explorer URL of the product. For example, the OpenAPI Explorer URL of Short Message Service (SMS) is https://api.alibabacloud.com/product/Dysmsapi. Therefore, the product code of SMS is Dysmsapi.
   * 
   * @example
   * oss
   */
  product?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'acceptLanguage',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      errorCode: 'string',
      errorMessage: 'string',
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

