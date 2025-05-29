// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefreshRenderingInstanceStreamingRequestClientInfo } from "./RefreshRenderingInstanceStreamingRequestClientInfo";


export class RefreshRenderingInstanceStreamingRequest extends $dara.Model {
  clientInfo?: RefreshRenderingInstanceStreamingRequestClientInfo;
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
      clientInfo: 'ClientInfo',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfo: RefreshRenderingInstanceStreamingRequestClientInfo,
      renderingInstanceId: 'string',
    };
  }

  validate() {
    if(this.clientInfo && typeof (this.clientInfo as any).validate === 'function') {
      (this.clientInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

