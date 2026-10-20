// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudVendorAccountAKRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the AccessKey (AK).
   * >You can call the [DescribeCloudVendorAccountAKList](~~DescribeCloudVendorAccountAKList~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2832
   */
  authIds?: string;
  /**
   * @remarks
   * The list of codes for the modules associated with the AK. Valid values:
   * - **HOST**: host
   * - **CSPM**: cloud product configuration check
   * - **SIEM**: threat analysis and response
   * - **TRIAL**: log audit
   * >You can call the [GetSupportedModules](~~GetSupportedModules~~) operation to obtain the supported modules.
   */
  authModules?: string[];
  /**
   * @remarks
   * The account ID.
   * >The account ID of the connected cloud vendor. This parameter is required when the permission description includes threat analysis and response.
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The domain to which the connected account belongs. Valid values:
   * - **china**: China
   * - **global**: global
   * - **europe**: Huawei Cloud Europe site
   * 
   * >This parameter is valid and required only when **Vendor** is set to **HUAWEICLOUD**, **Azure**, **AWS**, **VOLCENGINE**, **KingsoftCloud**, **UCloud**, **BaiduCloud**, or **OracleCloud**. For **KingsoftCloud** and **BaiduCloud**, this parameter is fixed to **china**. For **OracleCloud**, this parameter is fixed to **global**.
   * 
   * @example
   * global
   */
  domain?: string;
  /**
   * @remarks
   * The extended information.
   * >This parameter is used to record the extended information of different vendors.
   * Google Cloud is accessed through a service account. ExtendInfo stores the JSON-formatted service key file, excluding the private_key_id and zprivate_key fields. The file contains the following fields: type, project_id, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, and universe_domain. If the vendor is **OracleCloud**, this parameter contains the **fingerprint** key, which indicates the fingerprint.
   * 
   * @example
   * {\\"product\\":\\"webFirewall\\",\\"remark\\":\\"remark\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The language type of the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of regions used for AK information verification. This parameter is valid only when **Vendor** is set to **AWS** or **OracleCloud**.
   * >You can call the [ListCloudVendorRegions](~~ListCloudVendorRegions~~) operation to obtain this parameter.
   */
  regions?: string[];
  /**
   * @remarks
   * The ID of the AK parameter. Valid values:
   * - If AkType is set to primary:
   * - - **Tencent**: the AccessKey ID of the primary account
   * - - **HUAWEICLOUD**: the AccessKey ID of the primary account
   * - - **Azure**: the client ID
   * - - **AWS**: the AccessKey ID of the primary account
   * - - **VOLCENGINE**: the AccessKey ID of the primary account
   * - - **KingsoftCloud**: the AccessKey ID of the primary account
   * - - **UCloud**: the AccessKey ID of the primary account
   * - If AkType is set to sub:
   * - - **Tencent**: the AccessKey ID of the sub-account
   * - - **HUAWEICLOUD**: the AccessKey ID of the sub-account
   * - - **Azure**: the client ID
   * - - **AWS**: the AccessKey ID of the sub-account
   * - - **VOLCENGINE**: the AccessKey ID of the sub-account
   * - - **google**: the private key ID
   * - - **OracleCloud**: the Oracle Cloud Identifier (OCID) of the sub-user
   * - - **BaiduCloud**: the AccessKey ID of the sub-account
   * - - **KingsoftCloud**: the AccessKey ID of the sub-account
   * - - **UCloud**: the AccessKey ID of the sub-account
   * - - **StateCloud**: the AccessKey ID of the sub-account
   * >If AkType is set to **primary**, this value is the SecretID of the primary account of the third-party cloud. If AkType is set to **sub**, this value is the AccessKey ID of the sub-account of the third-party cloud. For **Azure**, no distinction is made, and this value is the **appId** of the authentication information. Google Cloud is accessed through a service account. By default, AkType is set to sub, and this value is obtained from the private_key_id property of the JSON-formatted service key file. If the vendor is **OracleCloud**, this value is the OCID of the sub-user.
   * 
   * @example
   * S3D6c4O***
   */
  secretId?: string;
  /**
   * @remarks
   * The secret of the AK parameter. Valid values:
   * - If AkType is set to primary:
   * - - **Tencent**: the SecretAccessKey of the primary account
   * - - **HUAWEICLOUD**: the SecretAccessKey of the primary account
   * - - **Azure**: the client secret
   * - - **AWS**: the SecretAccessKey of the primary account
   * - - **VOLCENGINE**: the SecretAccessKey of the primary account
   * - - **KingsoftCloud**: the SecretAccessKey of the primary account
   * - - **UCloud**: the SecretAccessKey of the primary account
   * - If AkType is set to sub:
   * - - **Tencent**: the SecretAccessKey of the sub-account
   * - - **HUAWEICLOUD**: the SecretAccessKey of the sub-account
   * - - **Azure**: the client secret
   * - - **AWS**: the SecretAccessKey of the sub-account
   * - - **google**: the private key
   * - - **OracleCloud**: the private key of the sub-user
   * - - **BaiduCloud**: the SecretAccessKey of the sub-account
   * - - **KingsoftCloud**: the SecretAccessKey of the sub-account
   * - - **UCloud**: the SecretAccessKey of the sub-account
   * - - **StateCloud**: the SecretAccessKey of the sub-account
   * >If AkType is set to **primary**, this value is the Secret Access Key of the primary account of the third-party cloud. If AkType is set to **sub**, this value is the Secret Access Key of the sub-account of the third-party cloud. For **Azure**, no distinction is made, and this value is the **password** of the authentication information. Google Cloud is accessed through a service account. By default, AkType is set to sub, and this value is obtained from the private_key property of the JSON-formatted service key file. For **OracleCloud**, this value is obtained from the content of the corresponding private key file.
   * 
   * @example
   * AE6SLd****
   */
  secretKey?: string;
  /**
   * @remarks
   * The usage status of the AK. Valid values:
   * - **0**: enabled
   * - **1**: disabled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The list of subscription IDs.
   * > **[Deprecated]** This parameter is no longer valid.
   */
  subscriptionIds?: string[];
  /**
   * @remarks
   * The tenant ID.
   * >This parameter is valid only when Vendor is set to **Azure** or **OracleCloud**.
   * 
   * @example
   * 95304a97-339b-4de5-9a7d-cdbffaf****
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the AK account.
   * >This parameter is used to identify the account information to which the third-party host assets belong.
   * 
   * @example
   * test
   */
  vendorAuthAlias?: string;
  static names(): { [key: string]: string } {
    return {
      authIds: 'AuthIds',
      authModules: 'AuthModules',
      ctdrCloudUserId: 'CtdrCloudUserId',
      domain: 'Domain',
      extendInfo: 'ExtendInfo',
      lang: 'Lang',
      regions: 'Regions',
      secretId: 'SecretId',
      secretKey: 'SecretKey',
      status: 'Status',
      subscriptionIds: 'SubscriptionIds',
      tenantId: 'TenantId',
      vendorAuthAlias: 'VendorAuthAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authIds: 'string',
      authModules: { 'type': 'array', 'itemType': 'string' },
      ctdrCloudUserId: 'string',
      domain: 'string',
      extendInfo: 'string',
      lang: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
      secretId: 'string',
      secretKey: 'string',
      status: 'number',
      subscriptionIds: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      vendorAuthAlias: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authModules)) {
      $dara.Model.validateArray(this.authModules);
    }
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    if(Array.isArray(this.subscriptionIds)) {
      $dara.Model.validateArray(this.subscriptionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

