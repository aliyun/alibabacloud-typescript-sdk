// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeUpgradeTaskResponseBodyCreateTaskResult extends $dara.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  upgradeTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      upgradeTaskId: 'UpgradeTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      upgradeTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradeTaskResponseBody extends $dara.Model {
  createTaskResult?: CreateMcubeUpgradeTaskResponseBodyCreateTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createTaskResult: 'CreateTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTaskResult: CreateMcubeUpgradeTaskResponseBodyCreateTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createTaskResult && typeof (this.createTaskResult as any).validate === 'function') {
      (this.createTaskResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

