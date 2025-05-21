// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiBackendMatchCondition extends $dara.Model {
  /**
   * @example
   * color
   */
  key?: string;
  /**
   * @example
   * equal
   */
  operator?: string;
  /**
   * @example
   * Query
   */
  type?: string;
  /**
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

