// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCloudVendorAccountAKResponseBodyDataAuthModules extends $dara.Model {
  /**
   * @remarks
   * The module exception information.
   * 
   * @example
   * ak_domain_error
   */
  message?: string;
  /**
   * @remarks
   * The module code. Valid values:
   * - **HOST**: Host
   * - **CSPM**: Cloud product configuration check
   * - **SIEM**: CloudSiem
   * - **TRIAL**: Log audit
   * 
   * @example
   * HOST
   */
  module?: string;
  /**
   * @remarks
   * The cloud asset description associated with the module.
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
   * - **0**: In use.
   * - **1**: Usage exception.
   * - **2**: Validity verification in progress.
   * - **3**: Validity verification timed out.
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

export class AddCloudVendorAccountAKResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AK type. Valid values:
   * 
   * - **primary**: Primary account.
   * - **sub**: Sub-account.
   * 
   * @example
   * sub
   */
  akType?: string;
  /**
   * @remarks
   * The unique ID of the AK.
   * 
   * @example
   * 2158
   */
  authId?: number;
  /**
   * @remarks
   * The list of AK-associated modules.
   */
  authModules?: AddCloudVendorAccountAKResponseBodyDataAuthModules[];
  /**
   * @remarks
   * The account ID.
   * 
   * > The account ID of the connected cloud vendor.
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The AK exception information.
   * 
   * @example
   * The IAM user is forbidden in the currently selected region
   */
  message?: string;
  /**
   * @remarks
   * The AK parameter ID.
   * 
   * @example
   * AE6SLd****
   */
  secretId?: string;
  /**
   * @remarks
   * The AK usage status. Valid values:
   * - **0**: In use.
   * - **1**: Usage exception.
   * - **2**: Validity verification in progress.
   * - **3**: Validity verification timed out.
   * 
   * @example
   * 0
   */
  serviceStatus?: number;
  /**
   * @remarks
   * The AK status. Valid values:
   * - **0**: Enabled.
   * - **1**: Not enabled.
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
   * - **CHAITIN**: Chaitin Technology
   * - **FORTINET**: Fortinet
   * - **THREATBOOK**: ThreatBook
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  /**
   * @remarks
   * The AK account name.
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
      authModules: { 'type': 'array', 'itemType': AddCloudVendorAccountAKResponseBodyDataAuthModules },
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

export class AddCloudVendorAccountAKResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the added AK.
   */
  data?: AddCloudVendorAccountAKResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A60DA4EC-7CD8-577D-AD73-***
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
      data: AddCloudVendorAccountAKResponseBodyData,
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

