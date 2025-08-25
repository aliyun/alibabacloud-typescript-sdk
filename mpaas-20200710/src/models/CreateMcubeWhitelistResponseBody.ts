// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeWhitelistResponseBodyCreateWhitelistResult extends $dara.Model {
  resultMsg?: string;
  success?: boolean;
  whitelistId?: string;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      whitelistId: 'WhitelistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      whitelistId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistResponseBody extends $dara.Model {
  createWhitelistResult?: CreateMcubeWhitelistResponseBodyCreateWhitelistResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createWhitelistResult: 'CreateWhitelistResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createWhitelistResult: CreateMcubeWhitelistResponseBodyCreateWhitelistResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createWhitelistResult && typeof (this.createWhitelistResult as any).validate === 'function') {
      (this.createWhitelistResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

