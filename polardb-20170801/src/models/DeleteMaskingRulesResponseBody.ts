// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaskingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message.
   * 
   * > If the request is successful, `Successful` is returned. If the request fails, an error message is returned, such as an error code.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BCEE25B-797C-426B-BA7B-D28CCF******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
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

