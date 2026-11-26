// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluatorSkillsRequest extends $dara.Model {
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
   * The custom evaluator version for which to query the list of skills. If omitted, the latestVersion of the evaluator is used.
   * 
   * @example
   * v2
   */
  evaluatorVersion?: string;
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * eyJuZXh0IjoiMjAifQ==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      evaluatorVersion: 'evaluatorVersion',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      evaluatorVersion: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

