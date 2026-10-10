// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchemaRequestProperties extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the field is an array.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * The extended attributes.
   * 
   * @example
   * {\\"Clusters\\": {\\"Description\\": \\"The list of clusters.\\"}, \\"ClusterIds\\": {\\"Description\\": \\"The list of cluster IDs.\\"}}
   */
  attributes?: string;
  /**
   * @remarks
   * The data type.
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the field is disabled.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The display name of the agent.
   * 
   * @example
   * Display name
   */
  displayName?: string;
  /**
   * @remarks
   * The display order in the list.
   * 
   * @example
   * 2
   */
  displayOrder?: number;
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
   * The maximum length.
   * 
   * @example
   * 100
   */
  maxLength?: number;
  /**
   * @remarks
   * The maximum numeric value.
   * 
   * @example
   * 1
   */
  maximum?: number;
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
   * The minimum numeric value.
   * 
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The regular expression validation rule.
   * 
   * @example
   * *
   */
  pattern?: string;
  /**
   * @remarks
   * The error message for regular expression validation.
   * 
   * @example
   * Invalid format
   */
  patternErrorMessage?: string;
  /**
   * @remarks
   * Specifies whether the field is read-only.
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  /**
   * @remarks
   * Specifies whether the field is required.
   * 
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

export class CreateSchemaRequest extends $dara.Model {
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
   * schema id
   * 
   * @example
   * profile
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b0eb2742-f37e-4c67-82d4-25c651c1c450
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of properties.
   */
  properties?: CreateSchemaRequestProperties[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BEEA660-A45A-45E3-98CC-AFC65E715C23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      properties: 'Properties',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      instanceId: 'string',
      properties: { 'type': 'array', 'itemType': CreateSchemaRequestProperties },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

