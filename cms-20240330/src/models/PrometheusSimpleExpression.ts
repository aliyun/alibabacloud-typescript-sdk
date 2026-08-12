// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusSimpleExpression extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. Valid values:
   * - GT: greater than
   * - GE: greater than or equal to
   * - LT: less than
   * - LE: less than or equal to
   * - EQ: equal to
   * - NE: not equal to
   */
  operator?: string;
  /**
   * @remarks
   * The referenced query name, corresponding to QueryConfigUnified.queries[].name.
   */
  queryName?: string;
  /**
   * @remarks
   * The comparison threshold.
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      operator: 'operator',
      queryName: 'queryName',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      queryName: 'string',
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

