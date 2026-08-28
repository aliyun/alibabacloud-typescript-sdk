// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasAgentSSERequest extends $dara.Model {
  /**
   * @remarks
   * Optional. By default, the default agent is used. You can also specify an agent that was generated after enabling the DAS Agent service or an agent that you manually created.
   * 
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * Deprecated parameter. The instance ID is passed through the Query field.
   * 
   * @example
   * rm-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The natural language description for the query.
   * 
   * This parameter is required.
   * 
   * @example
   * Are there any issues or abnormalities with my instance rm-xxx?
   */
  query?: string;
  /**
   * @remarks
   * Optional. The session ID in UUID string format. If not specified, a new session is created. To maintain context across conversations, use the same session ID.
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

