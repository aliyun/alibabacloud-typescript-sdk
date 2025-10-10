// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleAttributeRequestRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether credentials can be carried in CORS requests. Valid values:
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
   * The trusted headers of CORS requests.
   */
  allowHeaders?: string[];
  /**
   * @remarks
   * The trusted HTTP methods of CORS requests.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The trusted origins. You can specify one or more values, or only an asterisk (`*`).
   * 
   * *   The value must start with `http://` or `https://`, and be followed by a valid domain name, including top-level wildcard domain names. Example: `http://*.test.abc.example.com`.
   * *   You can specify ports for a single value. Valid values: **1** to **65535**.
   */
  allowOrigin?: string[];
  /**
   * @remarks
   * The headers that can be exposed.
   */
  exposeHeaders?: string[];
  /**
   * @remarks
   * The maximum cache time of dry runs in the browser. Unit: seconds.
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
   * The content of the response. The content can be up to 1 KB in size, and can contain only ASCII characters.
   * 
   * @example
   * dssacav
   */
  content?: string;
  /**
   * @remarks
   * The content type.
   * 
   * Valid values: **text/plain**, **text/css**, **text/html**, **application/javascript**, and **application/json**.
   * 
   * @example
   * text/plain
   */
  contentType?: string;
  /**
   * @remarks
   * The HTTP status code in responses. Valid values: **2xx**, **4xx**, **5xx**. The value must be a numeric string. **x** must be a digit.
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

export class UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable session persistence. Valid values:
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
   * The timeout period for sessions. Unit: seconds. Valid values: 1 to 86400.
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
   * The ID of the server group to which requests are forwarded.
   * 
   * @example
   * sg--atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight of the server group. A larger value specifies a higher weight. A server group with a higher weight receives more requests. Valid values: **0** to **100**.
   * 
   * *   If the number of destination server groups is 1, the default weight of the server group is **100**, unless you specify a weight.
   * *   If the number of destination server groups is larger than 1, you must specify a weight.
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
   * The configuration of session persistence for server groups.
   */
  serverGroupStickySession?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The server groups to which requests are forwarded.
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
   * Specifies whether to overwrite the request header values. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  coverEnabled?: boolean;
  /**
   * @remarks
   * The key of the header. The key must be 1 to 40 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The header keys specified by **InsertHeaderConfig** must be unique.
   * 
   * >  You cannot specify the following header keys: `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `x-forwarded-host`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, and `authority`. The header keys are case-insensitive.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the header.
   * 
   * *   If **ValueType** is set to **SystemDefined**, you can set the Value parameter to one of the following values:
   * 
   *     *   **ClientSrcPort**: the client port.
   *     *   **ClientSrcIp**: the IP address of the client.
   *     *   **Protocol**: the request protocol (HTTP or HTTPS).
   *     *   **SLBId**: the ID of the ALB instance.
   *     *   **SLBPort**: the listener port of the ALB instance.
   * 
   * *   If **ValueType** is set to **UserDefined**, a custom header value is supported. The header value must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are `greater than or equal to 32 and lower than 127`. You can use asterisks (\\*) and question marks (?) as wildcard characters. Quotation marks (`"`) are not supported. The header value cannot start or end with a space character, or end with a backslash (`\\`).
   * 
   * *   If **ValueType** is set to **ReferenceHeader**, you can reference a value from request headers. The value must be 1 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * UserDefined
   */
  value?: string;
  /**
   * @remarks
   * The type of the header. Valid values:
   * 
   * *   **UserDefined**: a custom header.
   * *   **ReferenceHeader**: a header that references one of the request headers.
   * *   **SystemDefined**: a system-defined header value.
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
   * The hostname to which requests are redirected. Valid values:
   * 
   * *   **${host}** (default): If ${host} is returned, no other character is appended.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The hostname must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (\\*), and question marks (?).
   *     *   The hostname contains at least one period (.) but does not start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
   *     *   The domain labels do not start or end with a hyphen (-).
   *     *   You can use asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The forwarding method. Valid values: **301**, **302**, **303**, **307**, and **308**.
   * 
   * @example
   * 301
   */
  httpCode?: string;
  /**
   * @remarks
   * The URL to which requests are redirected. Valid values:
   * 
   * *   Default value: **${path}**. \\*\\*${host}**, **${protocol}**, and **${port}\\*\\* are also supported. Each variable can be specified only once. The preceding variables can be used at the same time or combined with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The header value must be 1 to 128 characters in length.
   *     *   It must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$ - _ . + / & ~ @ :`. It does not contain the following special characters: `% # ; ! ( ) [ ] ^ , \\ "`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are redirected. Valid values:
   * 
   * *   **${port}** (default): If you set the value to ${port}, you cannot append other characters.
   * *   Other valid values: **1 to 63335**.
   * 
   * @example
   * 10
   */
  port?: string;
  /**
   * @remarks
   * The redirect protocol. Valid values:
   * 
   * *   **${protocol}** (default): If you set the value to ${protocol}, you cannot append other characters.
   * *   **HTTP** or **HTTPS**.
   * 
   * >  HTTPS listeners support only HTTPS redirects.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string of the URL to which requests are forwarded. Valid values:
   * 
   * *   Default value: **${query}**. \\*\\*${host}**, **${protocol}**, and **${port}\\*\\* are also supported. Each variable can be specified only once. The preceding variables can be used at the same time or combined with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The header value must be 1 to 128 characters in length.
   *     *   It can contain printable characters, excluding space characters, the special characters `# [ ] { } \\ | < > "`, and uppercase letters.
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
   * The key of the header to be removed. The header key must be 1 to 40 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The header keys specified in RemoveHeader must be unique.
   * 
   * *   If Direction is set to Request, the following request headers cannot be removed: `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `x-forwarded-host`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, and `authority`. Request headers are not case-sensitive.
   * *   If Direction is set to Response, the following header keys are not supported: `connection`, `upgrade`, `content-length`, and `transfer-encoding`. The header keys are not case-sensitive.
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
   * The hostname to which requests are rewritten. Valid values:
   * 
   * *   **${host}** (default): If you set the value to ${host}, you cannot append other characters.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The hostname must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (\\*), and question marks (?).
   *     *   The hostname contains at least one period (.) but does not start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
   *     *   The domain labels do not start or end with a hyphen (-). You can use asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The URL to which requests are redirected. Valid values:
   * 
   * *   Default value: **${path}**. \\*\\*${host}**, **${protocol}**, and **${port}\\*\\* are also supported. Each variable can be specified only once. The preceding variables can be used at the same time or combined with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The header value must be 1 to 128 characters in length.
   *     *   It must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$ - _ . + / & ~ @ :`. It does not contain the following special characters: `% # ; ! ( ) [ ] ^ , \\ "`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /tsdf
   */
  path?: string;
  /**
   * @remarks
   * The query string to which requests are redirected. Valid values:
   * 
   * *   Default value: **${query}**. \\*\\*${host}**, **${protocol}**, and **${port}\\*\\* are also supported. Each variable can be specified only once. The preceding variables can be used at the same time or combined with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The header value must be 1 to 128 characters in length.
   *     *   It can contain printable characters, excluding space characters, the special characters `# [ ] { } \\ | < > "`, and uppercase letters.
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
   * The number of requests per IP address. Value range: **1 to 1,000,000**.
   * 
   * >  If both the **QPS** and **PerIpQps** parameters are specified, make sure that the value of the **QPS** parameter is smaller than the value of the PerIpQps parameter.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * The number of queries per second (QPS). Value range: **1 to 1,000,000**.
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
   * The server group to which traffic is mirrored.
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
   * The server group to which network traffic is mirrored.
   */
  mirrorGroupConfig?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The type of destination to which network traffic is mirrored. Valid values:
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
   * The CORS configuration.
   */
  corsConfig?: UpdateRuleAttributeRequestRuleActionsCorsConfig;
  /**
   * @remarks
   * The configuration of the custom response.
   */
  fixedResponseConfig?: UpdateRuleAttributeRequestRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The configuration of the server groups.
   */
  forwardGroupConfig?: UpdateRuleAttributeRequestRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The configuration of the header to be inserted.
   */
  insertHeaderConfig?: UpdateRuleAttributeRequestRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority of the action. Valid values: **1 to 50000**. A smaller value specifies a higher priority. The actions of a forwarding rule are applied in descending order of priority. This parameter cannot be left empty. The priority of each action within a forwarding rule must be unique. You can specify up to 20 forwarding rule priorities.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The configuration of the redirect action. You can specify up to 20 redirect actions.
   */
  redirectConfig?: UpdateRuleAttributeRequestRuleActionsRedirectConfig;
  /**
   * @remarks
   * The HTTP header to be removed.
   */
  removeHeaderConfig?: UpdateRuleAttributeRequestRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The configuration of the rewrite action.
   */
  rewriteConfig?: UpdateRuleAttributeRequestRuleActionsRewriteConfig;
  /**
   * @remarks
   * The configuration of the action to throttle traffic.
   */
  trafficLimitConfig?: UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The configuration of the traffic mirroring action.
   */
  trafficMirrorConfig?: UpdateRuleAttributeRequestRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The type of the task. You can specify up to 11 types of action. Valid values:
   * 
   * *   **ForwardGroup**: forwards a request to multiple vServer groups.
   * *   **Redirect**: redirects requests.
   * *   **FixedResponse**: returns a fixed response.
   * *   **Rewrite**: rewrites requests.
   * *   **InsertHeader**: inserts a header.
   * *   **RemoveHeader**: deletes the header of a request.
   * *   **TrafficLimit**: throttles traffic.
   * *   **trafficMirror**: mirrors network traffic.
   * *   **Cors**: forwards requests based on CORS.
   * 
   * The preceding actions can be classified into two types:
   * 
   * *   **FinalType**: Each forwarding rule can contain only one FinalType action, which is performed at the end. You can specify only one of **ForwardGroup**, **Redirect**, and **FixedResponse**.
   * *   **ExtType**: Each forwarding rule can contain one or more **ExtType** actions, which are performed before the **FinalType** action. If you want to specify an ExtType action, you must also specify a **FinalType** action. You can specify multiple **InsertHeader** actions or one **Rewrite** action.
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
   * The cookie key. The key must be 1 to 100 characters in length, and can contain printable characters such as lowercase letters, asterisks (\\*), and question marks (?). The key cannot contain uppercase letters, space characters, or the following special characters: `# [ ] { } \\ | < > & " ;`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The cookie value. The cookie value must be 1 to 128 characters in length, and can contain lowercase letters, printable ASCII characters, asterisks (\\*), and question marks (?). It cannot contain space characters or the following special characters: `# [ ] { } \\ | < > &`.
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
   * The key-value pairs of the cookie.
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
   * The header key. The header key must be 1 to 40 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). Cookie and Host are not supported.
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
   * The forwarding URLs.
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
   * The key of the query string. The key must be 1 to 100 characters in length, and can contain printable characters such as lowercase letters, asterisks (\\*), and question marks (?). The key cannot contain uppercase letters, space characters, or the following special characters: `# [ ] { } \\ | < > & "`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the query string. The value must be 1 to 128 characters in length, and can contain printable characters such as lowercase letters, asterisks (\\*), and question marks (?). The value cannot contain uppercase letters, space characters, or the following special characters: `# [ ] { } \\ | < > & "`.
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
   * The query strings. You can specify up to 20 query strings.
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
   * 
   * *   The key must be 1 to 40 characters in length.
   * *   It can contain letters, digits, hyphens (-), and underscores (_).
   * *   Cookie and Host are not supported.
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

