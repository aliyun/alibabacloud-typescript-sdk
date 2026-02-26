// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleChainNode extends $dara.Model {
  /**
   * @remarks
   * The UID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * 10232100********
   */
  ownerId?: string;
  /**
   * @remarks
   * The role.
   * 
   * This parameter is required.
   * 
   * @example
   * test-role
   */
  role?: string;
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * *   user: Alibaba Cloud account.
   * *   service: Alibaba Cloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      role: 'Role',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      role: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

