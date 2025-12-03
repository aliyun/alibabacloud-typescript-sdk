// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListenersListener extends $dara.Model {
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The listener protocol. Valid values: **tcp**, **udp**, **http**, and **https**.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListeners extends $dara.Model {
  listener?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListenersListener[];
  static names(): { [key: string]: string } {
    return {
      listener: 'Listener',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listener: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListenersListener },
    };
  }

  validate() {
    if(Array.isArray(this.listener)) {
      $dara.Model.validateArray(this.listener);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRulesRule extends $dara.Model {
  /**
   * @remarks
   * The requested domain name.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-a3x3pg1yohq3lq****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The request URL.
   * 
   * @example
   * /example
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleId: 'string',
      ruleName: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRules extends $dara.Model {
  rule?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRulesRule[];
  static names(): { [key: string]: string } {
    return {
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rule: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRulesRule },
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects extends $dara.Model {
  /**
   * @remarks
   * The listeners.
   */
  listeners?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListeners;
  /**
   * @remarks
   * The forwarding rules.
   */
  rules?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRules;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsListeners,
      rules: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjectsRules,
    };
  }

  validate() {
    if(this.listeners && typeof (this.listeners as any).validate === 'function') {
      (this.listeners as any).validate();
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTags extends $dara.Model {
  tag?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroupsVServerGroup extends $dara.Model {
  /**
   * @remarks
   * The associated resources.
   */
  associatedObjects?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects;
  /**
   * @remarks
   * The time when the CLB instance was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-08-31T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The number of servers.
   * 
   * This parameter is unavailable by default. To use this parameter, submit a ticket or contact your account manager.
   * 
   * @example
   * 1
   */
  serverCount?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTags;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * rsp-0bfuc*****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * @example
   * Group3
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      associatedObjects: 'AssociatedObjects',
      createTime: 'CreateTime',
      serverCount: 'ServerCount',
      tags: 'Tags',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedObjects: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupAssociatedObjects,
      createTime: 'string',
      serverCount: 'number',
      tags: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroupTags,
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  validate() {
    if(this.associatedObjects && typeof (this.associatedObjects as any).validate === 'function') {
      (this.associatedObjects as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBodyVServerGroups extends $dara.Model {
  VServerGroup?: DescribeVServerGroupsResponseBodyVServerGroupsVServerGroup[];
  static names(): { [key: string]: string } {
    return {
      VServerGroup: 'VServerGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VServerGroup: { 'type': 'array', 'itemType': DescribeVServerGroupsResponseBodyVServerGroupsVServerGroup },
    };
  }

  validate() {
    if(Array.isArray(this.VServerGroup)) {
      $dara.Model.validateArray(this.VServerGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVServerGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C
   */
  requestId?: string;
  /**
   * @remarks
   * The backend servers.
   */
  VServerGroups?: DescribeVServerGroupsResponseBodyVServerGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VServerGroups: 'VServerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VServerGroups: DescribeVServerGroupsResponseBodyVServerGroups,
    };
  }

  validate() {
    if(this.VServerGroups && typeof (this.VServerGroups as any).validate === 'function') {
      (this.VServerGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

