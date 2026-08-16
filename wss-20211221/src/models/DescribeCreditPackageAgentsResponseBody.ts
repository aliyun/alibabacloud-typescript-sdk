// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreditPackageAgentsResponseBodyAgents extends $dara.Model {
  /**
   * @remarks
   * Agent ID
   * 
   * @example
   * agent-abc
   */
  agentId?: string;
  /**
   * @remarks
   * **The instance creation time.**
   * 
   * @example
   * 2026-04-01 10:00:00
   */
  createdTime?: string;
  /**
   * @remarks
   * **The ID of the currently active credit package instance.**
   * 
   * @example
   * cp-inst-001
   */
  creditPackageId?: string;
  /**
   * @remarks
   * **The time when the instance expires.**
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
   * **The total number of credits.**
   * 
   * @example
   * 2000
   */
  totalCredit?: number;
  /**
   * @remarks
   * **The amount of credits used.**
   * 
   * @example
   * 100
   */
  usedCredit?: number;
  /**
   * @remarks
   * **The alert threshold percentage (0–100).**
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
   * The Agent list.
   */
  agents?: DescribeCreditPackageAgentsResponseBodyAgents[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to an empty string for the first request. For subsequent requests, use the `nextToken` value from the previous response.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request trace ID, which is used for troubleshooting.
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

