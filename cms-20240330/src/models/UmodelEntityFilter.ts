// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UmodelEntityFilter extends $dara.Model {
  /**
   * @remarks
   * The field name to filter on.
   */
  field?: string;
  /**
   * @remarks
   * The comparison operator to use. Supported operators include `=`, `>`, `<`, `!=`, `IN`, and `NOT IN`.
   */
  operator?: string;
  /**
   * @remarks
   * The value to compare the field against.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operator: 'string',
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

