// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceAttributeRequestLicenseDataResponseInfo extends $dara.Model {
  /**
   * @remarks
   * Mock error code.
   * 
   * @example
   * EntityNotExist.Service
   */
  errorCode?: string;
  /**
   * @remarks
   * Mock error message.
   * 
   * @example
   * The provided parameter "ServiceId" is invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * if you want mock response, please open this option.
   * 
   * @example
   * true
   */
  updateResponse?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      updateResponse: 'UpdateResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      updateResponse: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeRequestLicenseData extends $dara.Model {
  /**
   * @remarks
   * The Custom Data
   * 
   * @example
   * {"Test"}
   */
  customData?: string;
  /**
   * @remarks
   * Mock response info.
   */
  responseInfo?: UpdateServiceInstanceAttributeRequestLicenseDataResponseInfo;
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
      responseInfo: 'ResponseInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: 'string',
      responseInfo: UpdateServiceInstanceAttributeRequestLicenseDataResponseInfo,
    };
  }

  validate() {
    if(this.responseInfo && typeof (this.responseInfo as any).validate === 'function') {
      (this.responseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the service instance expires.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-12-25T02:28:40Z
   */
  endTime?: string;
  /**
   * @remarks
   * The License Data
   */
  licenseData?: UpdateServiceInstanceAttributeRequestLicenseData;
  /**
   * @remarks
   * Application reason, currently used for trial application extension.
   * 
   * @example
   * \\"\\"
   */
  reason?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-3df88e962cdexxxxxxxx
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      licenseData: 'LicenseData',
      reason: 'Reason',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      licenseData: UpdateServiceInstanceAttributeRequestLicenseData,
      reason: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(this.licenseData && typeof (this.licenseData as any).validate === 'function') {
      (this.licenseData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

