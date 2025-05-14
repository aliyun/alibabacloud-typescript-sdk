// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LicenseInstanceAppDTOLicenseConfigs extends $dara.Model {
  businessType?: string;
  featureIds?: string;
  isTrial?: boolean;
  sdkId?: number;
  sdkName?: string;
  subscription?: string;
  subscriptionImp?: string;
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

