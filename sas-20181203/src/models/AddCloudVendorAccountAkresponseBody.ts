// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCloudVendorAccountAKResponseBodyDataAuthModules extends $dara.Model {
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
   * The type of the account to which the AccessKey pair belongs. Valid values:
   * 
   * *   **primary**: a primary account
   * *   **sub**: a sub-account
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
   * The modules that are associated with the AccessKey pair.
   */
  authModules?: AddCloudVendorAccountAKResponseBodyDataAuthModules[];
  /**
   * @remarks
   * Account ID. 
   * 
   * > The account ID of the cloud provider being integrated.
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
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
   * AE6SLd****
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
   * *   **AWS**: AWS
   * 
   * @example
   * Tencent
   */
  vendor?: string;
  /**
   * @remarks
   * The name of the AccessKey pair.
   * 
   * >  The account information of the third-party cloud servers.
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
   * The information about the AccessKey pair that is added.
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

