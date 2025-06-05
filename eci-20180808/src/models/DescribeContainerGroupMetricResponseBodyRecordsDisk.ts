// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupMetricResponseBodyRecordsDisk extends $dara.Model {
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * /dev/vda
   */
  device?: string;
  /**
   * @remarks
   * The amount of data that was read from the disk. Unit: bytes.
   * 
   * @example
   * 210714112
   */
  readBytes?: number;
  /**
   * @remarks
   * This parameter is unavailable for public use.
   * 
   * @example
   * 123
   */
  readIO?: number;
  /**
   * @remarks
   * The amount of data that was written to the disk. Unit: bytes.
   * 
   * @example
   * 1375109120
   */
  writeBytes?: number;
  /**
   * @remarks
   * This parameter is unavailable for public use.
   * 
   * @example
   * 123
   */
  writeIO?: number;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      readBytes: 'ReadBytes',
      readIO: 'ReadIO',
      writeBytes: 'WriteBytes',
      writeIO: 'WriteIO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: 'string',
      readBytes: 'number',
      readIO: 'number',
      writeBytes: 'number',
      writeIO: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

