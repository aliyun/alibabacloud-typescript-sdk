// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudVendorAccountAKRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the AccessKey pair.
   * >Call the [DescribeCloudVendorAccountAKList](~~DescribeCloudVendorAccountAKList~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2832
   */
  authIds?: string;
  /**
   * @remarks
   * The list of module codes associated with the AccessKey pair. Valid values:
   * - **HOST**: host
   * - **CSPM**: cloud product configuration check
   * - **SIEM**: Cloud Threat Detection and Response (CTDR)
   * - **TRIAL**: log audit
   * > Call the [GetSupportedModules](~~GetSupportedModules~~) operation to obtain the supported modules.
   */
  authModules?: string[];
  /**
   * @remarks
   * The account ID.
   * >The account ID of the connected cloud vendor. This parameter is required when the permission description includes Cloud Threat Detection and Response (CTDR).
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The domain of the connected account. Valid values:
   * - **china**: China
   * - **global**: global
   * - **europe**: Huawei Cloud Europe
   * 
   * > This parameter is valid only when **Vendor** is set to **HUAWEICLOUD**, **Azure**, **AWS**, or **VOLCENGINE**, and is required.
   * 
   * @example
   * global
   */
  domain?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * > Used to store extended information for different vendors.
   * >Google Cloud is accessed through a service account. ExtendInfo stores the JSON-formatted service key file, excluding the private_key_id and zprivate_key fields. The file contains the following fields: type, project_id, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, and universe_domain.
   * 
   * @example
   * {\\"product\\":\\"webFirewall\\",\\"remark\\":\\"remark\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of regions used for AccessKey information verification.
   */
  regions?: string[];
  /**
   * @remarks
   * The AccessKey parameter ID. Valid values:
   * 
   * 1. If AkType is set to primary:
   * - **Tencent**: AccessKeyId of the primary account
   * - **HUAWEICLOUD**: AccessKeyId of the primary account
   * - **Azure**: ClientId
   * - **AWS**: AccessKeyId of the primary account
   * - **VOLCENGINE**: AccessKeyId of the primary account
   * 
   * 2. If AkType is set to sub:
   * - **Tencent**: AccessKeyId of the RAM user
   * - **HUAWEICLOUD**: AccessKeyId of the RAM user
   * - **Azure**: ClientId
   * - **AWS**: AccessKeyId of the RAM user
   * - **VOLCENGINE**: AccessKeyId of the RAM user
   * - **google**: private_key_id
   * 
   * >If AkType is set to **primary**, this value is the SecretID of the primary account on the third-party cloud. If AkType is set to **sub**, this value is the Access Key ID of the RAM user on the third-party cloud. For **Azure**, no distinction is made, and this value is the **appId** of the authentication information. Google Cloud is accessed through a service account. AkType is set to sub by default, and this value is the private_key_id property value from the JSON-formatted service key file.
   * 
   * @example
   * S3D6c4O***
   */
  secretId?: string;
  /**
   * @remarks
   * The AccessKey parameter secret.
   * > If AkType is set to **primary**, this value is the Secret Access Key of the primary account on the third-party cloud. If AkType is set to **sub**, this value is the Secret Access Key of the RAM user on the third-party cloud. For **Azure**, no distinction is made, and this value is the **password** of the authentication information. Google Cloud is accessed through a service account. AkType is set to sub by default, and this value is the private_key property value from the JSON-formatted service key file.
   * 
   * @example
   * AE6SLd****
   */
  secretKey?: string;
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
   * The list of subscription IDs.
   * > This parameter is no longer valid.
   */
  subscriptionIds?: string[];
  /**
   * @remarks
   * The tenant ID.
   * >This parameter is valid only when Vendor is set to Azure.
   * 
   * @example
   * 95304a97-339b-4de5-9a7d-cdbffaf****
   */
  tenantId?: string;
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

