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
   * @example
   * 2026-04-01 10:00:00
   */
  createdTime?: string;
  /**
   * @example
   * cp-inst-001
   */
  creditPackageId?: string;
  /**
   * @example
   * 2026-10-01 10:00:00
   */
  expiredTime?: string;
  /**
   * @example
   * jvs-copilot.standard
   */
  instanceType?: string;
  /**
   * @example
   * 2000
   */
  totalCredit?: number;
  /**
   * @example
   * 100
   */
  usedCredit?: number;
  /**
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
  agents?: DescribeCreditPackageAgentsResponseBodyAgents[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
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

