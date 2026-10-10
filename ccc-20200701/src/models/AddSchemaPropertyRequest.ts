// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSchemaPropertyRequestProperty extends $dara.Model {
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
   * The extended attributes.
   * 
   * @example
   * {"newName":"Xiaoju Charging-demo","appId":"69FRKB4193W8BYP0"}
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
   * The description.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the property is disabled.
   * 
   * @example
   * False
   */
  disabled?: boolean;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * name
   */
  displayName?: string;
  /**
   * @remarks
   * The display order in the list.
   * 
   * @example
   * 10
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
   * The display name.
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
   * Specifies whether the property is read-only.
   * 
   * @example
   * true
   */
  readOnly?: boolean;
  /**
   * @remarks
   * Specifies whether the property is required.
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
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b0eb2742-f37e-4c67-82d4-25c651c1xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The property.
   */
  property?: AddSchemaPropertyRequestProperty;
  /**
   * @remarks
   * The request ID.
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

