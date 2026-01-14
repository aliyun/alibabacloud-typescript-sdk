// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * >  We recommend that you use **RuleActionType** and **RuleActionValue** rather than this parameter to configure forwarding actions.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1ieei9664r5nv****
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

export class UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of an endpoint group.
   * 
   * >  We recommend that you use **RuleActionType** and **RuleActionValue** rather than this parameter to configure forwarding actions.
   * 
   * This parameter is required.
   */
  serverGroupTuples?: UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples },
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

export class UpdateForwardingRulesRequestForwardingRulesRuleActions extends $dara.Model {
  /**
   * @remarks
   * The forwarding configuration.
   * 
   * >  We recommend that you use **RuleActionType** and **RuleActionValue** rather than this parameter to configure forwarding actions.
   */
  forwardGroupConfig?: UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The forwarding priority.
   * 
   * >  This parameter does not take effect. Ignore this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
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
   * *   **RemoveHeaderConfig**: deletes the header of a request.
   * *   **Drop**: drops a request.
   * 
   * This parameter is required.
   * 
   * @example
   * ForwardGroup
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The value of the forwarding action.
   * 
   * You must specify different JSON strings based on **RuleActionType**.
   * 
   * A forwarding rule can contain only one forwarding action whose type is **ForwardGroup**, **Redirect**, or **FixResponse**. You must specify a forwarding action whose type is **Rewrite**, **AddHeader**, or **RemoveHeader** before a forwarding action whose type is **ForwardGroup**.
   * 
   * *   If **RuleActionType** is set to **ForwardGroup**, this parameter specifies the information of a virtual endpoint group. You can forward requests to only one virtual endpoint group. Example: `{"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}`.
   * 
   *     *   `type`: Set this parameter to `endpointgroup`.
   *     *   `value`: Set this parameter to the ID of a virtual endpoint group.
   * 
   * *   If **RuleActionType** is set to **Redirect**, this parameter specifies redirecting configurations. You cannot leave the following parameters empty or use the default values for the following parameters for a forwarding action whose type is **Redirect**: `protocol`, `domain`, `port`, `path`, and `query`. Example: `{"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"/a","query":"value1", "code":"301" }`.
   * 
   *     *   `protocol`: the protocol of requests after the requests are redirected. Valid values: `${protocol}` (default), `HTTP`, and `HTTPS`.
   *     *   `domain`: the domain name to which requests are redirected. Default value: `${host}`. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only letters, digits, and the following special characters: `. - ? = ~ _ - + / ^ * ! $ & | ( ) [ ]`.
   *     *   `port`: the port to which requests are redirected. Default value: `${port}`. You can enter a port number from 1 to 63335.
   *     *   `path`: the path to which requests are redirected. Default value: `${path}`. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: `. - _ / = ? ~ ^ * $ : ( ) [ ] + |`. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: `. - _ / = ? :`. The path must start with a forward slash (/).
   *     *   `query`: the query string of the requests that are redirected. Default value: `${query}`. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are `greater than or equal to 32 and smaller than 127`. The query string cannot contain uppercase letters, space characters, or the following special characters: `[ ] { } < > # | &`.
   *     *   `code`: the redirect code. Valid values: `301`, `302`, `303`, `307`, and `308`.
   * 
   * *   If **RuleActionType** is set to **FixResponse**, this parameter specifies a fixed response. Example: `{"code":"200", "type":"text/plain", "content":"dssacav" }`.
   * 
   *     *   `code`: the HTTP response status code. The response status code must be one of the following numeric strings: `2xx`, `4xx`, and `5xx`. The letter `x` indicates a number from 0 to 9.
   *     *   `type`: the type of the response content. Valid values: **text/plain**, **text/css**, **text/html**, **application/javascript**, and **application/json**.
   *     *   `content`: the response content. The response content cannot exceed 1,000 characters in length, and does not support Chinese characters.
   * 
   * *   If **RuleActionType** is set to **AddHeader**, this parameter specifies an HTTP header to be added. If a forwarding rule contains a forwarding action whose type is **AddHeader**, you must specify another forwarding action whose type is **ForwardGroup**. Example: `[{"name":"header1","type":"userdefined", "value":"value"}]`.
   * 
   *     *   `name`: the name of the HTTP header. The name must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). The name of the HTTP header specified by **AddHeader** must be unique and cannot be the same as the name of the HTTP header specified by **RemoveHeader**.
   *     *   `type`: the content type of the HTTP header. Valid values: `user-defined`, `ref`, and `system-defined`.
   *     *   `value`: the content of the HTTP header. You cannot leave this parameter empty. If you set `type` to `user-defined`, the content must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are `greater than or equal to 32 and smaller than 127`. The content can contain letters, digits, hyphens (-), and underscores (_*). The content cannot start or end with a space character. If you set `type` to `ref`, the content must be 1 to 128 characters in length, and can contain letters, digits, hyphens (-), and underscores (_*). The content cannot start or end with a space character. If you set `type` to `system-defined`, only `ClientSrcIp` is supported.
   * 
   * *   If **RuleActionType** is set to **RemoveHeader**, this parameter specifies an HTTP header to be removed. If a forwarding rule contains a forwarding action whose type is **RemoveHeader**, you must specify another forwarding action whose type is **ForwardGroup**. The header must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). Example: `["header1"]`.
   * 
   * *   If **RuleActionType** is set to **Rewrite**, this parameter specifies the rewriting configuration. If a forwarding rule contains a forwarding action whose type is **Rewrite**, you must specify another forwarding action whose type is **ForwardGroup**. Example: `{"domain":"value1", "path":"value2", "query":"value3"}`.
   * 
   *     *   `domain`: the domain name to which requests are redirected. Default value: `${host}`. You can also enter a domain name. The domain name must be 3 to 128 characters in length, and can contain only lowercase letters, digits, and the following special characters: `. - ? = ~ _ - + / ^ * ! $ & | ( ) [ ]`.
   *     *   `path`: the path to which requests are redirected. Default value: `${path}`. The path must be 1 to 128 characters in length. To use a regular expression, the path can contain letters, digits, and the following special characters: `. - _ / = ? ~ ^ * $ : ( ) [ ] + |`. The path must start with a tilde (~). If you do not want to use a regular expression, the path can contain letters, digits, and the following special characters: `. - _ / = ? :`. The path must start with a forward slash (/).
   *     *   `query`: the query string of the requests that are redirected. Default value: `${query}`. You can also specify a query string. The query string must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are `greater than or equal to 32 and smaller than 127`. The query string cannot contain uppercase letters, space characters, or the following special characters: `[ ] { } < > # | &`.
   * 
   * *   If **RuleActionType** is set to **Drop**, you do not need to specify this parameter.
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
      forwardGroupConfig: UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig,
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

