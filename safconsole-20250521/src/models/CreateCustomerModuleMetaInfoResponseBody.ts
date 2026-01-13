// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerModuleMetaInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A return value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 4A91D2D1-AEC9-1658-ABCE-5A39DE66A5C2
   */
  requestId?: string;
  /**
   * @remarks
   * The result indicating if the creation was successful:
   * - true: Success
   * - false: Failure
   * 
   * @example
   * true
   */
  resultObject?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful, with values as follows:
   * - true, request succeeded
   * - false, request failed
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      httpStatusCode: 'number',
      requestId: 'string',
      resultObject: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

