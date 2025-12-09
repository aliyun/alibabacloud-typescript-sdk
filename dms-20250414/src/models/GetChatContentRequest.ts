// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatContentRequest extends $dara.Model {
  /**
   * @example
   * xxxx-xxxx-xxxx
   */
  agentId?: string;
  /**
   * @example
   * 0
   */
  checkpoint?: string;
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
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

