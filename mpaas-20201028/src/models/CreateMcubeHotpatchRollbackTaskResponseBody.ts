// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeHotpatchRollbackTaskResponseBodyCreateHotpatchRollbackTaskResult extends $dara.Model {
  /**
   * @example
   * 06D5CA0C-F5D4-5D64-987E-D221C88AED29
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  resultMsg?: string;
  /**
   * @example
   * 1543
   */
  rollbackTaskId?: string;
  /**
   * @example
   * True
   */
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
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  resultCode?: string;
  /**
   * @example
   * success
   */
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

