// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayFeaturesResponseBodyDataItemsDefinitionValueOptions extends $dara.Model {
  /**
   * @remarks
   * The pass parameter key.
   * 
   * @example
   * KEEP_UNCHANGED
   */
  key?: string;
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * 保持不变
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
   * The default value.
   * 
   * @example
   * "true"
   */
  defaultValue?: string;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 作用于请求与响应环节，启用gzip会对请求响应进行压缩，会减少网关流量，增加网关cpu消耗
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
   * The parameter group. Valid values:
   * - Telemetry: observability parameter.
   * - Engine: engine parameter.
   * 
   * @example
   * Engine
   */
  group?: string;
  /**
   * @remarks
   * The input type of the parameter. Valid values:
   * - Trigger: toggle.
   * - Input: input.
   * - SingleSelect: single-select.
   * - MultiSelect: multi-select.
   * 
   * @example
   * Trigger
   */
  inputType?: string;
  /**
   * @remarks
   * The maximum length supported by the parameter value. This is valid only when the value type is string.
   * 
   * @example
   * 64
   */
  maxLength?: number;
  /**
   * @remarks
   * The maximum value supported by the parameter. This is valid only when the value type is int32, int64, or float.
   * 
   * @example
   * 65535
   */
  maxValue?: string;
  /**
   * @remarks
   * The minimum length supported by the parameter value. This is valid only when the value type is string.
   * 
   * @example
   * 8
   */
  minLength?: number;
  /**
   * @remarks
   * The minimum value supported by the parameter. This is valid only when the value type is int32, int64, or float.
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
   * The regular expression that the parameter value must match. This is valid only when the parameter value type is string.
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
   * The type supported by the parameter value. Valid values:
   * - bool: Boolean.
   * - string: String.
   * - int32: Integer.
   * - int64: Long integer.
   * - json: JSON format.
   * - array: JSON array format.
   * - float: Float.
   * 
   * @example
   * bool
   */
  valueType?: string;
  /**
   * @remarks
   * The unit.
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
   * The list of parameter settings.
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
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListGatewayFeaturesResponseBodyData;
  /**
   * @remarks
   * The response message.
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

