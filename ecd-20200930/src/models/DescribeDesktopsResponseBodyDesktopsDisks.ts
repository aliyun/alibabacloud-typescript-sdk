// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsResponseBodyDesktopsDisks extends $dara.Model {
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_auto: standard SSD.
   * *   cloud_essd: enhanced SSD (ESSD).
   * 
   * @example
   * cloud_auto
   */
  diskCategory?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-jedbpr4sl9l37****
   */
  diskId?: string;
  /**
   * @remarks
   * The disk size. Unit: GiB.
   * 
   * @example
   * 80
   */
  diskSize?: number;
  /**
   * @remarks
   * The type of the disk.
   * 
   * Valid values:
   * 
   * *   SYSTEM: system disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DATA: data disk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * SYSTEM
   */
  diskType?: string;
  /**
   * @remarks
   * The performance level (PL) of the disk when an enterprise SSD (ESSD) is used.
   * 
   * For more information about the differences among enterprise SSDs (ESSDs) at different PLs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * Valid values:
   * 
   * *   PL1
   * *   PL0
   * *   PL3
   * *   PL2
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
      diskId: 'string',
      diskSize: 'number',
      diskType: 'string',
      performanceLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

