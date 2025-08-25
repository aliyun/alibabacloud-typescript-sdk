// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeWhitelistForIdeResponseBodyCreateWhitelistForIdeResult extends $dara.Model {
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

export class CreateMcubeWhitelistForIdeResponseBody extends $dara.Model {
  createWhitelistForIdeResult?: CreateMcubeWhitelistForIdeResponseBodyCreateWhitelistForIdeResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createWhitelistForIdeResult: 'CreateWhitelistForIdeResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createWhitelistForIdeResult: CreateMcubeWhitelistForIdeResponseBodyCreateWhitelistForIdeResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createWhitelistForIdeResult && typeof (this.createWhitelistForIdeResult as any).validate === 'function') {
      (this.createWhitelistForIdeResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

