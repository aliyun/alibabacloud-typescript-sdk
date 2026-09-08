// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSchemaPropertiesValue extends $dara.Model {
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * name
   */
  displayName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * -
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
   * The regular expression.
   * 
   * @example
   * *
   */
  pattern?: string;
  /**
   * @remarks
   * The error message for the regular expression.
   * 
   * @example
   * 格式错误
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
   * 1
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
   * 1
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
   * The editor type.
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
   * 2020-10-14T09:53:53Z
   */
  createdTime?: number;
  /**
   * @remarks
   * The time when the field was last updated.
   * 
   * @example
   * 2020-10-14T09:53:53Z
   */
  updatedTime?: number;
  /**
   * @remarks
   * The creator.
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

