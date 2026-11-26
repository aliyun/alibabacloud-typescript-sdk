// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRulesAttributeRequestRulesRuleActionsCorsConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow credentials in cross-origin requests.
   * 
   * @example
   * off
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
   * The maximum cache time for preflight requests in the browser.
   * 
   * @example
   * 60
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
   * The content.
   * 
   * @example
   * dssacav
   */
  content?: string;
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * text/plain
   */
  contentType?: string;
  /**
   * @remarks
   * The HTTP status code.
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
   * Specifies whether session persistence is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The timeout period for session persistence across server groups. Unit: seconds. Valid values: 1 to 86400.
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

export class UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-3kbj35ay7cvi******
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The weight.
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

export class UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The session persistence across server groups.
   */
  serverGroupStickySession?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession;
  /**
   * @remarks
   * The list of destination server groups to which requests are forwarded.
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
   * Specifies whether to overwrite the existing value in the request.
   * 
   * @example
   * False
   */
  coverEnabled?: boolean;
  /**
   * @remarks
   * The HTTP header.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of the HTTP header.
   * 
   * @example
   * value
   */
  value?: string;
  /**
   * @remarks
   * The type of the value.
   * 
   * @example
   * SystemDefined
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
   * The host to which requests are redirected.
   * 
   * @example
   * test.alb.com
   */
  host?: string;
  /**
   * @remarks
   * The redirect method.
   * 
   * @example
   * 301
   */
  httpCode?: string;
  /**
   * @remarks
   * The path to which requests are redirected.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The port to which requests are redirected.
   * 
   * @example
   * 443
   */
  port?: string;
  /**
   * @remarks
   * The protocol to which requests are redirected.
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  /**
   * @remarks
   * The query string to which requests are redirected.
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

export class UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The HTTP header key.
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

export class UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig extends $dara.Model {
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * ${host}
   */
  host?: string;
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The query string.
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

export class UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The number of requests per second per IP address.
   * 
   * @example
   * 100
   */
  perIpQps?: number;
  /**
   * @remarks
   * The number of requests per second.
   * 
   * @example
   * 1000
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
   * sgp-vlnjo1rhw0vc******
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
   * The server groups to which traffic is mirrored.
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
   * The configuration for mirroring traffic to a server group.
   */
  mirrorGroupConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfigMirrorGroupConfig;
  /**
   * @remarks
   * The type of the mirror target.
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
   * The CORS configuration.
   */
  corsConfig?: UpdateRulesAttributeRequestRulesRuleActionsCorsConfig;
  /**
   * @remarks
   * The configuration of the fixed response action.
   */
  fixedResponseConfig?: UpdateRulesAttributeRequestRulesRuleActionsFixedResponseConfig;
  /**
   * @remarks
   * The configuration of the forward group action.
   */
  forwardGroupConfig?: UpdateRulesAttributeRequestRulesRuleActionsForwardGroupConfig;
  /**
   * @remarks
   * The configuration of the insert header action.
   */
  insertHeaderConfig?: UpdateRulesAttributeRequestRulesRuleActionsInsertHeaderConfig;
  /**
   * @remarks
   * The priority.
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
   * Removes HTTP headers.
   */
  removeHeaderConfig?: UpdateRulesAttributeRequestRulesRuleActionsRemoveHeaderConfig;
  /**
   * @remarks
   * The configuration of the rewrite action.
   */
  rewriteConfig?: UpdateRulesAttributeRequestRulesRuleActionsRewriteConfig;
  /**
   * @remarks
   * The traffic throttling configuration.
   */
  trafficLimitConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficLimitConfig;
  /**
   * @remarks
   * The traffic mirroring configuration.
   */
  trafficMirrorConfig?: UpdateRulesAttributeRequestRulesRuleActionsTrafficMirrorConfig;
  /**
   * @remarks
   * The type of the forwarding rule action.
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
   * The cookie condition key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The cookie condition value.
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

export class UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig extends $dara.Model {
  /**
   * @remarks
   * The list of cookie key-value pairs.
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
   * The HTTP header key.
   * 
   * @example
   * key
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

export class UpdateRulesAttributeRequestRulesRuleConditionsHostConfig extends $dara.Model {
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

export class UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig extends $dara.Model {
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

export class UpdateRulesAttributeRequestRulesRuleConditionsPathConfig extends $dara.Model {
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

export class UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfigValues extends $dara.Model {
  /**
   * @remarks
   * The query string condition key.
   * 
   * @example
   * account
   */
  key?: string;
  /**
   * @remarks
   * The query string condition value.
   * 
   * @example
   * on
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
   * The list of query string condition key-value pairs.
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
   * The response HTTP header key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The response HTTP header values.
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
   * The response status code condition.
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
   * Adds one or more IP addresses or CIDR blocks.
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
   * The cookie condition configuration.
   */
  cookieConfig?: UpdateRulesAttributeRequestRulesRuleConditionsCookieConfig;
  /**
   * @remarks
   * The HTTP header condition configuration.
   */
  headerConfig?: UpdateRulesAttributeRequestRulesRuleConditionsHeaderConfig;
  /**
   * @remarks
   * The hostname condition configuration.
   */
  hostConfig?: UpdateRulesAttributeRequestRulesRuleConditionsHostConfig;
  /**
   * @remarks
   * The HTTP request method condition configuration.
   */
  methodConfig?: UpdateRulesAttributeRequestRulesRuleConditionsMethodConfig;
  /**
   * @remarks
   * The query character string condition configuration.
   */
  pathConfig?: UpdateRulesAttributeRequestRulesRuleConditionsPathConfig;
  /**
   * @remarks
   * The query character string condition configuration.
   */
  queryStringConfig?: UpdateRulesAttributeRequestRulesRuleConditionsQueryStringConfig;
  /**
   * @remarks
   * The response HTTP header.
   */
  responseHeaderConfig?: UpdateRulesAttributeRequestRulesRuleConditionsResponseHeaderConfig;
  /**
   * @remarks
   * The response status code condition.
   */
  responseStatusCodeConfig?: UpdateRulesAttributeRequestRulesRuleConditionsResponseStatusCodeConfig;
  /**
   * @remarks
   * The configuration for matching service traffic based on source IP addresses.
   */
  sourceIpConfig?: UpdateRulesAttributeRequestRulesRuleConditionsSourceIpConfig;
  /**
   * @remarks
   * The condition type.
   * 
   * @example
   * Header
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
   * 80
   */
  priority?: number;
  /**
   * @remarks
   * The list of actions for the forwarding rule.
   */
  ruleActions?: UpdateRulesAttributeRequestRulesRuleActions[];
  /**
   * @remarks
   * The list of forwarding rule conditions.
   */
  ruleConditions?: UpdateRulesAttributeRequestRulesRuleConditions[];
  /**
   * @remarks
   * The ID of the forwarding rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-n4hfecmmtmfl******
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the forwarding rule.
   * 
   * @example
   * rule_111
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
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The ClientToken parameter can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544***
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run only. Valid values:
   * 
   * - **true**: performs a dry run only and does not batch update the forwarding rule attributes. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the check, an error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request. If the request passes the check, an `HTTP 2xx` status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of forwarding rules.
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

