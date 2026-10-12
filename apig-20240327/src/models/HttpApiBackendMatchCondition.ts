// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiBackendMatchCondition extends $dara.Model {
  /**
   * @remarks
   * The match key.
   * 
   * @example
   * color
   */
  key?: string;
  /**
   * @remarks
   * The operator. Three matching methods are supported: exact match, prefix match, and regular expression.
   * 
   * @example
   * equal
   */
  operator?: string;
  /**
   * @remarks
   * The match type. Supports matching by query parameter or header parameter.
   * 
   * @example
   * Query
   */
  type?: string;
  /**
   * @remarks
   * The match value.
   * 
   * @example
   * gray
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      type: 'string',
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

