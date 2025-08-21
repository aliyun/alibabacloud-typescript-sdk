// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceStatRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @example
   * iOS
   */
  deviceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2016-07-29T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TOTAL
   */
  queryType?: string;
  /**
   * @remarks
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

