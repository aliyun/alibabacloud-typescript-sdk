// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The endpoint group ID.
   * 
   * >  GA instances created after July 12, 2022 support all forwarding condition types and action types. We recommend that you query forwarding conditions and actions by calling the **RuleActionType** and **RuleActionValue** operations.
   * 
   * @example
   * epg-bp1enpdcrqhl78g6r****
   */
  endpointGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoint groups.
   * 
   * >  GA instances created after July 12, 2022 support all forwarding condition types and action types. We recommend that you query forwarding conditions and actions by calling the **RuleActionType** and **RuleActionValue** operations.
   */
  serverGroupTuples?: ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  validate() {
    if(Array.isArray(this.serverGroupTuples)) {
      $dara.Model.validateArray(this.serverGroupTuples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleActions extends $dara.Model {
  /**
   * @remarks
   * The forwarding action configuration.
   * 
   * >  GA instances created after July 12, 2022 support all forwarding condition types and action types. We recommend that you query forwarding conditions and actions by calling the **RuleActionType** and **RuleActionValue** operations.
   */
  forwardGroupConfig?: ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The forwarding priority.
   * 
   * >  This parameter does not take effect.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The type of the forwarding action. Valid values:
   * 
   * *   **ForwardGroup**: forwards a request.
   * *   **Redirect**: redirects a request.
   * *   **FixResponse**: returns a fixed response.
   * *   **Rewrite**: rewrites a request.
   * *   **AddHeader**: adds a header to a request.
   * *   **RemoveHeaderConfig**: deletes the header from a request.
   * *   **Drop**: drops a request.
   * 
   * @example
   * ForwardGroup
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The value of the forwarding action.
   * 
   * Different JSON strings are returned based on the value of **RuleActionType**.
   * 
   * *   If you set **RuleActionType** to **ForwardGroup**, the information about a virtual endpoint group is returned. The following section describes the parameters:
   * 
   *     *   `type`: `endpointgroup` is returned.
   *     *   `value`: the ID of the virtual endpoint group.
   * 
   * *   If you set **RuleActionType** to **Redirect**, the redirecting configuration is returned. The following section describes the parameters:
   * 
   *     *   `protocol`: the protocol of requests after the requests are redirected.
   *     *   `domain`: the domain name to which requests are redirected.
   *     *   `port`: the port to which requests are redirected.
   *     *   `path`: the path to which requests are redirected.
   *     *   `query`: the query string of the requests that are redirected.
   *     *   `code`: the redirecting code.
   * 
   * *   If you set **RuleActionType** to **FixResponse**, the information about the fixed response that you configured is returned. The following section describes the parameters:
   * 
   *     *   `code`: the HTTP status code.
   *     *   `type`: the content type of the response.
   *     *   `content`: the content of the response.
   * 
   * *   If **RuleActionType** is set to **AddHeader**, the information about the HTTP header that is added is returned. The following section describes the parameters:
   * 
   *     *   `name`: the name of the HTTP header.
   *     *   `type`: the content type of the HTTP header.
   *     *   `value`: the content of the HTTP header.
   * 
   * *   If you set **RuleActionType** to **RemoveHeader**, the information about the HTTP header that is deleted is returned.
   * 
   * *   If you set **RuleActionType** to **Rewrite**, the rewriting configuration is returned. The following section describes the parameters:
   * 
   *     *   `domain`: the domain name to which requests are redirected.
   *     *   `path`: the path to which requests are redirected.
   *     *   `query`: the query string of the requests that are redirected.
   * 
   * *   If you set **RuleActionType** to **Drop**, an empty string is returned.
   * 
   * @example
   * [{"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}]
   */
  ruleActionValue?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      order: 'Order',
      ruleActionType: 'RuleActionType',
      ruleActionValue: 'RuleActionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: ListForwardingRulesResponseBodyForwardingRulesRuleActionsForwardGroupConfig,
      order: 'number',
      ruleActionType: 'string',
      ruleActionValue: 'string',
    };
  }

  validate() {
    if(this.forwardGroupConfig && typeof (this.forwardGroupConfig as any).validate === 'function') {
      (this.forwardGroupConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleConditionsHostConfig extends $dara.Model {
  /**
   * @remarks
   * The domain name configuration.
   * 
   * >  GA instances created after July 12, 2022 support all forwarding condition types and action types. We recommend that you query forwarding conditions and actions by calling the **RuleActionType** and **RuleActionValue** operations.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleConditionsPathConfig extends $dara.Model {
  /**
   * @remarks
   * The path configuration.
   * 
   * >  GA instances created after July 12, 2022 support all forwarding condition types and action types. We recommend that you query forwarding conditions and actions by calling the **RuleActionType** and **RuleActionValue** operations.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The domain name configuration.
   * 
   * >  GA instances created after July 12, 2022 support all forwarding condition types and action types. We recommend that you query forwarding conditions and actions by calling the **RuleActionType** and **RuleActionValue** operations.
   */
  hostConfig?: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The path configuration.
   * 
   * >  GA instances created after July 12, 2022 support all forwarding condition types and action types. We recommend that you query forwarding conditions and actions by calling the **RuleActionType** and **RuleActionValue** operations.
   */
  pathConfig?: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The type of the forwarding condition. Valid values:
   * 
   * *   **Host:** domain name.
   * *   **Path:** path.
   * *   **RequestHeader:** HTTP header.
   * *   **Query:** query string.
   * *   **Method:** HTTP method.
   * *   **Cookie:** cookie.
   * *   **SourceIP:** source IP address.
   * 
   * @example
   * Host
   */
  ruleConditionType?: string;
  /**
   * @remarks
   * The value of the forwarding condition type.
   * 
   * Different JSON strings are returned based on the value of the **RuleConditionType** parameter.
   * 
   * *   If you set **RuleConditionType** to **Host**, a domain name condition is returned. If multiple domain names are returned in a forwarding condition, the relationship between the domain names is OR.
   * *   If you set **RuleConditionType** to **Path**, a path condition is returned. If multiple forwarding conditions of the path type are returned in a forwarding rule, the relationship between the forwarding conditions is OR. If multiple paths are returned in a forwarding condition, the relationship between the paths is OR.
   * *   If you set **RuleConditionType** to **RequestHeader**, an HTTP header condition that consists of key-value pairs is returned.
   * *   If you set **RuleConditionType** to **Query**, a query string condition that consists of key-value pairs is returned.
   * *   If you set **RuleConditionType** to **Method**, an HTTP method condition is returned.
   * *   If you set **RuleConditionType** to **Cookie**, a cookie condition that consists of key-value pairs is returned.
   * *   If you set **RuleConditionType** to **SourceIP**, a source IP address condition is returned. If multiple source IP addresses are returned in a forwarding condition, the relationship between the source IP addresses is OR.
   * 
   * @example
   * ["www.example.com", "www.aliyun.com"]
   */
  ruleConditionValue?: string;
  static names(): { [key: string]: string } {
    return {
      hostConfig: 'HostConfig',
      pathConfig: 'PathConfig',
      ruleConditionType: 'RuleConditionType',
      ruleConditionValue: 'RuleConditionValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostConfig: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsHostConfig,
      pathConfig: ListForwardingRulesResponseBodyForwardingRulesRuleConditionsPathConfig,
      ruleConditionType: 'string',
      ruleConditionValue: 'string',
    };
  }

  validate() {
    if(this.hostConfig && typeof (this.hostConfig as any).validate === 'function') {
      (this.hostConfig as any).validate();
    }
    if(this.pathConfig && typeof (this.pathConfig as any).validate === 'function') {
      (this.pathConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRulesServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action that you can perform on the managed instance. Valid values:
   * 
   * *   **Create**: Create an instance.
   * *   **Update**: Update the current instance.
   * *   **Delete**: Delete the current instance.
   * *   **Associate**: Reference the current instance.
   * *   **UserUnmanaged**: Unmanage the instance.
   * *   **CreateChild**: Create a child resource on the current instance.
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * *   **Listener**: listener.
   * *   **IpSet**: acceleration region.
   * *   **EndpointGroup**: endpoint group.
   * *   **ForwardingRule**: forwarding rule.
   * *   **Endpoint**: endpoint.
   * *   **EndpointGroupDestination**: the protocol mapping of an endpoint group associated with a custom routing listener.
   * *   **EndpointPolicy**: the traffic policy of an endpoint associated with a custom routing listener.
   * 
   * >  This parameter is returned only if the value of **Action** is **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed. Valid values:
   * 
   * *   **true**: The specified actions are managed, and users cannot perform the specified actions on the managed instance.
   * *   **false**: The specified actions are not managed, and users can perform the specified actions on the managed instance.
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBodyForwardingRules extends $dara.Model {
  /**
   * @remarks
   * The direction in which the forwarding rule takes effect.
   * 
   * By default, **request** is returned, which indicates that the forwarding rule takes effect on requests.
   * 
   * @example
   * request
   */
  forwardingRuleDirection?: string;
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * frule-bp19a3t3yzr21q3****
   */
  forwardingRuleId?: string;
  /**
   * @remarks
   * The forwarding rule name.
   * 
   * @example
   * auto_named_rule
   */
  forwardingRuleName?: string;
  /**
   * @remarks
   * The state of the forwarding rule. Valid values:
   * 
   * *   **active:** The forwarding rule is normal.
   * *   **configuring:** The forwarding rule is being modified.
   * *   **deleting:** The forwarding rule is being deleted.
   * 
   * @example
   * active
   */
  forwardingRuleStatus?: string;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsr-bp1s0vzbi5bxlx5****
   */
  listenerId?: string;
  /**
   * @remarks
   * The priority of the forwarding rule.
   * 
   * A value between **1** and **10000** is returned. A smaller value indicates a higher priority.
   * 
   * @example
   * 1000
   */
  priority?: number;
  /**
   * @remarks
   * The forwarding actions.
   */
  ruleActions?: ListForwardingRulesResponseBodyForwardingRulesRuleActions[];
  /**
   * @remarks
   * The conditions that trigger the forwarding rule.
   */
  ruleConditions?: ListForwardingRulesResponseBodyForwardingRulesRuleConditions[];
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * >  This parameter is returned only if the value of **ServiceManaged** is **true**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the GA instance is managed. Valid values:
   * 
   * *   **true**: The GA instance is managed.
   * *   **false**: The GA instance is not managed.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The actions that you can perform on the managed instance.
   * 
   * >  This parameter takes effect only if **ServiceManaged** is set to **True**.
   * 
   * *   You can perform only specific actions on the managed instance.
   */
  serviceManagedInfos?: ListForwardingRulesResponseBodyForwardingRulesServiceManagedInfos[];
  static names(): { [key: string]: string } {
    return {
      forwardingRuleDirection: 'ForwardingRuleDirection',
      forwardingRuleId: 'ForwardingRuleId',
      forwardingRuleName: 'ForwardingRuleName',
      forwardingRuleStatus: 'ForwardingRuleStatus',
      listenerId: 'ListenerId',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleDirection: 'string',
      forwardingRuleId: 'string',
      forwardingRuleName: 'string',
      forwardingRuleStatus: 'string',
      listenerId: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesRuleConditions },
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRulesServiceManagedInfos },
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    if(Array.isArray(this.serviceManagedInfos)) {
      $dara.Model.validateArray(this.serviceManagedInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListForwardingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The forwarding rules.
   */
  forwardingRules?: ListForwardingRulesResponseBodyForwardingRules[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If **NextToken** is not returned, it indicates that no additional results exist.
   * *   If **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CFC67ED9-4AB1-431F-B6E3-A752B7B8CCD4
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      forwardingRules: 'ForwardingRules',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRules: { 'type': 'array', 'itemType': ListForwardingRulesResponseBodyForwardingRules },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.forwardingRules)) {
      $dara.Model.validateArray(this.forwardingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

