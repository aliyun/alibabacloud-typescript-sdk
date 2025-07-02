// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Disk extends $dara.Model {
  /**
   * @remarks
   * 磁盘类型。
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
   * 性能级别。
   * 
   * @example
   * S0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * 单位GB。
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

