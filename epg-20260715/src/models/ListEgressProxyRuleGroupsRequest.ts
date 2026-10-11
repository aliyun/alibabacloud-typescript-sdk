// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEgressProxyRuleGroupsRequestTag extends $dara.Model {
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

export class ListEgressProxyRuleGroupsRequest extends $dara.Model {
  egressProxyRuleGroupIds?: string[];
  egressProxyRuleGroupNames?: string[];
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
   * rg-acfmwk2r5tq****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 0
   */
  skip?: number;
  /**
   * @example
   * Available
   */
  status?: string;
  tag?: ListEgressProxyRuleGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      egressProxyRuleGroupIds: 'EgressProxyRuleGroupIds',
      egressProxyRuleGroupNames: 'EgressProxyRuleGroupNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      skip: 'Skip',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyRuleGroupIds: { 'type': 'array', 'itemType': 'string' },
      egressProxyRuleGroupNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      skip: 'number',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListEgressProxyRuleGroupsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.egressProxyRuleGroupIds)) {
      $dara.Model.validateArray(this.egressProxyRuleGroupIds);
    }
    if(Array.isArray(this.egressProxyRuleGroupNames)) {
      $dara.Model.validateArray(this.egressProxyRuleGroupNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

