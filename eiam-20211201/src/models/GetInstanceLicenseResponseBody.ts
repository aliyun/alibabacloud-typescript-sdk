// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceLicenseResponseBodyLicenseInstanceLicenseDetail extends $dara.Model {
  /**
   * @remarks
   * The conditional access license status.
   * 
   * @example
   * enabled
   */
  conditionalAccessPolicyLicenseStatus?: string;
  /**
   * @remarks
   * The M2M license status.
   * 
   * @example
   * enabled
   */
  m2mApplicationLicenseStatus?: string;
  /**
   * @remarks
   * The M2M application quota of the license.
   * 
   * @example
   * 2
   */
  m2mApplicationQuota?: number;
  /**
   * @remarks
   * The machine identity license status.
   * 
   * @example
   * enabled
   */
  mimApplicationLicenseStatus?: string;
  /**
   * @remarks
   * The network access endpoint quota of the license.
   * 
   * @example
   * 1
   */
  networkAccessEndpointQuota?: number;
  /**
   * @remarks
   * The PAM privileged management license status. Valid values: enabled and disabled.
   */
  pamLicenseStatus?: string;
  /**
   * @remarks
   * The number of prepaid active accounts.
   * 
   * @example
   * 100
   */
  prepaidActiveUserNumber?: number;
  /**
   * @remarks
   * The user quota of the license.
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
      pamLicenseStatus: 'PamLicenseStatus',
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
      pamLicenseStatus: 'string',
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
   * The edition of the license.
   * 
   * @example
   * free
   */
  edition?: string;
  /**
   * @remarks
   * The end date of the license validity period, in timestamp format.
   * 
   * @example
   * 1723996800000
   */
  endTime?: number;
  /**
   * @remarks
   * The detailed license information of the instance.
   */
  instanceLicenseDetail?: GetInstanceLicenseResponseBodyLicenseInstanceLicenseDetail;
  /**
   * @remarks
   * The billing type of the license.
   * 
   * @example
   * prepay
   */
  licenseChargeType?: string;
  /**
   * @remarks
   * The detailed license configuration in JSON string format.
   * 
   * @example
   * {"modules":[{"features":[{"name":"urn:alibaba:idaas:license:module:ud:customField","status":"enabled"}]……{"name":"urn:alibaba:idaas:license:tag:enterprise","status":"enabled"}],"version":"1.0"}
   */
  licenseConfigJson?: string;
  /**
   * @remarks
   * The creation time of the license, in timestamp format.
   * 
   * @example
   * 1720509699000
   */
  licenseCreateTime?: number;
  /**
   * @remarks
   * The unique identifier of the license.
   * 
   * @example
   * license_1234xxxx
   */
  licenseId?: string;
  /**
   * @remarks
   * The status of the license.
   * 
   * @example
   * valid
   */
  licenseStatus?: string;
  /**
   * @remarks
   * The purchase channel of the license.
   * 
   * @example
   * alibaba_cloud
   */
  purchaseChannel?: string;
  /**
   * @remarks
   * The unique identifier of the external product associated with the license.
   * 
   * @example
   * eiam-cn-xxxxx
   */
  purchaseInstanceId?: string;
  /**
   * @remarks
   * The start date of the license validity period, in timestamp format.
   * 
   * @example
   * 1720509699000
   */
  startTime?: number;
  /**
   * @remarks
   * The user quota of the license.
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
   * The response result.
   */
  license?: GetInstanceLicenseResponseBodyLicense;
  /**
   * @remarks
   * The request ID.
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

