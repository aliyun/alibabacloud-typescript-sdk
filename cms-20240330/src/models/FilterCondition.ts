// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterCondition extends $dara.Model {
  /**
   * @remarks
   * The name of the field to filter on.
   */
  field?: string;
  /**
   * @remarks
   * The comparison operator, such as `equals` or `startsWith`.
   */
  op?: string;
  /**
   * @remarks
   * The value to match for the specified field and operator.
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

