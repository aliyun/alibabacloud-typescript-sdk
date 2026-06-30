// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackageAgentsResponseBodyAgents extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent.
   * 
   * @example
   * agent-abc
   */
  agentId?: string;
  /**
   * @remarks
   * **The creation time of the instance.**
   * 
   * @example
   * 2026-04-01 10:00:00
   */
  createdTime?: string;
  /**
   * @remarks
   * **The ID of the active credit package instance.**
   * 
   * @example
   * cp-inst-001
   */
  creditPackageId?: string;
  /**
   * @remarks
   * **The expiration time of the instance.**
   * 
   * @example
   * 2026-10-01 10:00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * jvs-copilot.standard
   */
  instanceType?: string;
  /**
   * @remarks
   * **The total credit.**
   * 
   * @example
   * 2000
   */
  totalCredit?: number;
  /**
   * @remarks
   * **The amount of credit used.**
   * 
   * @example
   * 100
   */
  usedCredit?: number;
  /**
   * @remarks
   * **The alarm threshold, specified as a percentage. Valid values: 0 to 100.**
   * 
   * @example
   * 80
   */
  warnPercent?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      createdTime: 'CreatedTime',
      creditPackageId: 'CreditPackageId',
      expiredTime: 'ExpiredTime',
      instanceType: 'InstanceType',
      totalCredit: 'TotalCredit',
      usedCredit: 'UsedCredit',
      warnPercent: 'WarnPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      createdTime: 'string',
      creditPackageId: 'string',
      expiredTime: 'string',
      instanceType: 'string',
      totalCredit: 'number',
      usedCredit: 'number',
      warnPercent: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreditPackageAgentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of agents.
   */
  agents?: DescribeCreditPackageAgentsResponseBodyAgents[];
  /**
   * @remarks
   * The number of results returned on the current page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this value is empty, all results have been returned.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID. Provide this ID when contacting support.
   * 
   * @example
   * xxxx-xxxx-xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      agents: 'Agents',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agents: { 'type': 'array', 'itemType': DescribeCreditPackageAgentsResponseBodyAgents },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agents)) {
      $dara.Model.validateArray(this.agents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

