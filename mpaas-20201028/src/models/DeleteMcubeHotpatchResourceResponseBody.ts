// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMcubeHotpatchResourceResponseBodyDeleteHotpatchResourceResult extends $dara.Model {
  deleteResult?: string;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
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
  requestId?: string;
  resultCode?: string;
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

