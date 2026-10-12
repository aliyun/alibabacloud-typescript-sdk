// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMobileAgentTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agt-mobileagent
   */
  agentId?: string;
  /**
   * @remarks
   * The task input.
   * 
   * @example
   * Open DingTalk and reply to the first 5 unread messages
   */
  inputParam?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Auto-reply to DingTalk messages
   */
  name?: string;
  /**
   * @remarks
   * The list of node IDs.
   * 
   * @example
   * cpn-csbdhjcbvfd****
   */
  nodeIds?: string;
  /**
   * @remarks
   * The session ID. Tasks with the same session ID share the same context.
   * 
   * @example
   * ses-261005-6ekkb1m9ls00
   */
  sessionId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * mobile_use_agent
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      inputParam: 'InputParam',
      name: 'Name',
      nodeIds: 'NodeIds',
      sessionId: 'SessionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      inputParam: 'string',
      name: 'string',
      nodeIds: 'string',
      sessionId: 'string',
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

