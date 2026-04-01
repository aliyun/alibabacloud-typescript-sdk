// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FieldInputConfig extends $dara.Model {
  /**
   * @remarks
   * Is the field arrayed? Possible values are:
   * 
   * - true: Arrayed.
   * - false: Not Arrayed.
   * 
   * @example
   * false
   */
  arrayed?: boolean;
  /**
   * @remarks
   * Field default value.
   * 
   * @example
   * test
   */
  defaultValue?: string;
  /**
   * @remarks
   * Field check regex.
   * 
   * @example
   * [a-zA-Z0-9\\u4e00-\\u9fa5_-]{2,128}
   */
  fieldCheckRegex?: string;
  /**
   * @remarks
   * Field types, with the following values:
   * 
   * - **normal**: Normal type.
   * - **custom**: Complex type; in this mode, FieldConfigs can be configured.
   * 
   * @example
   * normal
   */
  fieldClass?: string;
  /**
   * @remarks
   * Supports configuring nested input parameters in complex-type scenarios.
   */
  fieldConfigs?: FieldInputConfig[];
  /**
   * @remarks
   * Field description.
   * 
   * @example
   * app name
   */
  fieldDescription?: string;
  /**
   * @remarks
   * Field example.
   * 
   * @example
   * test
   */
  fieldExample?: string;
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * appName
   */
  fieldName?: string;
  /**
   * @remarks
   * Field path.
   * 
   * @example
   * xx.appName
   */
  fieldPath?: string;
  /**
   * @remarks
   * The field type. The value is as follows:
   * 
   * - **String**: String.
   * - **Long**: Long integer.
   * - **Integer**: Integer.
   * - **Double**: Floating-point type.
   * - **Boolean**: Boolean.
   * - **ip**: The IP entity.
   * - **file**: file entity.
   * - **process**: process entity.
   * - **incident**: event entity.
   * - **alert**: alert entity.
   * - **host**: host entity.
   * - **domain**: The domain name entity.
   * - **container**: container entity.
   * 
   * @example
   * String
   */
  fieldType?: string;
  /**
   * @remarks
   * Is the field mandatory? Possible values are:
   * 
   * - **true**: Required.
   * - **false**: Optional.
   * 
   * @example
   * false
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrayed: 'Arrayed',
      defaultValue: 'DefaultValue',
      fieldCheckRegex: 'FieldCheckRegex',
      fieldClass: 'FieldClass',
      fieldConfigs: 'FieldConfigs',
      fieldDescription: 'FieldDescription',
      fieldExample: 'FieldExample',
      fieldName: 'FieldName',
      fieldPath: 'FieldPath',
      fieldType: 'FieldType',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayed: 'boolean',
      defaultValue: 'string',
      fieldCheckRegex: 'string',
      fieldClass: 'string',
      fieldConfigs: { 'type': 'array', 'itemType': FieldInputConfig },
      fieldDescription: 'string',
      fieldExample: 'string',
      fieldName: 'string',
      fieldPath: 'string',
      fieldType: 'string',
      required: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fieldConfigs)) {
      $dara.Model.validateArray(this.fieldConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

