// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoMobileTestFlightConfigDO extends $dara.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  installAmount?: number;
  invalidTime?: string;
  upgradeId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      installAmount: 'InstallAmount',
      invalidTime: 'InvalidTime',
      upgradeId: 'UpgradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      installAmount: 'number',
      invalidTime: 'string',
      upgradeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoUpgradeBaseInfoDO extends $dara.Model {
  allowCreateTask?: boolean;
  appCode?: string;
  appstoreUrl?: string;
  changeLog?: string;
  creator?: string;
  downloadUrl?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  isEnterprise?: number;
  modifier?: string;
  needCheck?: number;
  packageType?: string;
  platform?: string;
  productId?: string;
  productName?: string;
  productVersion?: string;
  publishPeriod?: number;
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      allowCreateTask: 'AllowCreateTask',
      appCode: 'AppCode',
      appstoreUrl: 'AppstoreUrl',
      changeLog: 'ChangeLog',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isEnterprise: 'IsEnterprise',
      modifier: 'Modifier',
      needCheck: 'NeedCheck',
      packageType: 'PackageType',
      platform: 'Platform',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersion: 'ProductVersion',
      publishPeriod: 'PublishPeriod',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCreateTask: 'boolean',
      appCode: 'string',
      appstoreUrl: 'string',
      changeLog: 'string',
      creator: 'string',
      downloadUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isEnterprise: 'number',
      modifier: 'string',
      needCheck: 'number',
      packageType: 'string',
      platform: 'string',
      productId: 'string',
      productName: 'string',
      productVersion: 'string',
      publishPeriod: 'number',
      verificationCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfo extends $dara.Model {
  mobileTestFlightConfigDO?: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoMobileTestFlightConfigDO;
  upgradeBaseInfoDO?: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoUpgradeBaseInfoDO;
  static names(): { [key: string]: string } {
    return {
      mobileTestFlightConfigDO: 'MobileTestFlightConfigDO',
      upgradeBaseInfoDO: 'UpgradeBaseInfoDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileTestFlightConfigDO: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoMobileTestFlightConfigDO,
      upgradeBaseInfoDO: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoUpgradeBaseInfoDO,
    };
  }

  validate() {
    if(this.mobileTestFlightConfigDO && typeof (this.mobileTestFlightConfigDO as any).validate === 'function') {
      (this.mobileTestFlightConfigDO as any).validate();
    }
    if(this.upgradeBaseInfoDO && typeof (this.upgradeBaseInfoDO as any).validate === 'function') {
      (this.upgradeBaseInfoDO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponseBodyGetPackageResult extends $dara.Model {
  errorCode?: string;
  packageInfo?: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfo;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      packageInfo: 'PackageInfo',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      packageInfo: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfo,
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.packageInfo && typeof (this.packageInfo as any).validate === 'function') {
      (this.packageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponseBody extends $dara.Model {
  getPackageResult?: GetMcubeUpgradePackageInfoResponseBodyGetPackageResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getPackageResult: 'GetPackageResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getPackageResult: GetMcubeUpgradePackageInfoResponseBodyGetPackageResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.getPackageResult && typeof (this.getPackageResult as any).validate === 'function') {
      (this.getPackageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

