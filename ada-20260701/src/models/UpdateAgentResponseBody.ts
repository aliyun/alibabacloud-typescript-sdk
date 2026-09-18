// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Agent ID。
   * 
   * @example
   * agent_00000000000000000000000000000001
   */
  agentId?: string;
  /**
   * @remarks
   * The Agent name.
   * 
   * @example
   * code-review-agent
   */
  name?: string;
  /**
   * @remarks
   * The request ID, used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the Agent was successfully updated. A successful response always returns `true`. A failure returns an error response.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The most recent update time, as a UNIX timestamp in milliseconds.
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

