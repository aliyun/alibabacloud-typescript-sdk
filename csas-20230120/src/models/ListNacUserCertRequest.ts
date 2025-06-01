// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacUserCertRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  department?: string;
  /**
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @example
   * 1702770400
   */
  endTime?: number;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 1702260834
   */
  startTime?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * zhang**
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      department: 'Department',
      deviceType: 'DeviceType',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      department: 'string',
      deviceType: 'string',
      endTime: 'number',
      pageSize: 'string',
      startTime: 'number',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

