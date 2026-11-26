// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleAttributeRequestRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow credentials. Valid values:
   * 
   * - **on**: allows credentials.
   * - **off**: does not allow credentials.
   * 
   * @example
   * on
   */
  allowCredentials?: string;
  /**
   * @remarks
   * The list of headers allowed for cross-origin access.
   */
  allowHeaders?: string[];
  /**
   * @remarks
   * The HTTP methods allowed for cross-origin access.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The list of allowed origins. You can configure a single element `*` or one or more values.
   * - Each value must start with `http://` or `https://`, followed by a valid domain name or a first-level wildcard domain name (for example, `http://*.test.abc.example.com`).
   * - Each value can optionally include a port. Port range: **1** to **65535**.
   */
  allowOrigin?: string[];
  /**
   * @remarks
   * The list of headers that can be exposed.
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

export class UpdateRuleAttributeRequestRuleActionsFixedResponseConfig extends $dara.Model {
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
   * The HTTP response code to return. Only numeric strings in the **2xx**, **4xx**, and **5xx** format are supported, where **x** is any digit.
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

export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
   * 
   * - **true**: enables session persistence.
   * - **false** (default): disables session persistence.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The timeout period. Unit: seconds. Valid values: 1 to 86400.
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

export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination server group to which requests are forwarded.
   * 
   * @example
   * sg--atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight. A larger value specifies a higher weight, which means more requests are forwarded to the server group. Valid values: **0** to **100**.
   * 
   * - If only one destination server group is specified, the default weight is **100** when no weight is specified.
   * 
   * - If more than one destination server group is specified, you must specify the weight value.
   * 
   * @example
   * 30
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

export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The session persistence configuration between server groups.
   */
  serverGroupStickySession?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The destination server groups to which requests are forwarded.
   */
  serverGroupTuples?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupTuples },
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

