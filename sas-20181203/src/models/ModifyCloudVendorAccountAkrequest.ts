// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudVendorAccountAKRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the AccessKey pair.
   * 
   * >  You can call the [DescribeCloudVendorAccountAKList](~~DescribeCloudVendorAccountAKList~~) operation to query the unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2832
   */
  authIds?: string;
  /**
   * @remarks
   * The modules that are associated with the AccessKey pair. Valid values:
   * 
   * *   **HOST**: host.
   * *   **CSPM**: configuration assessment.
   * *   **SIEM**: Cloud Threat Detection and Response (CTDR).
   * *   **TRIAL**: log audit.
   * 
   * >  You can call the [GetSupportedModules](~~GetSupportedModules~~) operation to query the supported modules.
   */
  authModules?: string[];
  /**
   * @remarks
   * Account ID.
   * > The account ID of the connected cloud vendor, required when the permission description includes threat analysis and response.
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * Access account domain. Values: 
   * -  **china**: China
   * -  **global**: Global 
   * -  **europe**: Huawei Europe
   * > This parameter is only valid and required for **Vendor** being **HUAWEICLOUD**, **Azure**, **AWS**, or **VOLCENGINE**.
   * 
   * @example
   * global
   */
  domain?: string;
  /**
   * @remarks
   * Extended information.
   * 
   * > Used to record extended information from different vendors.
   * > For Google Cloud, which is accessed through a service account, ExtendInfo stores a JSON-formatted service key file, excluding the private_key_id and zprivate_key fields. The file includes the following fields: type, project_id, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, universe_domain.
   * 
   * @example
   * {\\"product\\":\\"webFirewall\\",\\"remark\\":\\"remark\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The regions that are examined during AccessKey pair authentication.
   */
  regions?: string[];
  /**
   * @remarks
   * ID of the AK parameter. Values:
   * 
   * 1. When AkType is primary:
   * - **Tencent**: AccessKeyId of the main account
   * - **HUAWEICLOUD**: AccessKeyId of the main account
   * - **Azure**: ClientId
   * - **AWS**: AccessKeyId of the main account
   * - **VOLCENGINE**: AccessKeyId of the main account
   * 
   * 2. When AkType is sub:
   * - **Tencent**: AccessKeyId of the sub-account
   * - **HUAWEICLOUD**: AccessKeyId of the sub-account
   * - **Azure**: ClientId
   * - **AWS**: AccessKeyId of the sub-account
   * - **VOLCENGINE**: AccessKeyId of the sub-account
   * - **google**: private_key_id
   * 
   * > If AkType is **primary**, this value is the SecretID of the main account from another cloud. If AkType is **sub**, this value is the Access Key ID of the sub-account from another cloud. For **Azure**, there is no distinction, and this value is the **appId** of the authentication information. Google Cloud is accessed through a service account, with AkType defaulting to sub, and this value is taken from the private_key_id attribute in the JSON format service key file.
   * 
   * @example
   * S3D6c4O***
   */
  secretId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * >  If AkType is set to **primary**, you must set SecretKey to the AccessKey secret of the third-party master account. If AkType is set to **sub**, you must set SecretKey to the AccessKey secret of the third-party sub-account. This parameter value does not change for a **Microsoft Azure account**. For an Azure account, set this parameter to the **password** that is used for authentication.
   * 
   * @example
   * AE6SLd****
   */
  secretKey?: string;
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
   * The IDs of subscriptions.
   * 
   * >  This parameter takes effect only when Vendor is set to Azure.
   */
  subscriptionIds?: string[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * >  This parameter takes effect only when Vendor is set to Azure.
   * 
   * @example
   * 95304a97-339b-4de5-9a7d-cdbffaf****
   */
  tenantId?: string;
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

