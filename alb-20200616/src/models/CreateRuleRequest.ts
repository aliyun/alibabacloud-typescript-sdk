// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestRuleActionsCorsConfig extends $dara.Model {
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
   * The allowed HTTP methods of CORS requests.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The trusted origins of CORS requests. You can specify one or more values, or only the wildcard character (`*`).
   * 
   * *   Each value must start with `http://` or `https://`, which must be followed by a valid domain name, including top-level domain names. Example: `http://*.test.abc.example.com`.
   * *   You can specify a port in each value or leave the port empty. Valid values: **1** to **65535**.
   */
  allowOrigin?: string[];
  /**
   * @remarks
   * The headers that can be exposed.
   */
  exposeHeaders?: string[];
  /**
   * @remarks
   * The maximum cache time of dry run requests in the browser. Unit: seconds.
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
   * The content of the custom response. The content cannot exceed 1 KB in size, and can contain only ASCII characters.
   * 
   * @example
   * dssacav
   */
  content?: string;
  /**
   * @remarks
   * The format of the response.
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

export class CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession extends $dara.Model {
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
   * The timeout period of sessions. Unit: seconds. Valid values: **1** to **86400**. Default value: **1000**.
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
   * The server group to which requests are forwarded.
   * 
   * @example
   * sgp-k86c1ov501id6p****
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
   * The configuration of session persistence for the server groups.
   */
  serverGroupStickySession?: CreateRuleRequestRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The server groups to which requests are forwarded. You can specify at most five server groups for each forwarding rule.
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
   * The key of the header. The header key must be 1 to 40 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The header keys specified by **InsertHeaderConfig** must be unique.
   * 
   * >  You cannot specify the following header keys: `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`, and `x-forwarded-host`. The header keys are case-insensitive.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the header to be inserted.
   * 
   * *   If **ValueType** is set to **SystemDefined**, you can set the Value parameter to one of the following values:
   * 
   *     *   **ClientSrcPort**: the client port.
   *     *   **ClientSrcIp**: the IP address of the client.
   *     *   **Protocol**: the request protocol (HTTP or HTTPS).
   *     *   **SLBId**: the ID of the ALB instance.
   *     *   **SLBPort**: the listener port.
   * 
   * *   If **ValueType** is set to **UserDefined**, a custom header value is supported. The header value must be 1 to 128 characters in length, and can contain printable characters whose ASCII values are `greater than or equal to 32 and lower than 127`. You can use asterisks (\\*) and question marks (?) as wildcard characters. `Quotation marks (")` are not supported. The header value cannot start or end with a space character, or end with a backslash (`\\`).
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
   * *   **UserDefined**: a custom header value.
   * *   **ReferenceHeader**: a header value that is referenced from one of the request headers.
   * *   **SystemDefined**: a header predefined by the system.
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
   * The hostname to which requests are forwarded. Valid values:
   * 
   * *   **${host}** (default): If you set the value to ${host}, you cannot append other characters.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The hostname must be 3 to 128 characters in length, and can contain lowercase letters, digits, and the following characters: - . \\* = ~ _ + \\ ^ ! $ & | ( ) [ ] ?.
   *     *   The hostname must contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters, and cannot contain digits or hyphens (-). The leftmost `domain label` can be an asterisk (\\*).
   *     *   The domain labels cannot start or end with hyphens (-).
   *     *   You can use asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * ${host}
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
   * The URL to which requests are redirected. Valid values:
   * 
   * *   Default value: **${path}**. **${host}**, **${protocol}**, and **${port}** are also supported. Each variable can be specified only once. You can specify one or more of the preceding variables in each request. You can also combine them with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The URL must be 1 to 128 characters in length, and is case-sensitive. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   *     *   The URL must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$ - _ . + / & ~ @ : \\" * ?`. It cannot contain the following special characters: `% # ; ! ( ) [ ] ^ , \\ "`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are distributed.
   * 
   * *   **${port}** (default): If you set the value to ${port}, you cannot append other characters to the value.
   * *   You can also enter a port number. Valid values: **1 to 63335**.
   * 
   * @example
   * 10
   */
  port?: string;
  /**
   * @remarks
   * The redirect protocol. Valid values:
   * 
   * *   **${protocol}** (default): If you set the value to ${protocol}, you cannot modify the value or append other characters.
   * *   **HTTP**
   * *   **HTTPS**
   * 
   * > *   HTTPS listeners support only HTTPS redirection.
   * >*   HTTP listeners support HTTP and HTTPS redirection.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string to which requests are redirected.
   * 
   * *   Default value: **${query}**. **${host}**, **${protocol}**, and **${port}** are also supported. Each variable can be specified only once. You can specify one or more of the preceding variables in each request. You can also combine them with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The query string must be 1 to 128 characters in length.
   *     *   It can contain printable characters, excluding space characters, the special characters `# [ ] { } \\ | < > "`, and lowercase letters.
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
   * The keys of the headers to be removed. The header keys must be 1 to 40 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The header keys specified in RemoveHeader must be unique.
   * 
   * *   If Direction is set to Request, the following request headers cannot be removed: `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`, and `x-forwarded-host`. Request headers are not case-sensitive.
   * *   If Direction is set to Response, the following response header keys are not supported: `connection`, `upgrade`, `content-length`, and `transfer-encoding`. The header keys are not case-sensitive.
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
   * The hostname to which requests are redirected. Valid values:
   * 
   * *   **${host}** (default): If you set the value to ${host}, you cannot append other characters.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The hostname must be 3 to 128 characters in length, and can contain lowercase letters, digits, and the following characters: - . \\* = ~ _ + \\ ^ ! $ & | ( ) [ ] ?.
   *     *   The hostname must contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters, and cannot contain digits or hyphens (-). The leftmost `domain label` can be an asterisk (\\*).
   *     *   The domain labels cannot start or end with hyphens (-). You can use asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The URL to which requests are redirected. Valid values:
   * 
   * *   Default value: **${path}**. **${host}**, **${protocol}**, and **${port}** are also supported. Each variable can be specified only once. You can specify one or more of the preceding variables in each request. You can also combine them with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The URL must be 1 to 128 characters in length, and is case-sensitive. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   *     *   The URL must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$ - _ . + / & ~ @ : \\" * ?`. It cannot contain the following special characters: `% # ; ! ( ) [ ] ^ , \\ "`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /tsdf
   */
  path?: string;
  /**
   * @remarks
   * The query string of the URL to which requests are distributed.
   * 
   * *   Default value: **${query}**. **${host}**, **${protocol}**, and **${port}** are also supported. Each variable can be specified only once. The preceding variables can be used at the same time or combined with a custom value.
   * 
   * *   If you want to specify a custom value, make sure that the following requirements are met:
   * 
   *     *   The path must be 1 to 128 characters in length.
   *     *   It can contain printable characters, excluding space characters, the special characters `# [ ] { } \\ | < > "` and lowercase letters.
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
   * The number of requests per IP address. Value values: **1 to 1000000**.
   * 
   * >  If both the **QPS** and **PerIpQps** parameters are specified, the value of the **QPS** parameter is smaller than the value of the PerIpQps parameter.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * The queries per second (QPS). Valid values: **1 to 1000000**.
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
   * The server group ID.
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
   * The configuration of the server group to which traffic is mirrored.
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
   * The configuration of the server group to which traffic is mirrored.
   */
  mirrorGroupConfig?: CreateRuleRequestRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The type of destination to which network traffic is mirrored. Valid values:
   * 
   * *   **ForwardGroupMirror**: a server group.
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
   * Request forwarding based on CORS.
   */
  corsConfig?: CreateRuleRequestRuleActionsCorsConfig;
  /**
   * @remarks
   * The configuration of the custom response.
   */
  fixedResponseConfig?: CreateRuleRequestRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The server groups to which requests are forwarded. You can specify at most five server groups for each forwarding rule.
   */
  forwardGroupConfig?: CreateRuleRequestRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The key of the header to be inserted.
   */
  insertHeaderConfig?: CreateRuleRequestRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority of the action. Valid values: **1 to 50000**. A smaller value indicates a higher priority. The actions of a forwarding rule are applied in descending order of priority. This parameter cannot empty. The priority of each action within a forwarding rule must be unique.
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
   * >  Do not set all fields in **RedirectConfig** to default values, except for **httpCode**.
   */
  redirectConfig?: CreateRuleRequestRuleActionsRedirectConfig;
  /**
   * @remarks
   * The HTTP headers to be removed.
   */
  removeHeaderConfig?: CreateRuleRequestRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The configuration of the rewrite action.
   * 
   * >  If you specify multiple actions for a forwarding rule, you must configure the **ForwardGroup** parameter for the **RewriteConfig** action.
   */
  rewriteConfig?: CreateRuleRequestRuleActionsRewriteConfig;
  /**
   * @remarks
   * The configuration of the traffic throttling action.
   */
  trafficLimitConfig?: CreateRuleRequestRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The configuration of the traffic mirroring action.
   */
  trafficMirrorConfig?: CreateRuleRequestRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The action. Valid values:
   * 
   * *   **ForwardGroup**: distributes requests to multiple vServer groups.
   * *   **Redirect**: redirects requests.
   * *   **FixedResponse**: returns a custom response.
   * *   **Rewrite**: rewrites requests.
   * *   **InsertHeader**: inserts headers.
   * *   **RemoveHeaderConfig:** deletes the header of a request.
   * *   **TrafficLimit**: throttles traffic.
   * *   **TrafficMirror**: mirrors network traffic.
   * *   **Cors**: enables cross-origin resource sharing (CORS).
   * 
   * The following action types are supported:
   * 
   * *   **FinalType**: Each forwarding rule can contain only one FinalType action, which is performed at the end. You can specify only one of **ForwardGroup**, **Redirect**, and **FixedResponse**.
   * *   **ExtType**: Each forwarding rule can contain one or more **ExtType** actions, which are performed before the **FinalType** action. If you want to specify an ExtType action, you must also specify a **FinalType** action. You can specify multiple **InsertHeader** actions or one **Rewrite** action.
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
   * 
   * *   The cookie key must be 1 to 100 characters in length.
   * *   You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * *   The value can contain printable characters, excluding uppercase letters, space characters, and the following special characters: `; # [ ] { } \\ | < > & "`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The cookie value.
   * 
   * *   The cookie value must be 1 to 100 characters in length.
   * *   You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * *   The value can contain printable characters, excluding uppercase letters, space characters, and the following special characters: `; # [ ] { } \\ | < > & "`.
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
   * The cookie values.
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
   * The header key.
   * 
   * *   The header key must be 1 to 40 characters in length.
   * *   The key can contain letters, digits, hyphens (-), and underscores (_).
   * *   Cookie and Host are not supported.
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

