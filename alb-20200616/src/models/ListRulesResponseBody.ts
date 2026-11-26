// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyRulesRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether credentials are allowed. Valid values:
   * 
   * - **on**: Credentials are allowed.
   * - **off**: Credentials are not allowed.
   * 
   * @example
   * on
   */
  allowCredentials?: string;
  /**
   * @remarks
   * The allowed cross-origin headers.
   */
  allowHeaders?: string[];
  /**
   * @remarks
   * The HTTP methods allowed for cross-origin access.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The allowed origins.
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

export class ListRulesResponseBodyRulesRuleActionsFixedResponseConfig extends $dara.Model {
  /**
   * @remarks
   * The fixed content to return. The content can be up to 1 KB in size and can contain only ASCII characters.
   * 
   * @example
   * dssacav
   */
  content?: string;
  /**
   * @remarks
   * The format of the fixed content to return.
   * 
   * Valid values: **text/plain**, **text/css**, **text/html**, **application/javascript**, and **application/json**.
   * 
   * @example
   * text/plain
   */
  contentType?: string;
  /**
   * @remarks
   * The HTTP response code to return. Only numeric strings in the format of **HTTP_2xx**, **HTTP_4xx**, and **HTTP_5xx** are supported, where **x** is any digit.
   * 
   * @example
   * HTTP_2xx
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

export class ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable session persistence across server groups when multiple server groups are specified.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The timeout period for session persistence when Enabled is set to true. Unit: seconds. Valid values: 1 to 86400.
   * 
   * @example
   * 100
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

export class ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination server group to which requests are forwarded.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight. Valid values: **0** to **100**.
   * 
   * @example
   * 2
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

export class ListRulesResponseBodyRulesRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The session persistence configuration across server groups.
   */
  serverGroupStickySession?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The list of destination server groups to which requests are forwarded.
   */
  serverGroupTuples?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupTuples },
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

