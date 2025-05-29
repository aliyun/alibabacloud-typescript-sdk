// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeregisterTransitRouterMulticastGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61D0A553-5E4E-53B5-9DA3-01CBA076A286
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

