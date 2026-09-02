// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAgentDataSemanticsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * bakehouse_agent
   */
  agentName?: string;
  /**
   * @remarks
   * The SQL example knowledge. If this parameter is specified, the current content is saved. If this parameter is not specified, the existing content is cleared. A maximum of 50 entries are supported, and the maximum size of each knowledge category is 16 KB.
   */
  examplesShrink?: string;
  /**
   * @remarks
   * The data association knowledge. If this parameter is specified, the current content is saved. If this parameter is not specified, the existing content is cleared. A maximum of 100 entries are supported, and the maximum size of each knowledge category is 16 KB.
   */
  joinsShrink?: string;
  /**
   * @remarks
   * The SQL expression knowledge. If this parameter is specified, the current content is saved. If this parameter is not specified, the existing content is cleared. A maximum of 100 entries are supported, and the maximum size of each knowledge category is 16 KB.
   */
  metricsShrink?: string;
  /**
   * @remarks
   * The text knowledge in Markdown format. If this parameter is specified, the current content is saved. If this parameter is not specified, the existing content is cleared. The maximum size of each knowledge category is 16 KB.
   */
  textShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      examplesShrink: 'Examples',
      joinsShrink: 'Joins',
      metricsShrink: 'Metrics',
      textShrink: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      examplesShrink: 'string',
      joinsShrink: 'string',
      metricsShrink: 'string',
      textShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

