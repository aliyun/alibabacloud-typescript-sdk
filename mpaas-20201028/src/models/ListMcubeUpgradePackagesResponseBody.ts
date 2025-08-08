// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeUpgradePackagesResponseBodyListPackagesResultPackages extends $dara.Model {
  allowCreateTask?: boolean;
  appCode?: string;
  appstoreUrl?: string;
  backLog?: string;
  changeLog?: string;
  clientFileSize?: number;
  clientName?: string;
  cpId?: string;
  creator?: string;
  downloadUrl?: string;
  globalVariables?: string;
  gmtCreate?: string;
  gmtCreateStr?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  id?: number;
  innerVersion?: string;
  iosSymbol?: string;
  isEnterprise?: number;
  isRc?: number;
  isRelease?: number;
  maxVersion?: string;
  md5?: string;
  modifier?: string;
  needCheck?: number;
  ossPath?: string;
  packageType?: string;
  platform?: string;
  productId?: string;
  productName?: string;
  productVersion?: string;
  publishPeriod?: number;
  qrcodeUrl?: string;
  releaseType?: string;
  releaseWindow?: string;
  scmDownloadUrl?: string;
  serverVersion?: number;
  verificationCode?: string;
  verifyResult?: number;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      allowCreateTask: 'AllowCreateTask',
      appCode: 'AppCode',
      appstoreUrl: 'AppstoreUrl',
      backLog: 'BackLog',
      changeLog: 'ChangeLog',
      clientFileSize: 'ClientFileSize',
      clientName: 'ClientName',
      cpId: 'CpId',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      globalVariables: 'GlobalVariables',
      gmtCreate: 'GmtCreate',
      gmtCreateStr: 'GmtCreateStr',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      id: 'Id',
      innerVersion: 'InnerVersion',
      iosSymbol: 'IosSymbol',
      isEnterprise: 'IsEnterprise',
      isRc: 'IsRc',
      isRelease: 'IsRelease',
      maxVersion: 'MaxVersion',
      md5: 'Md5',
      modifier: 'Modifier',
      needCheck: 'NeedCheck',
      ossPath: 'OssPath',
      packageType: 'PackageType',
      platform: 'Platform',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersion: 'ProductVersion',
      publishPeriod: 'PublishPeriod',
      qrcodeUrl: 'QrcodeUrl',
      releaseType: 'ReleaseType',
      releaseWindow: 'ReleaseWindow',
      scmDownloadUrl: 'ScmDownloadUrl',
      serverVersion: 'ServerVersion',
      verificationCode: 'VerificationCode',
      verifyResult: 'VerifyResult',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCreateTask: 'boolean',
      appCode: 'string',
      appstoreUrl: 'string',
      backLog: 'string',
      changeLog: 'string',
      clientFileSize: 'number',
      clientName: 'string',
      cpId: 'string',
      creator: 'string',
      downloadUrl: 'string',
      globalVariables: 'string',
      gmtCreate: 'string',
      gmtCreateStr: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      id: 'number',
      innerVersion: 'string',
      iosSymbol: 'string',
      isEnterprise: 'number',
      isRc: 'number',
      isRelease: 'number',
      maxVersion: 'string',
      md5: 'string',
      modifier: 'string',
      needCheck: 'number',
      ossPath: 'string',
      packageType: 'string',
      platform: 'string',
      productId: 'string',
      productName: 'string',
      productVersion: 'string',
      publishPeriod: 'number',
      qrcodeUrl: 'string',
      releaseType: 'string',
      releaseWindow: 'string',
      scmDownloadUrl: 'string',
      serverVersion: 'number',
      verificationCode: 'string',
      verifyResult: 'number',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradePackagesResponseBodyListPackagesResult extends $dara.Model {
  currentPage?: number;
  errorCode?: string;
  hasMore?: boolean;
  packages?: ListMcubeUpgradePackagesResponseBodyListPackagesResultPackages[];
  pageSize?: number;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      errorCode: 'ErrorCode',
      hasMore: 'HasMore',
      packages: 'Packages',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      errorCode: 'string',
      hasMore: 'boolean',
      packages: { 'type': 'array', 'itemType': ListMcubeUpgradePackagesResponseBodyListPackagesResultPackages },
      pageSize: 'number',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.packages)) {
      $dara.Model.validateArray(this.packages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradePackagesResponseBody extends $dara.Model {
  listPackagesResult?: ListMcubeUpgradePackagesResponseBodyListPackagesResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listPackagesResult: 'ListPackagesResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listPackagesResult: ListMcubeUpgradePackagesResponseBodyListPackagesResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.listPackagesResult && typeof (this.listPackagesResult as any).validate === 'function') {
      (this.listPackagesResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

