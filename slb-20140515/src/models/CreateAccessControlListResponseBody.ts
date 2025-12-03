// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessControlListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP version. Valid values: **ipv4** and **ipv6**.
   * 
   * @example
   * acl-rj9xpxzcwxrukois****
   */
  aclId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 988CB45E-1643-48C0-87B4-928DDF77EA49
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

