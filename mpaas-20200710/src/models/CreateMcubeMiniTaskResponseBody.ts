// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeMiniTaskResponseBodyCreateMiniTaskResult extends $dara.Model {
  miniTaskId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      miniTaskId: 'MiniTaskId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniTaskId: 'string',
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

export class CreateMcubeMiniTaskResponseBody extends $dara.Model {
  createMiniTaskResult?: CreateMcubeMiniTaskResponseBodyCreateMiniTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createMiniTaskResult: 'CreateMiniTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMiniTaskResult: CreateMcubeMiniTaskResponseBodyCreateMiniTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createMiniTaskResult && typeof (this.createMiniTaskResult as any).validate === 'function') {
      (this.createMiniTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

