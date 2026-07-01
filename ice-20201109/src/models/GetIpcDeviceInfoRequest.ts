// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpcDeviceInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Capability. Default value is understand. Valid values:
   * 
   * - understand: understanding
   * 
   * - understand-reid: understanding with reid
   * 
   * - search: search
   * 
   * @example
   * understand
   */
  capability?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * d123
   */
  deviceId?: string;
  /**
   * @remarks
   * End Time. UTC time in the format yyyy-MM-ddTHH:mm:ssZ. The difference between EndTime and StartTime must not exceed 180 days.
   * 
   * @example
   * 2017-02-11T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Page number for paging. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size, which specifies the number of entries displayed per page. Default value is 10. Maximum value is 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start Time. UTC time in the format yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      deviceId: 'DeviceId',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: 'string',
      deviceId: 'string',
      endTime: 'string',
      pageNo: 'number',
      pageSize: 'number',
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

