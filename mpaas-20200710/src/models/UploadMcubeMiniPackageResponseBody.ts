// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMcubeMiniPackageResponseBodyUploadMiniPackageResultReturnPackageResult extends $dara.Model {
  debugUrl?: string;
  packageId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      debugUrl: 'DebugUrl',
      packageId: 'PackageId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugUrl: 'string',
      packageId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageResponseBodyUploadMiniPackageResult extends $dara.Model {
  resultMsg?: string;
  returnPackageResult?: UploadMcubeMiniPackageResponseBodyUploadMiniPackageResultReturnPackageResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      returnPackageResult: 'ReturnPackageResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      returnPackageResult: UploadMcubeMiniPackageResponseBodyUploadMiniPackageResultReturnPackageResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.returnPackageResult && typeof (this.returnPackageResult as any).validate === 'function') {
      (this.returnPackageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  uploadMiniPackageResult?: UploadMcubeMiniPackageResponseBodyUploadMiniPackageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      uploadMiniPackageResult: 'UploadMiniPackageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      uploadMiniPackageResult: UploadMcubeMiniPackageResponseBodyUploadMiniPackageResult,
    };
  }

  validate() {
    if(this.uploadMiniPackageResult && typeof (this.uploadMiniPackageResult as any).validate === 'function') {
      (this.uploadMiniPackageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

