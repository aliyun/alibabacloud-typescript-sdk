// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayFeaturesResponseBodyDataItemsDefinitionValueOptions extends $dara.Model {
  /**
   * @example
   * KEEP_UNCHANGED
   */
  key?: string;
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
   * @example
   * "true"
   */
  defaultValue?: string;
  description?: string;
  /**
   * @example
   * EnableGzip
   */
  displayName?: string;
  /**
   * @example
   * Engine
   */
  group?: string;
  /**
   * @example
   * Trigger
   */
  inputType?: string;
  /**
   * @example
   * 64
   */
  maxLength?: number;
  /**
   * @example
   * 65535
   */
  maxValue?: string;
  /**
   * @example
   * 8
   */
  minLength?: number;
  /**
   * @example
   * 100
   */
  minValue?: string;
  /**
   * @example
   * enable-gzip
   */
  name?: string;
  /**
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @example
   * [a-z].*
   */
  regex?: string;
  valueOptions?: ListGatewayFeaturesResponseBodyDataItemsDefinitionValueOptions[];
  /**
   * @example
   * bool
   */
  valueType?: string;
  /**
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
  definition?: ListGatewayFeaturesResponseBodyDataItemsDefinition;
  /**
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
   * @example
   * Ok
   */
  code?: string;
  data?: ListGatewayFeaturesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

