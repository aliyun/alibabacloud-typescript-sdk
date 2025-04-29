// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceModificationPriceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data disk N. You can specify this parameter if you want to query the pricing information about newly attached subscription data disks. Valid values of N: 1 to 16. Valid values:
   * 
   * *   cloud_efficiency: utra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: ESSD.
   * *   cloud: basic disk.
   * 
   * This parameter is empty by default.
   * 
   * >  When you call the DescribeInstanceModificationPrice operation, you must specify at least one of the following parameters: `InstanceType` and `DataDisk.N.*`.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of data disk N that is an enhanced SSD (ESSD). The value of N must be the same as that in `DataDisk.N.Category` when DataDisk.N.Category is set to cloud_essd. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For more information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The capacity of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_efficiency: 20 to 32768.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_ssd: 20 to 32768.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_essd: vary based on the `DataDisk.N.PerformanceLevel` value.
   * 
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL0: 1 to 32768.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL1: 20 to 32768.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL2: 461 to 32768.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL3: 1261 to 32768.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud: 5 to 2000.
   * 
   * The default value is the minimum capacity allowed for the specified data disk category.
   * 
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

