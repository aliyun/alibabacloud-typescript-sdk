// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsFilesystem extends $dara.Model {
  /**
   * @remarks
   * The size of the available space.
   * 
   * @example
   * 35319836672
   */
  available?: number;
  /**
   * @remarks
   * The total file system space.
   * 
   * @example
   * 41610981376
   */
  capacity?: number;
  /**
   * @remarks
   * The name of the partition.
   * 
   * @example
   * /dev/root
   */
  fsName?: string;
  /**
   * @remarks
   * The size of used space.
   * 
   * @example
   * 4368744448
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      capacity: 'Capacity',
      fsName: 'FsName',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'number',
      capacity: 'number',
      fsName: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

