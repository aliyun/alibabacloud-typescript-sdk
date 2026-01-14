// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAclAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * nacl-hp34s2h0xx1ht4nwo****
   */
  aclId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64ADAB1E-0B7F-4FD8-A404-3BECC0E9CCFF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
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

