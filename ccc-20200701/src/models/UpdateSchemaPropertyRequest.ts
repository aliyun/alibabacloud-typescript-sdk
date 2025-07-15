// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSchemaPropertyRequestProperty extends $dara.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * {\\"instanceId\\":\\"4cc3f160-ca64-49ff-bc70-390a044a4e83\\",\\"appId\\":\\"1684145288664\\",\\"commodityCode\\":\\"dide_pre\\",\\"dide_pre_set\\":\\"version_ent\\"}
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
   * true
   */
  disabled?: boolean;
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
   * 11
   */
  maximum?: number;
  /**
   * @example
   * 1
   */
  minLength?: number;
  /**
   * @example
   * 10800
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
   * (.*)
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

export class UpdateSchemaPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b0eb2742-f37e-4c67-82d4-25c651c1xxxx
   */
  instanceId?: string;
  property?: UpdateSchemaPropertyRequestProperty;
  /**
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

