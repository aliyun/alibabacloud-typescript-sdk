// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSchemaPropertyRequestProperty extends $dara.Model {
  /**
   * @remarks
   * Is array
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * Extension attributes
   * 
   * @example
   * {\\"newName\\":\\"小桔充电-demo\\",\\"appId\\":\\"69FRKB4193W8BYP0\\"}
   */
  attributes?: string;
  /**
   * @remarks
   * Data type
   * 
   * This parameter is required.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * Is disabled
   * 
   * @example
   * False
   */
  disabled?: boolean;
  /**
   * @remarks
   * Name
   * 
   * @example
   * name
   */
  displayName?: string;
  /**
   * @remarks
   * List display order
   * 
   * @example
   * 10
   */
  displayOrder?: number;
  /**
   * @remarks
   * Editor type
   * 
   * @example
   * textbox
   */
  editorType?: string;
  /**
   * @remarks
   * Maximum length
   * 
   * @example
   * 100
   */
  maxLength?: number;
  /**
   * @remarks
   * Maximum numeric value
   * 
   * @example
   * 1
   */
  maximum?: number;
  /**
   * @remarks
   * Minimum length
   * 
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @remarks
   * Minimum numeric value
   * 
   * @example
   * 1
   */
  minimum?: number;
  /**
   * @remarks
   * Name
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Regular expression validation rule
   * 
   * @example
   * *
   */
  pattern?: string;
  /**
   * @remarks
   * Regular expression validation error message
   * 
   * @example
   * 格式错误
   */
  patternErrorMessage?: string;
  /**
   * @remarks
   * Is read-only
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  /**
   * @remarks
   * Is required
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

export class AddSchemaPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b0eb2742-f37e-4c67-82d4-25c651c1xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Field
   */
  property?: AddSchemaPropertyRequestProperty;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 03C67DAD-EB26-41D8-949D-9B0C470FB716
   */
  requestId?: string;
  /**
   * @remarks
   * schema id
   * 
   * This parameter is required.
   * 
   * @example
   * profile
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      property: 'Property',
      requestId: 'RequestId',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      property: AddSchemaPropertyRequestProperty,
      requestId: 'string',
      schemaId: 'string',
    };
  }

  validate() {
    if(this.property && typeof (this.property as any).validate === 'function') {
      (this.property as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

