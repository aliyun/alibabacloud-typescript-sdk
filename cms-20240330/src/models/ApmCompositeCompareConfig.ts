// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmCompositeCompareConfig extends $dara.Model {
  /**
   * @remarks
   * 聚合函数
   * 
   * This parameter is required.
   */
  aggregate?: string;
  /**
   * @remarks
   * 比较操作符
   * 
   * This parameter is required.
   */
  operator?: string;
  /**
   * @remarks
   * 单阈值
   * 
   * This parameter is required.
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      operator: 'operator',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      operator: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

