// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressBufferDetail extends $dara.Model {
  /**
   * @remarks
   * 已被 trainer 消费的样本数
   * 
   * @example
   * 0
   */
  consumed?: number;
  /**
   * @remarks
   * 已完成样本数
   * 
   * @example
   * 500
   */
  finished?: number;
  /**
   * @remarks
   * 已就绪样本数
   * 
   * @example
   * 500
   */
  ready?: number;
  /**
   * @remarks
   * buffer 标签，即 global batch 序号
   * 
   * @example
   * 1
   */
  tag?: number;
  /**
   * @remarks
   * 目标样本数
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      consumed: 'Consumed',
      finished: 'Finished',
      ready: 'Ready',
      tag: 'Tag',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumed: 'number',
      finished: 'number',
      ready: 'number',
      tag: 'number',
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

