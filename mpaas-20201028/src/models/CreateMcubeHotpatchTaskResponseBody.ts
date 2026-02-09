// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeHotpatchTaskResponseBodyCreateHotpatchTaskResult extends $dara.Model {
  /**
   * @example
   * OK
   */
  errorCode?: string;
  /**
   * @example
   * 1490
   */
  hotpatchTaskId?: string;
  /**
   * @example
   * FD352990-0D38-5580-B6E1-EBE64B234059
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  resultMsg?: string;
  /**
   * @example
   * True
   */
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
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  resultCode?: string;
  /**
   * @example
   * success
   */
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

