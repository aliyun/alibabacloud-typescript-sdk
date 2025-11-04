// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateMessageChatTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 19de81b3b3d94abda22******
   */
  AIAgentId?: string;
  /**
   * @remarks
   * The validity period. Unit: seconds. Default value: 3600.
   * 
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @remarks
   * The role. A value of admin indicates that the user can perform management operations. This parameter is empty by default.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The ID of the user to sign in. It can be up to 64 characters in length and can contain only letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * YOURUSERID
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      AIAgentId: 'AIAgentId',
      expire: 'Expire',
      role: 'Role',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIAgentId: 'string',
      expire: 'number',
      role: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

