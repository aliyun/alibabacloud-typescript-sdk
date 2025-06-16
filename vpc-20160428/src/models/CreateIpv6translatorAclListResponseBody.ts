// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIPv6TranslatorAclListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * ipv6transacl-bp1de2xxxx
   */
  aclId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B2F5262-6B57-43F2-xxxxx
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

