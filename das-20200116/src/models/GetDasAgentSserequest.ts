// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasAgentSSERequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent to use. This parameter is optional. If you do not specify this parameter, the service uses the default agent. You can provide the ID of an agent that was generated when you enabled the DAS Agent service or that you manually created.
   * 
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is deprecated. Specify the instance ID in the Query parameter.
   * 
   * @example
   * rm-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The natural language query for the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * Are there any issues or abnormalities with my instance rm-xxx?
   */
  query?: string;
  /**
   * @remarks
   * The session ID, which must be in the UUID format. This parameter is optional. If you do not provide a session ID, the service creates a new session. To continue an existing conversation, use the same session ID in subsequent requests.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      instanceId: 'InstanceId',
      query: 'Query',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      instanceId: 'string',
      query: 'string',
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

