// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudVendorAccountAKResponseBodyDataAuthModules extends $dara.Model {
  /**
   * @remarks
   * The exception information of the module.
   * 
   * @example
   * ak_domain_error
   */
  message?: string;
  /**
   * @remarks
   * The module code. Valid values:
   * - **HOST**: host
   * - **CSPM**: cloud product configuration check
   * - **SIEM**: Cloud Threat Detection and Response (CTDR)
   * - **TRIAL**: log audit.
   * 
   * @example
   * HOST
   */
  module?: string;
  /**
   * @remarks
   * The description of cloud assets associated with the module.
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
   * The module status. Valid values:
   * - **0**: in use
   * - **1**: abnormal
   * - **2**: validity verification in progress
   * - **3**: validity verification timed out.
   * 
   * @example
   * 0
   */
  moduleServiceStatus?: number;
  /**
   * @remarks
   * The description of permissions associated with the module.
   * 
   * @example
   * Read permission of the cloud server or virtual machine
   */
  moduleStatement?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      module: 'Module',
      moduleAssetType: 'ModuleAssetType',
      moduleDisp: 'ModuleDisp',
      moduleServiceStatus: 'ModuleServiceStatus',
      moduleStatement: 'ModuleStatement',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudVendorAccountAKResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the AccessKey account. Valid values:
   * 
   * - **primary**: primary account
   * - **sub**: RAM user.
   * 
   * @example
   * sub
   */
  akType?: string;
  /**
   * @remarks
   * The unique ID of the AccessKey pair.
   * 
   * @example
   * 2158
   */
  authId?: number;
  /**
   * @remarks
   * The list of modules associated with the AccessKey pair.
   */
  authModules?: ModifyCloudVendorAccountAKResponseBodyDataAuthModules[];
  /**
   * @remarks
   * The account ID.
   * >The account ID of the connected cloud vendor.
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The exception information of the AccessKey pair.
   * 
   * @example
   * The IAM user is forbidden in the currently selected region
   */
  message?: string;
  /**
   * @remarks
   * The AccessKey parameter ID.
   * > If AkType is set to **primary**, this value is the SecretID of the primary account on the third-party cloud. If AkType is set to **sub**, this value is the Access Key ID of the RAM user on the third-party cloud. For **Azure**, no distinction is made, and this value is the **appId** of the authentication information.
   * 
   * @example
   * AE6SLd****
   */
  secretId?: string;
  /**
   * @remarks
   * The availability status of the AccessKey pair. Valid values:
   * - **0**: in use
   * - **1**: abnormal
   * - **2**: validity verification in progress
   * - **3**: validity verification timed out.
   * 
   * @example
   * 0
   */
  serviceStatus?: number;
  /**
   * @remarks
   * The usage status of the AccessKey pair. Valid values:
   * - **0**: enabled
   * - **1**: disabled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The cloud asset vendor. Valid values:
   * - **Tencent**: Tencent Cloud
   * - **HUAWEICLOUD**: Huawei Cloud
   * - **Azure**: Azure
   * - **AWS**: AWS
   * - **VOLCENGINE**: Volcengine
   * - **google**: Google Cloud
   * - **CHAITIN**: Chaitin Tech
   * - **FORTINET**: Fortinet
   * - **THREATBOOK**: ThreatBook.
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  /**
   * @remarks
   * The name of the AccessKey account.
   * >Used to identify the account to which third-party host assets belong.
   * 
   * @example
   * test
   */
  vendorAuthAlias?: string;
  static names(): { [key: string]: string } {
    return {
      akType: 'AkType',
      authId: 'AuthId',
      authModules: 'AuthModules',
      ctdrCloudUserId: 'CtdrCloudUserId',
      message: 'Message',
      secretId: 'SecretId',
      serviceStatus: 'ServiceStatus',
      status: 'Status',
      vendor: 'Vendor',
      vendorAuthAlias: 'VendorAuthAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akType: 'string',
      authId: 'number',
      authModules: { 'type': 'array', 'itemType': ModifyCloudVendorAccountAKResponseBodyDataAuthModules },
      ctdrCloudUserId: 'string',
      message: 'string',
      secretId: 'string',
      serviceStatus: 'number',
      status: 'number',
      vendor: 'string',
      vendorAuthAlias: 'string',
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

export class ModifyCloudVendorAccountAKResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization and authentication information that is added.
   */
  data?: ModifyCloudVendorAccountAKResponseBodyData;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for this request. You can use it to troubleshoot issues.
   * 
   * @example
   * 6635CED5-4B20-5D2D-94EC-A1C8F9C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyCloudVendorAccountAKResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

