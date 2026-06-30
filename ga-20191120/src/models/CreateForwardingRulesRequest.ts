// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * > This parameter is deprecated. We recommend that you use **RuleActionType** and **RuleActionValue** to configure rule actions.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1nktp3qgbcq9ih6****
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

export class CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The endpoint group configuration.
   * 
   * > This parameter is deprecated. We recommend that you use **RuleActionType** and **RuleActionValue** to configure rule actions.
   * 
   * This parameter is required.
   */
  serverGroupTuples?: CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples },
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

export class CreateForwardingRulesRequestForwardingRulesRuleActions extends $dara.Model {
  /**
   * @remarks
   * The forwarding configuration.
   * 
   * > This parameter is deprecated. We recommend that you use **RuleActionType** and **RuleActionValue** to configure rule actions.
   */
  forwardGroupConfig?: CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The priority of the action.
   * 
   * > This parameter is not in use and can be ignored.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  order?: number;
  /**
   * @remarks
   * The type of the rule action. Valid values:
   * 
   * - **ForwardGroup**: Forwards requests.
   * 
   * - **Redirect**: Redirects requests.
   * 
   * - **FixResponse**: Returns a fixed response.
   * 
   * - **Rewrite**: Rewrites requests.
   * 
   * - **AddHeader**: Adds a header.
   * 
   * - **RemoveHeader**: Removes a header.
   * 
   * - **Drop**: Drops requests.
   * 
   * This parameter is required.
   * 
   * @example
   * ForwardGroup
   */
  ruleActionType?: string;
  /**
   * @remarks
   * The value for the rule action.
   * 
   * This is a JSON-formatted string whose structure depends on the specified **RuleActionType**.
   * 
   * A forwarding rule can have at most one action of type **ForwardGroup**, **Redirect**, or **FixResponse**. Actions of type **Rewrite**, **AddHeader**, and **RemoveHeader** must be specified before a **ForwardGroup** action.
   * 
   * - If **RuleActionType** is set to **ForwardGroup**, this parameter specifies the endpoint group. You can forward requests to only one endpoint group. Example: `{"type":"endpointgroup", "value":"epg-bp1enpdcrqhl78g6r****"}`, where:
   * 
   *   - `type`: Set the value to` endpointgroup`.
   * 
   *   - `value`: The ID of the target endpoint group.
   * 
   * - If **RuleActionType** is set to **Redirect**, this parameter specifies the redirect configuration. At least one of the `protocol`, `domain`, `port`, `path`, or `query` fields must be set to a value other than its default. Example: `{"protocol":"HTTP", "domain":"www.example.com", "port":"80", "path":"/a","query":"value1", "code":"301" }`, where:
   * 
   *   - `protocol`: The protocol for the redirect. Valid values: `${protocol}` (default), `HTTP`, and `HTTPS`.
   * 
   *   - `domain`: The domain name for the redirect. The default value is `${host}`. You can also specify another domain name. A domain name must be 3 to 128 characters long and can contain only lowercase letters, digits, and the following special characters:` .-=~_-+/^*!$&()[]?`.
   * 
   *   - `port`: The port for the redirect. The default value is `${port}`. You can also specify a port number. Valid values: 1 to 63335.
   * 
   *   - `path`: The path for the redirect. The default value is `${path}`. The path must be 1 to 128 characters long. For a regular expression path, it must start with a tilde (\\~) and can contain uppercase and lowercase letters, digits, and the following special characters:` .-_/=?~^*$:()[]+`. For a non-regular expression path, it must start with a forward slash (/) and can contain uppercase and lowercase letters, digits, and the following special characters:` .-_/=:?`.
   * 
   *   - `query`: The query string for the redirect. The default value is `${query}`. You can also specify another query string. The query string must be 1 to 128 characters long and contain only printable characters within the ASCII range of` ch >= 32 && ch < 127`. Letters must be lowercase. Spaces and the following special characters are not supported:` []{}<>\\#&`.
   * 
   *   - `code`: The redirect code. Valid values: `301`, `302`, `303`, `307`, and `308`.
   * 
   * - If **RuleActionType** is set to **FixResponse**, this parameter specifies the fixed response configuration. Example: `{"code":"200", "type":"text/plain", "content":"dssacav" }`, where:
   * 
   *   - `code`: The response status code. The value must be a numeric string in the `2xx`, `4xx`, or `5xx` format, where `x` is any digit.
   * 
   *   - `type`: The content type of the response body. Valid values: **text/plain**, **text/css**, **text/html**, **application/javascript**, and **application/json**.
   * 
   *   - `content`: The content of the response body. The content cannot exceed 1,000 characters and does not support Chinese characters.
   * 
   * - If **RuleActionType** is set to **AddHeader**, this parameter specifies the configuration for adding an HTTP header. If a forwarding rule contains an **AddHeader** action, it must also contain a **ForwardGroup** action. Example: `[{"name":"header1","type":"user-defined", "value":"value"}]`, where:
   * 
   *   - `name`: The name of the HTTP header. The name must be 1 to 40 characters long and can contain uppercase and lowercase letters, digits, hyphens (-), and underscores (_). The header names in **AddHeader** actions must be unique and cannot be the same as any header name in a **RemoveHeader** action.
   * 
   *   - `type`: The type of the header value. Valid values: `user-defined`, `ref` (reference), and `system-defined`.
   * 
   *   - `value`: The content of the HTTP header. This field cannot be empty. If `type` is `user-defined`, the value must be 1 to 128 characters long and contain only printable characters within the ASCII range of `ch >= 32 && ch < 127`. The value can contain uppercase and lowercase letters, digits, hyphens (-), and underscores (_), and cannot start or end with a space. If `type` is `ref`, the value must be 1 to 128 characters long and can contain uppercase and lowercase letters, digits, hyphens (-), and underscores (_). The value cannot start or end with a space. If `type` is `system-defined`, the only valid value is `ClientSrcIp`.
   * 
   * - If **RuleActionType** is set to **RemoveHeader**, this parameter specifies the HTTP headers to remove. If a forwarding rule contains a **RemoveHeader** action, it must also contain a **ForwardGroup** action. The value must be 1 to 40 characters long and can contain uppercase and lowercase letters, digits, hyphens (-), and underscores (_). Example: `["header1"]`.
   * 
   * - If **RuleActionType** is set to **Rewrite**, this parameter specifies the rewrite configuration. If a forwarding rule contains a **Rewrite** action, it must also contain a **ForwardGroup** action. Example: `{"domain":"value1", "path":"value2", "query":"value3"}`, where:
   * 
   *   - `domain`: The domain name to rewrite. The default value is `${host}`. You can also specify another domain name. A domain name must be 3 to 128 characters long and can contain only lowercase letters, digits, and the following special characters:` .-=~_-+/^*!$&()[]?`.
   * 
   *   - `path`: The path to rewrite. The default value is `${path}`. The path must be 1 to 128 characters long. For a regular expression path, it must start with a tilde (\\~) and can contain uppercase and lowercase letters, digits, and the following special characters:` .-_/=?~^*$:()[]+`. For a non-regular expression path, it must start with a forward slash (/) and can contain uppercase and lowercase letters, digits, and the following special characters:` .-_/=:?`.
   * 
   *   - `query`: The query string to rewrite. The default value is `${query}`. You can also specify another query string. The query string must be 1 to 128 characters long and contain only printable characters within the ASCII range of` ch >= 32 && ch < 127`. Letters must be lowercase. Spaces and the following special characters are not supported:` []{}<>\\#&`.
   * 
   * - If **RuleActionType** is set to **Drop**, you do not need to specify a value for this parameter.
   * 
   * @example
   * [{"type":"endpointgroup","value":"epg-bp1l49ltx6iengvf2ks5z****"}]
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
      forwardGroupConfig: CreateForwardingRulesRequestForwardingRulesRuleActionsForwardGroupConfig,
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

export class CreateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig extends $dara.Model {
  /**
   * @remarks
   * The domain name configuration.
   * 
   * > This parameter is deprecated. We recommend that you use **RuleConditionType** and **RuleConditionValue** to configure rule conditions.
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

export class CreateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig extends $dara.Model {
  /**
   * @remarks
   * The path configuration.
   * 
   * A path must be 1 to 128 characters long and must start with a forward slash (/). It can contain letters, digits, dollar signs ($), hyphens (-), underscores (_), periods (.), plus signs (+), forward slashes (/), ampersands (&), tildes (\\~), at signs (@), colons (:), and apostrophes (\\"). You can use asterisks (\\*) and question marks (?) as wildcards.
   * 
   * > This parameter is deprecated. We recommend that you use **RuleConditionType** and **RuleConditionValue** to configure rule conditions.
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

export class CreateForwardingRulesRequestForwardingRulesRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The domain name configuration.
   * 
   * > This parameter is deprecated. We recommend that you use **RuleConditionType** and **RuleConditionValue** to configure rule conditions.
   */
  hostConfig?: CreateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The path configuration.
   * 
   * > This parameter is deprecated. We recommend that you use **RuleConditionType** and **RuleConditionValue** to configure rule conditions.
   */
  pathConfig?: CreateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The type of the rule condition. Valid values:
   * 
   * - **Host**: Matches requests by domain name.
   * 
   * - **Path**: Matches requests by path.
   * 
   * - **RequestHeader**: Matches requests by HTTP header.
   * 
   * - **Query**: Matches requests by query string.
   * 
   * - **Method**: Matches requests by HTTP method.
   * 
   * - **Cookie**: Matches requests by cookie.
   * 
   * - **SourceIP**: Matches requests by source IP address.
   * 
   * @example
   * Host
   */
  ruleConditionType?: string;
  /**
   * @remarks
   * The value of the rule condition.
   * This is a JSON-formatted string whose structure depends on the specified **RuleConditionType**.
   * 
   * - If **RuleConditionType** is set to **Host**, this parameter specifies the domain name conditions. A forwarding rule can have only one **Host** rule condition. This rule condition can contain multiple domain names, which are evaluated with a logical OR. A domain name must be 3 to 128 characters long and can contain letters, digits, hyphens (-), and periods (.). You can use asterisks (\\*) and question marks (?) as wildcards. Example: `["www.example.com", "www.aliyun.com"]`.
   * 
   * - If **RuleConditionType** is set to **Path**, this parameter specifies the path conditions. A forwarding rule can have multiple **Path** rule conditions, which are evaluated with a logical OR. Each path rule condition can contain multiple paths, which are also evaluated with a logical OR. A path must be 1 to 128 characters long and must start with a forward slash (/). It can contain letters, digits, dollar signs ($), hyphens (-), underscores (_), periods (.), plus signs (+), forward slashes (/), ampersands (&), tildes (\\~), at signs (@), colons (:), and apostrophes (\\"). You can use asterisks (\\*) and question marks (?) as wildcards. Example: `["/a", "/b/"]`.
   * 
   * - If **RuleConditionType** is set to **RequestHeader**, this parameter specifies the HTTP header conditions. The value is a key-value pair. The header values within the same rule condition must be unique. Example: `[{"header1":["value1","value2"]}]`.
   * 
   *   - Key: The HTTP header key must be 1 to 40 characters long and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   *   - Value: The HTTP header value must be 1 to 128 characters long and contain only printable characters within the ASCII range of` ch >= 32 && ch < 127`. The value cannot start or end with a space.
   * 
   * - If **RuleConditionType** is set to **Query**, this parameter specifies the query string conditions. The value is a key-value pair. Example: `[{"query1":["value1"]}, {"query2":["value2"]}]`.
   * 
   *   - Key: The key must be 1 to 100 characters long and contain only printable characters within the ASCII range of` ch >= 32 && ch < 127`. Letters must be lowercase. Spaces and the following characters are not supported:` []{}<>\\;/?:@&=+,$%"^~`.
   * 
   *   - Value: The value must be 1 to 128 characters long and contain only printable characters within the ASCII range of` ch >= 32 && ch < 127`. Letters must be lowercase. Spaces and the following characters are not supported:` []{}<>\\;/?:@&=+,$%"^~`.
   * 
   * - If **RuleConditionType** is set to **Method**, this parameter specifies the HTTP method conditions. Valid values: **HEAD**, **GET**, **POST**, **OPTIONS**, **PUT**, **PATCH**, and **DELETE**. Example: `["GET", "OPTIONS", "POST"]`.
   * 
   * - If **RuleConditionType** is set to **Cookie**, this parameter specifies the cookie conditions. The value is a key-value pair. Example: `[{"cookie1":["value1"]}, {"cookie2":["value2"]}]`
   * 
   *   - Key: The cookie key must be 1 to 100 characters long and contain only printable characters within the ASCII range of` ch >= 32 && ch < 127`. Letters must be lowercase. Spaces and the following characters are not supported:` #[]{}\\<>&`.
   * 
   *   - Value: The cookie value must be 1 to 128 characters long and contain only printable characters within the ASCII range of` ch >= 32 && ch < 127`. Letters must be lowercase. Spaces and the following characters are not supported:` #[]{}\\<>&`.
   * 
   * - If **RuleConditionType** is set to **SourceIP**, this parameter specifies the source IP conditions. You can specify IP addresses, for example, `1.1.XX.XX/32`, or CIDR blocks, for example, `2.2.XX.XX/24`. A forwarding rule can have only one **SourceIP** rule condition. This rule condition can contain multiple source IP addresses, which are evaluated with a logical OR. Example: `["1.1.XX.XX/32", "2.2.XX.XX/24"]`.
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
      hostConfig: CreateForwardingRulesRequestForwardingRulesRuleConditionsHostConfig,
      pathConfig: CreateForwardingRulesRequestForwardingRulesRuleConditionsPathConfig,
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

export class CreateForwardingRulesRequestForwardingRules extends $dara.Model {
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 2 to 128 characters long. It must start with a letter or a Chinese character, and can contain letters, Chinese characters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  forwardingRuleName?: string;
  /**
   * @remarks
   * The priority of the forwarding rule.
   * Valid values: **1** to **10000**. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The rule actions.
   * 
   * This parameter is required.
   */
  ruleActions?: CreateForwardingRulesRequestForwardingRulesRuleActions[];
  /**
   * @remarks
   * The rule conditions.
   * 
   * This parameter is required.
   */
  ruleConditions?: CreateForwardingRulesRequestForwardingRulesRuleConditions[];
  /**
   * @remarks
   * The direction in which the rule takes effect. This parameter does not need to be configured.
   * 
   * By default, this parameter is set to **request**, which indicates that the rule applies to requests.
   * 
   * @example
   * request
   */
  ruleDirection?: string;
  static names(): { [key: string]: string } {
    return {
      forwardingRuleName: 'ForwardingRuleName',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleDirection: 'RuleDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardingRuleName: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRulesRuleConditions },
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

export class CreateForwardingRulesRequest extends $dara.Model {
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
   * You can generate a client token from your client and make sure that the client token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each request is different.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * The forwarding rule configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  forwardingRules?: CreateForwardingRulesRequestForwardingRules[];
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
   * The ID of the region where the Global Accelerator instance is deployed. The only valid value is **cn-hangzhou**.
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
      forwardingRules: { 'type': 'array', 'itemType': CreateForwardingRulesRequestForwardingRules },
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

