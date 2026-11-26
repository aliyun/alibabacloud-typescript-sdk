// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRulesRequestRulesRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow credentials. Valid values:
   * 
   * - **on**: Yes.
   * - **off**: No.
   * 
   * @example
   * on
   */
  allowCredentials?: string;
  /**
   * @remarks
   * The list of allowed headers for cross-origin requests.
   */
  allowHeaders?: string[];
  /**
   * @remarks
   * The allowed HTTP methods for cross-origin requests.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The allowed origins.
   */
  allowOrigin?: string[];
  /**
   * @remarks
   * The list of exposed headers.
   */
  exposeHeaders?: string[];
  /**
   * @remarks
   * The maximum cache duration of preflight requests in the browser. Unit: seconds.
   * 
   * Valid values: **-1** to **172800**.
   * 
   * @example
   * 600
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
   * The fixed content to be returned. The maximum size is 1 KB. Only ASCII characters are supported.
   * 
   * @example
   * test
   */
  content?: string;
  /**
   * @remarks
   * The format of the fixed content to be returned. Valid values: **text/plain**, **text/css**, **text/html**, **application/javascript**, and **application/json**.
   * 
   * @example
   * text/plain
   */
  contentType?: string;
  /**
   * @remarks
   * The HTTP status code to be returned. Only numeric strings in the format of **2xx**, **4xx**, or **5xx** are supported, where **x** represents any digit.
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

export class CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * - **true**: enables session persistence.
   * - **false**: disables session persistence. This is the default value.
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
   * 30
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
   * sgp-ffm94ovy7lqw******
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight. A larger value indicates a higher weight, which means that more requests are forwarded to the server group. Valid values: **0** to **100**.
   * 
   * - If only one destination server group is specified and the weight is not specified, the default value is **100**.
   * 
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

export class CreateRulesRequestRulesRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The session persistence across server groups.
   */
  serverGroupStickySession?: CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The list of destination server groups to which requests are forwarded.
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
   * The name of the header to be inserted. The name must be 1 to 40 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). Header names in **InsertHeaderConfig** must be unique.
   * 
   * > You cannot set the header name to any of the following fields (case-insensitive): `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`, and `x-forwarded-host`.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the header to be inserted.
   * 
   * - If **ValueType** is set to **SystemDefined**, valid values are:
   *     - **ClientSrcPort**: the client port.
   *     - **ClientSrcIp**: the client IP address.
   *     - **Protocol**: the protocol of the client request (HTTP or HTTPS).
   *     - **SLBId**: the Application Load Balancing (ALB) instance ID.
   *     - **SLBPort**: the listening port of the ALB instance.
   * - If **ValueType** is set to **UserDefined**, you can customize the header value. The value must be 1 to 128 characters in length, and can contain asterisks (*), question marks (?), and printable characters with ASCII values from 32 to 127 (`ch >= 32 && ch < 127`). Double quotation marks (") are not supported. The value cannot start or end with a space, and cannot end with a backslash (\).
   * - If **ValueType** is set to **ReferenceHeader**, you can reference a field in the request header. The value must be 1 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * value
   */
  value?: string;
  /**
   * @remarks
   * The content type of the header field. Valid values:
   * 
   * - **UserDefined**: a custom header value.
   * 
   * - **ReferenceHeader**: a referenced field from the request header.
   * 
   * - **SystemDefined**: a system-defined header value.
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

export class CreateRulesRequestRulesRuleActionsRedirectConfig extends $dara.Model {
  /**
   * @remarks
   * The host to which requests are redirected. Valid values:
   * - **${host}**: the default value. If you use this value, you cannot concatenate it with other characters.
   * - Other values: The character set and format requirements are as follows:
   *     - The hostname must be 3 to 256 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), equal signs (=), tildes (~), underscores (_), plus signs (+), backslashes (\), carets (^), exclamation marks (!), dollar signs ($), ampersands (&), vertical bars (|), parentheses (()), square brackets ([]), and question marks (?).
   *     - The hostname must contain at least one period (.), and the period cannot be at the beginning or end of the hostname.
   *     - The rightmost domain label can contain only letters and wildcards, and cannot contain digits or hyphens (-). The leftmost `domainlabel` can be an asterisk (*).
   *     - A hyphen (-) cannot be at the beginning or end of any other domain label.
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
   * - **${path}**: The default value. You can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. You can use these variables together or concatenate them with strings within the allowed character set.
   * - Other values: The character set and format requirements are as follows:
   *     - The path must be 1 to 256 characters in length and is case-sensitive. Asterisks (*) and question marks (?) are supported as wildcards.
   *     - The path must start with a forward slash (/). It can contain letters, digits, and the following special characters: `$-_.+/&~@:\"*?`. The following characters are not supported: `"%#;!()[]^,"\"`. Asterisks (*) and question marks (?) are also supported.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are redirected. Valid values:
   * - **${port}**: the default value. You cannot concatenate this value with other characters.
   * - Other values: **1** to **63335**.
   * 
   * @example
   * 443
   */
  port?: string;
  /**
   * @remarks
   * The protocol to which requests are redirected. Valid values:
   * - **${protocol}**: the default value. If you use this value, it must be used independently and cannot be modified or concatenated with other characters.
   * - **HTTP**
   * - **HTTPS**
   * > 
   * > - HTTPS listeners support redirection only to the HTTPS protocol.
   * > - HTTP listeners support redirection to both HTTP and HTTPS protocols.
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  /**
   * @remarks
   * The query string to which requests are redirected. Valid values:
   * - **${query}**: the default value. You can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. You can use these variables together or concatenate them with strings within the allowed character set.
   * - Other values: The character set and format requirements are as follows:
   *     - The query string must be 1 to 128 characters in length.
   *     - Visible characters are supported. Spaces and `#[]{}\|<>"` are not supported. Letters must be lowercase.
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

export class CreateRulesRequestRulesRuleActionsRemoveHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the header to remove. The name must be 1 to 40 characters in length and can contain letters, digits, underscores (_), and hyphens (-). Header names cannot be duplicated in RemoveHeader.
   * 
   * - Request direction (when Direction is set to Request): The header name cannot be set to any of the following fields (case-insensitive): `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`, or `x-forwarded-host`.
   * - Response direction (when Direction is set to Response): The header name cannot be set to any of the following fields (case-insensitive): `connection`, `upgrade`, `content-length`, or `transfer-encoding`.
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

export class CreateRulesRequestRulesRuleActionsRewriteConfig extends $dara.Model {
  /**
   * @remarks
   * The destination host for the internal rewrite. Valid values:
   * - **${host}**: the default value. You cannot concatenate this value with other characters.
   * 
   * - Other values: The character set and format requirements are as follows:
   * 
   *     - The hostname must be 3 to 256 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), equal signs (=), tildes (~), underscores (_), plus signs (+), backslashes (\), carets (^), exclamation marks (!), dollar signs ($), ampersands (&), vertical bars (|), parentheses (()), square brackets ([]), and question marks (?).
   * 
   *     - The hostname must contain at least one period (.), and the period cannot be at the beginning or end of the hostname.
   * 
   *     - The rightmost domain label can contain only letters and wildcards, and cannot contain digits or hyphens (-). The leftmost `domainlabel` can be an asterisk (*).
   * 
   *     - A hyphen (-) cannot be at the beginning or end of any other domain label. Asterisks (*) and question marks (?) can appear anywhere in a domain label.
   * 
   * @example
   * www.rewrite.alb
   */
  host?: string;
  /**
   * @remarks
   * The path to which requests are redirected. Valid values:
   * - **${path}**: The default value. You can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. You can use these variables together or concatenate them with strings within the allowed character set.
   * - Other values: The character set and format requirements are as follows:
   *     - The path must be 1 to 256 characters in length and is case-sensitive. Asterisks (*) and question marks (?) are supported as wildcards.
   *     - The path must start with a forward slash (/). It can contain letters, digits, and the following special characters: `$-_.+/&~@:\"*?`. The following characters are not supported: `"%#;!()[]^,"\"`. Asterisks (*) and question marks (?) are also supported.
   * 
   * @example
   * /tea
   */
  path?: string;
  /**
   * @remarks
   * The query string for the internal rewrite. Valid values:
   * - **${query}**: the default value. You can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. You can use these variables together or concatenate them with strings within the allowed character set.
   * - Other values: The character set and format requirements are as follows:
   *     - The query string must be 1 to 128 characters in length.
   *     - Visible characters are supported. Spaces and `#[]{}\|<>"` are not supported. Letters must be lowercase.
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

export class CreateRulesRequestRulesRuleActionsTrafficLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The number of queries per second from a single IP address. Valid values: **1** to **1000000**.
   * 
   * > If the **QPS** parameter is also configured, the value of **PerIpQps** must be less than the value of **QPS**.
   * 
   * @example
   * 100
   */
  perIpQps?: number;
  /**
   * @remarks
   * The number of queries per second (QPS). Valid values: **1** to **1000000**.
   * 
   * @example
   * 5000
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
   * sgp-u9cmf16iu69******
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
   * The configuration for mirroring traffic to a server group.
   */
  mirrorGroupConfig?: CreateRulesRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
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
   * The configuration of the fixed response action.
   */
  fixedResponseConfig?: CreateRulesRequestRulesRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The configuration of the forward group action.
   */
  forwardGroupConfig?: CreateRulesRequestRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The configuration of the insert header action.
   */
  insertHeaderConfig?: CreateRulesRequestRulesRuleActionsInsertHeaderConfig;
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
   * 
   * > For the parameters in **RedirectConfig**, you cannot use the default values for all parameters except **HttpCode**.
   */
  redirectConfig?: CreateRulesRequestRulesRuleActionsRedirectConfig;
  /**
   * @remarks
   * The configuration for removing an HTTP header.
   */
  removeHeaderConfig?: CreateRulesRequestRulesRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The rewrite configuration.
   * 
   * > If multiple actions are configured for the same forwarding rule, the **RewriteConfig** action must be used together with the **ForwardGroup** action type.
   */
  rewriteConfig?: CreateRulesRequestRulesRuleActionsRewriteConfig;
  /**
   * @remarks
   * The traffic throttling configuration.
   */
  trafficLimitConfig?: CreateRulesRequestRulesRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The traffic mirroring configuration.
   */
  trafficMirrorConfig?: CreateRulesRequestRulesRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - **ForwardGroup**: forwards requests to multiple virtual services.
   * 
   * - **Redirect**: redirects requests.
   * 
   * - **FixedResponse**: returns a fixed response.
   * 
   * - **Rewrite**: rewrites requests.
   * 
   * - **InsertHeader**: inserts a header.
   * 
   * - **RemoveHeader**: deletes a header.
   * 
   * - **TrafficLimit**: limits traffic.
   * 
   * - **TrafficMirror**: mirrors traffic.
   * 
   * - **Cors**: configures cross-origin resource sharing (CORS).
   * 
   * > A forwarding rule must contain at least one **ForwardGroup**, **Redirect**, or **FixedResponse** action. If other action types are configured, the **ForwardGroup**, **Redirect**, or **FixedResponse** action must be executed last.
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
   * The cookie condition key.
   * 
   * - The key must be 1 to 100 characters in length.
   * 
   * - The key can contain printable characters, asterisks (*), and question marks (?). Letters must be lowercase.
   * 
   * - The key cannot contain spaces or the following characters: `;#[]{}\|<>&"`.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The cookie condition value.
   * 
   * - The value must be 1 to 100 characters in length.
   * 
   * - The value can contain printable characters, asterisks (*), and question marks (?). Letters must be lowercase.
   * 
   * - The value cannot contain spaces or the following characters: `;#[]{}\|<>&"`.
   * 
   * @example
   * value
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
   * The list of cookie key-value pairs.
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
   * The HTTP header key.
   * 
   * - The key must be 1 to 40 characters in length.
   * 
   * - The key can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * - The key cannot be Cookie or Host.
   * 
   * @example
   * port
   */
  key?: string;
  /**
   * @remarks
   * The list of HTTP header values.
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

export class CreateRulesRequestRulesRuleConditionsMethodConfig extends $dara.Model {
  /**
   * @remarks
   * The list of HTTP request methods.
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
   * The list of path conditions.
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
   * The query string condition key.
   * - The key must be 1 to 100 characters in length.
   * - The key can contain printable characters, asterisks (*), and question marks (?). Letters must be lowercase. Spaces and the following characters are not supported: `#[]{}\|<>&"`.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The query string condition value.
   * 
   * - The value must be 1 to 128 characters in length.
   * - The value can contain lowercase letters, printable characters, asterisks (*), and question marks (?). Spaces and the following characters are not supported: `#[]{}\|<>&"`.
   * 
   * @example
   * value
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
   * The list of query string condition key-value pairs.
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
   * The response HTTP header key.
   * - The key must be 1 to 40 characters in length.
   * - The key can contain letters, digits, hyphens (-), and underscores (_).
   * - The key cannot be Cookie or Host.
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

export class CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig extends $dara.Model {
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

export class CreateRulesRequestRulesRuleConditionsSourceIpConfig extends $dara.Model {
  /**
   * @remarks
   * The source IP addresses used to match service traffic.
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
   * The cookie condition configuration.
   */
  cookieConfig?: CreateRulesRequestRulesRuleConditionsCookieConfig;
  /**
   * @remarks
   * The HTTP header condition configuration.
   */
  headerConfig?: CreateRulesRequestRulesRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The hostname condition configuration.
   */
  hostConfig?: CreateRulesRequestRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The HTTP request method condition configuration.
   */
  methodConfig?: CreateRulesRequestRulesRuleConditionsMethodConfig;
  /**
   * @remarks
   * The path condition configuration.
   */
  pathConfig?: CreateRulesRequestRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The query string condition configuration.
   */
  queryStringConfig?: CreateRulesRequestRulesRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The response HTTP header configuration.
   */
  responseHeaderConfig?: CreateRulesRequestRulesRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The response status code configuration.
   */
  responseStatusCodeConfig?: CreateRulesRequestRulesRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * The configuration for matching service traffic based on source IP addresses.
   */
  sourceIpConfig?: CreateRulesRequestRulesRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The forwarding condition type. Valid values:
   * 
   * - Host: Hostname.
   * 
   * - Path: Path.
   * 
   * - Header: HTTP header fields.
   * 
   * - QueryString: Query character string.
   * 
   * - Method: Request method.
   * 
   * - Cookie: Cookie.
   * 
   * - SourceIp: Source IP address.
   * 
   * - ResponseHeader: Response HTTP header fields.
   * 
   * - ResponseStatusCode: Response status code.
   * 
   * This parameter is required.
   * 
   * @example
   * SourceIp
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
   * The tag key. It can be up to 128 characters in length, cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * test_tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. It can be up to 128 characters in length, cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * test_tag_value
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
   * The direction of the forwarding rule.
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
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The list of forwarding rule actions.
   * 
   * This parameter is required.
   */
  ruleActions?: CreateRulesRequestRulesRuleActions[];
  /**
   * @remarks
   * The list of forwarding rule conditions.
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
   * rule-443-64
   */
  ruleName?: string;
  /**
   * @remarks
   * The list of tags.
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
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not set this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - **true**: performs a dry run and does not create the forwarding rules. The system checks whether the required parameters are set, the request format is valid, and the service limits are met. If the request fails the dry run, the corresponding error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request. If the request passes the check, the system returns an HTTP 2xx status code and creates the forwarding rules.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the listener for the Application Load Balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-l16uo9y******
   */
  listenerId?: string;
  /**
   * @remarks
   * The list of forwarding rules.
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

