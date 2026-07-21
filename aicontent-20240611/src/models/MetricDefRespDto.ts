// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricDefRespDTO extends $dara.Model {
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
   * Is sortable
   * 
   * @example
   * true
   */
  sortable?: boolean;
  /**
   * @remarks
   * Metric unit
   * 
   * @example
   * 次
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      label: 'label',
      sortable: 'sortable',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      label: 'string',
      sortable: 'boolean',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

