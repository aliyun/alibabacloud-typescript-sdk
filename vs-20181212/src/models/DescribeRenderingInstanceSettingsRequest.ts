// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceSettingsRequest extends $dara.Model {
  attributeNames?: string[];
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeNames: 'AttributeNames',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeNames: { 'type': 'array', 'itemType': 'string' },
      renderingInstanceId: 'string',
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

