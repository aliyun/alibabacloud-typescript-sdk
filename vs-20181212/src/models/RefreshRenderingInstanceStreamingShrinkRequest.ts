// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshRenderingInstanceStreamingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client information.
   */
  clientInfoShrink?: string;
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
      clientInfoShrink: 'ClientInfo',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfoShrink: 'string',
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

