// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallResponseBody extends $dara.Model {
  /**
   * @example
   * UUID
   */
  callRecordId?: string;
  /**
   * @example
   * NoPermission
   */
  errorCode?: string;
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D8BD6E8-28D9-5451-BBA1-3D3DCA6971F6
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      callRecordId: 'CallRecordId',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callRecordId: 'string',
      errorCode: 'string',
      errorMsg: 'string',
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

