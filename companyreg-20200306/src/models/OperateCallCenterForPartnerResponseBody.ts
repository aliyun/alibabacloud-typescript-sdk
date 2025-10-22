// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateCallCenterForPartnerResponseBody extends $dara.Model {
  /**
   * @example
   * 02131584182
   */
  data?: string;
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
   * 1A13ABB5-7649-5031-B55C-D2E38F9F189D
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMsg: 'string',
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

