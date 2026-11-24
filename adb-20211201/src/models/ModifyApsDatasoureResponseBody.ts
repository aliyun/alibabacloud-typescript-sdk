// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApsDatasoureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code.
   * 
   * @example
   * InvalidInput
   */
  code?: string;
  /**
   * @remarks
   * The list of resource group information.
   * 
   * @example
   * 150
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code returned. A status code of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The execution result of the application suggestion. Valid values:
   * - If the request is normal, **SUCCESS** is returned. 
   * - If the request is abnormal, the specific error message is returned.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A3EB3BCD-D974-52D4-B75C-BB06505916CB
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

