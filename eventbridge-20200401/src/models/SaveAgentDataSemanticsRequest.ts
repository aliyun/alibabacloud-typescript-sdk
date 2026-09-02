// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentDataSemanticsExample } from "./AgentDataSemanticsExample";
import { AgentDataSemanticsJoin } from "./AgentDataSemanticsJoin";
import { AgentDataSemanticsMetric } from "./AgentDataSemanticsMetric";
import { AgentDataSemanticsText } from "./AgentDataSemanticsText";


export class SaveAgentDataSemanticsRequest extends $dara.Model {
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
  examples?: AgentDataSemanticsExample[];
  /**
   * @remarks
   * The data association knowledge. If this parameter is specified, the current content is saved. If this parameter is not specified, the existing content is cleared. A maximum of 100 entries are supported, and the maximum size of each knowledge category is 16 KB.
   */
  joins?: AgentDataSemanticsJoin[];
  /**
   * @remarks
   * The SQL expression knowledge. If this parameter is specified, the current content is saved. If this parameter is not specified, the existing content is cleared. A maximum of 100 entries are supported, and the maximum size of each knowledge category is 16 KB.
   */
  metrics?: AgentDataSemanticsMetric[];
  /**
   * @remarks
   * The text knowledge in Markdown format. If this parameter is specified, the current content is saved. If this parameter is not specified, the existing content is cleared. The maximum size of each knowledge category is 16 KB.
   */
  text?: AgentDataSemanticsText;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      examples: 'Examples',
      joins: 'Joins',
      metrics: 'Metrics',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      examples: { 'type': 'array', 'itemType': AgentDataSemanticsExample },
      joins: { 'type': 'array', 'itemType': AgentDataSemanticsJoin },
      metrics: { 'type': 'array', 'itemType': AgentDataSemanticsMetric },
      text: AgentDataSemanticsText,
    };
  }

  validate() {
    if(Array.isArray(this.examples)) {
      $dara.Model.validateArray(this.examples);
    }
    if(Array.isArray(this.joins)) {
      $dara.Model.validateArray(this.joins);
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(this.text && typeof (this.text as any).validate === 'function') {
      (this.text as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

