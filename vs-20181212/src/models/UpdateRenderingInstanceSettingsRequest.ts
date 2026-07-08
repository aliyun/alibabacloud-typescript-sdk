// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRenderingInstanceSettingsRequestSettings extends $dara.Model {
  /**
   * @remarks
   * Name of the instance setting.
   * 
   * @example
   * navbar.hide
   */
  attributeName?: string;
  /**
   * @remarks
   * Value of the instance setting.
   * 
   * @example
   * 1
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRenderingInstanceSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the cloud application service instance.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * List of instance settings.
   */
  settings?: UpdateRenderingInstanceSettingsRequestSettings[];
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
      settings: { 'type': 'array', 'itemType': UpdateRenderingInstanceSettingsRequestSettings },
    };
  }

  validate() {
    if(Array.isArray(this.settings)) {
      $dara.Model.validateArray(this.settings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

