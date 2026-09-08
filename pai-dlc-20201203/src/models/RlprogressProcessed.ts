// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressProcessed extends $dara.Model {
  /**
   * @remarks
   * 已处理条数
   * 
   * @example
   * true
   */
  done?: number;
  /**
   * @remarks
   * 总条数
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      done: 'Done',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'number',
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

