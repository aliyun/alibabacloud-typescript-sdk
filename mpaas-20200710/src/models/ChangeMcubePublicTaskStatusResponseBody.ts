// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeMcubePublicTaskStatusResponseBodyChangeResult extends $dara.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ChangeMcubePublicTaskStatusResponseBody extends $dara.Model {
  changeResult?: ChangeMcubePublicTaskStatusResponseBodyChangeResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      changeResult: 'ChangeResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeResult: ChangeMcubePublicTaskStatusResponseBodyChangeResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.changeResult && typeof (this.changeResult as any).validate === 'function') {
      (this.changeResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

