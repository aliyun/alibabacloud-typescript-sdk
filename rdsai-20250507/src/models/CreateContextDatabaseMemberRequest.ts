// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseMemberRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  generateInitialKey?: boolean;
  /**
   * @example
   * my-key
   */
  initialKeyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Alice
   */
  memberName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * member
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      generateInitialKey: 'GenerateInitialKey',
      initialKeyName: 'InitialKeyName',
      memberName: 'MemberName',
      role: 'Role',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateInitialKey: 'boolean',
      initialKeyName: 'string',
      memberName: 'string',
      role: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

