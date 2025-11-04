// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasAgentSSERequest extends $dara.Model {
  /**
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @example
   * rm-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Are there any issues or abnormalities with my instance rm-xxx?
   */
  query?: string;
  /**
   * @example
   * xxx-xxx-xxx
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

