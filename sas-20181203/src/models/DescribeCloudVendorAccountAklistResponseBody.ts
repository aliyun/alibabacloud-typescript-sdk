// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudVendorAccountAKListResponseBodyCloudVendorAccountAKsAuthModules extends $dara.Model {
  /**
   * @remarks
   * The error message of the module.
   * 
   * @example
   * ak_domain_error
   */
  message?: string;
  /**
   * @remarks
   * The code of the module. Valid values:
   * 
   * *   **HOST**: host
   * *   **CSPM**: configuration assessment
   * *   **SIEM**: CloudSiem
   * *   **TRIAL**: log audit
   * 
   * @example
   * HOST
   */
  module?: string;
  /**
   * @remarks
   * The cloud asset that is associated with the module.
   * 
   * @example
   * Cloud server or virtual machine
   */
  moduleAssetType?: string;
  /**
   * @remarks
   * The display name of the module.
   * 
   * @example
   * Host Assets
   */
  moduleDisp?: string;
  /**
   * @remarks
   * The service status of the module. Valid values:
   * 
   * *   **0**: being used
   * *   **1**: exception occurred
   * *   **2**: being validated
   * *   **3**: validation timed out
   * 
   * @example
   * 0
   */
  moduleServiceStatus?: number;
  /**
   * @remarks
   * The permission description of the module.
   * 
   * @example
   * Read permission of the cloud server or virtual machine
   */
  moduleStatement?: string;
  /**
   * @remarks
   * The error message of the log audit service.
   * 
   * @example
   * timeout
   */
  trailMessage?: string;
  /**
   * @remarks
   * The status of the log audit service. Valid values:
   * 
   * *   **init**: being initialized
   * *   **verify**: being validated
   * *   **enable**: enabled
   * *   **disable**: disabled
   * *   **error**: exception occurred
   * *   **timeout**: validation timed out
   * 
   * @example
   * enable
   */
  trailStatus?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      module: 'Module',
      moduleAssetType: 'ModuleAssetType',
      moduleDisp: 'ModuleDisp',
      moduleServiceStatus: 'ModuleServiceStatus',
      moduleStatement: 'ModuleStatement',
      trailMessage: 'TrailMessage',
      trailStatus: 'TrailStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      module: 'string',
      moduleAssetType: 'string',
      moduleDisp: 'string',
      moduleServiceStatus: 'number',
      moduleStatement: 'string',
      trailMessage: 'string',
      trailStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudVendorAccountAKListResponseBodyCloudVendorAccountAKs extends $dara.Model {
  /**
   * @remarks
   * The type of the account to which the AccessKey pair belongs. Valid values:
   * 
   * *   **primary**: a primary account
   * *   **sub**: a sub-account
   * 
   * @example
   * primary
   */
  akType?: string;
  /**
   * @remarks
   * The unique ID of the AccessKey pair.
   * 
   * @example
   * 2345
   */
  authId?: number;
  /**
   * @remarks
   * The modules that are associated with the AccessKey pair.
   */
  authModules?: DescribeCloudVendorAccountAKListResponseBodyCloudVendorAccountAKsAuthModules[];
  /**
   * @remarks
   * The Account ID.
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The extended information of the module.
   * 
   * @example
   * {\\"product\\":\\"webFirewall\\",\\"remark\\":\\"remark\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The error message of the AccessKey pair.
   * 
   * @example
   * The IAM user is forbidden in the currently selected region
   */
  message?: string;
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * S3D6c4O***
   */
  secretId?: string;
  /**
   * @remarks
   * The service status of the AccessKey pair. Valid values:
   * 
   * *   **0**: being used
   * *   **1**: exception occurred
   * *   **2**: being validated
   * *   **3**: validation timed out
   * 
   * @example
   * 0
   */
  serviceStatus?: number;
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values:
   * 
   * *   **0**: enabled
   * *   **1**: disabled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The cloud service provider. Valid values:
   * 
   * *   **Tencent**: Tencent Cloud
   * *   **HUAWEICLOUD**: Huawei Cloud
   * *   **Azure**: Microsoft Azure
   * *   **AWS**: Amazon Web Services (AWS)
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  /**
   * @remarks
   * The name of the AccessKey pair.
   * 
   * @example
   * test
   */
  vendorAuthAlias?: string;
  /**
   * @remarks
   * Account ID of the multi-cloud instance.
   * 
   * @example
   * 123
   */
  vendorUid?: string;
  /**
   * @remarks
   * Account name of the multi-cloud instance.
   * 
   * @example
   * VendorUserName
   */
  vendorUserName?: string;
  static names(): { [key: string]: string } {
    return {
      akType: 'AkType',
      authId: 'AuthId',
      authModules: 'AuthModules',
      ctdrCloudUserId: 'CtdrCloudUserId',
      extendInfo: 'ExtendInfo',
      message: 'Message',
      secretId: 'SecretId',
      serviceStatus: 'ServiceStatus',
      status: 'Status',
      vendor: 'Vendor',
      vendorAuthAlias: 'VendorAuthAlias',
      vendorUid: 'VendorUid',
      vendorUserName: 'VendorUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akType: 'string',
      authId: 'number',
      authModules: { 'type': 'array', 'itemType': DescribeCloudVendorAccountAKListResponseBodyCloudVendorAccountAKsAuthModules },
      ctdrCloudUserId: 'string',
      extendInfo: 'string',
      message: 'string',
      secretId: 'string',
      serviceStatus: 'number',
      status: 'number',
      vendor: 'string',
      vendorAuthAlias: 'string',
      vendorUid: 'string',
      vendorUserName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authModules)) {
      $dara.Model.validateArray(this.authModules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudVendorAccountAKListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudVendorAccountAKListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the AccessKey pairs.
   */
  cloudVendorAccountAKs?: DescribeCloudVendorAccountAKListResponseBodyCloudVendorAccountAKs[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCloudVendorAccountAKListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1383B0DB-D5D6-4B0C-9E6B-75939C8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudVendorAccountAKs: 'CloudVendorAccountAKs',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudVendorAccountAKs: { 'type': 'array', 'itemType': DescribeCloudVendorAccountAKListResponseBodyCloudVendorAccountAKs },
      pageInfo: DescribeCloudVendorAccountAKListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cloudVendorAccountAKs)) {
      $dara.Model.validateArray(this.cloudVendorAccountAKs);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

