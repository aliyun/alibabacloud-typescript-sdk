// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes extends $dara.Model {
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * lon
   */
  name?: string;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * 100
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class DescribeRenderingInstanceConfigurationResponseBodyConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of attributes for the module.
   */
  attributes?: DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes[];
  /**
   * @remarks
   * The name of the real-device simulation feature module. Valid values:
   * - ctl: Control module.
   * - prop: Attribute module.
   * - location: Location module.
   * - battery: Battery module.
   * - network: Network module.
   * - bluetooth: Bluetooth module.
   * - sim: SIM card module.
   * - display: Device module.
   * - system: Basic module.
   * 
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRenderingInstanceConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   */
  configuration?: DescribeRenderingInstanceConfigurationResponseBodyConfiguration[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': DescribeRenderingInstanceConfigurationResponseBodyConfiguration },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

