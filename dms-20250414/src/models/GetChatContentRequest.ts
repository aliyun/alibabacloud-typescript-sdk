// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatContentRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID. This parameter is required.
   * 
   * @example
   * xxxx-xxxx-xxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The backend will return output starting from this checkpoint.
   * 
   * @example
   * 0
   */
  checkpoint?: string;
  /**
   * @remarks
   * The current DMS unit. Chinese mainland users of Alibaba Cloud should use cn-hangzhou by default.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The session ID. This parameter is required.
   * 
   * @example
   * sess_12345
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      checkpoint: 'Checkpoint',
      DMSUnit: 'DMSUnit',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      checkpoint: 'string',
      DMSUnit: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

