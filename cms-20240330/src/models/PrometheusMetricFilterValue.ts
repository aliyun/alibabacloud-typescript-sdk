// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusMetricFilterValue extends $dara.Model {
  /**
   * @remarks
   * The filter dimension name.
   * 
   * @example
   * host
   */
  dim?: string;
  /**
   * @remarks
   * The filter operator, such as eq, neq, contain, not_contain, all, or disabled.
   * 
   * @example
   * =
   */
  opt?: string;
  /**
   * @remarks
   * The filter value.
   * 
   * @example
   * web-01
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dim: 'dim',
      opt: 'opt',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dim: 'string',
      opt: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

