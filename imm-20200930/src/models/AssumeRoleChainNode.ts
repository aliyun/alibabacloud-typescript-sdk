// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleChainNode extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1023210024677934
   */
  ownerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-role
   */
  role?: string;
  /**
   * @remarks
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

