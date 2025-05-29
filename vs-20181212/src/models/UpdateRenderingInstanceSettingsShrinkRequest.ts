// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRenderingInstanceSettingsShrinkRequest extends $dara.Model {
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  settingsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      renderingInstanceId: 'RenderingInstanceId',
      settingsShrink: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renderingInstanceId: 'string',
      settingsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

