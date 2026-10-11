// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEgressProxyRuleGroupsResponseBodyEgressProxyRuleGroupsTags extends $dara.Model {
  /**
   * @example
   * epg
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEgressProxyRuleGroupsResponseBodyEgressProxyRuleGroups extends $dara.Model {
  /**
   * @example
   * 2026-08-06T03:18:12Z
   */
  createTime?: string;
  /**
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @example
   * eppool-2ze06f6a9a2067ae****
   */
  egressProxyIpPoolId?: string;
  /**
   * @example
   * eprg-uf60966a9633667c****
   */
  egressProxyRuleGroupId?: string;
  /**
   * @example
   * testEpg
   */
  egressProxyRuleGroupName?: string;
  /**
   * @example
   * rg-acfmwj4y6s7***
   */
  resourceGroupId?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  tags?: ListEgressProxyRuleGroupsResponseBodyEgressProxyRuleGroupsTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
      egressProxyRuleGroupId: 'EgressProxyRuleGroupId',
      egressProxyRuleGroupName: 'EgressProxyRuleGroupName',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      egressProxyIpPoolId: 'string',
      egressProxyRuleGroupId: 'string',
      egressProxyRuleGroupName: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListEgressProxyRuleGroupsResponseBodyEgressProxyRuleGroupsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEgressProxyRuleGroupsResponseBody extends $dara.Model {
  egressProxyRuleGroups?: ListEgressProxyRuleGroupsResponseBodyEgressProxyRuleGroups[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 01A05AB5-5BED-56ED-8EE9-304FBC2F8537
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      egressProxyRuleGroups: 'EgressProxyRuleGroups',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRuleGroups: { 'type': 'array', 'itemType': ListEgressProxyRuleGroupsResponseBodyEgressProxyRuleGroups },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyRuleGroups)) {
      $dara.Model.validateArray(this.egressProxyRuleGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

