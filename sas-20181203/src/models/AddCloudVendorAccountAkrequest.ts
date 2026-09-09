// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCloudVendorAccountAKRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey (AK) type. Valid values:
   * 
   * - **primary**: Primary account.
   * - **sub**: Sub-account.
   * - **ctdr**: Agentic SOC.
   * >Warning: When the vendor is **CHAITIN**, **FORTINET**, **THREATBOOK**, or **WIZ**, set this parameter to ctdr.</warning>
   * 
   * This parameter is required.
   * 
   * @example
   * primary
   */
  akType?: string;
  /**
   * @remarks
   * The list of AK-associated modules.
   */
  authModules?: string[];
  /**
   * @remarks
   * The account ID.
   * 
   * > The account ID of the connected cloud vendor. This parameter is required when the permission description includes Cloud Threat Detection and Response (CTDR).
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The account domain for access. Valid values:
   * - **china**: China
   * - **global**: Global
   * - **europe**: Huawei Cloud Europe
   * 
   * > This parameter is valid only when **Vendor** is set to **HUAWEICLOUD**, **Azure**, **AWS**, **VOLCENGINE**, **KingsoftCloud**, **UCloud**, or **BaiduCloud**, and is required. Set this parameter to **china** for KingsoftCloud and BaiduCloud, and to **global** for UCloud.
   * 
   * @example
   * global
   */
  domain?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * > Used to record extended information for different vendors.
   * >Google Cloud is accessed through a service account. ExtendInfo stores the JSON-formatted service key file, excluding the private_key_id and private_key fields. The file contains the following fields: type, project_id, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, and universe_domain.
   * 
   * @example
   * {\\"product\\":\\"webFirewall\\",\\"remark\\":\\"remark\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of regions used for AK information verification. This parameter is valid only when Vendor is set to AWS.
   * >Call the [ListCloudVendorRegions](~~ListCloudVendorRegions~~) operation to obtain this parameter.
   */
  regions?: string[];
  /**
   * @remarks
   * The AK parameter ID. Valid values:
   * 
   * 1. When AkType is set to primary:
   * - **Tencent**: AccessKeyId of the primary account
   * - **HUAWEICLOUD**: AccessKeyId of the primary account
   * - **Azure**: ClientId
   * - **AWS**: AccessKeyId of the primary account
   * - **VOLCENGINE**: AccessKeyId of the primary account
   * 
   * 2. When AkType is set to sub:
   * - **Tencent**: AccessKeyId of the sub-account
   * - **HUAWEICLOUD**: AccessKeyId of the sub-account
   * - **Azure**: ClientId
   * - **AWS**: AccessKeyId of the sub-account
   * - **VOLCENGINE**: AccessKeyId of the sub-account
   * - **google**: private_key_id
   * 
   * >If AkType is set to **primary**, this value is the SecretID of the primary account on the third-party cloud. If AkType is set to **sub**, this value is the Access Key ID of the sub-account on the third-party cloud. For **Azure**, no distinction is made, and this value is the **appId** in the authentication information. Google Cloud is accessed through a service account. AkType defaults to sub, and this value is the private_key_id property value from the JSON-formatted service key file.
   * 
   * This parameter is required.
   * 
   * @example
   * 45GLRV4SOT0YFB****
   */
  secretId?: string;
  /**
   * @remarks
   * The AK parameter secret. Valid values:
   * 
   * 1. When AkType is set to primary:
   * - **Tencent**: SecretAccessKey of the primary account
   * - **HUAWEICLOUD**: SecretAccessKey of the primary account
   * - **Azure**: ClientSecret
   * - **AWS**: SecretAccessKey of the primary account
   * 
   * 2. When AkType is set to sub:
   * - **Tencent**: SecretAccessKey of the sub-account
   * - **HUAWEICLOUD**: SecretAccessKey of the sub-account
   * - **Azure**: ClientSecret
   * - **AWS**: SecretAccessKey of the sub-account
   * - **google**: private_key
   * >If AkType is set to **primary**, this value is the Secret Access Key of the primary account on the third-party cloud. If AkType is set to **sub**, this value is the Secret Access Key of the sub-account on the third-party cloud. For **Azure**, no distinction is made, and this value is the **password** in the authentication information. Google Cloud is accessed through a service account. AkType defaults to sub, and this value is the private_key property value from the JSON-formatted service key file.
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
   * > This parameter is no longer valid.
   */
  subscriptionIds?: string[];
  /**
   * @remarks
   * The tenant ID. This parameter is valid only when Vendor is set to Azure.
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
   * - **CHAITIN**: Chaitin Technology
   * - **FORTINET**: Fortinet
   * - **THREATBOOK**: ThreatBook
   * - **KingsoftCloud**: Kingsoft Cloud
   * - **UCloud**: UCloud
   * - **BaiduCloud**: Baidu AI Cloud
   * - **WIZ**: Wiz Security
   * 
   * This parameter is required.
   * 
   * @example
   * AWS
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

