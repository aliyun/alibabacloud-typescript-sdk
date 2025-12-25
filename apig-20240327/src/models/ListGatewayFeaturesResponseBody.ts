// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayFeaturesResponseBodyDataItemsDefinitionValueOptions extends $dara.Model {
  /**
   * @remarks
   * The key to pass the parameter.
   * 
   * @example
   * KEEP_UNCHANGED
   */
  key?: string;
  /**
   * @remarks
   * The display value.
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      label: 'label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayFeaturesResponseBodyDataItemsDefinition extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * "true"
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the parameter.
   * 
   * @example
   * EnableGzip
   */
  displayName?: string;
  /**
   * @remarks
   * The parameter group to which the parameter belongs. Valid values:
   * 
   * *   Telemetry: an observability parameter
   * *   Engine: an engine parameter
   * 
   * @example
   * Engine
   */
  group?: string;
  /**
   * @remarks
   * The input type of the parameter. Valid values:
   * 
   * *   Trigger
   * *   Input
   * *   SingleSelect
   * *   MultiSelect
   * 
   * @example
   * Trigger
   */
  inputType?: string;
  /**
   * @remarks
   * The maximum length of the value. This parameter is valid when the value type is string.
   * 
   * @example
   * 64
   */
  maxLength?: number;
  /**
   * @remarks
   * The maximum value of the parameter. This parameter is valid when the value type is int32, int64, or float.
   * 
   * @example
   * 65535
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum length of the value. This parameter is valid when the value type is string.
   * 
   * @example
   * 8
   */
  minLength?: number;
  /**
   * @remarks
   * The minimum value of the parameter. This parameter is valid when the value type is int32, int64, or float.
   * 
   * @example
   * 100
   */
  minValue?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * enable-gzip
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is read-only.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The regular expression that the parameter value must fulfill. This parameter is valid when the value type is string.
   * 
   * @example
   * [a-z].*
   */
  regex?: string;
  /**
   * @remarks
   * The list of options supported by the parameter value.
   */
  valueOptions?: ListGatewayFeaturesResponseBodyDataItemsDefinitionValueOptions[];
  /**
   * @remarks
   * The value type of the parameter. Valid values:
   * 
   * *   bool: boolean
   * *   string
   * *   int32: integer
   * *   int64: long integer
   * *   json
   * *   array: JSON array
   * *   float: floating point
   * 
   * @example
   * bool
   */
  valueType?: string;
  /**
   * @remarks
   * The value unit.
   * 
   * @example
   * byte
   */
  valueUnit?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      description: 'description',
      displayName: 'displayName',
      group: 'group',
      inputType: 'inputType',
      maxLength: 'maxLength',
      maxValue: 'maxValue',
      minLength: 'minLength',
      minValue: 'minValue',
      name: 'name',
      readOnly: 'readOnly',
      regex: 'regex',
      valueOptions: 'valueOptions',
      valueType: 'valueType',
      valueUnit: 'valueUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      displayName: 'string',
      group: 'string',
      inputType: 'string',
      maxLength: 'number',
      maxValue: 'string',
      minLength: 'number',
      minValue: 'string',
      name: 'string',
      readOnly: 'boolean',
      regex: 'string',
      valueOptions: { 'type': 'array', 'itemType': ListGatewayFeaturesResponseBodyDataItemsDefinitionValueOptions },
      valueType: 'string',
      valueUnit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.valueOptions)) {
      $dara.Model.validateArray(this.valueOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayFeaturesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The parameter definition.
   */
  definition?: ListGatewayFeaturesResponseBodyDataItemsDefinition;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * "true"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      definition: 'definition',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definition: ListGatewayFeaturesResponseBodyDataItemsDefinition,
      value: 'string',
    };
  }

  validate() {
    if(this.definition && typeof (this.definition as any).validate === 'function') {
      (this.definition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayFeaturesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of parameter configurations.
   */
  items?: ListGatewayFeaturesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListGatewayFeaturesResponseBodyDataItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayFeaturesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListGatewayFeaturesResponseBodyData;
  /**
   * @remarks
   * The response message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListGatewayFeaturesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

