// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcubeHotpatchTaskStatusResponseBodyUpdateHotpatchTaskStatusResult extends $dara.Model {
  errorCode?: string;
  requestId?: string;
  result?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      result: 'Result',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      result: 'string',
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

export class UpdateMcubeHotpatchTaskStatusResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  updateHotpatchTaskStatusResult?: UpdateMcubeHotpatchTaskStatusResponseBodyUpdateHotpatchTaskStatusResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      updateHotpatchTaskStatusResult: 'UpdateHotpatchTaskStatusResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      updateHotpatchTaskStatusResult: UpdateMcubeHotpatchTaskStatusResponseBodyUpdateHotpatchTaskStatusResult,
    };
  }

  validate() {
    if(this.updateHotpatchTaskStatusResult && typeof (this.updateHotpatchTaskStatusResult as any).validate === 'function') {
      (this.updateHotpatchTaskStatusResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

