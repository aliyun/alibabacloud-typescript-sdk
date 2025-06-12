// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketTemplateResponseBodyDataTicketFields extends $dara.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * {}
   */
  attributes?: string;
  /**
   * @example
   * 1717664210000
   */
  createdTime?: number;
  /**
   * @example
   * creator@cccV2-kmz
   */
  creator?: string;
  /**
   * @example
   * string
   */
  dataType?: string;
  description?: string;
  /**
   * @example
   * false
   */
  disabled?: boolean;
  displayName?: string;
  /**
   * @example
   * 1
   */
  displayOrder?: number;
  /**
   * @example
   * textbox
   */
  editorType?: string;
  /**
   * @example
   * 30
   */
  maxLength?: number;
  /**
   * @example
   * 10
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
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * ^
   */
  pattern?: string;
  patternErrorMessage?: string;
  /**
   * @example
   * false
   */
  readOnly?: boolean;
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
   * 1717664210000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      attributes: 'Attributes',
      createdTime: 'CreatedTime',
      creator: 'Creator',
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
      system: 'System',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      array: 'boolean',
      attributes: 'string',
      createdTime: 'number',
      creator: 'string',
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
      system: 'boolean',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

