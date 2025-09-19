// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIdcProbeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data center.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  idcName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Hangzhou
   */
  idcRegion?: string;
  /**
   * @remarks
   * The scan interval.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  intervalPeriod?: number;
  /**
   * @remarks
   * The settings of the CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  ipSegments?: string;
  /**
   * @remarks
   * The Linux port.
   * 
   * This parameter is required.
   * 
   * @example
   * 40
   */
  linuxPort?: string;
  /**
   * @remarks
   * The unit of the scan interval. Valid values:
   * 
   * *   **day**
   * *   **hour**
   * 
   * This parameter is required.
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The UUID of the server. Separate multiple UUIDs with commas (,).
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 076a446d-df7d-424c-bdc5-bb5dc7f1****
   */
  uuids?: string;
  /**
   * @remarks
   * The Windows port.
   * 
   * This parameter is required.
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

