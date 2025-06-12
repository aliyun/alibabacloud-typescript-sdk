// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSchemaPropertyRequestProperty extends $dara.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  attributes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @example
   * -
   */
  description?: string;
  /**
   * @example
   * False
   */
  disabled?: boolean;
  /**
   * @example
   * name
   */
  displayName?: string;
  /**
   * @example
   * 10
   */
  displayOrder?: number;
  /**
   * @example
   * textbox
   */
  editorType?: string;
  /**
   * @example
   * 100
   */
  maxLength?: number;
  /**
   * @example
   * 1
   */
  maximum?: number;
  /**
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * *
   */
  pattern?: string;
  patternErrorMessage?: string;
  /**
   * @example
   * true
   */
  readOnly?: boolean;
  /**
   * @example
   * false
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      attributes: 'Attributes',
      dataType: 'DataType',
      description: 'Description',
      disabled: 'Disabled',
      displayName: 'DisplayName',
      displayOrder: 'DisplayOrder',
      editorType: 'EditorType',
      maxLength: 'MaxLength',
      maximum: 'Maximum',
      minLength: 'MinLength',
      minimum: 'Minimum',
      name: 'Name',
      pattern: 'Pattern',
      patternErrorMessage: 'PatternErrorMessage',
      readOnly: 'ReadOnly',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      array: 'boolean',
      attributes: 'string',
      dataType: 'string',
      description: 'string',
      disabled: 'boolean',
      displayName: 'string',
      displayOrder: 'number',
      editorType: 'string',
      maxLength: 'number',
      maximum: 'number',
      minLength: 'number',
      minimum: 'number',
      name: 'string',
      pattern: 'string',
      patternErrorMessage: 'string',
      readOnly: 'boolean',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

