// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsResponseBodyGroupsStats extends $dara.Model {
  /**
   * @example
   * 200
   */
  deviceNum?: number;
  /**
   * @example
   * 0
   */
  iedNum?: number;
  /**
   * @example
   * 200
   */
  ipcNum?: number;
  /**
   * @example
   * 0
   */
  platformNum?: number;
  static names(): { [key: string]: string } {
    return {
      deviceNum: 'DeviceNum',
      iedNum: 'IedNum',
      ipcNum: 'IpcNum',
      platformNum: 'PlatformNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceNum: 'number',
      iedNum: 'number',
      ipcNum: 'number',
      platformNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

