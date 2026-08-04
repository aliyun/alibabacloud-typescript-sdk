// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacUserCertRequest extends $dara.Model {
  /**
   * @remarks
   * Page number of the current page in a paged query. Valid values: 1 to 10000.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Department that the user belongs to. The value must be 1 to 128 characters in length. It can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), forward slashes (/), at signs (@), and spaces.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * Operating system type of the endpoint device. Valid values:
   * 
   * - **windows**: Windows.
   * 
   * - **macos**: macOS.
   * 
   * - **linux**: Linux.
   * 
   * - **android**: Android.
   * 
   * - **ios**: iOS.
   * 
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 1702770400
   */
  endTime?: number;
  /**
   * @remarks
   * Number of entries per page for a paged query. Valid values: 1 to 1000.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Start time.
   * 
   * @example
   * 1702260834
   */
  startTime?: number;
  /**
   * @remarks
   * Certificate status. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * Username.
   * 
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

