// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IcebergNestedField extends $dara.Model {
  /**
   * @remarks
   * The comment for the field.
   * 
   * @example
   * desc1
   */
  doc?: string;
  /**
   * @remarks
   * The field ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * col1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the field is optional.
   * 
   * @example
   * true
   */
  optional?: boolean;
  /**
   * @remarks
   * The field type.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      doc: 'doc',
      id: 'id',
      name: 'name',
      optional: 'optional',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doc: 'string',
      id: 'number',
      name: 'string',
      optional: 'boolean',
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