export class ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the header field to insert. The name must be 1 to 40 characters in length and can contain lowercase and uppercase letters a to z, digits, underscores (_), and hyphens (-). The header field name cannot be used more than once in `InsertHeader`.
   * 
   * > You cannot use **Cookie** or **Host** as the header field name.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The content of the header field to insert.
   * 
   * - If **ValueType** is set to **SystemDefined**, the following values are supported:
   *     - **ClientSrcPort**: the client port.
   *     - **ClientSrcIp**: the client IP address.
   *     - **Protocol**: the protocol used by the client request (HTTP or HTTPS).
   *     - **SLBId**: the load balancing instance ID.
   *     - **SLBPort**: the load balancing instance listener port.
   * - If **ValueType** is set to **UserDefined**: you can specify a custom header field content. The content must be 1 to 128 characters in length and can contain wildcards such as asterisks (\*) and question marks (?), as well as printable characters with ASCII values in the range of `ch >= 32 && ch < 127`. The content cannot start or end with a space.
   * - If **ValueType** is set to **ReferenceHeader**: you can reference a field from the request header. The value must be 1 to 128 characters in length and can contain lowercase letters a to z, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * ClientSrcPort
   */
  value?: string;
  /**
   * @remarks
   * The content type of the header field. Valid values:
   * 
   * - **UserDefined**: user-defined.
   * 
   * - **ReferenceHeader**: references a field from the client request header.
   * 
   * - **SystemDefined**: system-defined.
   * 
   * @example
   * SystemDefined
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

export class ListRulesResponseBodyRulesRuleActionsRedirectConfig extends $dara.Model {
  /**
   * @remarks
   * The host address to redirect to. Valid values:
   * - **${host}** (default): this value cannot be concatenated with other characters.
   * - Other values. The character set and format restrictions are as follows:
   *     - The hostname must be 3 to 128 characters in length and can contain lowercase letters a to z, digits, hyphens (-), periods (.), asterisks (\*), and question marks (?).
   *     - The hostname must contain at least one period (.) and cannot start or end with a period (.).
   *     - The rightmost domain label can contain only letters and wildcards, and cannot contain digits or hyphens (-).
   *     - Hyphens (-) cannot appear at the beginning or end of other domain labels.
   *     - Asterisks (\*) and question marks (?) can appear at any position within a domain label.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The redirect type. Valid values: **301**, **302**, **303**, **307**, and **308**.
   * 
   * @example
   * 301
   */
  httpCode?: string;
  /**
   * @remarks
   * The path to redirect to. Valid values:
   * - **${path}** (default): you can reference **${host}**, **${protocol}**, and **${port}**, which consist of **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. These variables can be used together or concatenated with strings from the following valid character set.
   * - Other values. The character set and format restrictions are as follows:
   *     - The path must be 1 to 128 characters in length.
   *     - The path must start with a forward slash (/) and can contain letters, digits, and the special characters `$-_.+/&~@:`. The characters `"%#;!()[]^," ` are not supported. Asterisks (\*) and question marks (?) are supported as wildcards.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to redirect to. Valid values:
   * - **${port}** (default): this value cannot be used with other characters.
   * - Other values: **1** to **63335**.
   * 
   * @example
   * 10
   */
  port?: string;
  /**
   * @remarks
   * The protocol to redirect to. Valid values:
   * - **${protocol}** (default): this value cannot be concatenated with other characters.
   * - **HTTP** or **HTTPS**.
   * 
   *     
   * > HTTPS listeners support only redirects to HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string to redirect to. The query string must be 1 to 128 characters in length and can contain lowercase letters and visible characters. The characters `#[]{}\|<>&` are not supported.
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

export class ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the header field to remove. The name must be 1 to 40 characters in length and can contain lowercase and uppercase letters a to z, digits, underscores (_), and hyphens (-). The header field name cannot be used more than once in RemoveHeader.
   * 
   * * Request direction (Direction is set to Request): the header name cannot be set to the following fields (case-insensitive): `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`.
   * * Response direction (Direction is set to Response): the header name cannot be set to the following fields (case-insensitive): `connection`, `upgrade`, `content-length`, `transfer-encoding`.
   * 
   * @example
   * key
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

export class ListRulesResponseBodyRulesRuleActionsRewriteConfig extends $dara.Model {
  /**
   * @remarks
   * The host address to redirect to. Valid values:
   * - **${host}** (default): this value cannot be concatenated with other characters.
   * - Other values. The character set and format restrictions are as follows:
   *     - The hostname must be 3 to 128 characters in length and can contain lowercase letters a to z, digits, hyphens (-), periods (.), asterisks (\*), and question marks (?).
   *     - The hostname must contain at least one period (.) and cannot start or end with a period (.).
   *     - The rightmost domain label can contain only letters and wildcards, and cannot contain digits or hyphens (-).
   *     - Hyphens (-) cannot appear at the beginning or end of other domain labels.
   *     - Asterisks (\*) and question marks (?) can appear at any position within a domain label.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The destination path for the internal redirect. The path must be 1 to 128 characters in length, start with a forward slash (/), and can contain letters, digits, asterisks (\*), question marks (?), and `$-_.+/&~@:`. The characters `"%#;!()[]^," ` are not supported.
   * 
   * @example
   * /tsdf
   */
  path?: string;
  /**
   * @remarks
   * The query string for the internal redirect. The query string must be 1 to 128 characters in length and can contain lowercase letters and visible characters. The characters `#[]{}\|<>&` are not supported.
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

export class ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The QPS for each IP address. Valid values: **1** to **100000**.
   * 
   * > If you configure both the **QPS** and **PerIpQps** parameters, the value of **PerIpQps** must be smaller than the value of **QPS**.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * The queries per second (QPS). Valid values: **1** to **100000**.
   * 
   * @example
   * 4
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

export class ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-00mkgijak0w4qgz9****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight. Valid values: **0** to **100**.
   * 
   * @example
   * 2
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

export class ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration for mirroring traffic to a server group.
   */
  serverGroupTuples?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
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

export class ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration for mirroring traffic to a server group.
   */
  mirrorGroupConfig?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The destination of traffic mirroring, which can be a server group.
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
      mirrorGroupConfig: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig,
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

