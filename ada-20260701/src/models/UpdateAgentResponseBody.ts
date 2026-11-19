// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent_00000000000000000000000000000001
   */
  agentId?: string;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * code-review-agent
   */
  name?: string;
  /**
   * @remarks
   * The request ID, which is used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the agent was successfully updated. A success response always returns `true`. An error response is returned upon failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The time of the most recent update. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1788332700000
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      name: 'Name',
      requestId: 'RequestId',
      success: 'Success',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      name: 'string',
      requestId: 'string',
      success: 'boolean',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

