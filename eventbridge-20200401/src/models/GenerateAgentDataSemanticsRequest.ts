// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAgentDataSemanticsRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name. If no current official version exists or all four knowledge categories are empty, a first-time generation is performed. If at least one knowledge category is non-empty, only Text is regenerated while existing Metrics, Joins, and Examples are retained. The caller cannot specify the generation mode.
   * 
   * This parameter is required.
   * 
   * @example
   * bakehouse_agent
   */
  agentName?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