export class UpdateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig extends $dara.Model {
  /**
   * @remarks
   * The domain name configuration.
   * 
   * >  We recommend that you use **RuleConditionType** and **RuleConditionValue** rather than this parameter to configure forwarding conditions.
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

export class UpdateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig extends $dara.Model {
  /**
   * @remarks
   * The path configuration.
   * 
   * >  We recommend that you use **RuleConditionType** and **RuleConditionValue** rather than this parameter to configure forwarding conditions.
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

export class UpdateForwardingRulesRequestForwardingRulesRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The domain name configuration.
   * 
   * >  We recommend that you use **RuleConditionType** and **RuleConditionValue** rather than this parameter to configure forwarding conditions.
   */
  hostConfig?: UpdateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The path configuration.
   * 
   * >  We recommend that you use **RuleConditionType** and **RuleConditionValue** rather than this parameter to configure forwarding conditions.
   */
  pathConfig?: UpdateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The type of the forwarding condition. Valid values:
   * 
   * *   **Host**: Requests are forwarded based on domain names.
   * *   **Path**: Requests are forwarded based on paths.
   * *   **RequestHeader**: Requests are forwarded based on HTTP headers.
   * *   **Query**: Requests are forwarded based on query strings.
   * *   **Method**: Requests are forwarded based on HTTP request methods.
   * *   **Cookie**: Requests are forwarded based on cookies.
   * *   **SourceIp**: Requests are forwarded based on source IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * Host
   */
  ruleConditionType?: string;
  /**
   * @remarks
   * The value of the forwarding condition. You must specify different JSON strings based on **RuleConditionType**.
   * 
   * *   If **RuleConditionType** is set to **Host**, RuleConditionValue specifies a domain name condition. A forwarding rule can contain only one forwarding condition of the host type. You can specify multiple domain names in a forwarding condition. The relationship between multiple domain names is OR. The domain name must be 3 to 128 characters in length, and can contain letters, digits, hyphens (-), and periods (.). You can use asterisks (\\*) and question marks (?) as wildcard characters. Example: `["www.example.com", "www.aliyun.com"]`.
   * 
   * *   If **RuleConditionType** is set to **Path**, RuleConditionValue specifies a path condition. A forwarding rule can contain multiple forwarding conditions of the path type. The relationship between multiple path conditions is OR. You can specify multiple paths in a forwarding condition. The relationship between multiple paths is OR. The path must be 1 to 128 characters in length, and must start with a forward slash (/). The path can contain letters, digits, and the following special characters: $ - _ . + / & ~ @ : \\". Supported wildcard characters are asterisks (\\*) and question marks (?). Example: `["/a", "/b/"]`.
   * 
   * *   If **RuleConditionType** is set to **RequestHeader**, RuleConditionValue specifies an HTTP header condition. An HTTP header consists of a key and a value. The header values in a forwarding condition must be unique. Example: `[{"header1":["value1","value2"]}]`.
   * 
   *     *   Key: The key of an HTTP header must be 1 to 40 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   *     *   Value: The value of an HTTP header must be 1 to 128 characters in length and can contain printable characters whose ASCII values `are larger than or equal to 32 and smaller than 127`. The value cannot start or end with a space.
   * 
   * *   If **RuleConditionType** is set to **Query**, RuleConditionValue specifies a query string condition. A query string consists of a key and a value. Example: `[{"query1":["value1"]}, {"query2":["value2"]}]`.
   * 
   *     *   Key: The key must be 1 to 100 characters in length and can contain printable characters whose ASCII values `are larger than or equal to 32 and smaller than 127`, excluding uppercase letters, spaces, and the following special characters: `[ ] { } < > \\ ; / ? : @ & = + , $ % " ^ ~`.
   *     *   Value: The value must be 1 to 128 characters in length and can contain printable characters whose ASCII values `are larger than or equal to 32 and smaller than 127`, excluding uppercase letters, spaces, and the following special characters: `[ ] { } < > \\ ; / ? : @ & = + , $ % " ^ ~`.
   * 
   * *   If **RuleConditionType** is set to **Method**, RuleConditionValue specifies an HTTP method condition. Valid values: **HEAD**, **GET**, **POST**, **OPTIONS**, **PUT**, **PATCH**, and **DELETE**. Example: `["GET", "OPTIONS", "POST"]`.
   * 
   * *   If **RuleConditionType** is set to **Cookie**, RuleConditionValue specifies a cookie condition. A cookie consists of a key and a value. Example: `[{"cookie1":["value1"]}, {"cookie2":["value2"]}]`.
   * 
   *     *   Key: The key of a cookie must be 1 to 100 characters in length and can contain printable characters whose ASCII values `are larger than or equal to 32 and smaller than 127`, excluding uppercase letters, spaces, and the following special characters: `# [ ] { } \\ < > &`.
   *     *   Value: The value of a cookie must be 1 to 128 characters in length and can contain printable characters whose ASCII values `are larger than or equal to 32 and smaller than 127`, excluding uppercase letters, spaces, and the following special characters: `# [ ] { } \\ < > &`.
   * 
   * *   If **RuleConditionType** is set to **SourceIP**, RuleConditionValue specifies a source IP address condition. IP addresses, such as 1.1.XX.XX/32, and CIDR blocks, such as 2.2.XX.XX/24, are supported. A forwarding rule can contain only one forwarding condition of the SourceIP type. You can specify multiple source IP addresses or CIDR blocks in a forwarding condition. The relationship between multiple IP addresses or CIDR blocks is OR. Example: `["1.1.XX.XX/32", "2.2.XX.XX/24"]`.
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
      hostConfig: UpdateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig,
      pathConfig: UpdateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig,
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

export class UpdateForwardingRulesRequestForwardingRules extends $dara.Model {
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * frule-bp1dii16gu9qdvb34****
   */
  forwardingRuleId?: string;
  /**
   * @remarks
   * The forwarding rule name.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  forwardingRuleName?: string;
  /**
   * @remarks
   * The priority of the forwarding rule. Valid values: **1** to **10000**. A smaller value specifies a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  priority?: number;
  /**
   * @remarks
   * The configurations of the forwarding actions.
   * 
   * This parameter is required.
   */
  ruleActions?: UpdateForwardingRulesRequestForwardingRulesRuleActions[];
  /**
   * @remarks
   * The conditions that trigger the forwarding rule.
   * 
   * This parameter is required.
   */
  ruleConditions?: UpdateForwardingRulesRequestForwardingRulesRuleConditions[];
  /**
   * @remarks
   * The direction in which the rule takes effect. You do not need to specify this parameter.
   * 
   * By default, this parameter is set to **request**, which specifies that the rule takes effect on requests.
   * 
   * @example
   * request
   */
  ruleDirection?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRuleId: 'ForwardingRuleId',
      forwardingRuleName: 'ForwardingRuleName',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleDirection: 'RuleDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleId: 'string',
      forwardingRuleName: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRulesRuleConditions },
      ruleDirection: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateForwardingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The GA instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp17frjjh0udz4q****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The configurations of the forwarding rules.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  forwardingRules?: UpdateForwardingRulesRequestForwardingRules[];
  /**
   * @remarks
   * The listener ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1s0vzbi5bxlx5****
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      forwardingRules: 'ForwardingRules',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      forwardingRules: { 'type': 'array', 'itemType': UpdateForwardingRulesRequestForwardingRules },
      listenerId: 'string',
      regionId: 'string',
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

