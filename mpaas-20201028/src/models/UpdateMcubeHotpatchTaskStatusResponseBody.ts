// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcubeHotpatchTaskStatusResponseBodyUpdateHotpatchTaskStatusResult extends $dara.Model {
  /**
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6844B5-279D-5FFD-BD5A-2E1F9BEC39EE
   */
  requestId?: string;
  /**
   * @example
   * success
   */
  result?: string;
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
  /**
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

