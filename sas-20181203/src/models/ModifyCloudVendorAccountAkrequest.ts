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
  ctdrCloudUserId?: string;
  /**
   * @remarks
   * The Active Directory (AD) domain. Valid values:
   * 
   * *   **china**
   * *   **global**
   * 
   * >  This parameter takes effect only when Vendor is set to Azure.
   * 
   * @example
   * global
   */
  domain?: string;
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
   * 
   * >  This parameter takes effect only when Vendor is set to AWS. You can call the [ListCloudVendorRegions](~~ListCloudVendorRegions~~) operation to query regions.
   */
  regions?: string[];
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * >  If AkType is set to **primary**, you must set SecretId to the AccessKey ID of the third-party master account. If AkType is set to **sub**, you must set SecretId to the AccessKey ID of the third-party sub-account. This parameter value does not change for a **Microsoft Azure account**. For an Azure account, set this parameter to the **app ID** that is used for authentication.
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

