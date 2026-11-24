// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LicenseInstanceAppDTOLicenseConfigs extends $dara.Model {
  /**
   * @remarks
   * businessType
   * 
   * @example
   * Player
   */
  businessType?: string;
  /**
   * @remarks
   * featureIds
   * 
   * @example
   * 4326
   */
  featureIds?: string;
  /**
   * @remarks
   * isTrial
   */
  isTrial?: boolean;
  /**
   * @remarks
   * sdkId
   * 
   * @example
   * 150
   */
  sdkId?: number;
  /**
   * @remarks
   * sdkName
   * 
   * @example
   * VOD Player SDK
   */
  sdkName?: string;
  /**
   * @remarks
   * subscription
   * 
   * @example
   * Standard_Bundling
   */
  subscription?: string;
  /**
   * @remarks
   * subscriptionImp
   * 
   * @example
   * Standard
   */
  subscriptionImp?: string;
  /**
   * @remarks
   * subscriptionPkg
   * 
   * @example
   * Standard_Bundling
   */
  subscriptionPkg?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      featureIds: 'FeatureIds',
      isTrial: 'IsTrial',
      sdkId: 'SdkId',
      sdkName: 'SdkName',
      subscription: 'Subscription',
      subscriptionImp: 'SubscriptionImp',
      subscriptionPkg: 'SubscriptionPkg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      featureIds: 'string',
      isTrial: 'boolean',
      sdkId: 'number',
      sdkName: 'string',
      subscription: 'string',
      subscriptionImp: 'string',
      subscriptionPkg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LicenseInstanceAppDTO extends $dara.Model {
  /**
   * @remarks
   * appId
   * 
   * @example
   * 0d3f2a7c1b9e4f58
   */
  appId?: string;
  /**
   * @remarks
   * beginOn
   * 
   * @example
   * 2026-01-02T03:04:05Z
   */
  beginOn?: string;
  /**
   * @remarks
   * contractNo
   * 
   * @example
   * 782590648253664
   */
  contractNo?: string;
  /**
   * @remarks
   * creationTime
   * 
   * @example
   * 2026-01-02T03:04:05Z
   */
  creationTime?: string;
  /**
   * @remarks
   * expiredOn
   * 
   * @example
   * 2027-01-02T03:04:05Z
   */
  expiredOn?: string;
  /**
   * @remarks
   * instanceId
   * 
   * @example
   * lsn_9f2a1c7b3d8e4f56
   */
  instanceId?: string;
  /**
   * @remarks
   * itemId
   * 
   * @example
   * 3ba9c7d21f4e6a80
   */
  itemId?: string;
  /**
   * @remarks
   * LicenseConfigDTOS
   */
  licenseConfigs?: LicenseInstanceAppDTOLicenseConfigs[];
  /**
   * @remarks
   * modificationTime
   * 
   * @example
   * 2026-01-02T03:04:05Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * status
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * userId
   * 
   * @example
   * 2544469002080159
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      beginOn: 'BeginOn',
      contractNo: 'ContractNo',
      creationTime: 'CreationTime',
      expiredOn: 'ExpiredOn',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      licenseConfigs: 'LicenseConfigs',
      modificationTime: 'ModificationTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      beginOn: 'string',
      contractNo: 'string',
      creationTime: 'string',
      expiredOn: 'string',
      instanceId: 'string',
      itemId: 'string',
      licenseConfigs: { 'type': 'array', 'itemType': LicenseInstanceAppDTOLicenseConfigs },
      modificationTime: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.licenseConfigs)) {
      $dara.Model.validateArray(this.licenseConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

