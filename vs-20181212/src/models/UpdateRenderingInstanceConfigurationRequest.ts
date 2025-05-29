// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRenderingInstanceConfigurationRequestConfiguration } from "./UpdateRenderingInstanceConfigurationRequestConfiguration";


export class UpdateRenderingInstanceConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configuration?: UpdateRenderingInstanceConfigurationRequestConfiguration[];
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

