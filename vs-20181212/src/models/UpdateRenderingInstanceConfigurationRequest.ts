// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRenderingInstanceConfigurationRequestConfigurationAttributes extends $dara.Model {
  /**
   * @remarks
   * The name of the property.
   * 
   * This parameter is required.
   * 
   * @example
   * lon
   */
  name?: string;
  /**
   * @remarks
   * The value of the property.
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
   * The list of properties for the module.
   * 
   * This parameter is required.
   */
  attributes?: UpdateRenderingInstanceConfigurationRequestConfigurationAttributes[];
  /**
   * @remarks
   * The name of the real device simulation module. Valid values include the following:
   * 
   * 1. ctl: control module
   * 
   * 2. prop: property module
   * 
   * 3. location: location module
   * 
   * 4. battery: battery module
   * 
   * 5. network: network module
   * 
   * 6. bluetooth: bluetooth module
   * 
   * 7. sim: SIM card module
   * 
   * 8. display: device module
   * 
   * 9. system: basic module
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
   * The ID of the cloud application service instance.
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