export class CreateRuleRequestRuleConditionsHostConfig extends $dara.Model {
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

export class CreateRuleRequestRuleConditionsMethodConfig extends $dara.Model {
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

export class CreateRuleRequestRuleConditionsPathConfig extends $dara.Model {
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

export class CreateRuleRequestRuleConditionsQueryStringConfigValues extends $dara.Model {
  /**
   * @remarks
   * They key of the query string.
   * 
   * *   The key must be 1 to 100 characters in length.
   * *   You can use asterisks (\\*) and question marks (?) as wildcard characters. It can contain printable characters, excluding uppercase letters, space characters, and the following special characters: `# [ ] { } \\ | < > & "`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the query string.
   * 
   * *   The value must be 1 to 128 characters in length.
   * *   It can contain printable characters, but cannot contain uppercase letters, space characters, or the following special characters: `# [ ] { } \\ | < > &`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
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
   * The query strings.
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

export class CreateRuleRequestRuleConditionsResponseStatusCodeConfig extends $dara.Model {
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

export class CreateRuleRequestRuleConditionsSourceIpConfig extends $dara.Model {
  /**
   * @remarks
   * The source IP addresses used for traffic matching.
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
   * The key-value pairs of the cookie.
   */
  cookieConfig?: CreateRuleRequestRuleConditionsCookieConfig;
  /**
   * @remarks
   * The configuration of the header.
   */
  headerConfig?: CreateRuleRequestRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The configuration of the host.
   */
  hostConfig?: CreateRuleRequestRuleConditionsHostConfig;
  /**
   * @remarks
   * The configurations of the request method.
   */
  methodConfig?: CreateRuleRequestRuleConditionsMethodConfig;
  /**
   * @remarks
   * The configurations of the URL to which requests are forwarded.
   */
  pathConfig?: CreateRuleRequestRuleConditionsPathConfig;
  /**
   * @remarks
   * The configuration of the query strings.
   */
  queryStringConfig?: CreateRuleRequestRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The configuration of headers.
   */
  responseHeaderConfig?: CreateRuleRequestRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The configuration of the response status codes.
   */
  responseStatusCodeConfig?: CreateRuleRequestRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * Configuration of traffic matching based on source IP addresses. This parameter is required and valid when **Type** is set to **SourceIP**.
   */
  sourceIpConfig?: CreateRuleRequestRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The type of forwarding rule. Valid values:
   * 
   * *   **Host**: Requests are distributed based on hosts.
   * *   **Path**: Requests are distributed based on paths.
   * *   **Header**: Requests are distributed based on HTTP headers.
   * *   **QueryString**: Requests are distributed based on query strings.
   * *   **Method**: Requests are distributed based on request methods.
   * *   **Cookie**: Requests are distributed based on cookies.
   * *   **SourceIp**: Requests are forwarded based on source IP addresses.
   * *   **ResponseHeader**: Requests are forwarded based on HTTP response headers.
   * *   **ResponseStatusCode**: Requests are forwarded based on response status codes.
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
   * The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
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
   * The direction to which the forwarding rule is applied. Valid values:
   * 
   * *   **Request** (default): The forwarding rule is applied to the requests received by ALB.
   * *   **Response**: The forwarding rule is applied to the responses returned by backend servers.
   * 
   * > Basic ALB instances do not support the **Response** value.
   * 
   * @example
   * Request
   */
  direction?: string;
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
   * The listener ID of the ALB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The priority of the forwarding rule. Valid values: **1 to 10000**. A smaller value indicates a higher priority.
   * 
   * > The priorities of the forwarding rules created for the same listener must be unique.
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
  ruleActions?: CreateRuleRequestRuleActions[];
  /**
   * @remarks
   * The match conditions of the forwarding rule.
   * 
   * This parameter is required.
   */
  ruleConditions?: CreateRuleRequestRuleConditions[];
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * *   The name must be 2 to 128 characters in length.
   * *   It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-doc
   */
  ruleName?: string;
  /**
   * @remarks
   * The tags.
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

