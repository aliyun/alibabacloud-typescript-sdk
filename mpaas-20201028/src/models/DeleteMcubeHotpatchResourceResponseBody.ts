// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMcubeHotpatchResourceResponseBodyDeleteHotpatchResourceResult extends $dara.Model {
  /**
   * @example
   * success
   */
  deleteResult?: string;
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * 61B9F63C-4E6F-5D8E-A694-899450987B48
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  resultMsg?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteResult: 'DeleteResult',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteResult: 'string',
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
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

export class DeleteMcubeHotpatchResourceResponseBody extends $dara.Model {
  deleteHotpatchResourceResult?: DeleteMcubeHotpatchResourceResponseBodyDeleteHotpatchResourceResult;
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  resultCode?: string;
  /**
   * @example
   * success
   */
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      deleteHotpatchResourceResult: 'DeleteHotpatchResourceResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteHotpatchResourceResult: DeleteMcubeHotpatchResourceResponseBodyDeleteHotpatchResourceResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.deleteHotpatchResourceResult && typeof (this.deleteHotpatchResourceResult as any).validate === 'function') {
      (this.deleteHotpatchResourceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

