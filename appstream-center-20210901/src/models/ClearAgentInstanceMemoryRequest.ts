// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearAgentInstanceMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent instance whose memory you want to clear. This parameter is required and can be obtained from the response of ListAgentInstanceMemory.
   * 
   * @example
   * agi-08vm****
   */
  agentInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentInstanceId: 'AgentInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

