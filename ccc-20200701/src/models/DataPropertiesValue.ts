// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataPropertiesValue extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * name
   */
  description?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * string
   */
  dataType?: string;
  /**
   * @example
   * ^
   */
  pattern?: string;
  patternErrorMessage?: string;
  /**
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @example
   * 10
   */
  maxLength?: number;
  /**
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @example
   * 10
   */
  maximum?: number;
  /**
   * @example
   * false
   */
  required?: boolean;
  /**
   * @example
   * false
   */
  system?: boolean;
  /**
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @example
   * textbox
   */
  editorType?: string;
  /**
   * @example
   * {}
   */
  attributes?: string;
  /**
   * @example
   * 1
   */
  displayOrder?: number;
  /**
   * @example
   * 2021-07-14 10:48:43.0
   */
  createdTime?: number;
  /**
   * @example
   * 2021-07-14 10:48:43.0
   */
  updatedTime?: number;
  /**
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

