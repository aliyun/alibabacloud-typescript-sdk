// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeNebulaTaskResponseBodyCreateMcubeNebulaTaskResult extends $dara.Model {
  errorCode?: string;
  nebulaTaskId?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaTaskId: 'NebulaTaskId',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaTaskId: 'string',
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

export class CreateMcubeNebulaTaskResponseBody extends $dara.Model {
  createMcubeNebulaTaskResult?: CreateMcubeNebulaTaskResponseBodyCreateMcubeNebulaTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createMcubeNebulaTaskResult: 'CreateMcubeNebulaTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMcubeNebulaTaskResult: CreateMcubeNebulaTaskResponseBodyCreateMcubeNebulaTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createMcubeNebulaTaskResult && typeof (this.createMcubeNebulaTaskResult as any).validate === 'function') {
      (this.createMcubeNebulaTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

