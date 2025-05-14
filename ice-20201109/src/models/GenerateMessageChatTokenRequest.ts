// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateMessageChatTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19de81b3b3d94abda22******
   */
  AIAgentId?: string;
  /**
   * @example
   * 3600
   */
  expire?: number;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
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