export class UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite the value in the request. Valid values:
   * - **true**: overwrites the value.
   * - **false** (default): does not overwrite the value.
   * 
   * @example
   * false
   */
  coverEnabled?: boolean;
  /**
   * @remarks
   * The name of the header to insert. The name must be 1 to 40 characters in length and can contain uppercase and lowercase letters a to z, digits, underscores (_), and hyphens (-). The header name specified in **InsertHeaderConfig** must be unique.
   * 
   * > The header name cannot be set to the following fields (case-insensitive): `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `x-forwarded-host`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The content of the header to insert.
   * 
   * - If **ValueType** is set to **SystemDefined**, valid values are:
   *     - **ClientSrcPort**: the client port.
   *     - **ClientSrcIp**: the client IP address.
   *     - **Protocol**: the protocol used by the client request (HTTP or HTTPS).
   *     - **SLBId**: the Application Load Balancer (ALB) instance ID.
   *     - **SLBPort**: the Application Load Balancer (ALB) instance listener port.
   * - If **ValueType** is set to **UserDefined**: you can specify a custom header value. The value must be 1 to 128 characters in length and can contain wildcards asterisks (*), question marks (?), and printable characters whose ASCII values are `ch >= 32 && ch < 127`. The value cannot contain `"`. The value cannot start or end with a space. The value cannot end with `\`.
   * - If **ValueType** is set to **ReferenceHeader**: you can reference a field in the request header. The value must be 1 to 128 characters in length and can contain lowercase letters a to z, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * UserDefined
   */
  value?: string;
  /**
   * @remarks
   * The content type of the header value. Valid values:
   * 
   * - **UserDefined**: a custom header value.
   * 
   * - **ReferenceHeader**: references a field in the request header.
   * 
   * - **SystemDefined**: a system-defined header value.
   * 
   * @example
   * UserDefined
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      coverEnabled: 'CoverEnabled',
      key: 'Key',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverEnabled: 'boolean',
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

export class UpdateRuleAttributeRequestRuleActionsRedirectConfig extends $dara.Model {
  /**
   * @remarks
   * The host to redirect to. Valid values:
   * - **${host}** (default): this value cannot be concatenated with other characters.
   * - Other values. Character set and format restrictions are as follows:
   *     - The hostname must be 3 to 256 characters in length and can contain lowercase letters a to z, digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
   *     - The hostname must contain at least one period (.). Periods (.) cannot appear at the beginning or end.
   *     - The rightmost domain label can contain only letters and wildcards. It cannot contain digits or hyphens (-).
   *     - Hyphens (-) cannot appear at the beginning or end of other domain labels.
   *     - Asterisks (*) and question marks (?) can appear at any position of a domain label.
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
   * - **${path}** (default): you can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. These variables can be used together or concatenated with characters within the allowed value range listed below.
   * - Other values. Character set and format restrictions are as follows:
   *     - The path must be 1 to 256 characters in length.
   *     - The path must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$-_.+/&~@:`. The path cannot contain `"%#;!()[]^,"\"`. Asterisks (*) and question marks (?) can be used as wildcards.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to redirect to. Valid values:
   * - **${port}** (default): this value can only be used alone and cannot be concatenated with other characters.
   * - Other values: **1** to **63335**.
   * 
   * @example
   * 10
   */
  port?: string;
  /**
   * @remarks
   * The protocol to redirect to. Valid values:
   * 
   * - **${protocol}** (default): this value cannot be concatenated with other characters.
   * 
   * - **HTTP** or **HTTPS**.
   * 
   * > HTTPS listeners support only redirects to HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string to redirect to. Valid values:
   * - **${query}** (default): you can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. These variables can be used together or concatenated with characters within the allowed value range listed below.
   * - Other values. Character set and format restrictions are as follows:
   *     - The query string must be 1 to 128 characters in length.
   *     - The query string can contain printable characters but cannot contain spaces or `#[]{}\|<>"`. Letters must be lowercase.
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

export class UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the header to remove. The name must be 1 to 40 characters in length and can contain uppercase and lowercase letters a to z, digits, underscores (_), and hyphens (-). The header name cannot be duplicated in RemoveHeader.
   * 
   * - Request direction (Direction is set to Request): the header name cannot be set to the following fields (case-insensitive): `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `x-forwarded-host`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`.
   * - Response direction (Direction is set to Response): the header name cannot be set to the following fields (case-insensitive): `connection`, `upgrade`, `content-length`, `transfer-encoding`.
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

export class UpdateRuleAttributeRequestRuleActionsRewriteConfig extends $dara.Model {
  /**
   * @remarks
   * The destination host address for internal redirects. Valid values:
   * - **${host}** (default): this value cannot be concatenated with other characters.
   * 
   * - Other values. Character set and format restrictions are as follows:
   * 
   *     - The hostname must be 3 to 256 characters in length and can contain lowercase letters a to z, digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
   * 
   *     - The hostname must contain at least one period (.). Periods (.) cannot appear at the beginning or end.
   * 
   *     - The rightmost domain label can contain only letters and wildcards. It cannot contain digits or hyphens (-).
   * 
   *     - Hyphens (-) cannot appear at the beginning or end of other domain labels. Asterisks (*) and question marks (?) can appear at any position of a domain label.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The path to redirect to. Valid values:
   * - **${path}** (default): you can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. These variables can be used together or concatenated with characters within the allowed value range listed below.
   * - Other values. Character set and format restrictions are as follows:
   *     - The path must be 1 to 256 characters in length.
   *     - The path must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$-_.+/&~@:`. The path cannot contain `"%#;!()[]^,"\"`. Asterisks (*) and question marks (?) can be used as wildcards.
   * 
   * @example
   * /tsdf
   */
  path?: string;
  /**
   * @remarks
   * The query string for internal redirects. Valid values:
   * - **${query}** (default): you can reference **${host}**, **${protocol}**, and **${port}**. Each variable can appear at most once. These variables can be used together or concatenated with characters within the allowed value range listed below.
   * - Other values. Character set and format restrictions are as follows:
   *     - The query string must be 1 to 128 characters in length.
   *     - The query string can contain printable characters but cannot contain spaces or `#[]{}\|<>"`. Letters must be lowercase.
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

export class UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The QPS per IP address. Valid values: **1** to **1000000**.
   * 
   * > If both **QPS** and **PerIpQps** are configured, the value of **PerIpQps** must be less than the value of **QPS**.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * The queries per second (QPS). Valid values: **1** to **1000000**.
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

export class UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The server group ID.
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

export class UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration for mirroring traffic to a server group.
   */
  serverGroupTuples?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
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

