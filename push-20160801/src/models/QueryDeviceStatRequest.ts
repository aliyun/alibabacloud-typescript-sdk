// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceStatRequest extends $dara.Model {
  /**
   * @remarks
   * AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * >Notice: 
   * 
   * This parameter is only valid for early Android and iOS dual-platform application types. If your application is a dual-platform application, specify this parameter as iOS or ANDROID to query the number of devices for each type. By default, it queries ALL types.
   * 
   * 
   * 
   * The device type. Valid values:
   * 
   * - **iOS**: iOS devices
   * 
   * - **ANDROID**: Android devices
   * 
   * - **ALL**: All device types
   * 
   * @example
   * iOS
   */
  deviceType?: string;
  /**
   * @remarks
   * The end time of the query. The time format follows the ISO8601 standard and uses UTC time, in the format YYYY-MM-DDThh:mm:ssZ.
   * 
   * > The statistics end date is the end time\\"s day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-07-29T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Query new devices or historical cumulative devices. Valid values:
   * 
   * - **NEW**: New devices
   * 
   * - **TOTAL**: Cumulative devices
   * 
   * This parameter is required.
   * 
   * @example
   * TOTAL
   */
  queryType?: string;
  /**
   * @remarks
   * The start time of the query. The time format follows the ISO8601 standard and uses UTC time, in the format YYYY-MM-DDThh:mm:ssZ.
   * 
   * > The statistics start date is 00:00 UTC+8 on the start time\\"s day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2016-07-28T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceType: 'DeviceType',
      endTime: 'EndTime',
      queryType: 'QueryType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceType: 'string',
      endTime: 'string',
      queryType: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

