// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopChatRequest extends $dara.Model {
  /**
   * @remarks
   * Set this parameter to V2 to route to the ROS Agent V2 backend.
   * 
   * @example
   * V2
   */
  agentVersion?: string;
  /**
   * @remarks
   * The ID of the session to stop. The operation verifies that the session belongs to the current user.
   * 
   * @example
   * 7f4e2a8c6d9b4a1f8e3c5b7d2a6f9012
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
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

