// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUnactivatedLicenseOrderResponseBodyDataLicenseConfigs extends $dara.Model {
  businessType?: string;
  featureIds?: string;
  isTrial?: boolean;
  sdkId?: string;
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
      sdkId: 'string',
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

export class GetUnactivatedLicenseOrderResponseBodyData extends $dara.Model {
  beginOn?: string;
  contractNo?: string;
  expiredOn?: string;
  instanceId?: string;
  licenseConfigs?: GetUnactivatedLicenseOrderResponseBodyDataLicenseConfigs[];
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      beginOn: 'BeginOn',
      contractNo: 'ContractNo',
      expiredOn: 'ExpiredOn',
      instanceId: 'InstanceId',
      licenseConfigs: 'LicenseConfigs',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginOn: 'string',
      contractNo: 'string',
      expiredOn: 'string',
      instanceId: 'string',
      licenseConfigs: { 'type': 'array', 'itemType': GetUnactivatedLicenseOrderResponseBodyDataLicenseConfigs },
      orderType: 'string',
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

export class GetUnactivatedLicenseOrderResponseBody extends $dara.Model {
  code?: string;
  data?: GetUnactivatedLicenseOrderResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetUnactivatedLicenseOrderResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

