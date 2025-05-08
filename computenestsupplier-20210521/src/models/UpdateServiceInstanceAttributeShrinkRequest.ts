// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceAttributeShrinkRequest extends $dara.Model {
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
  licenseDataShrink?: string;
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
      licenseDataShrink: 'LicenseData',
      reason: 'Reason',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      licenseDataShrink: 'string',
      reason: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

