// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpcDeviceInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The capability. Default value: understand. Valid values:
   * - understand: Understanding.
   * - understand-reid: Understanding with ReID.
   * - search: Search.
   * 
   * @example
   * understand
   */
  capability?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * d123
   */
  deviceId?: string;
  /**
   * @remarks
   * The end time in UTC. Format: yyyy-MM-ddTHH:mm:ssZ. The interval between the end time and the start time cannot exceed 180 days.
   * 
   * @example
   * 2017-02-11T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
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

