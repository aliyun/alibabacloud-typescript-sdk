// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataPropertiesValue extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 姓名
   */
  displayName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * name
   */
  description?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The regular expression that is used for validation.
   * 
   * @example
   * ^
   */
  pattern?: string;
  /**
   * @remarks
   * The error message that is returned if the value does not match the regular expression.
   * 
   * @example
   * 不是有效的email地址
   */
  patternErrorMessage?: string;
  /**
   * @remarks
   * The minimum length.
   * 
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @remarks
   * The maximum length.
   * 
   * @example
   * 10
   */
  maxLength?: number;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  maximum?: number;
  /**
   * @remarks
   * Indicates whether the field is required.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * Indicates whether the field is a system field.
   * 
   * @example
   * false
   */
  system?: boolean;
  /**
   * @remarks
   * Indicates whether the field is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * Indicates whether the field is an array.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * Indicates whether the field is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The type of the editor.
   * 
   * @example
   * textbox
   */
  editorType?: string;
  /**
   * @remarks
   * The extended properties.
   * 
   * @example
   * {}
   */
  attributes?: string;
  /**
   * @remarks
   * The display order.
   * 
   * @example
   * 1
   */
  displayOrder?: number;
  /**
   * @remarks
   * The time when the field was created.
   * 
   * @example
   * 2021-07-14 10:48:43.0
   */
  createdTime?: number;
  /**
   * @remarks
   * The time when the field was last updated.
   * 
   * @example
   * 2021-07-14 10:48:43.0
   */
  updatedTime?: number;
  /**
   * @remarks
   * Creator
   * 
   * @example
   * tom
   */
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      description: 'Description',
      name: 'Name',
      dataType: 'DataType',
      pattern: 'Pattern',
      patternErrorMessage: 'PatternErrorMessage',
      minLength: 'MinLength',
      maxLength: 'MaxLength',
      minimum: 'Minimum',
      maximum: 'Maximum',
      required: 'Required',
      system: 'System',
      disabled: 'Disabled',
      array: 'Array',
      readOnly: 'ReadOnly',
      editorType: 'EditorType',
      attributes: 'Attributes',
      displayOrder: 'DisplayOrder',
      createdTime: 'CreatedTime',
      updatedTime: 'UpdatedTime',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      description: 'string',
      name: 'string',
      dataType: 'string',
      pattern: 'string',
      patternErrorMessage: 'string',
      minLength: 'number',
      maxLength: 'number',
      minimum: 'number',
      maximum: 'number',
      required: 'boolean',
      system: 'boolean',
      disabled: 'boolean',
      array: 'boolean',
      readOnly: 'boolean',
      editorType: 'string',
      attributes: 'string',
      displayOrder: 'number',
      createdTime: 'number',
      updatedTime: 'number',
      creator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

