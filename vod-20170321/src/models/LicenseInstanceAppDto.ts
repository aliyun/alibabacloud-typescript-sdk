// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LicenseInstanceAppDTOLicenseConfigs extends $dara.Model {
  /**
   * @remarks
   * businessType
   */
  businessType?: string;
  /**
   * @remarks
   * featureIds
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
   */
  sdkId?: number;
  /**
   * @remarks
   * sdkName
   */
  sdkName?: string;
  /**
   * @remarks
   * subscription
   */
  subscription?: string;
  /**
   * @remarks
   * subscriptionImp
   */
  subscriptionImp?: string;
  /**
   * @remarks
   * subscriptionPkg
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
   */
  appId?: string;
  /**
   * @remarks
   * beginOn
   */
  beginOn?: string;
  /**
   * @remarks
   * contractNo
   */
  contractNo?: string;
  /**
   * @remarks
   * creationTime
   */
  creationTime?: string;
  /**
   * @remarks
   * expiredOn
   */
  expiredOn?: string;
  /**
   * @remarks
   * instanceId
   */
  instanceId?: string;
  /**
   * @remarks
   * itemId
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
   */
  modificationTime?: string;
  /**
   * @remarks
   * status
   */
  status?: string;
  /**
   * @remarks
   * userId
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

