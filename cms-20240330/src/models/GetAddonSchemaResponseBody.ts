// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonSchemaResponseBodyFieldsConditions extends $dara.Model {
  /**
   * @example
   * redeploy
   */
  action?: string;
  field?: string;
  op?: string;
  /**
   * @example
   * [{\\"count\\": \\"1\\", \\"max\\": \\"358.106\\", \\"sum\\": \\"358.106\\", \\"ts\\": \\"1755049815000000\\", \\"min\\": \\"358.106\\"}, {\\"count\\": \\"1\\", \\"max\\": \\"326.311\\", \\"sum\\": \\"326.311\\", \\"ts\\": \\"1755049830000000\\", \\"min\\": \\"326.311\\"}]
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
  label?: string;
  /**
   * @example
   * []
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
   * AK
   */
  dataSource?: GetAddonSchemaResponseBodyFieldsPropsDataSource[];
  related?: string[];
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
  max?: number;
  maxLength?: number;
  /**
   * @example
   * ok
   */
  message?: string;
  min?: number;
  minLength?: number;
  regular?: string;
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
  conditions?: GetAddonSchemaResponseBodyFieldsConditions[];
  defaultValue?: any;
  /**
   * @example
   * o11y-demo-cn-heyuan
   */
  description?: string;
  disabled?: boolean;
  element?: string;
  fieldPath?: string;
  label?: string;
  /**
   * @example
   * rum_api_dashboard_explorer_link_metric_set
   */
  name?: string;
  placeholder?: string;
  props?: GetAddonSchemaResponseBodyFieldsProps;
  /**
   * @example
   * xtrace
   */
  type?: string;
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
  fields?: GetAddonSchemaResponseBodyFields[];
  /**
   * @example
   * E5B1D3D4-BB28-5996-8AD2-***********
   */
  requestId?: string;
  /**
   * @example
   * response_time
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

