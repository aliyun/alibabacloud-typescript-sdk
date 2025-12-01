// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceLinkedRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Whether the service-linked role permission is granted:
   * - true: Granted.
   * - false: Not granted.
   * 
   * @example
   * true
   */
  entityRoleGrant?: boolean;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 02F8BBF3-2D61-5982-8911-EEB387BE3AF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityRoleGrant: 'EntityRoleGrant',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityRoleGrant: 'boolean',
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

