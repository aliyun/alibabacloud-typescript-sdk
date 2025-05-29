// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterVpnAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8B5DD40A-3A29-5AC0-B8DA-05FD10D5C893
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VPN attachment.
   * 
   * @example
   * tr-attach-y5dup2qwfyh9lu****
   */
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

