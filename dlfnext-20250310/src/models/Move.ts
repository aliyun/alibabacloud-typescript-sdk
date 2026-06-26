// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Move extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * other_col_test
   */
  fieldName?: string;
  /**
   * @remarks
   * The name of the reference column.
   * 
   * @example
   * col_test
   */
  referenceFieldName?: string;
  /**
   * @remarks
   * The move type.
   * 
   * @example
   * FIRST
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'fieldName',
      referenceFieldName: 'referenceFieldName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      referenceFieldName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

