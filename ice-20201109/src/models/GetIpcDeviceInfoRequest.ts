// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIpcDeviceInfoRequest extends $dara.Model {
  /**
   * @example
   * understand
   */
  capability?: string;
  /**
   * @example
   * d123
   */
  deviceId?: string;
  /**
   * @example
   * 2017-02-11T12:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

