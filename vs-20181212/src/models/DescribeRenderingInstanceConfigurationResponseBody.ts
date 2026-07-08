// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes extends $dara.Model {
  /**
   * @remarks
   * The name of the attribute.
   * 
   * @example
   * lon
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
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
   * The list of properties for the module.
   */
  attributes?: DescribeRenderingInstanceConfigurationResponseBodyConfigurationAttributes[];
  /**
   * @remarks
   * The name of the device simulation feature module. Valid values:
   * 
   * 1. ctl: The control module.
   * 
   * 2. prop: The property module.
   * 
   * 3. location: The location module.
   * 
   * 4. battery: The battery module.
   * 
   * 5. network: The network module.
   * 
   * 6. bluetooth: The Bluetooth module.
   * 
   * 7. sim: The SIM card module.
   * 
   * 8. display: The device module.
   * 
   * 9. system: The basic module.
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
   * The configuration.
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

