// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCloudVendorAccountAKRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey type. Valid values:
   * 
   * - **primary**: Primary account
   * - **sub**: Sub-account
   * - **ctdr**: Agentic SOC
   * >Warning: When the vendor is **CHAITIN**, **FORTINET**, **THREATBOOK**, or **WIZ**, set this parameter to **ctdr**. When the vendor is **OracleCloud**, **google**, **BaiduCloud**, or **StateCloud**, set this parameter to **sub**.
   * 
   * This parameter is required.
   * 
   * @example
   * primary
   */
  akType?: string;
  /**
   * @remarks
   * The list of modules associated with the AccessKey.
   * 
   * When AkType is set to ctdr, this parameter is required and at least one module must be provided, such as SIEM, HOST, or CSPM. If this parameter is not provided, the API returns HTTP 400 with the error code -101.
   */
  authModules?: string[];
  /**
   * @remarks
   * The account ID.
   * 
   * > The account ID of the connected cloud vendor. This parameter is required when the permission description includes Cloud Threat Detection and Response.
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The domain to which the connected account belongs. Valid values:
   * - **china**: China
   * - **global**: Global
   * - **europe**: Huawei Cloud Europe
   * 
   * > This parameter is valid and required only when **Vendor** is set to **HUAWEICLOUD**, **Azure**, **AWS**, **VOLCENGINE**, **KingsoftCloud**, **UCloud**, **BaiduCloud**, or **OracleCloud**. For **KingsoftCloud** and **BaiduCloud**, set this parameter to **china**. For **OracleCloud**, set this parameter to **global**.
   * 
   * @example
   * global
   */
  domain?: string;
  /**
   * @remarks
   * The extension information.
   * 
   * > This parameter is used to record the extension information of different vendors.
   * Google Cloud is accessed through a service account. ExtendInfo stores the JSON-formatted service key file, excluding the private_key_id and zprivate_key fields. The file contains the following fields: type, project_id, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, and universe_domain. When the vendor is **OracleCloud**, this parameter contains the **fingerprint** key, which indicates the fingerprint.
   * 
   * @example
   * {\\"product\\":\\"webFirewall\\",\\"remark\\":\\"remark\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of regions used to verify the AccessKey information. This parameter is valid only when **Vendor** is set to **AWS** or **OracleCloud**.
   * >You can call the [ListCloudVendorRegions](~~ListCloudVendorRegions~~) operation to query the regions.
   */
  regions?: string[];
  /**
   * @remarks
   * The AccessKey ID. Valid values:
   * 
   * - If AkType is set to primary:
   *   - **Tencent**: AccessKey ID of the primary account
   *   - **HUAWEICLOUD**: AccessKey ID of the primary account
   *   - **Azure**: Client ID
   *   - **AWS**: AccessKey ID of the primary account
   *   - **VOLCENGINE**: AccessKey ID of the primary account
   *   - **KingsoftCloud**: AccessKey ID of the primary account
   *   - **UCloud**: AccessKey ID of the primary account
   * - If AkType is set to sub:
   *   - **Tencent**: AccessKey ID of the sub-account
   *   - **HUAWEICLOUD**: AccessKey ID of the sub-account
   *   - **Azure**: Client ID
   *   - **AWS**: AccessKey ID of the sub-account
   *   - **VOLCENGINE**: AccessKey ID of the sub-account
   *   - **google**: private_key_id
   *   - **OracleCloud**: OCID of the sub-user
   *   - **BaiduCloud**: AccessKey ID of the sub-account
   *   - **KingsoftCloud**: AccessKey ID of the sub-account
   *   - **UCloud**: AccessKey ID of the sub-account
   *   - **StateCloud**: AccessKey ID of the sub-account
   * 
   * >If AkType is set to **primary**, this value is the AccessKey ID of the primary account in the third-party cloud. If AkType is set to **sub**, this value is the AccessKey ID of the sub-account in the third-party cloud. For **Azure**, this parameter is not differentiated and the value is the **appId** of the authentication information. Google Cloud is accessed through a service account, and AkType defaults to **sub**. The value is obtained from the private_key_id property in the JSON-formatted service key file. If the vendor is **OracleCloud**, this value is the OCID of the sub-user.
   * 
   * This parameter is required.
   * 
   * @example
   * 45GLRV4SOT0YFB****
   */
  secretId?: string;
  /**
   * @remarks
   * The AccessKey secret. Valid values:
   * - If AkType is set to primary:
   *   - **Tencent**: AccessKey secret of the primary account
   *   - **HUAWEICLOUD**: AccessKey secret of the primary account
   *   - **Azure**: Client secret
   *   - **AWS**: AccessKey secret of the primary account
   *   - **VOLCENGINE**: AccessKey secret of the primary account
   *   - **KingsoftCloud**: AccessKey secret of the primary account
   *   - **UCloud**: AccessKey secret of the primary account
   * - If AkType is set to sub:
   *   - **Tencent**: AccessKey secret of the sub-account
   *   - **HUAWEICLOUD**: AccessKey secret of the sub-account
   *   - **Azure**: Client secret
   *   - **AWS**: AccessKey secret of the sub-account
   *   - **google**: private_key
   *   - **OracleCloud**: private_key of the sub-user
   *   - **BaiduCloud**: AccessKey secret of the sub-account
   *   - **KingsoftCloud**: AccessKey secret of the sub-account
   *   - **UCloud**: AccessKey secret of the sub-account
   *   - **StateCloud**: AccessKey secret of the sub-account
   * >If AkType is set to **primary**, this value is the AccessKey secret of the primary account in the third-party cloud. If AkType is set to **sub**, this value is the AccessKey secret of the sub-account in the third-party cloud. For **Azure**, this parameter is not differentiated and the value is the **password** of the authentication information. Google Cloud is accessed through a service account, and AkType defaults to **sub**. The value is obtained from the private_key property in the JSON-formatted service key file. For **OracleCloud**, this value is obtained from the content of the corresponding private key file.
   * 
   * This parameter is required.
   * 
   * @example
   * AE6SLd****
   */
  secretKey?: string;
  /**
   * @remarks
   * The list of subscription IDs.
   * 
   * > This parameter is deprecated.
   */
  subscriptionIds?: string[];
  /**
   * @remarks
   * The tenant ID.
   * > This parameter is valid only when Vendor is set to **Azure** or **OracleCloud**.
   * 
   * @example
   * 95304a97-339b-4de5-9a7d-cdbffaf****
   */
  tenantId?: string;
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
   * - **THREATBOOK**: ThreatBook
   * - **KingsoftCloud**: Kingsoft Cloud
   * - **UCloud**: UCloud
   * - **BaiduCloud**: Baidu AI Cloud
   * - **WIZ**: Wiz
   * - **OracleCloud**: Oracle Cloud
   * - **StateCloud**: China Telecom Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * AWS
   */
  vendor?: string;
  /**
   * @remarks
   * The name of the AccessKey account.
   * > This parameter is used to identify the account to which the third-party host assets belong.
   * 
   * @example
   * test
   */
  vendorAuthAlias?: string;
  static names(): { [key: string]: string } {
    return {
      akType: 'AkType',
      authModules: 'AuthModules',
      ctdrCloudUserId: 'CtdrCloudUserId',
      domain: 'Domain',
      extendInfo: 'ExtendInfo',
      lang: 'Lang',
      regions: 'Regions',
      secretId: 'SecretId',
      secretKey: 'SecretKey',
      subscriptionIds: 'SubscriptionIds',
      tenantId: 'TenantId',
      vendor: 'Vendor',
      vendorAuthAlias: 'VendorAuthAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akType: 'string',
      authModules: { 'type': 'array', 'itemType': 'string' },
      ctdrCloudUserId: 'string',
      domain: 'string',
      extendInfo: 'string',
      lang: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
      secretId: 'string',
      secretKey: 'string',
      subscriptionIds: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      vendor: 'string',
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

