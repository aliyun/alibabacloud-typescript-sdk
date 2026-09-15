// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name. The name must be unique within the same tenant. Maximum length: 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * order-analysis-agent
   */
  agentName?: string;
  /**
   * @remarks
   * The permission inheritance type of the agent, which specifies the permission source. Default value: HUMAN_BOUND.
   * 
   * @example
   * HUMAN_BOUND
   */
  agentType?: string;
  /**
   * @remarks
   * The description of the agent. Maximum length: 512 characters.
   * 
   * @example
   * An agent for querying and analyzing order data
   */
  description?: string;
  /**
   * @remarks
   * The validity period of the automatically issued API key, in seconds. Valid values: 1 to 31536000 (up to 1 year).
   * 
   * @example
   * 2592000
   */
  expireAfterSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      agentType: 'AgentType',
      description: 'Description',
      expireAfterSeconds: 'ExpireAfterSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      agentType: 'string',
      description: 'string',
      expireAfterSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

