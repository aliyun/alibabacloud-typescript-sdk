// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRenderingInstanceSettingsShrinkRequest extends $dara.Model {
  attributeNamesShrink?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeNamesShrink: 'AttributeNames',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeNamesShrink: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

