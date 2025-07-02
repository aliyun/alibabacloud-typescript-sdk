// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValueConstraints extends $dara.Model {
  /**
   * @remarks
   * 默认值。
   */
  defaultValue?: number;
  /**
   * @remarks
   * 结束值。
   */
  end?: number;
  /**
   * @remarks
   * 起始值。
   */
  start?: number;
  /**
   * @remarks
   * 步长。
   */
  step?: number;
  /**
   * @remarks
   * 值限制类型。
   */
  type?: string;
  /**
   * @remarks
   * 枚举值。
   * 
   * @example
   * null
   */
  values?: number[];
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      end: 'End',
      start: 'Start',
      step: 'Step',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'number',
      end: 'number',
      start: 'number',
      step: 'number',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

