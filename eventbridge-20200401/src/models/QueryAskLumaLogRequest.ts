// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAskLumaLogRequest extends $dara.Model {
  /**
   * @example
   * eyJ0cyI6MTcxN...
   */
  after?: string;
  /**
   * @example
   * demo-luma-agent
   */
  agentName?: string;
  /**
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

