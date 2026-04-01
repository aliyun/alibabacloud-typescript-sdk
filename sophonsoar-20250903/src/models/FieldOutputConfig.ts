// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldOutputConfig extends $dara.Model {
  /**
   * @remarks
   * Field default value.
   * 
   * @example
   * 11.**.*.11
   */
  defaultValue?: string;
  /**
   * @remarks
   * Field description information.
   * 
   * @example
   * Single IP to be blocked
   */
  fieldDescription?: string;
  /**
   * @remarks
   * Field example.
   * 
   * @example
   * 2.*.*.2
   */
  fieldExample?: string;
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * ip
   */
  fieldName?: string;
  /**
   * @remarks
   * Field type, with the following values:
   * 
   * - **String**: String.
   * - **Long**: Long integer.
   * - **Integer**: Integer.
   * - **Double**: Double.
   * - **Boolean**: Boolean.
   * 
   * @example
   * String
   */
  fieldType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      fieldDescription: 'FieldDescription',
      fieldExample: 'FieldExample',
      fieldName: 'FieldName',
      fieldType: 'FieldType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      fieldDescription: 'string',
      fieldExample: 'string',
      fieldName: 'string',
      fieldType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

