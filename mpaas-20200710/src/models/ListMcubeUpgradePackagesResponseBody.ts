// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcubeUpgradePackagesResponseBodyListPackagesResultPackages extends $dara.Model {
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
  md5?: string;
  modifier?: string;
  needCheck?: number;
  packageType?: string;
  platform?: string;
  productId?: string;
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
      md5: 'Md5',
      modifier: 'Modifier',
      needCheck: 'NeedCheck',
      packageType: 'PackageType',
      platform: 'Platform',
      productId: 'ProductId',
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
      md5: 'string',
      modifier: 'string',
      needCheck: 'number',
      packageType: 'string',
      platform: 'string',
      productId: 'string',
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

export class ListMcubeUpgradePackagesResponseBodyListPackagesResult extends $dara.Model {
  errorCode?: string;
  packages?: ListMcubeUpgradePackagesResponseBodyListPackagesResultPackages[];
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      packages: 'Packages',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      packages: { 'type': 'array', 'itemType': ListMcubeUpgradePackagesResponseBodyListPackagesResultPackages },
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
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
  currentPage?: number;
  hasMore?: boolean;
  listPackagesResult?: ListMcubeUpgradePackagesResponseBodyListPackagesResult;
  pageSize?: number;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      listPackagesResult: 'ListPackagesResult',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasMore: 'boolean',
      listPackagesResult: ListMcubeUpgradePackagesResponseBodyListPackagesResult,
      pageSize: 'number',
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      totalCount: 'number',
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

