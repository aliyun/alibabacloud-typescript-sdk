// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcubeUpgradePackageResponseBodyCreateUpgradePackageResult extends $dara.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  upgradePackageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      upgradePackageId: 'UpgradePackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      upgradePackageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradePackageResponseBody extends $dara.Model {
  createUpgradePackageResult?: CreateMcubeUpgradePackageResponseBodyCreateUpgradePackageResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createUpgradePackageResult: 'CreateUpgradePackageResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUpgradePackageResult: CreateMcubeUpgradePackageResponseBodyCreateUpgradePackageResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.createUpgradePackageResult && typeof (this.createUpgradePackageResult as any).validate === 'function') {
      (this.createUpgradePackageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

