// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateAclsWithListenerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   */
  aclIds?: string[];
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 64ADAB1E-0B7F-4FD8-A404-3BECC0E9CCFF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: { 'type': 'array', 'itemType': 'string' },
      listenerId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclIds)) {
      $dara.Model.validateArray(this.aclIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

