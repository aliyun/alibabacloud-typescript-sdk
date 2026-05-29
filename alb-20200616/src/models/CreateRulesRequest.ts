// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRulesRequestRulesRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Include credentials in CORS requests. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  allowCredentials?: string;
  /**
   * @remarks
   * The trusted header of CORS requests.
   */
  allowHeaders?: string[];
  /**
   * @remarks
   * The trusted HTTP methods of CORS requests.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The trusted origins of CORS requests.
   */
  allowOrigin?: string[];
  /**
   * @remarks
   * The headers that can be exposed.
   */
  exposeHeaders?: string[];
  /**
   * @remarks
   * The maximum cache time for preflight requests in the browser. Unit: seconds.
   * 
   * Valid values: **-1** to **172800**.
   * 
   * @example
   * 1000
   */
  maxAge?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigin: 'AllowOrigin',
      exposeHeaders: 'ExposeHeaders',
      maxAge: 'MaxAge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'string',
      allowHeaders: { 'type': 'array', 'itemType': 'string' },
      allowMethods: { 'type': 'array', 'itemType': 'string' },
      allowOrigin: { 'type': 'array', 'itemType': 'string' },
      exposeHeaders: { 'type': 'array', 'itemType': 'string' },
      maxAge: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowHeaders)) {
      $dara.Model.validateArray(this.allowHeaders);
    }
    if(Array.isArray(this.allowMethods)) {
      $dara.Model.validateArray(this.allowMethods);
    }
    if(Array.isArray(this.allowOrigin)) {
      $dara.Model.validateArray(this.allowOrigin);
    }
    if(Array.isArray(this.exposeHeaders)) {
      $dara.Model.validateArray(this.exposeHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsFixedResponseConfig extends $dara.Model {
  /**
   * @remarks
   * The content of the custom response. The content cannot exceed 1 KB in size, and can contain only ASCII characters.
   * 
   * @example
   * dssacav
   */
  content?: string;
  /**
   * @remarks
   * The format of the custom response.
   * 
   * Valid values: **text/plain**, **text/css**, **text/html**, **application/javascript**, and **application/json**
   * 
   * @example
   * text/plain
   */
  contentType?: string;
  /**
   * @remarks
   * The HTTP status code in responses. Valid values: **2xx**, **4xx**, and **5xx**. The value must be a numeric string. **x** can be any digit.
   * 
   * @example
   * HTTP_200
   */
  httpCode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      httpCode: 'HttpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      httpCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession extends $dara.Model {
  /**
   * @remarks
   * Enables session persistence. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The timeout period for sessions. Unit: seconds. Valid values: **1** to **86400**. Default value: **1000**.
   * 
   * @example
   * 2
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-k86c1ov501id6p****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight of the server group. A larger value indicates a higher weight. A server group with a higher weight receives more requests. Valid values: **0** to **100**
   * 
   * *   If the number of destination server groups is 1, the default weight of the server group is **100**. You can specify another value.
   * *   If the number of destination server groups is larger than 1, you must specify weights for the server groups.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of session persistence.
   */
  serverGroupStickySession?: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The server groups to which requests are forwarded.
   */
  serverGroupTuples?: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples },
    };
  }

  validate() {
    if(this.serverGroupStickySession && typeof (this.serverGroupStickySession as any).validate === 'function') {
      (this.serverGroupStickySession as any).validate();
    }
    if(Array.isArray(this.serverGroupTuples)) {
      $dara.Model.validateArray(this.serverGroupTuples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsInsertHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The key of the header, which can contain a maximum of 40 characters. Supported characters include letters, digits, underscores (_), and hyphens (-). The header keys specified by **InsertHeaderConfig** must be unique.
   * 
   * >  You cannot specify the following header keys: `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`, and `x-forwarded-host`. The header keys are case-insensitive.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the header.
   * 
   * *   If **ValueType** is set to **SystemDefined**, you can set this parameter to one of the following values:
   * 
   *     *   **ClientSrcPort**: the client port.
   *     *   **ClientSrcIp**: the client IP address.
   *     *   **Protocol**: the request protocol (HTTP or HTTPS).
   *     *   **SLBId**: the ID of the ALB instance.
   *     *   **SLBPort**: the listener port of the ALB instance.
   * 
   * *   If **ValueType** is set to **UserDefined**, specify a custom header value. The header value can contain a maximum of 128 characters, and supports printable characters whose ASCII values are `greater than or equal to 32 and lower than 127` and asterisks (\\*) and question marks (?) as wildcard characters. Quotation marks (`"`) are not supported. The header value cannot start or end with a space or end with a backslash (`\\`).
   * 
   * *   If **ValueType** is set to **ReferenceHeader**, you can reference a value from request headers. The value can contain a maximum of 128 characters. Supported characters include lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * UserDefined
   */
  value?: string;
  /**
   * @remarks
   * The type of the header value. Valid values are:
   * 
   * *   **UserDefined**: a custom header value
   * *   **ReferenceHeader**: a header value that references one of the request headers
   * *   **SystemDefined**: a system-defined header value
   * 
   * @example
   * UserDefined
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsRedirectConfig extends $dara.Model {
  /**
   * @remarks
   * The hostname to which requests are redirected. Valid values are:
   * 
   * *   **${host}** (default): This value cannot be concatenated with any other characters.
   * 
   * *   A custom hostname, which must meet the following requirements:
   * 
   *     *   Contain 3 to 128 characters. Supported characters include lowercase letters, digits, and the following characters: - . \\* (as wildcard characters) = ~ _ + \\ ^ ! $ & | ( ) [ ] ?
   *     *   Contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters, and cannot contain digits or hyphens (-). The leftmost `domain label` can be an asterisk (\\*).
   *     *   The other domain labels do not start or end with hyphens (-).
   *     *   Support asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The HTTP status code that indicates the redirect type. Valid values: **301**, **302**, **303**, **307**, and **308**.
   * 
   * @example
   * 301
   */
  httpCode?: string;
  /**
   * @remarks
   * The path to which requests are redirected. Valid values are:
   * 
   * *   **${path}** (default): You can reference **${host}**, **${protocol}**, and **${port}**, with each appearing only once. You can also concatenate any preceding variable with strings that meet the following requirements.
   * 
   * *   A custom path, which must meet the following requirements:
   * 
   *     *   Contain a maximum of 128 characters and is case-sensitive. Support asterisks (\\*) and question marks (?) as wildcard characters.
   *     *   Start with a forward slash (/), and can contain letters, digits, and the following special characters: `$-_.+/&~@:\\"*?`. It cannot contain the following special characters: `“%#;!()[]^,”\\"`. Support asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are redirected. Valid values are:
   * 
   * *   **${port}** (default): This value cannot be concatenated with any other characters.
   * *   A custom port number. Valid values: **1 to 63335**.
   * 
   * @example
   * 10
   */
  port?: string;
  /**
   * @remarks
   * The redirect protocol. Valid values are:
   * 
   * *   **${protocol}** (default): This value cannot be modified or concatenated with any other characters.
   * *   **HTTP**
   * *   **HTTPS**
   * 
   * > 
   * 
   * *   For HTTPS listeners, you can only redirect HTTPS to HTTPS.
   * 
   * *   For HTTP listeners, you can redirect HTTP to either HTTP or HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string to which requests are redirected.
   * 
   * *   **${query}** (default): You can reference **${host}**, **${protocol}**, and **${port}**, with each appearing only once. You can also concatenate any preceding variable with strings that meet the following requirements.
   * 
   * *   A custom query string, which must meet the following requirements:
   * 
   *     *   Contain a maximum of 128 characters.
   *     *   Contain printable characters, excluding space characters, the special characters `#[]{}\\|<>"`, and uppercase letters.
   * 
   * @example
   * quert
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      httpCode: 'HttpCode',
      path: 'Path',
      port: 'Port',
      protocol: 'Protocol',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      httpCode: 'string',
      path: 'string',
      port: 'string',
      protocol: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsRemoveHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The key of the header to be removed. It can contain a maximum of 40 characters and supports letters, digits, underscores (_), and hyphens (-). The header keys specified in RemoveHeader must be unique.
   * 
   * *   If Direction is set to Request, the following request headers cannot be removed: `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`, and `x-forwarded-host`.
   * *   If Direction is set to Response, the following response headers (case-insensitive) cannot be removed: `connection`, `upgrade`, `content-length`, and `transfer-encoding`.
   * 
   * @example
   * test
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsRewriteConfig extends $dara.Model {
  /**
   * @remarks
   * The hostname to which requests are rewritten. Valid values are:
   * 
   * *   **${host}** (default): This value cannot be concatenated with any other characters.
   * 
   * *   A custom hostname, which must meet the following requirements:
   * 
   *     *   Contain 3 to 128 characters. Supported characters include lowercase letters, digits, and the following characters: - . \\* (as wildcard characters) = ~ _ + \\ ^ ! $ & | ( ) [ ] ?
   *     *   Contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters, and cannot contain digits or hyphens (-). The leftmost `domain label` can be an asterisk (\\*).
   *     *   The other domain labels do not start or end with hyphens (-). You can use asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The path to which requests are rewritten. Valid values are:
   * 
   * *   **${path}** (default): You can reference **${host}**, **${protocol}**, and **${port}**, with each appearing only once. You can also concatenate any preceding variable with strings that meet the following requirements.
   * 
   * *   A custom path, which must meet the following requirements:
   * 
   *     *   Contain a maximum of 128 characters and is case-sensitive. Support asterisks (\\*) and question marks (?) as wildcard characters.
   *     *   Start with a forward slash (/), and can contain letters, digits, and the following special characters: `$-_.+/&~@:\\"*?`. It cannot contain the following special characters: `“%#;!()[]^,”\\"`. Support asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /tsdf
   */
  path?: string;
  /**
   * @remarks
   * The query string of the URL to which requests are rewritten.
   * 
   * *   **${query}** (default): You can reference **${host}**, **${protocol}**, and **${port}**, with each appearing only once. You can also concatenate any preceding variable with strings that meet the following requirements.
   * 
   * *   A custom query string, which must meet the following requirements:
   * 
   *     *   Contain a maximum of 128 characters.
   *     *   Contain printable characters, excluding space characters, the special characters `#[]{}\\|<>"`, and uppercase letters.
   * 
   * @example
   * quedsa
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      path: 'Path',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      path: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsTrafficLimitConfig extends $dara.Model {
  /**
   * @remarks
   * QPS per IP address. Valid values: **1 to 1000000**.
   * 
   * >  If both the **QPS** and **PerIpQps** parameters are specified, the value of the **QPS** parameter must be smaller than that of the PerIpQps parameter.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * Queries per second (QPS). Valid values: **1** to **1000000**.
   * 
   * @example
   * 100
   */
  QPS?: number;
  static names(): { [key: string]: string } {
    return {
      perIpQps: 'PerIpQps',
      QPS: 'QPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perIpQps: 'number',
      QPS: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * srg-00mkgijak0w4qgz9****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The server group to which traffic is mirrored.
   */
  serverGroupTuples?: CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
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

export class CreateRulesRequestRulesRuleActionsTrafficMirrorConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the server group to which traffic is mirrored.
   */
  mirrorGroupConfig?: CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The type of destination to which network traffic is mirrored. Valid value:
   * 
   * *   **ForwardGroupMirror**: a server group
   * 
   * @example
   * ForwardGroupMirror
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      mirrorGroupConfig: 'MirrorGroupConfig',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mirrorGroupConfig: CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig,
      targetType: 'string',
    };
  }

  validate() {
    if(this.mirrorGroupConfig && typeof (this.mirrorGroupConfig as any).validate === 'function') {
      (this.mirrorGroupConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleActions extends $dara.Model {
  /**
   * @remarks
   * The CORS configuration.
   */
  corsConfig?: CreateRulesRequestRulesRuleActionsCorsConfig;
  /**
   * @remarks
   * The configuration of the action to return a fixed response.
   */
  fixedResponseConfig?: CreateRulesRequestRulesRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The configuration of the action to forward requests to server groups.
   */
  forwardGroupConfig?: CreateRulesRequestRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The configuration of the action to insert a header.
   */
  insertHeaderConfig?: CreateRulesRequestRulesRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority of the action. Valid values: **1 to 50000**. A lower value indicates a higher priority. The actions of a forwarding rule are applied in descending order of priority. This parameter is required. The priority of each action within a forwarding rule must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The configuration of the redirect action.
   * 
   * >  Do not set all parameters in **RedirectConfig** to default values, excluding **httpCode**.
   */
  redirectConfig?: CreateRulesRequestRulesRuleActionsRedirectConfig;
  /**
   * @remarks
   * The configuration of the action to remove a header.
   */
  removeHeaderConfig?: CreateRulesRequestRulesRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The configuration of the rewrite action.
   * 
   * >  If you specify a **Rewrite** action along with other types of actions in a forwarding rule, you must also specify a **ForwardGroup** action.
   */
  rewriteConfig?: CreateRulesRequestRulesRuleActionsRewriteConfig;
  /**
   * @remarks
   * The configuration of the action to throttle traffic.
   */
  trafficLimitConfig?: CreateRulesRequestRulesRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The configuration of the action to mirror traffic.
   */
  trafficMirrorConfig?: CreateRulesRequestRulesRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The type of the action. Valid values are:
   * 
   * *   **ForwardGroup**: forwards requests to multiple vServer groups.
   * *   **Redirect**: redirects requests.
   * *   **FixedResponse**: returns a fixed response.
   * *   **Rewrite**: rewrites requests.
   * *   **InsertHeader**: inserts a header.
   * *   **RemoveHeader**: deletes a header.
   * *   **TrafficLimit**: throttles traffic.
   * *   **trafficMirror**: mirrors network traffic.
   * *   **Cors**: forwards requests based on CORS.
   * 
   * Actions in each forwarding rule must meet the following requirements:
   * 
   * *   **Each forwarding rule must include one and only one of the following actions: **ForwardGroup**, **Redirect**, or **FixedResponse**, and this action must be performed last.**
   * *   **Each forwarding rule may contain none, one, or more actions of other types.************** You can specify multiple **InsertHeader** actions or one **Rewrite** action.
   * 
   * This parameter is required.
   * 
   * @example
   * ForwardGroup
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      corsConfig: 'CorsConfig',
      fixedResponseConfig: 'FixedResponseConfig',
      forwardGroupConfig: 'ForwardGroupConfig',
      insertHeaderConfig: 'InsertHeaderConfig',
      order: 'Order',
      redirectConfig: 'RedirectConfig',
      removeHeaderConfig: 'RemoveHeaderConfig',
      rewriteConfig: 'RewriteConfig',
      trafficLimitConfig: 'TrafficLimitConfig',
      trafficMirrorConfig: 'TrafficMirrorConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corsConfig: CreateRulesRequestRulesRuleActionsCorsConfig,
      fixedResponseConfig: CreateRulesRequestRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: CreateRulesRequestRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: CreateRulesRequestRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: CreateRulesRequestRulesRuleActionsRedirectConfig,
      removeHeaderConfig: CreateRulesRequestRulesRuleActionsRemoveHeaderConfig,
      rewriteConfig: CreateRulesRequestRulesRuleActionsRewriteConfig,
      trafficLimitConfig: CreateRulesRequestRulesRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: CreateRulesRequestRulesRuleActionsTrafficMirrorConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.corsConfig && typeof (this.corsConfig as any).validate === 'function') {
      (this.corsConfig as any).validate();
    }
    if(this.fixedResponseConfig && typeof (this.fixedResponseConfig as any).validate === 'function') {
      (this.fixedResponseConfig as any).validate();
    }
    if(this.forwardGroupConfig && typeof (this.forwardGroupConfig as any).validate === 'function') {
      (this.forwardGroupConfig as any).validate();
    }
    if(this.insertHeaderConfig && typeof (this.insertHeaderConfig as any).validate === 'function') {
      (this.insertHeaderConfig as any).validate();
    }
    if(this.redirectConfig && typeof (this.redirectConfig as any).validate === 'function') {
      (this.redirectConfig as any).validate();
    }
    if(this.removeHeaderConfig && typeof (this.removeHeaderConfig as any).validate === 'function') {
      (this.removeHeaderConfig as any).validate();
    }
    if(this.rewriteConfig && typeof (this.rewriteConfig as any).validate === 'function') {
      (this.rewriteConfig as any).validate();
    }
    if(this.trafficLimitConfig && typeof (this.trafficLimitConfig as any).validate === 'function') {
      (this.trafficLimitConfig as any).validate();
    }
    if(this.trafficMirrorConfig && typeof (this.trafficMirrorConfig as any).validate === 'function') {
      (this.trafficMirrorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesRuleConditionsCookieConfigValues extends $dara.Model {
  /**
   * @remarks
   * The cookie key.
   * 
   * *   Contain a maximum of 100 characters.
   * *   Support asterisks (\\*) and question marks (?) as wildcard characters.
   * *   Support printable characters, excluding uppercase letters, space characters, and the following special characters: `; # [ ] { } \\ | < > & "`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The cookie value.
   * 
   * *   Contain a maximum of 100 characters.
   * *   Support asterisks (\\*) and question marks (?) as wildcard characters.
   * *   Support printable characters, excluding uppercase letters, space characters, and the following special characters: `; # [ ] { } \\ | < > & "`.
   * 
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

export class CreateRulesRequestRulesRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs in cookies.
   */
  values?: CreateRulesRequestRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditionsCookieConfigValues },
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

export class CreateRulesRequestRulesRuleConditionsHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The key of the HTTP header.
   * 
   * *   Contain a maximum of 40 characters.
   * *   Support letters, digits, hyphens (-), and underscores (_).
   * *   Do not support Cookie or Host.
   * 
   * @example
   * Port
   */
  key?: string;
  /**
   * @remarks
   * The values of the HTTP header.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateRulesRequestRulesRuleConditionsHostConfig extends $dara.Model {
  /**
   * @remarks
   * The hostnames.
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

export class CreateRulesRequestRulesRuleConditionsMethodConfig extends $dara.Model {
  /**
   * @remarks
   * The HTTP request methods.
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

export class CreateRulesRequestRulesRuleConditionsPathConfig extends $dara.Model {
  /**
   * @remarks
   * The paths to which requests are forwarded.
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

export class CreateRulesRequestRulesRuleConditionsQueryStringConfigValues extends $dara.Model {
  /**
   * @remarks
   * The key of the query string.
   * 
   * *   Contain a maximum of 100 characters.
   * *   Support asterisks (\\*) and question marks (?) as wildcard characters. Support printable characters, excluding uppercase letters, space characters, and the following special characters: `# [ ] { } \\ | < > & "`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the query string.
   * 
   * *   Contain a maximum of 128 characters.
   * *   Support printable characters, excluding uppercase letters, space characters, and the following special characters: `# [ ] { } \\ | < > & "`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * 
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

export class CreateRulesRequestRulesRuleConditionsQueryStringConfig extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs in query strings.
   */
  values?: CreateRulesRequestRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditionsQueryStringConfigValues },
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

export class CreateRulesRequestRulesRuleConditionsResponseHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The key of the HTTP response header.
   * 
   * *   Contain a maximum of 40 characters.
   * *   Support letters, digits, hyphens (-), and underscores (_).
   * *   Do not support Cookie or Host.
   * 
   * @example
   * Port
   */
  key?: string;
  /**
   * @remarks
   * The values of the HTTP response header.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig extends $dara.Model {
  /**
   * @remarks
   * The response status codes.
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

export class CreateRulesRequestRulesRuleConditionsSourceIpConfig extends $dara.Model {
  /**
   * @remarks
   * The condition that matches requests based on source IP addresses.
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

export class CreateRulesRequestRulesRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The configuration of the cookie condition.
   */
  cookieConfig?: CreateRulesRequestRulesRuleConditionsCookieConfig;
  /**
   * @remarks
   * The configuration of the HTTP header condition.
   */
  headerConfig?: CreateRulesRequestRulesRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The configuration of the hostname condition.
   */
  hostConfig?: CreateRulesRequestRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The configuration of the HTTP request method condition.
   */
  methodConfig?: CreateRulesRequestRulesRuleConditionsMethodConfig;
  /**
   * @remarks
   * The configuration of the path condition.
   */
  pathConfig?: CreateRulesRequestRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The configurations of the query string condition.
   */
  queryStringConfig?: CreateRulesRequestRulesRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The configuration of the HTTP response header condition.
   */
  responseHeaderConfig?: CreateRulesRequestRulesRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The configuration of the response status code condition.
   */
  responseStatusCodeConfig?: CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * The configuration of the condition that matches requests based on source IP addresses.
   */
  sourceIpConfig?: CreateRulesRequestRulesRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The type of the condition. Valid values:
   * 
   * *   Host: forwards requests based on hosts.
   * *   Path: forwards requests based on paths.
   * *   Header: forwards requests based on HTTP headers.
   * *   QueryString: forwards requests based on query strings.
   * *   Method: forwards requests based on HTTP request methods.
   * *   Cookie: forwards requests based on cookies.
   * *   SourceIp: forwards requests based on source IP addresses.
   * *   ResponseHeader: forwards requests based on HTTP response headers.
   * *   ResponseStatusCode: forwards requests based on response status codes.
   * 
   * This parameter is required.
   * 
   * @example
   * Host
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cookieConfig: 'CookieConfig',
      headerConfig: 'HeaderConfig',
      hostConfig: 'HostConfig',
      methodConfig: 'MethodConfig',
      pathConfig: 'PathConfig',
      queryStringConfig: 'QueryStringConfig',
      responseHeaderConfig: 'ResponseHeaderConfig',
      responseStatusCodeConfig: 'ResponseStatusCodeConfig',
      sourceIpConfig: 'SourceIpConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cookieConfig: CreateRulesRequestRulesRuleConditionsCookieConfig,
      headerConfig: CreateRulesRequestRulesRuleConditionsHeaderConfig,
      hostConfig: CreateRulesRequestRulesRuleConditionsHostConfig,
      methodConfig: CreateRulesRequestRulesRuleConditionsMethodConfig,
      pathConfig: CreateRulesRequestRulesRuleConditionsPathConfig,
      queryStringConfig: CreateRulesRequestRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: CreateRulesRequestRulesRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: CreateRulesRequestRulesRuleConditionsSourceIpConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.cookieConfig && typeof (this.cookieConfig as any).validate === 'function') {
      (this.cookieConfig as any).validate();
    }
    if(this.headerConfig && typeof (this.headerConfig as any).validate === 'function') {
      (this.headerConfig as any).validate();
    }
    if(this.hostConfig && typeof (this.hostConfig as any).validate === 'function') {
      (this.hostConfig as any).validate();
    }
    if(this.methodConfig && typeof (this.methodConfig as any).validate === 'function') {
      (this.methodConfig as any).validate();
    }
    if(this.pathConfig && typeof (this.pathConfig as any).validate === 'function') {
      (this.pathConfig as any).validate();
    }
    if(this.queryStringConfig && typeof (this.queryStringConfig as any).validate === 'function') {
      (this.queryStringConfig as any).validate();
    }
    if(this.responseHeaderConfig && typeof (this.responseHeaderConfig as any).validate === 'function') {
      (this.responseHeaderConfig as any).validate();
    }
    if(this.responseStatusCodeConfig && typeof (this.responseStatusCodeConfig as any).validate === 'function') {
      (this.responseStatusCodeConfig as any).validate();
    }
    if(this.sourceIpConfig && typeof (this.sourceIpConfig as any).validate === 'function') {
      (this.sourceIpConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRulesRequestRulesTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. It can contain a maximum of 128 characters, cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. It can contain a maximum of 128 characters, cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * product
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

export class CreateRulesRequestRules extends $dara.Model {
  /**
   * @remarks
   * The traffic direction to which the forwarding rule is applied.
   * 
   * Valid values:
   * 
   * *   Response
   * *   Request
   * 
   * @example
   * Request
   */
  direction?: string;
  /**
   * @remarks
   * The priority of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The actions of the forwarding rule.
   * 
   * This parameter is required.
   */
  ruleActions?: CreateRulesRequestRulesRuleActions[];
  /**
   * @remarks
   * The conditions of the forwarding rule.
   * 
   * This parameter is required.
   */
  ruleConditions?: CreateRulesRequestRulesRuleConditions[];
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateRulesRequestRulesTag[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleName: 'RuleName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateRulesRequestRulesRuleConditions },
      ruleName: 'string',
      tag: { 'type': 'array', 'itemType': CreateRulesRequestRulesTag },
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
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

export class CreateRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a `2xx HTTP` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the Application Load Balancer (ALB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The details about the forwarding rules.
   * 
   * This parameter is required.
   */
  rules?: CreateRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      rules: { 'type': 'array', 'itemType': CreateRulesRequestRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

