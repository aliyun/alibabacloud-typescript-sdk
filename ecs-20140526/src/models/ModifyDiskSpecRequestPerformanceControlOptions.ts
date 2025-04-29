// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecRequestPerformanceControlOptions extends $dara.Model {
  /**
   * @remarks
   * The new IOPS rate of the cloud disk. You can modify the IOPS rate of only cloud disks in dedicated block storage clusters.
   * 
   * Valid values: 900 to maximum IOPS per disk (with an increment of 100).
   * 
   * For more information, see [Block storage performance](https://help.aliyun.com/document_detail/25382.html).
   * 
   * @example
   * 2000
   */
  IOPS?: number;
  /**
   * @remarks
   * Specifies whether to reset the IOPS rate and throughput of the cloud disk. This parameter takes effect only when the cloud disk belongs to a dedicated block storage cluster.
   * 
   * After you specify this parameter, PerformanceControlOptions.IOPS and PerformanceControlOptions.Throughput do not take effect.
   * 
   * Set the value to All, which indicates that the IOPS rate and throughput of the cloud disk are reset to the initial values.
   * 
   * @example
   * All
   */
  recover?: string;
  /**
   * @remarks
   * The new throughput of the cloud disk. You can change the throughput of only cloud disks in dedicated block storage clusters. Unit: MB/s.
   * 
   * Valid values: 60 to maximum throughput per disk.
   * 
   * For more information, see [Block storage performance](https://help.aliyun.com/document_detail/25382.html).
   * 
   * @example
   * 200
   */
  throughput?: number;
  static names(): { [key: string]: string } {
    return {
      IOPS: 'IOPS',
      recover: 'Recover',
      throughput: 'Throughput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IOPS: 'number',
      recover: 'string',
      throughput: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

