// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnchorResponseBody extends $dara.Model {
  /**
   * @remarks
   * 123456789
   */
  data?: string;
  /**
   * @example
   * PARAM_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 10923AA3-F7A1-5EA0-ACCA-D704269EAA78
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
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

