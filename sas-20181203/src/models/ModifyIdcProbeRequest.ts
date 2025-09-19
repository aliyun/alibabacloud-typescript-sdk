// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIdcProbeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data center.
   * 
   * @example
   * test
   */
  idcName?: string;
  /**
   * @remarks
   * The region ID of the data center.
   * 
   * @example
   * Hangzhou
   */
  idcRegion?: string;
  /**
   * @remarks
   * The scan interval.
   * 
   * @example
   * 1
   */
  intervalPeriod?: number;
  /**
   * @remarks
   * The settings of the CIDR block.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  ipSegments?: string;
  /**
   * @remarks
   * The Linux port.
   * 
   * @example
   * 80
   */
  linuxPort?: string;
  /**
   * @remarks
   * The unit of the scan interval. Valid values:
   * 
   * *   **day**
   * *   **hour**
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The usage status. Valid values:
   * 
   * *   **0**: enabled.
   * *   **1**: disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server. Separate multiple UUIDs with commas (,).
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5b6d4072118f487094199cedf90c****,f6310b7976144639867beea2f346****
   */
  uuids?: string;
  /**
   * @remarks
   * The Windows port.
   * 
   * @example
   * 40
   */
  winPort?: string;
  static names(): { [key: string]: string } {
    return {
      idcName: 'IdcName',
      idcRegion: 'IdcRegion',
      intervalPeriod: 'IntervalPeriod',
      ipSegments: 'IpSegments',
      linuxPort: 'LinuxPort',
      periodUnit: 'PeriodUnit',
      status: 'Status',
      uuids: 'Uuids',
      winPort: 'WinPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idcName: 'string',
      idcRegion: 'string',
      intervalPeriod: 'number',
      ipSegments: 'string',
      linuxPort: 'string',
      periodUnit: 'string',
      status: 'number',
      uuids: 'string',
      winPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

