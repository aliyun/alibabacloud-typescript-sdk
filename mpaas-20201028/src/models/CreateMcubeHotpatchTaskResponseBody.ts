// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeHotpatchTaskResponseBodyCreateHotpatchTaskResult extends $dara.Model {
  errorCode?: string;
  hotpatchTaskId?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      hotpatchTaskId: 'HotpatchTaskId',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      hotpatchTaskId: 'string',
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

export class CreateMcubeHotpatchTaskResponseBody extends $dara.Model {
  createHotpatchTaskResult?: CreateMcubeHotpatchTaskResponseBodyCreateHotpatchTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createHotpatchTaskResult: 'CreateHotpatchTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createHotpatchTaskResult: CreateMcubeHotpatchTaskResponseBodyCreateHotpatchTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createHotpatchTaskResult && typeof (this.createHotpatchTaskResult as any).validate === 'function') {
      (this.createHotpatchTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

