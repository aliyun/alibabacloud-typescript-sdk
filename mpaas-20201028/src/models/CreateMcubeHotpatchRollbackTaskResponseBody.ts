// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeHotpatchRollbackTaskResponseBodyCreateHotpatchRollbackTaskResult extends $dara.Model {
  requestId?: string;
  resultMsg?: string;
  rollbackTaskId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      rollbackTaskId: 'RollbackTaskId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultMsg: 'string',
      rollbackTaskId: 'string',
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

export class CreateMcubeHotpatchRollbackTaskResponseBody extends $dara.Model {
  createHotpatchRollbackTaskResult?: CreateMcubeHotpatchRollbackTaskResponseBodyCreateHotpatchRollbackTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createHotpatchRollbackTaskResult: 'CreateHotpatchRollbackTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createHotpatchRollbackTaskResult: CreateMcubeHotpatchRollbackTaskResponseBodyCreateHotpatchRollbackTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createHotpatchRollbackTaskResult && typeof (this.createHotpatchRollbackTaskResult as any).validate === 'function') {
      (this.createHotpatchRollbackTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

