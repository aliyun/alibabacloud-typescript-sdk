// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRenderingInstanceConfigurationRequestConfigurationAttributes extends $dara.Model {
  /**
   * @remarks
   * The name of the attribute.
   * 
   * This parameter is required.
   * 
   * @example
   * lon
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * This parameter is required.
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

export class UpdateRenderingInstanceConfigurationRequestConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of attributes corresponding to the module.
   * 
   * This parameter is required.
   */
  attributes?: UpdateRenderingInstanceConfigurationRequestConfigurationAttributes[];
  /**
   * @remarks
   * The name of the real-device simulation feature module. Valid values:
   * - ctl: Control module.
   * - prop: Property module.
   * - location: Location module.
   * - battery: Battery module.
   * - network: Network module.
   * - bluetooth: Bluetooth module.
   * - sim: SIM card module.
   * - display: Device module.
   * - system: Basic module.
   * 
   * This parameter is required.
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
      attributes: { 'type': 'array', 'itemType': UpdateRenderingInstanceConfigurationRequestConfigurationAttributes },
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

export class UpdateRenderingInstanceConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration content.
   * 
   * This parameter is required.
   */
  configuration?: UpdateRenderingInstanceConfigurationRequestConfiguration[];
  /**
   * @remarks
   * The instance ID of the cloud application service.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'array', 'itemType': UpdateRenderingInstanceConfigurationRequestConfiguration },
      renderingInstanceId: 'string',
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

