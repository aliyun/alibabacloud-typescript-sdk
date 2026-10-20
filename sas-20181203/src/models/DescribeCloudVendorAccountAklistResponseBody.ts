// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudVendorAccountAKListResponseBodyCloudVendorAccountAKsAuthModules extends $dara.Model {
  /**
   * @remarks
   * The exception message of the module.
   * 
   * @example
   * ak_domain_error
   */
  message?: string;
  /**
   * @remarks
   * The code of the module. Valid values:
   * - **HOST**: Host.
   * - **CSPM**: Cloud product configuration check.
   * - **SIEM**: Cloud SIEM.
   * - **TRIAL**: Log audit.
   * 
   * @example
   * HOST
   */
  module?: string;
  /**
   * @remarks
   * The description of the cloud assets associated with the module.
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
   * The status of the module. Valid values:
   * - **0**: In use.
   * - **1**: Abnormal.
   * - **2**: Validating.
   * - **3**: Validation timed out.
   * 
   * @example
   * 0
   */
  moduleServiceStatus?: number;
  /**
   * @remarks
   * The description of the permissions associated with the module.
   * 
   * @example
   * Read permission of the cloud server or virtual machine
   */
  moduleStatement?: string;
  /**
   * @remarks
   * The error message for log audit access.
   * 
   * @example
   * timeout
   */
  trailMessage?: string;
  /**
   * @remarks
   * The accessed state of log audit. Valid values:
   * - **init**: Initialization.
   * - **verify**: Authenticate.
   * - **enable**: Enabled.
   * - **disable**: Disabled.
   * - **error**: Error.
   * - **timeout**: Timed out.
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
   * The type of the AK. Valid values:
   * 
   * - **primary**: Primary account.
   * - **sub**: Sub-account.
   * 
   * @example
   * primary
   */
  akType?: string;
  /**
   * @remarks
   * The unique ID of the AK.
   * 
   * @example
   * 2345
   */
  authId?: number;
  /**
   * @remarks
   * The list of modules associated with the AK.
   */
  authModules?: DescribeCloudVendorAccountAKListResponseBodyCloudVendorAccountAKsAuthModules[];
  /**
   * @remarks
   * The account ID.
   * 
   * > The account ID of the connected cloud service provider.
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * > Used to record the extended information of different vendors.
   * > Google Cloud is connected through a service account. ExtendInfo stores the service key file in JSON format, excluding the private_key_id and zprivate_key fields. The file contains the following fields: type, project_id, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, and universe_domain. When the vendor is **OracleCloud**, this parameter contains the following keys: **fingerprint**, which indicates the fingerprint; **tenancy**, which indicates the tenant; and **domain**, which indicates the region to which the connected account belongs.
   * 
   * @example
   * {"domain":"global","fingerprint":"c0:f4:******","tenancy":"ocid1.tenancy.*****"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The exception message of the AK.
   * 
   * @example
   * The IAM user is forbidden in the currently selected region
   */
  message?: string;
  /**
   * @remarks
   * The ID of the AK parameter.
   * 
   * @example
   * S3D6c4O***
   */
  secretId?: string;
  /**
   * @remarks
   * The usage status of the AK. Valid values:
   * - **0**: In use.
   * - **1**: Abnormal.
   * - **2**: Validating.
   * - **3**: Validation timed out.
   * 
   * @example
   * 0
   */
  serviceStatus?: number;
  /**
   * @remarks
   * The status of the AK. Valid values:
   * - **0**: Enabled.
   * - **1**: Disabled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The cloud service provider. Valid values:
   * - **Tencent**: Tencent Cloud.
   * - **HUAWEICLOUD**: Huawei Cloud.
   * - **Azure**: Azure.
   * - **AWS**: AWS.
   * - **VOLCENGINE**: Volcengine.
   * - **google**: Google Cloud.
   * - **CHAITIN**: Chaitin Tech.
   * - **FORTINET**: Fortinet.
   * - **THREATBOOK**: ThreatBook.
   * - **KingsoftCloud**: Kingsoft Cloud.
   * - **UCloud**: UCloud.
   * - **BaiduCloud**: Baidu AI Cloud.
   * - **WIZ**: Wiz.
   * - **OracleCloud**: Oracle Cloud.
   * - **StateCloud**: CTYun.
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  /**
   * @remarks
   * The name of the AK account.
   * 
   * @example
   * test
   */
  vendorAuthAlias?: string;
  /**
   * @remarks
   * The account ID of the multi-cloud instance.
   * 
   * @example
   * 123
   */
  vendorUid?: string;
  /**
   * @remarks
   * The account name of the multi-cloud instance.
   * 
   * @example
   * test
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
   * The page number of the current page during paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page during paging.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
   * The list of AK information.
   */
  cloudVendorAccountAKs?: DescribeCloudVendorAccountAKListResponseBodyCloudVendorAccountAKs[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCloudVendorAccountAKListResponseBodyPageInfo;
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for the request.
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

