// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRenderingInstanceConfigurationRequestConfiguration extends $dara.Model {
  attributeNames?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * location
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      attributeNames: 'AttributeNames',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeNames: { 'type': 'array', 'itemType': 'string' },
      moduleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeNames)) {
      $dara.Model.validateArray(this.attributeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRenderingInstanceConfigurationRequest extends $dara.Model {
  configuration?: DeleteRenderingInstanceConfigurationRequestConfiguration[];
  /**
   * @remarks
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
      configuration: { 'type': 'array', 'itemType': DeleteRenderingInstanceConfigurationRequestConfiguration },
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

