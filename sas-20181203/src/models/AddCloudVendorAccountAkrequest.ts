// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCloudVendorAccountAKRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the account to which the AccessKey pair belongs. Valid values:
   * 
   * *   **primary**: a primary account
   * *   **sub**: a sub-account
   * 
   * This parameter is required.
   * 
   * @example
   * primary
   */
  akType?: string;
  /**
   * @remarks
   * The modules that are associated with the AccessKey pair.
   */
  authModules?: string[];
  /**
   * @remarks
   * Account ID. > The account ID of the cloud provider, required when permissions include threat analysis and response.
   * 
   * @example
   * azure_demo_1
   */
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The Active Directory (AD) domain. This parameter takes effect only when Vendor is set to Azure. Valid values:
   * 
   * *   **china**
   * *   **global**
   * 
   * @example
   * global
   */
  domain?: string;
  /**
   * @remarks
   * Extended information.
   * > Used to record extended information from different vendors. > For Google Cloud, which is accessed via a service account, ExtendInfo stores the service key file in JSON format, excluding the private_key_id and zprivate_key fields. The file includes the following fields: type, project_id, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, universe_domain.
   * 
   * @example
   * {\\"product\\":\\"webFirewall\\",\\"remark\\":\\"remark\\"}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The language of the content in the request and response messages. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The regions that are examined during AccessKey pair authentication. This parameter takes effect only when Vendor is set to AWS.
   * 
   * >  You can call the [ListCloudVendorRegions](~~ListCloudVendorRegions~~) operation to query regions.
   */
  regions?: string[];
  /**
   * @remarks
   * The AccessKey ID. Valid values:
   * 
   * 1\\. If AkType is set to primary, specify this parameter based on the following description:
   * 
   * *   **Tencent**: Enter the AccessKey ID of a primary account on Tencent Cloud.
   * *   **HUAWEICLOUD**: Enter the AccessKey ID of a primary account on Huawei Cloud.
   * *   **Azure**: Enter the AccessKey ID of a primary account on Microsoft Azure.
   * *   **AWS**: Enter the AccessKey ID of a primary account on AWS.
   * 
   * 2\\. If AkType is set to sub, specify this parameter based on the following description:
   * 
   * *   **Tencent**: Enter the AccessKey ID of a sub-account on Tencent Cloud.
   * *   **HUAWEICLOUD**: Enter the AccessKey ID of a sub-account on Huawei Cloud.
   * *   **Azure**: Enter the AccessKey ID of a sub-account on Microsoft Azure.
   * *   **AWS**: Enter the AccessKey ID of a sub-account on AWS.
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
   * 
   * 1\\. If AkType is set to primary, specify this parameter based on the following description:
   * 
   * *   **Tencent**: Enter the AccessKey secret of a primary account on Tencent Cloud.
   * *   **HUAWEICLOUD**: Enter the AccessKey secret of a primary account on Huawei Cloud.
   * *   **Azure**: Enter the AccessKey secret of a primary account on Microsoft Azure.
   * *   **AWS**: Enter the AccessKey secret of a primary account on AWS.
   * 
   * 2\\. If AkType is set to sub, specify this parameter based on the following description:
   * 
   * *   **Tencent**: Enter the AccessKey secret of a sub-account on Tencent Cloud.
   * *   **HUAWEICLOUD**: Enter the AccessKey secret of a sub-account on Huawei Cloud.
   * *   **Azure**: Enter the AccessKey secret of a sub-account on Microsoft Azure.
   * *   **AWS**: Enter the AccessKey secret of a sub-account on AWS.
   * 
   * This parameter is required.
   * 
   * @example
   * AE6SLd****
   */
  secretKey?: string;
  /**
   * @remarks
   * The subscription IDs. This parameter takes effect only when Vendor is set to Azure.
   */
  subscriptionIds?: string[];
  /**
   * @remarks
   * The tenant ID. This parameter takes effect only when Vendor is set to Azure.
   * 
   * @example
   * 95304a97-339b-4de5-9a7d-cdbffaf****
   */
  tenantId?: string;
  /**
   * @remarks
   * The cloud service provider. Valid values:
   * 
   * *   **Tencent**: Tencent Cloud
   * *   **HUAWEICLOUD**: Huawei Cloud
   * *   **Azure**: Microsoft Azure
   * *   **AWS**: Amazon Web Services (AWS)
   * 
   * This parameter is required.
   * 
   * @example
   * AWS
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

