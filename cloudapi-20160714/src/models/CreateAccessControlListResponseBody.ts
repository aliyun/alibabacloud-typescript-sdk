// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessControlListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ACL ID.
   * 
   * @example
   * acl-bp1uqwgwmkbutnzq2r59z
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
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

