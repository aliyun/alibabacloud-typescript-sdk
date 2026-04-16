// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricValueDTO extends $dara.Model {
  /**
   * @example
   * total_calls
   */
  key?: string;
  /**
   * @example
   * 调用次数
   */
  label?: string;
  /**
   * @example
   * 次
   */
  unit?: string;
  /**
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      label: 'label',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      label: 'string',
      unit: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