export class UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration for mirroring traffic to a server group.
   */
  mirrorGroupConfig?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The type of the mirror target. Valid values:
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
      mirrorGroupConfig: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig,
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

export class UpdateRuleAttributeRequestRuleActions extends $dara.Model {
  /**
   * @remarks
   * The cross-origin resource sharing (CORS) configuration.
   */
  corsConfig?: UpdateRuleAttributeRequestRuleActionsCorsConfig;
  /**
   * @remarks
   * The fixed response configuration.
   */
  fixedResponseConfig?: UpdateRuleAttributeRequestRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The forward group configuration.
   */
  forwardGroupConfig?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The insert header configuration.
   */
  insertHeaderConfig?: UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority of the action in the forwarding rule. Valid values: **1** to **50000**. Actions are performed in ascending order of priority. This value cannot be empty or duplicated. You can specify up to 20 action priorities.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The redirect configuration. You can add up to 20 redirects.
   */
  redirectConfig?: UpdateRuleAttributeRequestRuleActionsRedirectConfig;
  /**
   * @remarks
   * The remove header configuration.
   */
  removeHeaderConfig?: UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The rewrite configuration.
   */
  rewriteConfig?: UpdateRuleAttributeRequestRuleActionsRewriteConfig;
  /**
   * @remarks
   * The traffic throttling configuration.
   */
  trafficLimitConfig?: UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The traffic mirroring configuration.
   */
  trafficMirrorConfig?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The action type. You can add up to 11 action types. Valid values:
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
   * - **TrafficLimit**: throttles traffic.
   * 
   * - **TrafficMirror**: mirrors traffic.
   * 
   * - **Cors**: enables cross-origin resource sharing (CORS).
   * 
   * > A forwarding rule must contain one **ForwardGroup**, **Redirect**, or **FixedResponse** action. When this action coexists with other action types, it must be the last action to execute.
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
      corsConfig: UpdateRuleAttributeRequestRuleActionsCorsConfig,
      fixedResponseConfig: UpdateRuleAttributeRequestRuleActionsFixedResponseConfig,
      forwardGroupConfig: UpdateRuleAttributeRequestRuleActionsForwardGroupConfig,
      insertHeaderConfig: UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: UpdateRuleAttributeRequestRuleActionsRedirectConfig,
      removeHeaderConfig: UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig,
      rewriteConfig: UpdateRuleAttributeRequestRuleActionsRewriteConfig,
      trafficLimitConfig: UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig,
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

export class UpdateRuleAttributeRequestRuleConditionsCookieConfigValues extends $dara.Model {
  /**
   * @remarks
   * The cookie key. The key must be 1 to 100 characters in length and can contain lowercase letters, printable characters, asterisks (*), and question marks (?). The key cannot contain spaces or `#[]{}\|<>&";`.
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

export class UpdateRuleAttributeRequestRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie configuration.
   */
  values?: UpdateRuleAttributeRequestRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditionsCookieConfigValues },
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

export class UpdateRuleAttributeRequestRuleConditionsHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The header key. The key must be 1 to 40 characters in length and can contain letters, digits, hyphens (-), and underscores (_). Cookie and Host are not supported.
   * 
   * @example
   * Port
   */
  key?: string;
  /**
   * @remarks
   * The header values.
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

export class UpdateRuleAttributeRequestRuleConditionsHostConfig extends $dara.Model {
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

export class UpdateRuleAttributeRequestRuleConditionsMethodConfig extends $dara.Model {
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

export class UpdateRuleAttributeRequestRuleConditionsPathConfig extends $dara.Model {
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

export class UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues extends $dara.Model {
  /**
   * @remarks
   * The query string key. The key must be 1 to 100 characters in length and can contain lowercase letters, printable characters, asterisks (*), and question marks (?). The key cannot contain spaces or `#[]{}\|<>&"`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The query string value. The value must be 1 to 128 characters in length and can contain lowercase letters, printable characters, asterisks (*), and question marks (?). The value cannot contain spaces or `#[]{}\|<>&"`.
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

export class UpdateRuleAttributeRequestRuleConditionsQueryStringConfig extends $dara.Model {
  /**
   * @remarks
   * The query strings. You can add up to 20 query strings.
   */
  values?: UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditionsQueryStringConfigValues },
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

