// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSchemaPropertyRequestProperty extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the property is an array.
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
   * {\\"instanceId\\":\\"4cc3f160-ca64-49ff-bc70-390a044a4e83\\",\\"appId\\":\\"1684145288664\\",\\"commodityCode\\":\\"dide_pre\\",\\"dide_pre_set\\":\\"version_ent\\"}
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
   * Indicates whether the property is disabled.
   * 
   * @example
   * true
   */
  disabled?: boolean;
  /**
   * @remarks
   * Display name
   * 
   * @example
   * 姓名
   */
  displayName?: string;
  /**
   * @remarks
   * Display order
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
   * Maximum value
   * 
   * @example
   * 11
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
   * Minimum value
   * 
   * @example
   * 10800
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
   * (.*)
   */
  pattern?: string;
  /**
   * @remarks
   * Regular expression validation error message
   * 
   * @example
   * 不是有效的email地址
   */
  patternErrorMessage?: string;
  /**
   * @remarks
   * Read-only
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  /**
   * @remarks
   * Required
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

export class UpdateSchemaPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
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
  property?: UpdateSchemaPropertyRequestProperty;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * BC976D32-AC4C-4E0F-8AA9-F4BC6C4E2B3E
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
      property: UpdateSchemaPropertyRequestProperty,
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

