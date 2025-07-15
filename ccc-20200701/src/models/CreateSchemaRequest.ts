// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchemaRequestProperties extends $dara.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * {\\"Clusters\\": {\\"Description\\": \\"The list of clusters.\\"}, \\"ClusterIds\\": {\\"Description\\": \\"The list of cluster IDs.\\"}}
   */
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
   * false
   */
  disabled?: boolean;
  displayName?: string;
  /**
   * @example
   * 2
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

export class CreateSchemaRequest extends $dara.Model {
  /**
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
   * This parameter is required.
   * 
   * @example
   * b0eb2742-f37e-4c67-82d4-25c651c1c450
   */
  instanceId?: string;
  properties?: CreateSchemaRequestProperties[];
  /**
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

