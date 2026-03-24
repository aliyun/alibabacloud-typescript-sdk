// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonSchemaResponseBodyFieldsConditions extends $dara.Model {
  /**
   * @remarks
   * The control mode of the field.
   * 
   * @example
   * show
   */
  action?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * store.storageTarget
   */
  field?: string;
  /**
   * @remarks
   * The operator for the condition.
   * 
   * @example
   * ==
   */
  op?: string;
  /**
   * @remarks
   * The target value for the condition.
   * 
   * @example
   * Custom
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      field: 'field',
      op: 'op',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      field: 'string',
      op: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonSchemaResponseBodyFieldsPropsDataSource extends $dara.Model {
  /**
   * @remarks
   * The label.
   * 
   * @example
   * tagKey
   */
  label?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * tagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonSchemaResponseBodyFieldsProps extends $dara.Model {
  /**
   * @remarks
   * The information about the data source.
   */
  dataSource?: GetAddonSchemaResponseBodyFieldsPropsDataSource[];
  /**
   * @remarks
   * A collection of related data.
   */
  related?: string[];
  /**
   * @remarks
   * The mode.
   * 
   * @example
   * single
   */
  selectMode?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'dataSource',
      related: 'related',
      selectMode: 'selectMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: { 'type': 'array', 'itemType': GetAddonSchemaResponseBodyFieldsPropsDataSource },
      related: { 'type': 'array', 'itemType': 'string' },
      selectMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSource)) {
      $dara.Model.validateArray(this.dataSource);
    }
    if(Array.isArray(this.related)) {
      $dara.Model.validateArray(this.related);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonSchemaResponseBodyFieldsValidation extends $dara.Model {
  /**
   * @remarks
   * The maximum value. The value is inclusive.
   * 
   * @example
   * 2000
   */
  max?: number;
  /**
   * @remarks
   * The maximum length that is supported by the text control.
   * 
   * @example
   * 100
   */
  maxLength?: number;
  /**
   * @remarks
   * The details.
   * 
   * @example
   * length limit
   */
  message?: string;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 0
   */
  min?: number;
  /**
   * @remarks
   * The minimum length.
   * 
   * @example
   * 16
   */
  minLength?: number;
  /**
   * @remarks
   * The regular expression.
   * 
   * @example
   * ^(http|https)://
   */
  regular?: string;
  /**
   * @remarks
   * Specifies whether the parameter is required.
   * 
   * @example
   * false
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      max: 'max',
      maxLength: 'maxLength',
      message: 'message',
      min: 'min',
      minLength: 'minLength',
      regular: 'regular',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      maxLength: 'number',
      message: 'string',
      min: 'number',
      minLength: 'number',
      regular: 'string',
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

export class GetAddonSchemaResponseBodyFields extends $dara.Model {
  /**
   * @remarks
   * A list of display conditions.
   */
  conditions?: GetAddonSchemaResponseBodyFieldsConditions[];
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * mysql.default
   */
  defaultValue?: any;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * MySQL datasource
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the field is hidden. Valid values: \\`true\\` (hidden) and \\`false\\` (displayed).
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The type of the element.
   * 
   * @example
   * input
   */
  element?: string;
  /**
   * @remarks
   * The path of the field.
   * 
   * @example
   * mysql.host
   */
  fieldPath?: string;
  /**
   * @remarks
   * The display name of the field.
   * 
   * @example
   * mysql
   */
  label?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * host
   */
  name?: string;
  /**
   * @remarks
   * The placeholder text.
   * 
   * @example
   * Please enter the metrics collection interval
   */
  placeholder?: string;
  /**
   * @remarks
   * Other properties of the component.
   */
  props?: GetAddonSchemaResponseBodyFieldsProps;
  /**
   * @remarks
   * The type of the field.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The validation rule for the field.
   */
  validation?: GetAddonSchemaResponseBodyFieldsValidation;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      defaultValue: 'defaultValue',
      description: 'description',
      disabled: 'disabled',
      element: 'element',
      fieldPath: 'fieldPath',
      label: 'label',
      name: 'name',
      placeholder: 'placeholder',
      props: 'props',
      type: 'type',
      validation: 'validation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': GetAddonSchemaResponseBodyFieldsConditions },
      defaultValue: 'any',
      description: 'string',
      disabled: 'boolean',
      element: 'string',
      fieldPath: 'string',
      label: 'string',
      name: 'string',
      placeholder: 'string',
      props: GetAddonSchemaResponseBodyFieldsProps,
      type: 'string',
      validation: GetAddonSchemaResponseBodyFieldsValidation,
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.props && typeof (this.props as any).validate === 'function') {
      (this.props as any).validate();
    }
    if(this.validation && typeof (this.validation as any).validate === 'function') {
      (this.validation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of data table fields.
   */
  fields?: GetAddonSchemaResponseBodyFields[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5B1D3D4-BB28-5996-8AD2-***********
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the schema.
   * 
   * @example
   * common
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': GetAddonSchemaResponseBodyFields },
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

