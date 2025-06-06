// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDynamicDisposalProcessesResponseBodyDisposalProcessesDeviceBasicInfo extends $dara.Model {
  /**
   * @remarks
   * CPU model.
   * 
   * @example
   * Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz
   */
  cpu?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * @example
   * A84D0AF0-1ACC-02B8-6A07-FC898F71BE09
   */
  devTag?: string;
  /**
   * @remarks
   * Device operating system type. Values:
   * - **Windows**：Windows system.
   * - **macOS**：macOS system.
   * - **Linux**：Linux system.
   * - **Android**：Android system.
   * - **iOS**：iOS system.
   * - **Windows_Wuying**：Wuying cloud desktop system.
   * 
   * @example
   * windows
   */
  devType?: string;
  /**
   * @remarks
   * Device disk model.
   * 
   * @example
   * KXG6AZNV512G TOSHIBA
   */
  disk?: string;
  /**
   * @remarks
   * Device name.
   * 
   * @example
   * DESKTOP-ERLV3AK
   */
  hostname?: string;
  /**
   * @remarks
   * Device MAC address.
   * 
   * @example
   * CE:3B:**:**:FD:FB
   */
  mac?: string;
  /**
   * @remarks
   * Device memory capacity. Unit: GB.
   * 
   * @example
   * 2
   */
  memory?: string;
  /**
   * @remarks
   * Operating system version
   * 
   * @example
   * 1
   */
  osVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      devTag: 'DevTag',
      devType: 'DevType',
      disk: 'Disk',
      hostname: 'Hostname',
      mac: 'Mac',
      memory: 'Memory',
      osVersion: 'OsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      devTag: 'string',
      devType: 'string',
      disk: 'string',
      hostname: 'string',
      mac: 'string',
      memory: 'string',
      osVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

