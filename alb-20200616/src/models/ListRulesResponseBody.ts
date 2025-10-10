// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyRulesRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether credentials can be carried in CORS requests. Valid values:
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
   * The allowed headers of CORS requests.
   */
  allowHeaders?: string[];
  /**
   * @remarks
   * The allowed HTTP methods of CORS requests.
   */
  allowMethods?: string[];
  /**
   * @remarks
   * The allowed origins of CORS requests.
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

export class ListRulesResponseBodyRulesRuleActionsFixedResponseConfig extends $dara.Model {
  /**
   * @remarks
   * The content of the custom response. The content can be up to 1 KB in size, and can contain only ASCII characters.
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
   * The HTTP status code in responses. Valid values: **HTTP_2xx**, **HTTP_4xx**, and **HTTP_5xx**. **x** is a digit.
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
   * If the value of N in ServerGroupTuple.N is larger than 1, you can enable or disable session persistence for server groups.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * If Enabled is set to True, you can specify a session persistence timeout period.
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
   * The server group to which requests are forwarded.
   * 
   * @example
   * sg-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight of the server group. Valid values: **0** to **100**.
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
   * The session persistence configurations of the server group.
   */
  serverGroupStickySession?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The server groups to which requests are forwarded.
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
   * The key of the header. The header key must be 1 to 40 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The header key specified in `InsertHeader` must be unique.
   * 
   * >  **Cookie** and **Host** are not supported.
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
   * *   If **ValueType** is set to **UserDefined**, you can specify a custom header value. The header value must be 1 to 128 characters in length, and can contain wildcard characters, such as asterisks (\\*) and question marks (?), and printable characters whose ASCII values are `larger than or equal to 32 and smaller than 127`. The header value cannot start or end with a space character.
   * 
   * *   If **ValueType** is set to **ReferenceHeader**, you can reference a value from a request header. The header value must be 1 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * ClientSrcPort
   */
  value?: string;
  /**
   * @remarks
   * The type of the header value. Valid values:
   * 
   * *   **UserDefined**: a user-defined header value.
   * *   **ReferenceHeader**: a header value that is referenced from a request header.
   * *   **SystemDefined:** a system-defined header value.
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
   * The hostname to which requests are redirected. Valid values:
   * 
   * *   **${host}** (default): If ${host} is returned, no other characters are appended.
   * 
   * *   A custom value. Make sure that the custom value meets the following requirements:
   * 
   *     *   The hostname must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (\\*), and question marks (?).
   *     *   The hostname must contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
   *     *   The domain labels cannot start or end with a hyphen (-).
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
   * *   **${path}** (default): You can reference \\*\\*${host}**, **${protocol}**, and**${port}**. The URL can consist of **${host}**,**${protocol}**, and **${port}\\*\\*. Each variable can be used only once. The preceding variables can be used at the same time or combined with a custom value.
   * 
   * *   A custom value. Make sure that the custom value meets the following requirements:
   * 
   *     *   The URL must be 1 to 128 characters in length.
   *     *   It must start with a forward slash (/) and can contain letters, digits, and the following special characters: `$ - _ .+ / & ~ @ :`. It cannot contain the following special characters: `" % # ; ! ( ) [ ] ^ , "`. You can use asterisks (\\*) and question marks (?) as wildcard characters.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are redirected. Valid values:
   * 
   * *   **${port}** (default): If ${port} is returned, no other characters are appended.
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
   * *   **${protocol}** (default): If ${protocol} is returned, no other characters are appended.
   * *   **HTTP** or **HTTPS**
   * 
   * >  HTTPS listeners supports only HTTPS redirects.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string of the URL to which requests are redirected. The query string must be 1 to 128 characters in length, and can contain printable characters, excluding uppercase letters and the following special characters: `# [ ] { } \\ | < > &`.
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
   * The key of the header to be removed. The header key must be 1 to 40 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The header keys specified in RemoveHeader must be unique.
   * 
   * *   If Direction is set to Request, the specified headers are removed from requests. The following header keys are not supported (not case-sensitive): `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, and `authority`.
   * *   If Direction is set to Response, the specified headers are removed from responses. The following header keys are not supported (not case-sensitive): `connection`, `upgrade`, `content-length`, and `transfer-encoding`.
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
   * The hostname to which requests are redirected. Valid values:
   * 
   * *   **${host}** (default): If ${host} is returned, no other characters are appended.
   * 
   * *   A custom value. Make sure that the custom value meets the following requirements:
   * 
   *     *   The hostname must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (\\*), and question marks (?).
   *     *   The hostname must contain at least one period (.) but cannot start or end with a period (.).
   *     *   The rightmost domain label can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
   *     *   The domain labels cannot start or end with a hyphen (-).
   *     *   You can use asterisks (\\*) and question marks (?) anywhere in a domain label as wildcard characters.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The URL to which requests are redirected. The URL must be 1 to 128 characters in length, and can contain letters, digits, asterisks (\\*), question marks (?), and the following special characters: `$ - _ . + / & ~ @ :`. It must start with a forward slash (/) and does not contain the following special characters: `" % # ; ! ( ) [ ] ^ , "`.
   * 
   * @example
   * /tsdf
   */
  path?: string;
  /**
   * @remarks
   * The query string of the URL to which requests are redirected. The query string must be 1 to 128 characters in length, and can contain printable characters, excluding uppercase letters and the following special characters: `# [ ] { } \\ | < > &`.
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
   * The number of requests per IP address. Valid values: **1 to 100000**.
   * 
   * >  If both the **QPS** and **PerIpQps** parameters are specified, the value of the **QPS** parameter is smaller than the value of the PerIpQps parameter.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * The number of queries per second (QPS). Valid values: **1** to **100000**.
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
   * The ID of the server group.
   * 
   * @example
   * srg-00mkgijak0w4qgz9****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight of the server group. Valid values: **0** to **100**.
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
   * The server group to which traffic is mirrored.
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
   * The configuration of the server group to which traffic is mirrored.
   */
  mirrorGroupConfig?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The destination to which traffic is mirrored. The destination can be a server group.
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
   * The configuration of the custom response.
   */
  fixedResponseConfig?: ListRulesResponseBodyRulesRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The configurations of the server groups.
   */
  forwardGroupConfig?: ListRulesResponseBodyRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The key of the header to be inserted.
   */
  insertHeaderConfig?: ListRulesResponseBodyRulesRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority of the action. Valid values: **1 to 50000**. A smaller value indicates a higher priority. The actions of a forwarding rule are applied in descending order of priority. This parameter cannot empty. The priority of each action within a forwarding rule must be unique.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The configuration of the redirect action.
   */
  redirectConfig?: ListRulesResponseBodyRulesRuleActionsRedirectConfig;
  /**
   * @remarks
   * The HTTP header to be removed.
   */
  removeHeaderConfig?: ListRulesResponseBodyRulesRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The configuration of the rewrite action.
   */
  rewriteConfig?: ListRulesResponseBodyRulesRuleActionsRewriteConfig;
  /**
   * @remarks
   * The configuration of traffic throttling.
   */
  trafficLimitConfig?: ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The configuration of traffic mirroring.
   */
  trafficMirrorConfig?: ListRulesResponseBodyRulesRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The action. Valid values:
   * 
   * *   **ForwardGroup**: distributes requests to multiple vServer groups.
   * *   **Redirect**: redirects requests.
   * *   **FixedResponse**: returns a custom response.
   * *   **Rewrite**: rewrites requests.
   * *   **InsertHeader**: inserts headers.
   * *   **RemoveHeaderConfig**: removes headers.
   * *   **TrafficLimitConfig**: throttles network traffic.
   * *   **TrafficMirrorConfig**: mirrors network traffic.
   * *   **CorsConfig**: forwards requests based on CORS.
   * 
   * The preceding actions can be classified into two broad types:
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
   * The cookie key. The cookie key must be 1 to 100 characters in length, and can contain lowercase letters, printable ASCII characters, asterisks (\\*), and question marks (?). It cannot contain space characters or the following special characters: `# [ ] { } \\ | < > &`.
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

export class ListRulesResponseBodyRulesRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The cookie value.
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
   * The key of the header. The header key must be 1 to 40 characters in length. It can contain letters, digits, hyphens (-), and underscores (_). Cookie and Host are not supported.
   * 
   * @example
   * Port
   */
  key?: string;
  /**
   * @remarks
   * The value of the header.
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
   * The URLs to which requests are forwarded.
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
   * They key of the query string. The key must be 1 to 100 characters in length, and can contain lowercase letters, printable ASCII characters, asterisks (\\*), and question marks (?). It cannot contain space characters or the following special characters: `# [ ] { } \\ | < > &`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the query string. The value must be 1 to 128 characters in length, and can contain lowercase letters, printable ASCII characters, asterisks (\\*), and question marks (?). It cannot contain space characters or the following special characters: `# [ ] { } \\ | < > &`.
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
   * The query string.
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
   * The key of the HTTP header. The header key must be 1 to 40 characters in length, It can contain letters, digits, hyphens (-), and underscores (_). Cookie and Host are not supported.
   * 
   * @example
   * key
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

export class ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig extends $dara.Model {
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

export class ListRulesResponseBodyRulesRuleConditionsSourceIpConfig extends $dara.Model {
  /**
   * @remarks
   * The source IP addresses.
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
   * The key-value pairs of the cookie.
   */
  cookieConfig?: ListRulesResponseBodyRulesRuleConditionsCookieConfig;
  /**
   * @remarks
   * The configuration of the header.
   */
  headerConfig?: ListRulesResponseBodyRulesRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The configuration of the hosts.
   */
  hostConfig?: ListRulesResponseBodyRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The configurations of the request methods.
   */
  methodConfig?: ListRulesResponseBodyRulesRuleConditionsMethodConfig;
  /**
   * @remarks
   * The configurations of the forwarding URLs.
   */
  pathConfig?: ListRulesResponseBodyRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The configurations of the query strings.
   */
  queryStringConfig?: ListRulesResponseBodyRulesRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The HTTP header in responses.
   */
  responseHeaderConfig?: ListRulesResponseBodyRulesRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The configurations of the response status codes.
   */
  responseStatusCodeConfig?: ListRulesResponseBodyRulesRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * Traffic matching based on source IP addresses.
   */
  sourceIpConfig?: ListRulesResponseBodyRulesRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The type of forwarding rule. Valid values:
   * 
   * *   **Host**: Responses are forwarded based on hosts.
   * *   **Path**: Responses are forwarded based on URLs.
   * *   **Header**: Responses are forwarded based on HTTP headers.
   * *   **QueryString**: Responses are forwarded based on query strings.
   * *   **Method**: Responses are forwarded based on request methods.
   * *   **Cookie**: Responses are forwarded based on cookies.
   * *   **SourceIp**: Responses are forwarded based on source IP addresses.
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
   * The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.
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
   * The direction to which the forwarding rule is applied. Valid values:
   * 
   * *   Request (default): The forwarding rule is applied to requests. The forwarding action is performed on packets that are forwarded from clients to ALB.
   * *   Responses: The forwarding rule is applied to responses. The forwarding action is performed on packets that are returned from backend servers to ALB.
   * 
   * >  Basic ALB instances support only the Response direction.
   * 
   * @example
   * Request
   */
  direction?: string;
  /**
   * @remarks
   * The ID of the listener that is associated with the forwarding rule.
   * 
   * @example
   * lsn-i35udpz3pxsmnf****
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the Application Load Balancer (ALB) instance that is associated with the forwarding rule.
   * 
   * @example
   * alb-x30o38azsuj0sx****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The priority of the forwarding rule. Valid values: **1 to 10000**. A smaller value indicates a higher priority.
   * 
   * >  The priority of each forwarding rule added to a listener must be unique.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The action of the forwarding rule.
   */
  ruleActions?: ListRulesResponseBodyRulesRuleActions[];
  /**
   * @remarks
   * The conditions of the forwarding rule.
   */
  ruleConditions?: ListRulesResponseBodyRulesRuleConditions[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * @example
   * rule-bpn0kn908w4nbw****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule. The name must be 2 to 128 letters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * rule-instance-test
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the forwarding rule. Valid values:
   * 
   * *   **Provisioning**: The forwarding rule is being created.
   * *   **Configuring**: The forwarding rule is being modified.
   * *   **Available**: The forwarding rule is available.
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
   * The maximum number of entries returned.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the forwarding rule.
   */
  rules?: ListRulesResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries returned.
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

