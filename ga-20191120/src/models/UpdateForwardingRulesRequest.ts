// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * > This parameter is deprecated. We recommend that you use the **RuleActionType** and **RuleActionValue** parameters.
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
   * The endpoint group configuration.
   * 
   * > This parameter is deprecated. We recommend that you use the **RuleActionType** and **RuleActionValue** parameters.
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
   * > This parameter is deprecated. We recommend that you use the **RuleActionType** and **RuleActionValue** parameters.
   */
  forwardGroupConfig?: UpdateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The priority of the action.
   * 
   * > This parameter is not in use. You do not need to specify this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  order?: number;
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * - **ForwardGroup**: forwards a request to an endpoint group.
   * 
   * - **Redirect**: redirects a request.
   * 
   * - **FixResponse**: returns a fixed response.
   * 
   * - **Rewrite**: rewrites a request.
   * 
   * - **AddHeader**: adds a header to a request.
   * 
   * - **RemoveHeader**: removes a header from a request.
   * 
   * - **Drop**: drops a request.
   * 
   * This parameter is required.
   * 
   * @example
   * ForwardGroup
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The value of the action.
   * 
   * The value is a JSON string that varies based on the value of **RuleActionType**.
   * 
   * A forwarding rule can have at most one action of the **ForwardGroup**, **Redirect**, or **FixResponse** type. The `Rewrite`, `AddHeader`, and `RemoveHeader` actions must precede a `ForwardGroup` action.
   * 
   * - If **RuleActionType** is set to **ForwardGroup**, this parameter specifies the endpoint group configuration. You can forward requests to only one endpoint group. Example: `{"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}`, where:
   * 
   *   - `type`: Set the value to `endpointgroup`.
   * 
   *   - `value`: The ID of the destination endpoint group.
   * 
   * - If **RuleActionType** is set to **Redirect**, this parameter specifies the redirect configuration. In a **Redirect** action, at least one of the following fields must be specified with a non-default value: `protocol`, `domain`, `port`, `path`, or `query`. Example: `{"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"/a","query":"value1", "code":"301" }`, where:
   * 
   *   - `protocol`: The protocol to which requests are redirected. Valid values: `${protocol}` (default), `HTTP`, and `HTTPS`.
   * 
   *   - `domain`: The domain to which requests are redirected. The default value is `${host}`. You can also specify another domain. The domain must be 3 to 128 characters in length and can contain only lowercase letters, digits, and the following special characters: `.-?=~_-+/^*!$&|()[]`.
   * 
   *   - `port`: The port to which requests are redirected. The default value is `${port}`. You can also specify another port. Valid values: 1 to 63335.
   * 
   *   - `path`: The path to which requests are redirected. The default value is `${path}`. The path must be 1 to 128 characters in length. A regular expression-based path must start with a tilde (\\~) and can contain letters, digits, and the following special characters: `.-_/=?~^*$:()[]+|`. A path that is not a regular expression must start with a forward slash (/) and can contain letters, digits, and the following special characters: `.-_/=?:`.
   * 
   *   - `query`: The query string to which requests are redirected. The default value is `${query}`. You can also specify another query string. The query string must be 1 to 128 characters in length and can contain printable ASCII characters whose character codes are in the range of `ch >= 32 && ch < 127`. The letters must be in lowercase. Spaces and the following characters are not allowed: `[]{}<>\\#|&`.
   * 
   *   - `code`: The redirect type. Valid values: `301`, `302`, `303`, `307`, and `308`.
   * 
   * - If **RuleActionType** is set to **FixResponse**, this parameter specifies the fixed response configuration. Example: `{"code":"200", "type":"text/plain", "content":"dssacav" }`, where:
   * 
   *   - `code`: The HTTP status code. You can specify a numeric string that represents a `2xx`, `4xx`, or `5xx` status code, where `x` indicates a digit.
   * 
   *   - `type`: The content type of the response body. Valid values: **text/plain**, **text/css**, **text/html**, **application/javascript**, and **application/json**.
   * 
   *   - `content`: The content of the response body. The content can be up to 1,024 characters in length and cannot contain Chinese characters.
   * 
   * - If **RuleActionType** is set to **AddHeader**, this parameter specifies the configuration for adding an HTTP header. An **AddHeader** action must be used together with a **ForwardGroup** action. Example: `[{"name":"header1","type":"user-defined", "value":"value"}]`, where:
   * 
   *   - `name`: The name of the HTTP header. The name must be 1 to 40 characters in length and can contain letters, digits, hyphens (-), and underscores (_). The header names specified for **AddHeader** must be unique and cannot be the same as those specified for **RemoveHeader**.
   * 
   *   - `type`: The content type of the HTTP header. Valid values: `user-defined`, `ref` (reference), and `system-defined`.
   * 
   *   - `value`: The content of the HTTP header. This parameter cannot be left empty. If `type` is set to `user-defined`, the content must be 1 to 128 characters in length and can contain printable ASCII characters whose character codes are in the range of `ch >= 32 && ch < 127`. The content can include letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space. If `type` is set to `ref` (reference), the content must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), and underscores (_). The content cannot start or end with a space. If `type` is set to `system-defined`, the only valid value is `ClientSrcIp`.
   * 
   * - If **RuleActionType** is set to **RemoveHeader**, this parameter specifies the configuration for removing an HTTP header. A **RemoveHeader** action must be used together with a **ForwardGroup** action. The header name must be 1 to 40 characters in length and can contain letters, digits, hyphens (-), and underscores (_). Example: `["header1"]`.
   * 
   * - If **RuleActionType** is set to **Rewrite**, this parameter specifies the rewrite configuration. A **Rewrite** action must be used together with a **ForwardGroup** action. Example: `{"domain":"value1", "path":"value2", "query":"value3"}`, where:
   * 
   *   - `domain`: The domain to which requests are rewritten. The default value is `${host}`. You can also specify another domain. The domain must be 3 to 128 characters in length and can contain only lowercase letters, digits, and the following special characters: `.-?=~_-+/^*!$&|()[]`.
   * 
   *   - `path`: The path to which requests are rewritten. The default value is `${path}`. The path must be 1 to 128 characters in length. A regular expression-based path must start with a tilde (\\~) and can contain letters, digits, and the following special characters: `.-_/=?~^*$:()[]+|`. A path that is not a regular expression must start with a forward slash (/) and can contain letters, digits, and the following special characters: `.-_/=?:`.
   * 
   *   - `query`: The query string to which requests are rewritten. The default value is `${query}`. You can also specify another query string. The query string must be 1 to 128 characters in length and can contain printable ASCII characters whose character codes are in the range of `ch >= 32 && ch < 127`. The letters must be in lowercase. Spaces and the following characters are not allowed: `[]{}<>\\#|&`.
   * 
   * - If **RuleActionType** is set to **Drop**, you do not need to specify this parameter.
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
   * The domain configuration.
   * 
   * > This parameter is deprecated. We recommend that you use the **RuleConditionType** and **RuleConditionValue** parameters.
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
   * > This parameter is deprecated. We recommend that you use the **RuleConditionType** and **RuleConditionValue** parameters.
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
   * The domain configuration.
   * 
   * > This parameter is deprecated. We recommend that you use the **RuleConditionType** and **RuleConditionValue** parameters.
   */
  hostConfig?: UpdateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The path configuration.
   * 
   * > This parameter is deprecated. We recommend that you use the **RuleConditionType** and **RuleConditionValue** parameters.
   */
  pathConfig?: UpdateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The type of the forwarding condition. Valid values:
   * 
   * - **Host**: matches a request based on its domain name.
   * 
   * - **Path**: matches a request based on its path.
   * 
   * - **RequestHeader**: matches a request based on its HTTP header.
   * 
   * - **Query**: matches a request based on its query string.
   * 
   * - **Method**: matches a request based on its HTTP request method.
   * 
   * - **Cookie**: matches a request based on its cookie.
   * 
   * - **SourceIP**: matches a request based on its source IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * Host
   */
  ruleConditionType?: string;
  /**
   * @remarks
   * The value of the forwarding condition.
   * The value is a JSON string that varies based on the value of **RuleConditionType**.
   * 
   * - If **RuleConditionType** is set to **Host**, this parameter specifies the domain configuration. A forwarding rule can contain only one Host-based rule condition. The condition can contain multiple domains that are evaluated with a logical OR. A domain must be 3 to 128 characters in length and can contain letters, digits, hyphens (-), and periods (.). You can use asterisks (\\*) and question marks (?) as wildcards. Example: `["www.example.com", "www.aliyun.com"]`.
   * 
   * - If **RuleConditionType** is set to **Path**, this parameter specifies the path configuration. A forwarding rule can contain multiple path-based rule conditions, which are evaluated with a logical OR. Each condition can contain multiple paths, which are also evaluated with a logical OR. A path must be 1 to 128 characters in length, start with a forward slash (/), and contain only letters, digits, and the following special characters: `$`, `-`, `_`, `.`, `+`, `/`, `&`, `~`, `@`, `:`, and `\\"`. You can use asterisks (\\*) and question marks (?) as wildcards. Example: `["/a", "/b/"]`.
   * 
   * - If **RuleConditionType** is set to **RequestHeader**, this parameter specifies the HTTP header configuration, which consists of key-value pairs. The values for a specific header must be unique. Example: `[{"header1":["value1","value2"]}]`.
   * 
   *   - Key: The key of the HTTP header. The key must be 1 to 40 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   *   - Value: The value of the HTTP header. The value must be 1 to 128 characters in length and can contain printable ASCII characters whose character codes are in the range of `ch >= 32 && ch < 127`. The value cannot start or end with a space.
   * 
   * - If **RuleConditionType** is set to **Query**, this parameter specifies the query string configuration, which consists of key-value pairs. Example: `[{"query1":["value1"]}, {"query2":["value2"]}]`.
   * 
   *   - Key: The key of the query string. The key must be 1 to 100 characters in length and can contain printable ASCII characters whose character codes are in the range of `ch >= 32 && ch < 127`. The letters must be in lowercase. Spaces and the following characters are not allowed: `[]{}<>\\;/?:@&=+,$%|"^~`.
   * 
   *   - Value: The value of the query string. The value must be 1 to 128 characters in length and can contain printable ASCII characters whose character codes are in the range of `ch >= 32 && ch < 127`. The letters must be in lowercase. Spaces and the following characters are not allowed: `[]{}<>\\;/?:@&=+,$%|"^~`.
   * 
   * - If **RuleConditionType** is set to **Method**, this parameter specifies the HTTP request method configuration. Valid values: **HEAD**, **GET**, **POST**, **OPTIONS**, **PUT**, **PATCH**, and **DELETE**. Example: `["GET", "OPTIONS", "POST"]`.
   * 
   * - If **RuleConditionType** is set to **Cookie**, this parameter specifies the cookie configuration, which consists of key-value pairs. Example: `[{"cookie1":["value1"]}, {"cookie2":["value2"]}]`
   * 
   *   - Key: The key of the cookie. The key must be 1 to 100 characters in length and can contain printable ASCII characters whose character codes are in the range of `ch >= 32 && ch < 127`. The letters must be in lowercase. Spaces and the following characters are not allowed: `#[]{}\\|<>&`.
   * 
   *   - Value: The value of the cookie. The value must be 1 to 128 characters in length and can contain printable ASCII characters whose character codes are in the range of `ch >= 32 && ch < 127`. The letters must be in lowercase. Spaces and the following characters are not allowed: `#[]{}\\|<>&`.
   * 
   * - If **RuleConditionType** is set to **SourceIP**, this parameter specifies the source IP configuration. You can specify IP addresses such as 1.1.XX.XX/32 or CIDR blocks such as 2.2.XX.XX/24. A forwarding rule can contain only one source IP-based rule condition, which can contain multiple source IP addresses or CIDR blocks that are evaluated with a logical OR. Example: `["1.1.XX.XX/32", "2.2.XX.XX/24"]`.
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
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * frule-bp1dii16gu9qdvb34****
   */
  forwardingRuleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * The name must be 2 to 128 characters in length, start with a letter or a Chinese character, and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  forwardingRuleName?: string;
  /**
   * @remarks
   * The priority of the forwarding rule. A smaller value indicates a higher priority. Valid values: **1** to **10000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  priority?: number;
  /**
   * @remarks
   * The actions that are performed when the forwarding conditions are met.
   * 
   * This parameter is required.
   */
  ruleActions?: UpdateForwardingRulesRequestForwardingRulesRuleActions[];
  /**
   * @remarks
   * The forwarding conditions.
   * 
   * This parameter is required.
   */
  ruleConditions?: UpdateForwardingRulesRequestForwardingRulesRuleConditions[];
  /**
   * @remarks
   * The direction of the rule. You do not need to specify this parameter.
   * 
   * This parameter is set to **request** by default, which indicates that the rule applies to inbound requests.
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
   * The ID of the Global Accelerator instance.
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
   * You can generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **client token**. The **RequestId** of each request is different.
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
   * The ID of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1s0vzbi5bxlx5****
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the Global Accelerator instance. Set the value to **cn-hangzhou**.
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

