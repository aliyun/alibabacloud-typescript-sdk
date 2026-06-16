// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceLicenseResponseBodyLicenseInstanceLicenseDetail extends $dara.Model {
  /**
   * @remarks
   * The status of the license for the Conditional Access feature.
   * 
   * @example
   * enabled
   */
  conditionalAccessPolicyLicenseStatus?: string;
  /**
   * @remarks
   * The status of the license for machine-to-machine (M2M) applications.
   * 
   * @example
   * enabled
   */
  m2mApplicationLicenseStatus?: string;
  /**
   * @remarks
   * The quota for machine-to-machine (M2M) applications.
   * 
   * @example
   * 2
   */
  m2mApplicationQuota?: number;
  /**
   * @remarks
   * The machine identity status.
   * 
   * @example
   * enabled
   */
  mimApplicationLicenseStatus?: string;
  /**
   * @remarks
   * The quota for network access endpoints.
   * 
   * @example
   * 1
   */
  networkAccessEndpointQuota?: number;
  /**
   * @remarks
   * The number of active subscription accounts.
   * 
   * @example
   * 100
   */
  prepaidActiveUserNumber?: number;
  /**
   * @remarks
   * The user quota included with the license.
   * 
   * @example
   * 100
   */
  userQuota?: number;
  static names(): { [key: string]: string } {
    return {
      conditionalAccessPolicyLicenseStatus: 'ConditionalAccessPolicyLicenseStatus',
      m2mApplicationLicenseStatus: 'M2mApplicationLicenseStatus',
      m2mApplicationQuota: 'M2mApplicationQuota',
      mimApplicationLicenseStatus: 'MimApplicationLicenseStatus',
      networkAccessEndpointQuota: 'NetworkAccessEndpointQuota',
      prepaidActiveUserNumber: 'PrepaidActiveUserNumber',
      userQuota: 'UserQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionalAccessPolicyLicenseStatus: 'string',
      m2mApplicationLicenseStatus: 'string',
      m2mApplicationQuota: 'number',
      mimApplicationLicenseStatus: 'string',
      networkAccessEndpointQuota: 'number',
      prepaidActiveUserNumber: 'number',
      userQuota: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLicenseResponseBodyLicense extends $dara.Model {
  /**
   * @remarks
   * The license edition.
   * 
   * @example
   * free
   */
  edition?: string;
  /**
   * @remarks
   * The UNIX timestamp indicating the end of the license validity period.
   * 
   * @example
   * 1723996800000
   */
  endTime?: number;
  /**
   * @remarks
   * The details of the instance license.
   */
  instanceLicenseDetail?: GetInstanceLicenseResponseBodyLicenseInstanceLicenseDetail;
  /**
   * @remarks
   * The billing method for the license.
   * 
   * @example
   * prepay
   */
  licenseChargeType?: string;
  /**
   * @remarks
   * The detailed configurations of the license, formatted as a JSON string.
   * 
   * @example
   * {"modules":[{"features":[{"name":"urn:alibaba:idaas:license:module:ud:customField","status":"enabled"}]……{"name":"urn:alibaba:idaas:license:tag:enterprise","status":"enabled"}],"version":"1.0"}
   */
  licenseConfigJson?: string;
  /**
   * @remarks
   * The UNIX timestamp indicating when the license was created.
   * 
   * @example
   * 1720509699000
   */
  licenseCreateTime?: number;
  /**
   * @remarks
   * The unique identifier for the license.
   * 
   * @example
   * license_1234xxxx
   */
  licenseId?: string;
  /**
   * @remarks
   * The license status.
   * 
   * @example
   * valid
   */
  licenseStatus?: string;
  /**
   * @remarks
   * The channel used to purchase the license.
   * 
   * @example
   * alibaba_cloud
   */
  purchaseChannel?: string;
  /**
   * @remarks
   * The unique identifier of the external service associated with the license.
   * 
   * @example
   * eiam-cn-xxxxx
   */
  purchaseInstanceId?: string;
  /**
   * @remarks
   * The UNIX timestamp indicating the start of the license validity period.
   * 
   * @example
   * 1720509699000
   */
  startTime?: number;
  /**
   * @remarks
   * The user quota included with the license.
   * 
   * @example
   * 100
   */
  userQuota?: number;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      endTime: 'EndTime',
      instanceLicenseDetail: 'InstanceLicenseDetail',
      licenseChargeType: 'LicenseChargeType',
      licenseConfigJson: 'LicenseConfigJson',
      licenseCreateTime: 'LicenseCreateTime',
      licenseId: 'LicenseId',
      licenseStatus: 'LicenseStatus',
      purchaseChannel: 'PurchaseChannel',
      purchaseInstanceId: 'PurchaseInstanceId',
      startTime: 'StartTime',
      userQuota: 'UserQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      endTime: 'number',
      instanceLicenseDetail: GetInstanceLicenseResponseBodyLicenseInstanceLicenseDetail,
      licenseChargeType: 'string',
      licenseConfigJson: 'string',
      licenseCreateTime: 'number',
      licenseId: 'string',
      licenseStatus: 'string',
      purchaseChannel: 'string',
      purchaseInstanceId: 'string',
      startTime: 'number',
      userQuota: 'number',
    };
  }

  validate() {
    if(this.instanceLicenseDetail && typeof (this.instanceLicenseDetail as any).validate === 'function') {
      (this.instanceLicenseDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLicenseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The license details.
   */
  license?: GetInstanceLicenseResponseBodyLicense;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      license: 'License',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      license: GetInstanceLicenseResponseBodyLicense,
      requestId: 'string',
    };
  }

  validate() {
    if(this.license && typeof (this.license as any).validate === 'function') {
      (this.license as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

