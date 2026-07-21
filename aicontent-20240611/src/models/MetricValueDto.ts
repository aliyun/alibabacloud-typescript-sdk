// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricValueDTO extends $dara.Model {
  /**
   * @remarks
   * Metric key name
   * 
   * @example
   * total_calls
   */
  key?: string;
  /**
   * @remarks
   * Metric display name
   * 
   * @example
   * 调用次数
   */
  label?: string;
  /**
   * @remarks
   * Metric unit
   * 
   * @example
   * 次
   */
  unit?: string;
  /**
   * @remarks
   * Metric value
   * 
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

