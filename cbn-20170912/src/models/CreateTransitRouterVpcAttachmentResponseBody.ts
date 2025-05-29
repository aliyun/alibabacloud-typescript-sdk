// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterVpcAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C087A369-82B9-43EF-91F4-4B63A9C6E6B6
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VPC connection.
   * 
   * @example
   * tr-attach-ia340z7xis7t5s****
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

