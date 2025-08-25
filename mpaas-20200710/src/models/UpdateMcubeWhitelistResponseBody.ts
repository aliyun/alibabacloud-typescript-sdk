// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcubeWhitelistResponseBodyAddWhitelistResultAddWhitelistInfo extends $dara.Model {
  failNum?: number;
  failUserIds?: string;
  successNum?: number;
  static names(): { [key: string]: string } {
    return {
      failNum: 'FailNum',
      failUserIds: 'FailUserIds',
      successNum: 'SuccessNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failNum: 'number',
      failUserIds: 'string',
      successNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistResponseBodyAddWhitelistResult extends $dara.Model {
  addWhitelistInfo?: UpdateMcubeWhitelistResponseBodyAddWhitelistResultAddWhitelistInfo;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      addWhitelistInfo: 'AddWhitelistInfo',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWhitelistInfo: UpdateMcubeWhitelistResponseBodyAddWhitelistResultAddWhitelistInfo,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.addWhitelistInfo && typeof (this.addWhitelistInfo as any).validate === 'function') {
      (this.addWhitelistInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistResponseBody extends $dara.Model {
  addWhitelistResult?: UpdateMcubeWhitelistResponseBodyAddWhitelistResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      addWhitelistResult: 'AddWhitelistResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWhitelistResult: UpdateMcubeWhitelistResponseBodyAddWhitelistResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.addWhitelistResult && typeof (this.addWhitelistResult as any).validate === 'function') {
      (this.addWhitelistResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

