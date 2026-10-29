// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAskLumaLogRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor, which is the message ID of the last record on the previous page.
   * 
   * @example
   * eyJ0cyI6MTcxN...
   */
  after?: string;
  /**
   * @remarks
   * The name of the agent. If this parameter is not specified, all agents are queried.
   * 
   * @example
   * demo-luma-agent
   */
  agentName?: string;
  /**
   * @remarks
   * The number of entries to return. Default value: 20. Maximum value: 50.
   * 
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      agentName: 'AgentName',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      agentName: 'string',
      limit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

