// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeResponseBodyDisks extends $dara.Model {
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   cloud_essd
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp1fi88ryk4yah8a6yos
   */
  diskId?: string;
  /**
   * @remarks
   * The performance level of the ESSD that is used as the system disk. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The disk size. Unit: GiB.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
      performanceLevel: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

