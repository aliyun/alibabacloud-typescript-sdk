// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIPv6TranslatorAclListEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL entry.
   * 
   * @example
   * ipv6transaclentry-bp105jrs****
   */
  aclEntryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B2F5262-6B57-43F2-defr345
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryId: 'AclEntryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryId: 'string',
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

