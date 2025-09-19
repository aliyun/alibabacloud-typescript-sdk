// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudVendorAccountAKResponseBodyDataAuthModules extends $dara.Model {
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
   * *   **HOST**: host.
   * *   **CSPM**: configuration assessment.
   * *   **SIEM**: CTDR.
   * *   **TRIAL**: log audit.
   * 
   * @example
   * HOST
   */
  module?: string;
  /**
   * @remarks
   * The type of the cloud asset that is associated with the module.
   * 
   * @example
   * Module.
   */
  moduleAssetType?: string;
  /**
   * @remarks
   * The display name of the module.
   * 
   * @example
   * Host
   */
  moduleDisp?: string;
  /**
   * @remarks
   * The service status of the module. Valid values:
   * 
   * *   **0**: being used.
   * *   **1**: exception occurred.
   * *   **2**: being validated.
   * *   **3**: validation timed out.
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
   * Host
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
   * The type of the account to which the AccessKey pair belongs. Valid values:
   * 
   * *   **primary**
   * *   **sub**
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
  authModules?: ModifyCloudVendorAccountAKResponseBodyDataAuthModules[];
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
   * >  If AkType is set to **primary**, the value of SecretId is AccessKey ID of the third-party master account. If AkType is set to **sub**, the value of SecretId is the AccessKey ID of the third-party sub-account. This parameter value does not change for a **Microsoft Azure account**. For an Azure account, this parameter value is the **app ID** that is used for authentication.
   * 
   * @example
   * AE6SLd****
   */
  secretId?: string;
  /**
   * @remarks
   * The service status of the AccessKey pair. Valid values:
   * 
   * *   **0**: being used.
   * *   **1**: exception occurred.
   * *   **2**: being validated.
   * *   **3**: validation timed out.
   * 
   * @example
   * 0
   */
  serviceStatus?: number;
  /**
   * @remarks
   * The status of the AccessKey pair. Valid values:
   * 
   * *   **0**: enabled.
   * *   **1**: disabled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The type of the cloud asset. Valid values:
   * 
   * *   **Tencent**: Tencent Cloud.
   * *   **HUAWEICLOUD**: Huawei Cloud.
   * *   **Azure**: Microsoft Azure.
   * *   **AWS**: Amazon Web Services (AWS).
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
   * The information about the AccessKey pair that is added.
   */
  data?: ModifyCloudVendorAccountAKResponseBodyData;
  /**
   * @remarks
   * The request ID.
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

