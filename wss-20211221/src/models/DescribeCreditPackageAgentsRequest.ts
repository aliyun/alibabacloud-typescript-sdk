// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackageAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * An array of agent IDs to query. Example: `["agent-1","agent-2"]`.
   */
  agentIds?: string[];
  /**
   * @remarks
   * The agent type. Valid values: `CREDIT_PACKAGE`, `JVS_CLAW`, `OPEN_CLAW`, and `JVS_COPILOT`.
   * 
   * @example
   * JVS_COPILOT
   */
  agentType?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * BUSINESS
   */
  bizType?: string;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. Obtain this value from the `NextToken` parameter of the previous response. For the first request, set this parameter to an empty string.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      agentType: 'AgentType',
      bizType: 'BizType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'string' },
      agentType: 'string',
      bizType: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

