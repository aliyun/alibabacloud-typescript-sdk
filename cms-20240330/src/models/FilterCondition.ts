// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterCondition extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * region
   */
  field?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * EQ
   */
  op?: string;
  /**
   * @remarks
   * The comparison value.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      op: 'op',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
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