export class UpdateRuleAttributeRequestRuleConditionsSourceIpConfig extends $dara.Model {
  /**
   * @remarks
   * You can add one or more IP addresses, including CIDR blocks.
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
   * The key-value pairs of the cookie.
   */
  cookieConfig?: UpdateRuleAttributeRequestRuleConditionsCookieConfig;
  /**
   * @remarks
   * The configuration of the header.
   */
  headerConfig?: UpdateRuleAttributeRequestRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The configuration of the hosts.
   */
  hostConfig?: UpdateRuleAttributeRequestRuleConditionsHostConfig;
  /**
   * @remarks
   * The configuration of the request method.
   */
  methodConfig?: UpdateRuleAttributeRequestRuleConditionsMethodConfig;
  /**
   * @remarks
   * The configuration of the forwarding URL.
   */
  pathConfig?: UpdateRuleAttributeRequestRuleConditionsPathConfig;
  /**
   * @remarks
   * The configuration of the query strings.
   */
  queryStringConfig?: UpdateRuleAttributeRequestRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The configuration of headers.
   */
  responseHeaderConfig?: UpdateRuleAttributeRequestRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The configuration of the response status codes.
   */
  responseStatusCodeConfig?: UpdateRuleAttributeRequestRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * Traffic matching based on source IP addresses. You can specify up to five IP addresses, including CIDR blocks.
   */
  sourceIpConfig?: UpdateRuleAttributeRequestRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The type of forwarding rule. You can specify up to seven types of forwarding rule. Valid values:
   * 
   * *   **Host**: Requests are forwarded based on hosts.
   * *   **Path**: Requests are forwarded based on URLs.
   * *   **Header**: Requests are forwarded based on HTTP headers.
   * *   **QueryString**: Requests are forwarded based on query strings.
   * *   **Method**: Requests are forwarded based on request methods.
   * *   **Cookie**: Requests are forwarded based on cookies.
   * *   **SourceIp**: Requests are forwarded based on source IP addresses.
   * *   **ResponseHeader**: Requests are forwarded based on HTTP response headers.
   * *   **ResponseStatusCode**: Requests are forwarded based on response status codes.
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
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a `2xx HTTP` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The priority of the forwarding rule. Valid values: **1 to 10000**. A lower value specifies a higher priority.
   * 
   * > The priorities of the forwarding rules created for the same listener must be unique.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The actions of the forwarding rule.
   */
  ruleActions?: UpdateRuleAttributeRequestRuleActions[];
  /**
   * @remarks
   * The match conditions of the forwarding rule.
   */
  ruleConditions?: UpdateRuleAttributeRequestRuleConditions[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-4dp5i6ea****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
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