export class ListRulesResponseBodyRulesRuleActions extends $dara.Model {
  /**
   * @remarks
   * The CORS configuration.
   */
  corsConfig?: ListRulesResponseBodyRulesRuleActionsCorsConfig;
  /**
   * @remarks
   * The fixed response configuration.
   */
  fixedResponseConfig?: ListRulesResponseBodyRulesRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The forward group configuration.
   */
  forwardGroupConfig?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The insert header field configuration.
   */
  insertHeaderConfig?: ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The order in which the forwarding rule action is executed. Valid values: **1** to **50000**. Actions are executed in ascending order of value. The value cannot be empty or duplicated.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The redirect configuration.
   */
  redirectConfig?: ListRulesResponseBodyRulesRuleActionsRedirectConfig;
  /**
   * @remarks
   * The remove HTTP header configuration.
   */
  removeHeaderConfig?: ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The rewrite configuration.
   */
  rewriteConfig?: ListRulesResponseBodyRulesRuleActionsRewriteConfig;
  /**
   * @remarks
   * The traffic throttling configuration.
   */
  trafficLimitConfig?: ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The traffic mirror configuration.
   */
  trafficMirrorConfig?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - **ForwardGroup**: forwards requests to multiple virtual server groups.
   * 
   * - **Redirect**: redirects requests.
   * 
   * - **FixedResponse**: returns a fixed response.
   * 
   * - **Rewrite**: rewrites requests.
   * 
   * - **InsertHeader**: inserts a header field.
   * 
   * - **RemoveHeaderConfig**: deletes a header field.
   * 
   * - **TrafficLimitConfig**: throttles traffic.
   * 
   * - **TrafficMirrorConfig**: mirrors traffic.
   * 
   * - **CorsConfig**: enables cross-origin resource sharing (CORS).
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
      corsConfig: ListRulesResponseBodyRulesRuleActionsCorsConfig,
      fixedResponseConfig: ListRulesResponseBodyRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: ListRulesResponseBodyRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: ListRulesResponseBodyRulesRuleActionsRedirectConfig,
      removeHeaderConfig: ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig,
      rewriteConfig: ListRulesResponseBodyRulesRuleActionsRewriteConfig,
      trafficLimitConfig: ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig,
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

export class ListRulesResponseBodyRulesRuleConditionsCookieConfigValues extends $dara.Model {
  /**
   * @remarks
   * The cookie key. The key must be 1 to 100 characters in length and can contain lowercase letters, printable characters, asterisks (*), and question marks (?). The key cannot contain spaces or `#[]{}\|<>&`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The cookie value. The value must be 1 to 128 characters in length and can contain lowercase letters, printable characters, asterisks (*), and question marks (?). The value cannot contain spaces or `#[]{}\|<>&`.
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

export class ListRulesResponseBodyRulesRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie values.
   */
  values?: ListRulesResponseBodyRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditionsCookieConfigValues },
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

export class ListRulesResponseBodyRulesRuleConditionsHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The header field key. The key must be 1 to 40 characters in length and can contain letters a to z, digits, hyphens (-), and underscores (_). Cookie and Host are not supported.
   * 
   * @example
   * Port
   */
  key?: string;
  /**
   * @remarks
   * The header field values.
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

export class ListRulesResponseBodyRulesRuleConditionsHostConfig extends $dara.Model {
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

export class ListRulesResponseBodyRulesRuleConditionsMethodConfig extends $dara.Model {
  /**
   * @remarks
   * The request methods.
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

export class ListRulesResponseBodyRulesRuleConditionsPathConfig extends $dara.Model {
  /**
   * @remarks
   * The forwarding paths.
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

export class ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues extends $dara.Model {
  /**
   * @remarks
   * The query string key. The key must be 1 to 100 characters in length and can contain lowercase letters, printable characters, asterisks (*), and question marks (?). The key cannot contain spaces or `#[]{}\|<>&`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The query string value. The value must be 1 to 128 characters in length and can contain lowercase letters, printable characters, asterisks (*), and question marks (?). The value cannot contain spaces or `#[]{}\|<>&`.
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

export class ListRulesResponseBodyRulesRuleConditionsQueryStringConfig extends $dara.Model {
  /**
   * @remarks
   * The query strings.
   */
  values?: ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditionsQueryStringConfigValues },
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

export class ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The key of the response HTTP header. The key must be 1 to 40 characters in length. It can contain lowercase letters, digits, hyphens (-), and underscores (_). Cookie and Host are not supported.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The list of response HTTP header values.
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

