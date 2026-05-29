// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRulesAttributeRequestRulesRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow credentials to be carried in CORS requests.
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
   * The trusted origins.
   */
  allowOrigin?: string[];
  /**
   * @remarks
   * The headers that can be exposed.
   */
  exposeHeaders?: string[];
  /**
   * @remarks
   * The maximum cache time for dry runs in the browser.
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

export class UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig extends $dara.Model {
  /**
   * @remarks
   * The content of the response.
   * 
   * @example
   * dssacav
   */
  content?: string;
  /**
   * @remarks
   * The content type of the response.
   * 
   * @example
   * text/plain
   */
  contentType?: string;
  /**
   * @remarks
   * The HTTP status code in the response.
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

export class UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable session persistence.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The timeout period for sessions.
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

export class UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sg-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight of the server group.
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

export class UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of session persistence for server groups.
   */
  serverGroupStickySession?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The server groups to which requests are forwarded.
   */
  serverGroupTuples?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupStickySession: 'ServerGroupStickySession',
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupStickySession: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession,
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples },
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

export class UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite the header in the request.
   * 
   * @example
   * false
   */
  coverEnabled?: boolean;
  /**
   * @remarks
   * The key of the HTTP header.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the HTTP header.
   * 
   * @example
   * UserDefined
   */
  value?: string;
  /**
   * @remarks
   * The type of the header value.
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

export class UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig extends $dara.Model {
  /**
   * @remarks
   * The hostname to which requests are redirected.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The HTTP status code that indicates the redirect type.
   * 
   * @example
   * 301
   */
  httpCode?: string;
  /**
   * @remarks
   * The path of the destination to which requests are forwarded.
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are forwarded.
   * 
   * @example
   * 10
   */
  port?: string;
  /**
   * @remarks
   * The protocol of the destination to which requests are forwarded.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The query string to which requests are redirected.
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

export class UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The key of the header.
   * 
   * @example
   * Port
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

export class UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig extends $dara.Model {
  /**
   * @remarks
   * The hostname of the destination to which requests are forwarded.
   * 
   * @example
   * www.example.com
   */
  host?: string;
  /**
   * @remarks
   * The path to which requests are forwarded.
   * 
   * @example
   * /tsdf
   */
  path?: string;
  /**
   * @remarks
   * The query string of the URL to which requests are forwarded.
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

export class UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The number of requests per IP address.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * The number of queries per second (QPS).
   * 
   * @example
   * 2
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

export class UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples extends $dara.Model {
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

export class UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The server group to which traffic is mirrored.
   */
  serverGroupTuples?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfigServerGroupTuples },
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

export class UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration of the server group to which traffic is mirrored.
   */
  mirrorGroupConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The type of the target to which network traffic is mirrored.
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
      mirrorGroupConfig: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig,
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

export class UpdateRulesAttributeRequestRulesRuleActions extends $dara.Model {
  /**
   * @remarks
   * The cross-origin resource sharing (CORS) configuration.
   */
  corsConfig?: UpdateRulesAttributeRequestRulesRuleActionsCorsConfig;
  /**
   * @remarks
   * The configuration of the action to return a custom response.
   */
  fixedResponseConfig?: UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The configuration of the action to forward requests to server groups.
   */
  forwardGroupConfig?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The configuration of the action to insert a header.
   */
  insertHeaderConfig?: UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority of the action.
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
   */
  redirectConfig?: UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig;
  /**
   * @remarks
   * The configuration of the HTTP header to be removed.
   */
  removeHeaderConfig?: UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The configuration of the rewrite action.
   */
  rewriteConfig?: UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig;
  /**
   * @remarks
   * The configuration of traffic throttling.
   */
  trafficLimitConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The configuration of traffic mirroring.
   */
  trafficMirrorConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The type of action.
   * 
   * This parameter is required.
   * 
   * @example
   * Host
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
      corsConfig: UpdateRulesAttributeRequestRulesRuleActionsCorsConfig,
      fixedResponseConfig: UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig,
      forwardGroupConfig: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig,
      insertHeaderConfig: UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig,
      order: 'number',
      redirectConfig: UpdateRulesAttributeRequestRulesRuleActionsRedirectConfig,
      removeHeaderConfig: UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig,
      rewriteConfig: UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig,
      trafficLimitConfig: UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig,
      trafficMirrorConfig: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig,
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

export class UpdateRulesAttributeRequestRulesRuleConditionsCookieConfigValues extends $dara.Model {
  /**
   * @remarks
   * The cookie key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The cookie value.
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

export class UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs of cookies.
   */
  values?: UpdateRulesAttributeRequestRulesRuleConditionsCookieConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleConditionsCookieConfigValues },
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

export class UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The key of the header.
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

export class UpdateRulesAttributeRequestRulesRuleConditionsHostConfig extends $dara.Model {
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

export class UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig extends $dara.Model {
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

export class UpdateRulesAttributeRequestRulesRuleConditionsPathConfig extends $dara.Model {
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

export class UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues extends $dara.Model {
  /**
   * @remarks
   * The key of the query string.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the query string.
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

export class UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs of query strings.
   */
  values?: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues },
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

export class UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The key of the response header.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The values of the response header.
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

export class UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig extends $dara.Model {
  /**
   * @remarks
   * The match conditions.
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

export class UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig extends $dara.Model {
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

export class UpdateRulesAttributeRequestRulesRuleConditions extends $dara.Model {
  /**
   * @remarks
   * The configuration of the cookie.
   */
  cookieConfig?: UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig;
  /**
   * @remarks
   * The configuration of the HTTP header.
   */
  headerConfig?: UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The match conditions for hostnames.
   */
  hostConfig?: UpdateRulesAttributeRequestRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The configuration of the HTTP request method.
   */
  methodConfig?: UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig;
  /**
   * @remarks
   * The match conditions for query strings.
   */
  pathConfig?: UpdateRulesAttributeRequestRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The match conditions for query strings.
   */
  queryStringConfig?: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The HTTP response headers.
   */
  responseHeaderConfig?: UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The match conditions for response status codes.
   */
  responseStatusCodeConfig?: UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * Traffic matching based on source IP addresses.
   */
  sourceIpConfig?: UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The condition type of the forwarding rule.
   * 
   * @example
   * ForwardGroup
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
      cookieConfig: UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig,
      headerConfig: UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig,
      hostConfig: UpdateRulesAttributeRequestRulesRuleConditionsHostConfig,
      methodConfig: UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig,
      pathConfig: UpdateRulesAttributeRequestRulesRuleConditionsPathConfig,
      queryStringConfig: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig,
      responseHeaderConfig: UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig,
      responseStatusCodeConfig: UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig,
      sourceIpConfig: UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig,
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

export class UpdateRulesAttributeRequestRules extends $dara.Model {
  /**
   * @remarks
   * The priority of the forwarding rule.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The forwarding rules.
   */
  ruleActions?: UpdateRulesAttributeRequestRulesRuleActions[];
  /**
   * @remarks
   * The match conditions of the forwarding rule.
   */
  ruleConditions?: UpdateRulesAttributeRequestRulesRuleConditions[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-cxjh7vazn2jpnl****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * rule-instance-test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      ruleActions: 'RuleActions',
      ruleConditions: 'RuleConditions',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      ruleActions: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleActions },
      ruleConditions: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRulesRuleConditions },
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

export class UpdateRulesAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a `2xx HTTP` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The forwarding rules.
   * 
   * This parameter is required.
   */
  rules?: UpdateRulesAttributeRequestRules[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      rules: { 'type': 'array', 'itemType': UpdateRulesAttributeRequestRules },
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

