// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressMicro extends $dara.Model {
  /**
   * @remarks
   * 当前 micro-batch 序号
   * 
   * @example
   * 3
   */
  current?: number;
  /**
   * @remarks
   * micro-batch 总数
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

