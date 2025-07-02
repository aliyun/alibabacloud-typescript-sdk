// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataDisk extends $dara.Model {
  /**
   * @remarks
   * 磁盘类型。
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * 每个节点磁盘数量。
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * 创建ESSD云盘作为数据盘使用时，设置云盘的性能等级。取值范围：
   * - PL0：单盘最高随机读写IOPS 1万。
   * - PL1（默认）：单盘最高随机读写IOPS 5万。
   * - PL2：单盘最高随机读写IOPS 10万。
   * - PL3：单盘最高随机读写IOPS 100万。
   * 
   * 默认值：PL1。
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * 单位GB。
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      count: 'Count',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      count: 'number',
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

