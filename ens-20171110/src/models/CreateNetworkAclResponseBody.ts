// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkAclResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * @example
   * nacl-5p1fg655nh68xyz9i****
   */
  networkAclId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAclId: 'NetworkAclId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAclId: 'string',
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