export class UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The header key.
   * - The key must be 1 to 40 characters in length.
   * - The key can contain letters a to z, digits, hyphens (-), and underscores (_).
   * - Cookie and Host are not supported.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The header values.
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

export class UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig extends $dara.Model {
  /**
   * @remarks
   * The response status code list.
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

export class UpdateRuleAttributeRequestRuleConditionsSourceIpConfig extends $dara.Model {
  /**
   * @remarks
   * One or more IP addresses or CIDR blocks.
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

export class UpdateRuleAttributeRequestRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The cookie configuration.
   */
  cookieConfig?: UpdateRuleAttributeRequestRuleConditionsCookieConfig;
  /**
   * @remarks
   * The header configuration.
   */
  headerConfig?: UpdateRuleAttributeRequestRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The host configuration.
   */
  hostConfig?: UpdateRuleAttributeRequestRuleConditionsHostConfig;
  /**
   * @remarks
   * The request method configuration.
   */
  methodConfig?: UpdateRuleAttributeRequestRuleConditionsMethodConfig;
  /**
   * @remarks
   * The path configuration for forwarding.
   */
  pathConfig?: UpdateRuleAttributeRequestRuleConditionsPathConfig;
  /**
   * @remarks
   * The query string configuration.
   */
  queryStringConfig?: UpdateRuleAttributeRequestRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The response header condition configuration.
   */
  responseHeaderConfig?: UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The response status code configuration.
   */
  responseStatusCodeConfig?: UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * The source IP-service traffic matching configuration. You can add up to 5 source IP-service traffic matching conditions.
   */
  sourceIpConfig?: UpdateRuleAttributeRequestRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The type of forwarding rule. You can add up to 7 types of forwarding rules. Valid values:
   * 
   * - **Host**: host.
   * 
   * - **Path**: path.
   * 
   * - **Header**: HTTP header field.
   * 
   * - **QueryString**: query string.
   * 
   * - **Method**: request method.
   * 
   * - **Cookie**: cookie.
   * 
   * - **SourceIp**: source IP address.
   * 
   * - **ResponseHeader**: response HTTP header field.
   * 
   * - **ResponseStatusCode**: response status code.
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
      cookieConfig: UpdateRuleAttributeRequestRuleConditionsCookieConfig,
      headerConfig: UpdateRuleAttributeRequestRuleConditionsHeaderConfig,
      hostConfig: UpdateRuleAttributeRequestRuleConditionsHostConfig,
      methodConfig: UpdateRuleAttributeRequestRuleConditionsMethodConfig,
      pathConfig: UpdateRuleAttributeRequestRuleConditionsPathConfig,
      queryStringConfig: UpdateRuleAttributeRequestRuleConditionsQueryStringConfig,
      responseHeaderConfig: UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: UpdateRuleAttributeRequestRuleConditionsSourceIpConfig,
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

export class UpdateRuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** value as the **ClientToken** value. The **RequestId** value of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF3898
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, an `HTTP 2xx` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The priority of the rule. Valid values: **1** to **10000**. A smaller value specifies a higher priority.
   * 
   * > Rule priorities within the same listener must be unique.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The forwarding rule actions.
   */
  ruleActions?: UpdateRuleAttributeRequestRuleActions[];
  /**
   * @remarks
   * The forwarding rule conditions.
   */
  ruleConditions?: UpdateRuleAttributeRequestRuleConditions[];
  /**
   * @remarks
   * The forwarding rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-4dp5i6ea****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces. The name must start with a letter, Chinese character, or digit.
   * 
   * @example
   * rule-instance-test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': UpdateRuleAttributeRequestRuleConditions },
      ruleId: 'string',
      ruleName: 'string',
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

