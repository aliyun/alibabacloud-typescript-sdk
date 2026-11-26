// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow credentials. Valid values:
   * 
   * - **on**: yes.
   * - **off**: no.
   * 
   * @example
   * on
   */
  allowCredentials?: string;
  /**
   * @remarks
   * The list of allowed cross-origin headers.
   */
  allowHeaders?: string[];
  /**
   * @remarks
   * The allowed HTTP methods for cross-origin requests.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The list of allowed origins. You can specify a single asterisk (`*`) or one or more values.
   * - Each value must start with `http://` or `https://`, followed by a valid domain name or a first-level wildcard domain name (example: `http://*.test.abc.example.com`).
   * - You can omit the port or specify a port in the range of **1** to **65535**.
   */
  allowOrigin?: string[];
  /**
   * @remarks
   * The list of exposed headers.
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

export class CreateRuleRequestRuleActionsFixedResponseConfig extends $dara.Model {
  /**
   * @remarks
   * The fixed content to return. The maximum size is 1 KB. Only ASCII characters are supported.
   * 
   * @example
   * dssacav
   */
  content?: string;
  /**
   * @remarks
   * The format of the fixed content to return. Valid values: **text/plain**, **text/css**, **text/html**, **application/javascript**, and **application/json**.
   * 
   * @example
   * text/plain
   */
  contentType?: string;
  /**
   * @remarks
   * The HTTP status code to return. Only numeric strings in the format of **2xx**, **4xx**, or **5xx** are supported, where **x** represents any digit.
   * 
   * @example
   * 200
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

export class CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * - **true**: enables session persistence.
   * - **false** (default): disables session persistence.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The timeout period. Unit: seconds. Valid values: **1** to **86400**. Default value: **1000**.
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

export class CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The destination server group to which requests are forwarded.
   * 
   * @example
   * sgp-k86c1ov501id6p****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight. A greater value indicates a higher weight, which means that more requests are forwarded to the server group. Valid values: **0** to **100**.
   * - If only one destination server group is specified and the weight is not specified, the default value is **100**.
   * - If more than one destination server group is specified, you must specify the weight for each server group.
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

export class CreateRuleRequestRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The session persistence configuration across server groups.
   */
  serverGroupStickySession?: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The list of destination server groups to which requests are forwarded. You can add up to five destination server groups in a forwarding rule.
   */
  serverGroupTuples?: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRuleRequestRuleActionsForwardGroupConfigServerGroupTuples },
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

export class CreateRuleRequestRuleActionsInsertHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the header to insert. The name must be 1 to 40 characters in length and can contain letters, digits, underscores (_), and hyphens (-). Header names in **InsertHeaderConfig** must be unique.
   * > You cannot set the header name to any of the following fields (case-insensitive): `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`, and `x-forwarded-host`.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the header to insert.
   * - If **ValueType** is set to **SystemDefined**, valid values are:
   *     - **ClientSrcPort**: the client port.
   *     - **ClientSrcIp**: the client IP address.
   *     - **Protocol**: the protocol used by the client request (HTTP or HTTPS).
   *     - **SLBId**: the instance ID of the application load balancing instance.
   *     - **SLBPort**: the listener port of the application load balancing instance.
   * - If **ValueType** is set to **UserDefined**, you can customize the header value. The value must be 1 to 128 characters in length and can contain asterisks (*), question marks (?), and printable ASCII characters whose ASCII values are `ch >= 32 && ch < 127`. Double quotation marks (") are not supported. The value cannot start or end with a space, and cannot end with a backslash (\).
   * - If **ValueType** is set to **ReferenceHeader**, you can reference a field in the request header. The value must be 1 to 128 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * UserDefined
   */
  value?: string;
  /**
   * @remarks
   * The content type of the header field. Valid values:
   * - **UserDefined**: a custom header value.
   * - **ReferenceHeader**: a referenced value from a field in the request header.
   * - **SystemDefined**: a system-defined header value.
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

export class CreateRuleRequestRuleActionsRedirectConfig extends $dara.Model {
  /**
   * @remarks
   * The host to which requests are redirected. Valid values:
   * - **${host}** (default): If this value is used, it cannot be concatenated with other characters.
   * - Other values: The character set and format requirements are as follows:
   *     - The hostname must be 3 to 256 characters in length and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), equal signs (=), tildes (~), underscores (_), plus signs (+), backslashes (\), carets (^), exclamation marks (!), dollar signs ($), ampersands (&), vertical bars (|), parentheses (()), square brackets ([]), and question marks (?).
   *     - The hostname must contain at least one period (.), and the period (.) cannot be at the beginning or end.
   *     - The rightmost domain label can contain only letters and wildcards, and cannot contain digits or hyphens (-). The leftmost `domainlabel` can be an asterisk (*).
   *     - A hyphen (-) cannot be at the beginning or end of other domain labels.
   *     - Asterisks (*) and question marks (?) can appear anywhere in a domain label.
   * 
   * @example
   * ${host}
   */
  host?: string;
  /**
   * @remarks
   * The HTTP status code for the redirect. Valid values: **301**, **302**, **303**, **307**, and **308**.
   * 
   * @example
   * 301
   */
  httpCode?: string;
  /**
   * @remarks
   * The path to which requests are redirected. Valid values:
   * - **${path}** (default): You can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. These variables can be used together or concatenated with strings within the allowed character set listed below.
   * - Other values: The character set and format requirements are as follows:
   *     - The path must be 1 to 256 characters in length and is case-sensitive. Asterisks (*) and question marks (?) are supported as wildcards.
   *     - The path must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$-_.+/&~@:\"*?`. The following characters are not supported: `"`, `%`, `#`, `;`, `!`, `(`, `)`, `[`, `]`, `^`, `,`, and `\`. Asterisks (*) and question marks (?) are also supported.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are redirected. Valid values:
   * - **${port}** (default): This value cannot be used together with other characters.
   * - Other values: **1** to **63335**.
   * 
   * @example
   * 10
   */
  port?: string;
  /**
   * @remarks
   * The protocol to which requests are redirected. Valid values:
   * - **${protocol}** (default): This value can only be used independently and cannot be modified or concatenated with other characters.
   * - **HTTP**
   * - **HTTPS**
   * > 
   * > - HTTPS listeners support redirection only to the HTTPS protocol.
   * > - HTTP listeners support redirection to both HTTP and HTTPS protocols.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string to which requests are redirected. Valid values:
   * - **${query}** (default): You can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. These variables can be used together or concatenated with strings within the allowed character set listed below.
   * - Other values: The character set and format requirements are as follows:
   *     - The query string must be 1 to 128 characters in length.
   *     - Visible characters are supported. Spaces and ``#[]{}\|<>"`` are not supported. Letters must be lowercase.
   * 
   * @example
   * ${query}
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

export class CreateRuleRequestRuleActionsRemoveHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the header to remove. The name must be 1 to 40 characters in length and can contain letters, digits, underscores (_), and hyphens (-). Header names in RemoveHeader must be unique.
   * - Request direction (when Direction is set to Request): You cannot set the header name to any of the following fields (case-insensitive): `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`, and `x-forwarded-host`.
   * - Response direction (when Direction is set to Response): You cannot set the header name to any of the following fields (case-insensitive): `connection`, `upgrade`, `content-length`, and `transfer-encoding`.
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

export class CreateRuleRequestRuleActionsRewriteConfig extends $dara.Model {
  /**
   * @remarks
   * The destination host for the internal rewrite. Valid values:
   * - **${host}** (default): This value cannot be concatenated with other characters.
   * - Other values: The character format requirements are as follows:
   *     - The hostname must be 3 to 256 characters in length and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), equal signs (=), tildes (~), underscores (_), plus signs (+), backslashes (\), carets (^), exclamation marks (!), dollar signs ($), ampersands (&), vertical bars (|), parentheses (()), square brackets ([]), and question marks (?).
   *     - The hostname must contain at least one period (.), and the period (.) cannot be at the beginning or end.
   *     - The rightmost domain label can contain only letters and wildcards, and cannot contain digits or hyphens (-). The leftmost `domainlabel` can be an asterisk (*).
   *     - A hyphen (-) cannot be at the beginning or end of other domain labels. Asterisks (*) and question marks (?) can appear anywhere in a domain label.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The path to which requests are redirected. Valid values:
   * - **${path}** (default): You can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. These variables can be used together or concatenated with strings within the allowed character set listed below.
   * - Other values: The character set and format requirements are as follows:
   *     - The path must be 1 to 256 characters in length and is case-sensitive. Asterisks (*) and question marks (?) are supported as wildcards.
   *     - The path must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$-_.+/&~@:\"*?`. The following characters are not supported: `"`, `%`, `#`, `;`, `!`, `(`, `)`, `[`, `]`, `^`, `,`, and `\`. Asterisks (*) and question marks (?) are also supported.
   * 
   * @example
   * /tsdf
   */
  path?: string;
  /**
   * @remarks
   * The query string for the internal rewrite. Valid values:
   * - **${query}** (default): You can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. These variables can be used together or concatenated with strings within the allowed character set listed below.
   * - Other values: The character set and format requirements are as follows:
   *     - The query string must be 1 to 128 characters in length.
   *     - Visible characters are supported. Spaces and ``#[]{}\|<>"`` are not supported. Letters must be lowercase.
   * 
   * @example
   * ${query}
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

export class CreateRuleRequestRuleActionsTrafficLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The number of queries per second from a single IP address. Valid values: **1** to **1000000**.
   * > If the **QPS** parameter is also configured, the value of **PerIpQps** must be less than the value of **QPS**.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * The number of queries per second (QPS). Valid values: **1** to **1000000**.
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

export class CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-00mkgijak0w4qgz9****
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

export class CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration for mirroring traffic to a server group.
   */
  serverGroupTuples?: CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
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

export class CreateRuleRequestRuleActionsTrafficMirrorConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration for mirroring traffic to a server group.
   */
  mirrorGroupConfig?: CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The target type for traffic mirroring. Valid values:
   * - **ForwardGroupMirror**: mirrors traffic to a server group.
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
      mirrorGroupConfig: CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig,
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

export class CreateRuleRequestRuleActions extends $dara.Model {
  /**
   * @remarks
   * The CORS configuration.
   */
  corsConfig?: CreateRuleRequestRuleActionsCorsConfig;
  /**
   * @remarks
   * The fixed response content configuration.
   */
  fixedResponseConfig?: CreateRuleRequestRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The list of destination server groups to which requests are forwarded. You can add up to five destination server groups in a forwarding rule.
   */
  forwardGroupConfig?: CreateRuleRequestRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The configuration for inserting an HTTP header.
   */
  insertHeaderConfig?: CreateRuleRequestRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The execution order of the forwarding rule action. Valid values: **1** to **50000**. Actions are executed in ascending order of their values. The value cannot be empty and must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The redirect configuration.
   * > For the parameters in **RedirectConfig**, you cannot use default values for all parameters except **HttpCode**.
   */
  redirectConfig?: CreateRuleRequestRuleActionsRedirectConfig;
  /**
   * @remarks
   * The configuration for removing an HTTP header.
   */
  removeHeaderConfig?: CreateRuleRequestRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The rewrite configuration.
   * > If multiple actions are configured in the same forwarding rule, the **RewriteConfig** action must be used together with the **ForwardGroup** action type.
   */
  rewriteConfig?: CreateRuleRequestRuleActionsRewriteConfig;
  /**
   * @remarks
   * The traffic throttling configuration.
   */
  trafficLimitConfig?: CreateRuleRequestRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The traffic mirroring configuration.
   */
  trafficMirrorConfig?: CreateRuleRequestRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - **ForwardGroup**: forward requests to multiple virtual services.
   * 
   * - **Redirect**: redirect requests.
   * 
   * - **FixedResponse**: return a fixed response.
   * 
   * - **Rewrite**: rewrite requests.
   * 
   * - **InsertHeader**: insert an HTTP header.
   * 
   * - **RemoveHeader**: delete an HTTP header.
   * 
   * - **TrafficLimit**: limit traffic.
   * 
   * - **TrafficMirror**: mirror traffic.
   * 
   * - **Cors**: configure cross-origin resource sharing (CORS).
   * 
   * > A forwarding rule must contain at least one **ForwardGroup**, **Redirect**, or **FixedResponse** action. If it is used together with other action types, it must be executed last.
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
      corsConfig: CreateRuleRequestRuleActionsCorsConfig,
      fixedResponseConfig: CreateRuleRequestRuleActionsFixedResponseConfig,
      forwardGroupConfig: CreateRuleRequestRuleActionsForwardGroupConfig,
      insertHeaderConfig: CreateRuleRequestRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: CreateRuleRequestRuleActionsRedirectConfig,
      removeHeaderConfig: CreateRuleRequestRuleActionsRemoveHeaderConfig,
      rewriteConfig: CreateRuleRequestRuleActionsRewriteConfig,
      trafficLimitConfig: CreateRuleRequestRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: CreateRuleRequestRuleActionsTrafficMirrorConfig,
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

export class CreateRuleRequestRuleConditionsCookieConfigValues extends $dara.Model {
  /**
   * @remarks
   * The cookie key.
   * - Must be 1 to 100 characters in length.
   * - Supports visible characters, the asterisk (*) wildcard, and the half-width question mark (?). Letters must be lowercase.
   * - Does not support spaces or the following characters: `;#[]{}\|<>&"`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The cookie value.
   * - Must be 1 to 100 characters in length.
   * - Supports visible characters, the asterisk (*) wildcard, and the half-width question mark (?). Letters must be lowercase.
   * - Does not support spaces or the following characters: `;#[]{}\|<>&"`.
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

export class CreateRuleRequestRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The list of cookie values.
   */
  values?: CreateRuleRequestRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditionsCookieConfigValues },
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

export class CreateRuleRequestRuleConditionsHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The header field key.
   * 
   * - Supports 1 to 40 characters.
   * - Supports lowercase letters a to z, digits, hyphens (-), and underscores (_).
   * - Does not support Cookie and Host.
   * 
   * @example
   * Port
   */
  key?: string;
  /**
   * @remarks
   * The list of header field values.
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

export class CreateRuleRequestRuleConditionsHostConfig extends $dara.Model {
  /**
   * @remarks
   * The list of hostnames.
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

export class CreateRuleRequestRuleConditionsMethodConfig extends $dara.Model {
  /**
   * @remarks
   * The list of request methods.
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

export class CreateRuleRequestRuleConditionsPathConfig extends $dara.Model {
  /**
   * @remarks
   * The list of forwarding paths.
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

export class CreateRuleRequestRuleConditionsQueryStringConfigValues extends $dara.Model {
  /**
   * @remarks
   * The query string key.
   * 
   * - Must be 1 to 100 characters in length.
   * - Supports visible characters, wildcard asterisks (*), and half-width question marks (?). Letters must be lowercase. Does not support spaces or the following characters: `#[]{}\|<>&"`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The query string value.
   * 
   * - Must be 1 to 128 characters in length.
   * - Supports lowercase letters, visible characters, wildcard asterisks (*), and half-width question marks (?). Does not support spaces or the following characters: `#[]{}\|<>&"`.
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

export class CreateRuleRequestRuleConditionsQueryStringConfig extends $dara.Model {
  /**
   * @remarks
   * The list of query strings.
   */
  values?: CreateRuleRequestRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditionsQueryStringConfigValues },
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

export class CreateRuleRequestRuleConditionsResponseHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The header field key.
   * - Must be 1 to 40 characters in length.
   * - Supports lowercase letters a to z, digits, hyphens (-), and underscores (_).
   * - Does not support Cookie and Host.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The list of header field values.
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

export class CreateRuleRequestRuleConditionsResponseStatusCodeConfig extends $dara.Model {
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

export class CreateRuleRequestRuleConditionsSourceIpConfig extends $dara.Model {
  /**
   * @remarks
   * The list of source IP-based service traffic matching conditions.
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

export class CreateRuleRequestRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The cookie configuration.
   */
  cookieConfig?: CreateRuleRequestRuleConditionsCookieConfig;
  /**
   * @remarks
   * The header field configuration.
   */
  headerConfig?: CreateRuleRequestRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The host configuration.
   */
  hostConfig?: CreateRuleRequestRuleConditionsHostConfig;
  /**
   * @remarks
   * The request method configuration.
   */
  methodConfig?: CreateRuleRequestRuleConditionsMethodConfig;
  /**
   * @remarks
   * The forwarding path configuration.
   */
  pathConfig?: CreateRuleRequestRuleConditionsPathConfig;
  /**
   * @remarks
   * The query string configuration.
   */
  queryStringConfig?: CreateRuleRequestRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The header condition configuration.
   */
  responseHeaderConfig?: CreateRuleRequestRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The response status code configuration.
   */
  responseStatusCodeConfig?: CreateRuleRequestRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * The source IP-based service traffic matching configuration. Required and valid only when **Type** is set to **SourceIP**.
   */
  sourceIpConfig?: CreateRuleRequestRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The forwarding rule type. Valid values:
   * 
   * - **Host**: Host.
   * 
   * - **Path**: Path.
   * 
   * - **Header**: HTTP header fields.
   * 
   * - **QueryString**: Query string.
   * 
   * - **Method**: Request method.
   * 
   * - **Cookie**: Cookie.
   * 
   * - **SourceIp**: Source IP address.
   * 
   * - **ResponseHeader**: Response HTTP header fields.
   * 
   * - **ResponseStatusCode**: Response status code.
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
      cookieConfig: CreateRuleRequestRuleConditionsCookieConfig,
      headerConfig: CreateRuleRequestRuleConditionsHeaderConfig,
      hostConfig: CreateRuleRequestRuleConditionsHostConfig,
      methodConfig: CreateRuleRequestRuleConditionsMethodConfig,
      pathConfig: CreateRuleRequestRuleConditionsPathConfig,
      queryStringConfig: CreateRuleRequestRuleConditionsQueryStringConfig,
      responseHeaderConfig: CreateRuleRequestRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: CreateRuleRequestRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: CreateRuleRequestRuleConditionsSourceIpConfig,
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

export class CreateRuleRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Can be up to 128 characters in length. Cannot start with `aliyun` or `acs:`. Cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Can be up to 128 characters in length. Cannot start with `aliyun` or `acs:`. Cannot contain `http://` or `https://`.
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

export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not set this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * The direction of the forwarding rule. Valid values:
   * 
   * - **Request** (default): matches and processes packets sent from clients to ALB.
   * 
   * - **Response**: matches and processes packets returned from backend server groups to ALB.
   * 
   * > ALB instances of Basic Edition do not support the **Response** type.
   * 
   * @example
   * Request
   */
  direction?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - **true**: performs only a dry run and does not create the forwarding rule. The system checks whether the required parameters are set, and validates the request format and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an `HTTP 2xx` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the listener on the Application Load Balancing (ALB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-l16uo9y******
   */
  listenerId?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: **1** to **10000**. A smaller value indicates a higher priority.
   * 
   * > The priority of each rule within the same listener must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The list of forwarding rule actions.
   * 
   * This parameter is required.
   */
  ruleActions?: CreateRuleRequestRuleActions[];
  /**
   * @remarks
   * The list of forwarding rule conditions.
   * 
   * This parameter is required.
   */
  ruleConditions?: CreateRuleRequestRuleConditions[];
  /**
   * @remarks
   * The forwarding rule name. 
   * - Must be 2 to 128 characters in length.
   * - Must start with a letter, Chinese character, or digit. Can contain digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-doc
   */
  ruleName?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateRuleRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      direction: 'Direction',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleName: 'RuleName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      direction: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': CreateRuleRequestRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': CreateRuleRequestRuleConditions },
      ruleName: 'string',
      tag: { 'type': 'array', 'itemType': CreateRuleRequestTag },
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

