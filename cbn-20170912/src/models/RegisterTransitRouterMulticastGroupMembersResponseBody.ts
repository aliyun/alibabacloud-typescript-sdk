// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterTransitRouterMulticastGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EB985B7E-2CF8-5EC9-A7DB-F7C82ABD3ACE
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

