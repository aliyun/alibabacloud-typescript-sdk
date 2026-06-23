// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeHotpatchResourceResponseBodyCreateHotpatchResourceResult extends $dara.Model {
  errorCode?: string;
  hotpatchResourceId?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      hotpatchResourceId: 'HotpatchResourceId',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      hotpatchResourceId: 'string',
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

export class CreateMcubeHotpatchResourceResponseBody extends $dara.Model {
  createHotpatchResourceResult?: CreateMcubeHotpatchResourceResponseBodyCreateHotpatchResourceResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createHotpatchResourceResult: 'CreateHotpatchResourceResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createHotpatchResourceResult: CreateMcubeHotpatchResourceResponseBodyCreateHotpatchResourceResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createHotpatchResourceResult && typeof (this.createHotpatchResourceResult as any).validate === 'function') {
      (this.createHotpatchResourceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

