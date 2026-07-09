// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluatorsRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name.
   * 
   * This parameter is required.
   * 
   * @example
   * prod-agentspace
   */
  agentSpace?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The fuzzy match condition for the evaluator name.
   * 
   * @example
   * trace_task_completion
   */
  name?: string;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eyJsYXN0SWQiOjEyM30=
   */
  nextToken?: string;
  /**
   * @remarks
   * The evaluator source filter.
   * 
   * @example
   * custom
   */
  source?: string;
  /**
   * @remarks
   * The evaluator type filter.
   * 
   * @example
   * AGENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      source: 'source',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      source: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

