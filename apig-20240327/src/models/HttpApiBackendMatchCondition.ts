// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiBackendMatchCondition extends $dara.Model {
  /**
   * @remarks
   * The key of the matching condition.
   * 
   * @example
   * color
   */
  key?: string;
  /**
   * @remarks
   * The operator. Exact match, prefix match, and regular expressions are supported.
   * 
   * Valid values:
   * 
   * *   equal
   * *   regex
   * *   prefix
   * 
   * @example
   * equal
   */
  operator?: string;
  /**
   * @remarks
   * The match type. Query and Header parameters can be matched.
   * 
   * @example
   * Query
   */
  type?: string;
  /**
   * @remarks
   * The value of the matching condition.
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

