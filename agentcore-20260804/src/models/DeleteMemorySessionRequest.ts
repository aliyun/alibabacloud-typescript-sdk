// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMemorySessionRequest extends $dara.Model {
  /**
   * @remarks
   * agentId
   * 
   * @example
   * agent-001
   */
  agentId?: string;
  /**
   * @remarks
   * teamId
   * 
   * @example
   * team-001
   */
  teamId?: string;
  /**
   * @remarks
   * userId
   * 
   * @example
   * user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      teamId: 'teamId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      teamId: 'string',
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