export class ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig extends $dara.Model {
  /**
   * @remarks
   * The list of response status codes.
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

export class ListRulesResponseBodyRulesRuleConditionsSourceIpConfig extends $dara.Model {
  /**
   * @remarks
   * The source IP addresses to match.
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

export class ListRulesResponseBodyRulesRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The cookie configuration.
   */
  cookieConfig?: ListRulesResponseBodyRulesRuleConditionsCookieConfig;
  /**
   * @remarks
   * The header field configuration.
   */
  headerConfig?: ListRulesResponseBodyRulesRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The hostname configuration.
   */
  hostConfig?: ListRulesResponseBodyRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The request method configuration.
   */
  methodConfig?: ListRulesResponseBodyRulesRuleConditionsMethodConfig;
  /**
   * @remarks
   * The forwarding path configuration.
   */
  pathConfig?: ListRulesResponseBodyRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The query string configuration.
   */
  queryStringConfig?: ListRulesResponseBodyRulesRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The response HTTP header configuration.
   */
  responseHeaderConfig?: ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The response status code configuration.
   */
  responseStatusCodeConfig?: ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * The source IP-based service traffic matching configuration.
   */
  sourceIpConfig?: ListRulesResponseBodyRulesRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The type of the forwarding rule. Valid values:
   * 
   * - **Host**: host.
   * 
   * - **Path**: path.
   * 
   * - **Header**: HTTP header field.
   * 
   * - **QueryString**: query character string.
   * 
   * - **Method**: request method.
   * 
   * - **Cookie**: cookie.
   * 
   * - **SourceIp**: source IP address.
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
      cookieConfig: ListRulesResponseBodyRulesRuleConditionsCookieConfig,
      headerConfig: ListRulesResponseBodyRulesRuleConditionsHeaderConfig,
      hostConfig: ListRulesResponseBodyRulesRuleConditionsHostConfig,
      methodConfig: ListRulesResponseBodyRulesRuleConditionsMethodConfig,
      pathConfig: ListRulesResponseBodyRulesRuleConditionsPathConfig,
      queryStringConfig: ListRulesResponseBodyRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: ListRulesResponseBodyRulesRuleConditionsSourceIpConfig,
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

export class ListRulesResponseBodyRulesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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

export class ListRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * The direction of the forwarding rule. Valid values:
   * 
   * * Request (default): request-based. Condition matching and corresponding processing are performed on requests sent from clients to ALB.
   * 
   * * Response: response-based. Condition matching and corresponding processing are performed on responses returned from backend server groups to ALB.
   * 
   * > ALB Basic Edition instances do not support the Response type.
   * 
   * @example
   * Request
   */
  direction?: string;
  /**
   * @remarks
   * The ID of the listener to which the forwarding rule belongs.
   * 
   * @example
   * lsn-i35udpz3pxsmnf****
   */
  listenerId?: string;
  /**
   * @remarks
   * The instance ID of the load balancing instance to which the forwarding rule belongs.
   * 
   * @example
   * alb-x30o38azsuj0sx****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The rule priority. Valid values: **1** to **10000**. A smaller value indicates a higher priority.
   * 
   * > Rule priorities must be unique within the same listener.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The list of forwarding rule actions.
   */
  ruleActions?: ListRulesResponseBodyRulesRuleActions[];
  /**
   * @remarks
   * The list of forwarding rule conditions.
   */
  ruleConditions?: ListRulesResponseBodyRulesRuleConditions[];
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * @example
   * rule-bpn0kn908w4nbw****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * rule-instance-test
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the forwarding rule. Valid values:
   * 
   * - **Provisioning**: being created.
   * 
   * - **Configuring**: being modified.
   * 
   * - **Available**: running.
   * 
   * @example
   * Available
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListRulesResponseBodyRulesTags[];
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listenerId: 'ListenerId',
      loadBalancerId: 'LoadBalancerId',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      listenerId: 'string',
      loadBalancerId: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesRuleConditions },
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      tags: { 'type': 'array', 'itemType': ListRulesResponseBodyRulesTags },
    };
  }

  validate() {
    if(Array.isArray(this.ruleActions)) {
      $dara.Model.validateArray(this.ruleActions);
    }
    if(Array.isArray(this.ruleConditions)) {
      $dara.Model.validateArray(this.ruleConditions);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned for this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates whether a next query exists. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876F******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of forwarding rules.
   */
  rules?: ListRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of data records returned for the current request.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListRulesResponseBodyRules },
      totalCount: 'number',
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

