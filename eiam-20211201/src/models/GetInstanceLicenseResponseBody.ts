// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceLicenseResponseBodyLicense extends $dara.Model {
  /**
   * @remarks
   * Edition of the License
   * 
   * @example
   * free
   */
  edition?: string;
  /**
   * @remarks
   * End date of the validity period of the License, timestamp
   * 
   * @example
   * 1723996800000
   */
  endTime?: number;
  /**
   * @remarks
   * Payment type of the License
   * 
   * @example
   * prepay
   */
  licenseChargeType?: string;
  /**
   * @remarks
   * Detailed configuration JSON string of the License
   * 
   * @example
   * {"modules":[{"features":[{"name":"urn:alibaba:idaas:license:module:ud:customField","status":"enabled"}]……{"name":"urn:alibaba:idaas:license:tag:enterprise","status":"enabled"}],"version":"1.0"}
   */
  licenseConfigJson?: string;
  /**
   * @remarks
   * Creation time of the License, timestamp
   * 
   * @example
   * 1720509699000
   */
  licenseCreateTime?: number;
  /**
   * @remarks
   * Unique identifier of the License
   * 
   * @example
   * license_1234xxxx
   */
  licenseId?: string;
  /**
   * @remarks
   * Status of the License
   * 
   * @example
   * valid
   */
  licenseStatus?: string;
  /**
   * @remarks
   * Purchase channel of the License
   * 
   * @example
   * alibaba_cloud
   */
  purchaseChannel?: string;
  /**
   * @remarks
   * Unique external product identifier corresponding to the License
   * 
   * @example
   * eiam-cn-xxxxx
   */
  purchaseInstanceId?: string;
  /**
   * @remarks
   * Start date of the validity period of the License, timestamp
   * 
   * @example
   * 1720509699000
   */
  startTime?: number;
  /**
   * @remarks
   * User quota of the License
   * 
   * @example
   * 100
   */
  userQuota?: number;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      endTime: 'EndTime',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLicenseResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned result.
   */
  license?: GetInstanceLicenseResponseBodyLicense;
  /**
   * @remarks
   * Request ID
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

