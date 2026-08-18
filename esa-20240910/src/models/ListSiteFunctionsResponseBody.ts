// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSiteFunctionsResponseBodyConfigsCacheReserve extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 392382988376064
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to enable cache reserve. This feature is disabled by default. Valid values:
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The cache reserve instance ID.
   * 
   * @example
   * cr_hk_123456789
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      enable: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsCacheRules extends $dara.Model {
  /**
   * @remarks
   * The ports on which caching is enabled. Valid values: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, and 2096.
   * 
   * @example
   * 8880
   */
  additionalCacheablePorts?: string;
  /**
   * @remarks
   * The browser cache mode. Valid values:
   * 
   * @example
   * follow_origin
   */
  browserCacheMode?: string;
  /**
   * @remarks
   * The browser cache expiration time, in seconds.
   * 
   * @example
   * 300
   */
  browserCacheTtl?: string;
  /**
   * @remarks
   * The bypass cache mode. Valid values:
   * - cache_all: all requests are cached.
   * - bypass_all: all requests bypass the cache.
   * 
   * @example
   * cache_all
   */
  bypassCache?: string;
  /**
   * @remarks
   * Specifies whether cache deception armor is enabled. This feature protects against web cache deception attacks by caching only content that passes validation. Valid values:
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * The cache reserve eligibility. Controls whether user requests bypass cache reserve nodes during back-to-origin. Valid values:
   * - bypass_cache_reserve: requests bypass cache reserve.
   * - eligible_for_cache_reserve: eligible for cache reserve.
   * 
   * @example
   * bypass_cache_reserve
   */
  cacheReserveEligibility?: string;
  /**
   * @remarks
   * The cookie names to check for presence when generating cache keys. If a cookie exists, its name (case-insensitive) is added to the cache key. Multiple cookie names are separated by spaces.
   * 
   * @example
   * cookiename
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * The header names to check for presence when generating cache keys. If a header exists, its name (case-insensitive) is added to the cache key. Multiple header names are separated by spaces.
   * 
   * @example
   * headername
   */
  checkPresenceHeader?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The edge cache mode. Valid values:
   * - follow_origin: follows the origin cache policy if one exists. Otherwise, uses the default cache policy.
   * - no_cache: does not cache.
   * - override_origin: overrides the origin cache policy.
   * - follow_origin_bypass: follows the origin cache policy if one exists. Otherwise, does not cache.
   * 
   * @example
   * follow_origin
   */
  edgeCacheMode?: string;
  /**
   * @remarks
   * The edge node cache expiration time, in seconds.
   * 
   * @example
   * 300
   */
  edgeCacheTtl?: string;
  /**
   * @remarks
   * The status code cache expiration time, in seconds.
   * 
   * @example
   * 300
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * The specified cookie names and their values to include when generating cache keys. Multiple values are separated by spaces.
   * 
   * @example
   * cookie_exapmle
   */
  includeCookie?: string;
  /**
   * @remarks
   * The specified header names and their values to include when generating cache keys. Multiple values are separated by spaces.
   * 
   * @example
   * example
   */
  includeHeader?: string;
  /**
   * @remarks
   * The cache key processing mode.
   * 
   * @example
   * ignore
   */
  postBodyCacheKey?: string;
  /**
   * @remarks
   * The body size limit, in KB. Supports body sizes from 1 to 8 KB. If the value is empty, the default value of 8 KB takes effect.
   * 
   * @example
   * 1
   */
  postBodySizeLimit?: string;
  /**
   * @remarks
   * Specifies whether POST caching is enabled.
   * 
   * @example
   * on
   */
  postCache?: string;
  /**
   * @remarks
   * The query strings to retain or remove. Multiple values are separated by spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * The processing mode for query strings when generating cache keys. Valid values:
   * 
   * @example
   * reserve_all
   */
  queryStringMode?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @remarks
   * Specifies whether to serve stale cache. When enabled, edge nodes can respond to user requests with cached expired content when the origin server is unavailable. Valid values:
   * 
   * @example
   * on
   */
  serveStale?: string;
  /**
   * @remarks
   * Specifies whether to sort query strings for caching. Valid values:
   * 
   * @example
   * on
   */
  sortQueryStringForCache?: string;
  /**
   * @remarks
   * Specifies whether to include the type of the client when generating cache keys. Valid values:
   * 
   * @example
   * on
   */
  userDeviceType?: string;
  /**
   * @remarks
   * Specifies whether to include the client geographic location when generating cache keys. Valid values:
   * 
   * @example
   * on
   */
  userGeo?: string;
  /**
   * @remarks
   * Specifies whether to include the client language type when generating cache keys. Valid values:
   * 
   * @example
   * on
   */
  userLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      additionalCacheablePorts: 'AdditionalCacheablePorts',
      browserCacheMode: 'BrowserCacheMode',
      browserCacheTtl: 'BrowserCacheTtl',
      bypassCache: 'BypassCache',
      cacheDeceptionArmor: 'CacheDeceptionArmor',
      cacheReserveEligibility: 'CacheReserveEligibility',
      checkPresenceCookie: 'CheckPresenceCookie',
      checkPresenceHeader: 'CheckPresenceHeader',
      configId: 'ConfigId',
      edgeCacheMode: 'EdgeCacheMode',
      edgeCacheTtl: 'EdgeCacheTtl',
      edgeStatusCodeCacheTtl: 'EdgeStatusCodeCacheTtl',
      includeCookie: 'IncludeCookie',
      includeHeader: 'IncludeHeader',
      postBodyCacheKey: 'PostBodyCacheKey',
      postBodySizeLimit: 'PostBodySizeLimit',
      postCache: 'PostCache',
      queryString: 'QueryString',
      queryStringMode: 'QueryStringMode',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      serveStale: 'ServeStale',
      sortQueryStringForCache: 'SortQueryStringForCache',
      userDeviceType: 'UserDeviceType',
      userGeo: 'UserGeo',
      userLanguage: 'UserLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalCacheablePorts: 'string',
      browserCacheMode: 'string',
      browserCacheTtl: 'string',
      bypassCache: 'string',
      cacheDeceptionArmor: 'string',
      cacheReserveEligibility: 'string',
      checkPresenceCookie: 'string',
      checkPresenceHeader: 'string',
      configId: 'number',
      edgeCacheMode: 'string',
      edgeCacheTtl: 'string',
      edgeStatusCodeCacheTtl: 'string',
      includeCookie: 'string',
      includeHeader: 'string',
      postBodyCacheKey: 'string',
      postBodySizeLimit: 'string',
      postCache: 'string',
      queryString: 'string',
      queryStringMode: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
      serveStale: 'string',
      sortQueryStringForCache: 'string',
      userDeviceType: 'string',
      userGeo: 'string',
      userLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsCacheTags extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore case. Valid values:
   * 
   * @example
   * on
   */
  caseInsensitive?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @remarks
   * The custom CacheTag name.
   * 
   * @example
   * example
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      caseInsensitive: 'CaseInsensitive',
      configId: 'ConfigId',
      sequence: 'Sequence',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseInsensitive: 'string',
      configId: 'number',
      sequence: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsCnameFlattening extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 245523334529026
   */
  configId?: number;
  /**
   * @remarks
   * The flattening mode. Valid values:
   * - flatten_all: flattens all records.
   * - flatten_at_root: flattens only the root domain. The root domain is flattened by default.
   * 
   * @example
   * flatten_all
   */
  flattenMode?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 0
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      flattenMode: 'FlattenMode',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      flattenMode: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsCompressionRules extends $dara.Model {
  /**
   * @remarks
   * The Brotli compression setting. Valid values:
   * 
   * @example
   * on
   */
  brotli?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The Gzip compression setting. Valid values:
   * 
   * @example
   * on
   */
  gzip?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @remarks
   * The Zstd compression setting. Valid values:
   * 
   * @example
   * on
   */
  zstd?: string;
  static names(): { [key: string]: string } {
    return {
      brotli: 'Brotli',
      configId: 'ConfigId',
      gzip: 'Gzip',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      zstd: 'Zstd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brotli: 'string',
      configId: 'number',
      gzip: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
      zstd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsCrossBorderOptimization extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 245523334529026
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to enable Chinese mainland network access optimization. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      enable: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsCustomResponseCode extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 457325144242176
   */
  configId?: number;
  /**
   * @remarks
   * The response page.
   * 
   * @example
   * 1
   */
  pageId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  returnCode?: string;
  /**
   * @remarks
   * The rule content. A conditional expression is used to match user requests. You do not need to set this parameter when you add a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specified requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. You do not need to set this parameter when adding a global configuration. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution priority of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      pageId: 'PageId',
      returnCode: 'ReturnCode',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      pageId: 'string',
      returnCode: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsDevelopmentMode extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The feature switch. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      enable: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsErrorPagesRedirectsErrorPagesRedirect extends $dara.Model {
  /**
   * @remarks
   * The response status code used by the node when returning the redirect address to the client. Valid values:
   * 
   * @example
   * 400
   */
  statusCode?: string;
  /**
   * @remarks
   * The target URL to which the request is redirected.
   * 
   * @example
   * http://example.com/test
   */
  targetURL?: string;
  static names(): { [key: string]: string } {
    return {
      statusCode: 'StatusCode',
      targetURL: 'TargetURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusCode: 'string',
      targetURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsErrorPagesRedirects extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 473117342636032
   */
  configId?: number;
  /**
   * @remarks
   * The error code redirect configuration.
   */
  errorPagesRedirect?: ListSiteFunctionsResponseBodyConfigsErrorPagesRedirectsErrorPagesRedirect[];
  /**
   * @remarks
   * The rule content. A conditional expression is used to match user requests. You do not need to set this parameter when you add a global configuration. Two scenarios are supported:
   * - Match all incoming requests: Set the value to true.
   * - Match specified requests: Set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. You do not need to set this parameter when adding a global configuration. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution priority of the rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      errorPagesRedirect: 'ErrorPagesRedirect',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      errorPagesRedirect: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsErrorPagesRedirectsErrorPagesRedirect },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorPagesRedirect)) {
      $dara.Model.validateArray(this.errorPagesRedirect);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsHttpIncomingRequestHeaderModificationRulesRequestHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The request header name.
   * 
   * @example
   * headername
   */
  name?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The request header value.
   * 
   * @example
   * headervalue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operation: 'string',
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

export class ListSiteFunctionsResponseBodyConfigsHttpIncomingRequestHeaderModificationRules extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 430893999331328
   */
  configId?: number;
  /**
   * @remarks
   * The request header modifications. Supports add, delete, and modify operations.
   */
  requestHeaderModification?: ListSiteFunctionsResponseBodyConfigsHttpIncomingRequestHeaderModificationRulesRequestHeaderModification[];
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * http.host eq "videoo.example.com"
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestHeaderModification: 'RequestHeaderModification',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      requestHeaderModification: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpIncomingRequestHeaderModificationRulesRequestHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.requestHeaderModification)) {
      $dara.Model.validateArray(this.requestHeaderModification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsHttpIncomingResponseHeaderModificationRulesResponseHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The response header name.
   * 
   * @example
   * headername
   */
  name?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The response header value.
   * 
   * @example
   * headervalue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operation: 'string',
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

export class ListSiteFunctionsResponseBodyConfigsHttpIncomingResponseHeaderModificationRules extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 430893999331328
   */
  configId?: number;
  /**
   * @remarks
   * The response header modifications. Supports add, delete, and modify operations.
   */
  responseHeaderModification?: ListSiteFunctionsResponseBodyConfigsHttpIncomingResponseHeaderModificationRulesResponseHeaderModification[];
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      responseHeaderModification: 'ResponseHeaderModification',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      responseHeaderModification: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpIncomingResponseHeaderModificationRulesResponseHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.responseHeaderModification)) {
      $dara.Model.validateArray(this.responseHeaderModification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsHttpRequestHeaderModificationRulesRequestHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The request header name.
   * 
   * @example
   * headername
   */
  name?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The request header value.
   * 
   * @example
   * headervalue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operation: 'string',
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

export class ListSiteFunctionsResponseBodyConfigsHttpRequestHeaderModificationRules extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The request header modifications. Supports add, delete, and modify operations.
   * 
   * @example
   * [{"operation":"add","name":"header_example_add","value":"value_exapme_add"},{"operation":"del","name":"header_example_delete","value":"value_exapme_delete"},{"operation":"modify","name":"header_example_update","value":"value_exapme_example"}]
   */
  requestHeaderModification?: ListSiteFunctionsResponseBodyConfigsHttpRequestHeaderModificationRulesRequestHeaderModification[];
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestHeaderModification: 'RequestHeaderModification',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      requestHeaderModification: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpRequestHeaderModificationRulesRequestHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.requestHeaderModification)) {
      $dara.Model.validateArray(this.requestHeaderModification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsHttpResponseHeaderModificationRulesResponseHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The response header name.
   * 
   * @example
   * headername
   */
  name?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The response header value.
   * 
   * @example
   * headervalue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operation: 'string',
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

export class ListSiteFunctionsResponseBodyConfigsHttpResponseHeaderModificationRules extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The response header modifications. Supports add, delete, and modify operations.
   * 
   * @example
   * [{"operation":"add","name":"header_example_add","value":"value_exapme_add"},{"operation":"del","name":"header_example_delete","value":"value_exapme_delete"},{"operation":"modify","name":"header_example_update","value":"value_exapme_example"}]
   */
  responseHeaderModification?: ListSiteFunctionsResponseBodyConfigsHttpResponseHeaderModificationRulesResponseHeaderModification[];
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      responseHeaderModification: 'ResponseHeaderModification',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      responseHeaderModification: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpResponseHeaderModificationRulesResponseHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.responseHeaderModification)) {
      $dara.Model.validateArray(this.responseHeaderModification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsHttpsApplicationConfiguration extends $dara.Model {
  /**
   * @remarks
   * The Alt-Svc feature switch. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  altSvc?: string;
  /**
   * @remarks
   * Specifies whether the Alt-Svc header includes the clear parameter. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  altSvcClear?: string;
  /**
   * @remarks
   * The Alt-Svc validity period, in seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  altSvcMa?: string;
  /**
   * @remarks
   * Specifies whether the Alt-Svc header includes the persist parameter. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  altSvcPersist?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 391240445274112
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to enable HSTS. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  hsts?: string;
  /**
   * @remarks
   * Specifies whether to include subdomains in HSTS. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  hstsIncludeSubdomains?: string;
  /**
   * @remarks
   * The HSTS expiration time, in seconds.
   * 
   * @example
   * 3600
   */
  hstsMaxAge?: string;
  /**
   * @remarks
   * Specifies whether to enable HSTS preload. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  hstsPreload?: string;
  /**
   * @remarks
   * Specifies whether to enable forced HTTPS. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  httpsForce?: string;
  /**
   * @remarks
   * The HTTP status code for forced HTTPS redirect. Valid values:
   * 
   * @example
   * 301
   */
  httpsForceCode?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      altSvc: 'AltSvc',
      altSvcClear: 'AltSvcClear',
      altSvcMa: 'AltSvcMa',
      altSvcPersist: 'AltSvcPersist',
      configId: 'ConfigId',
      hsts: 'Hsts',
      hstsIncludeSubdomains: 'HstsIncludeSubdomains',
      hstsMaxAge: 'HstsMaxAge',
      hstsPreload: 'HstsPreload',
      httpsForce: 'HttpsForce',
      httpsForceCode: 'HttpsForceCode',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      altSvc: 'string',
      altSvcClear: 'string',
      altSvcMa: 'string',
      altSvcPersist: 'string',
      configId: 'number',
      hsts: 'string',
      hstsIncludeSubdomains: 'string',
      hstsMaxAge: 'string',
      hstsPreload: 'string',
      httpsForce: 'string',
      httpsForceCode: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsHttpsBasicConfiguration extends $dara.Model {
  /**
   * @remarks
   * The custom cipher suite. Specifies the specific encryption algorithms selected when CiphersuiteGroup is set to custom.
   * 
   * @example
   * TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   */
  ciphersuite?: string;
  /**
   * @remarks
   * The cipher suite group. By default, all cipher suites are enabled. Valid values:
   * - all: all cipher suites.
   * - strict: strong cipher suites.
   * - custom: custom cipher suites.
   * 
   * @example
   * all
   */
  ciphersuiteGroup?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 391380266602496
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2. Enabled by default. Valid values:
   * 
   * @example
   * on
   */
  http2?: string;
  /**
   * @remarks
   * Specifies whether to enable HTTP/3. Enabled by default. Valid values:
   * 
   * @example
   * on
   */
  http3?: string;
  /**
   * @remarks
   * Specifies whether to enable HTTPS. Enabled by default. Valid values:
   * 
   * @example
   * on
   */
  https?: string;
  /**
   * @remarks
   * Specifies whether to enable OCSP stapling. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  ocspStapling?: string;
  /**
   * @remarks
   * The matching rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS 1.0. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  tls10?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS 1.1. Enabled by default. Valid values:
   * 
   * @example
   * on
   */
  tls11?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS 1.2. Enabled by default. Valid values:
   * 
   * @example
   * on
   */
  tls12?: string;
  /**
   * @remarks
   * Specifies whether to enable TLS 1.3. Enabled by default. Valid values:
   * 
   * @example
   * on
   */
  tls13?: string;
  static names(): { [key: string]: string } {
    return {
      ciphersuite: 'Ciphersuite',
      ciphersuiteGroup: 'CiphersuiteGroup',
      configId: 'ConfigId',
      http2: 'Http2',
      http3: 'Http3',
      https: 'Https',
      ocspStapling: 'OcspStapling',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      tls10: 'Tls10',
      tls11: 'Tls11',
      tls12: 'Tls12',
      tls13: 'Tls13',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphersuite: 'string',
      ciphersuiteGroup: 'string',
      configId: 'number',
      http2: 'string',
      http3: 'string',
      https: 'string',
      ocspStapling: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
      tls10: 'string',
      tls11: 'string',
      tls12: 'string',
      tls13: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsImageTransform extends $dara.Model {
  /**
   * @remarks
   * The adaptive AVIF setting.
   * 
   * @example
   * on
   */
  autoAvif?: string;
  /**
   * @remarks
   * The adaptive WebP setting.
   * 
   * @example
   * on
   */
  autoWebp?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to enable image transformation. This feature is disabled by default. Valid values:
   * 
   * @example
   * off
   */
  enable?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      autoAvif: 'AutoAvif',
      autoWebp: 'AutoWebp',
      configId: 'ConfigId',
      enable: 'Enable',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAvif: 'string',
      autoWebp: 'string',
      configId: 'number',
      enable: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsIpv6 extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to enable IPv6. Enabled by default. Valid values:
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      enable: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsManagedTransforms extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add visitor geolocation headers. Valid values:
   * 
   * @example
   * on
   */
  addClientGeolocationHeaders?: string;
  /**
   * @remarks
   * Adds the "ali-real-client-ip" header that contains the originating IP address of the client. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  addRealClientIpHeader?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      addClientGeolocationHeaders: 'AddClientGeolocationHeaders',
      addRealClientIpHeader: 'AddRealClientIpHeader',
      configId: 'ConfigId',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addClientGeolocationHeaders: 'string',
      addRealClientIpHeader: 'string',
      configId: 'number',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsMarkdownForAgent extends $dara.Model {
  configId?: number;
  enable?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      enable: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsNetworkOptimization extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 395901755670528
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to enable gRPC. This feature is disabled by default. Valid values:
   * 
   * @example
   * on
   */
  grpc?: string;
  /**
   * @remarks
   * Specifies whether to enable HTTP/2 back-to-origin. This feature is disabled by default. Valid values:
   * 
   * @example
   * on
   */
  http2Origin?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @remarks
   * Specifies whether to enable the smart routing service. This feature is disabled by default. Valid values:
   * 
   * @example
   * on
   */
  smartRouting?: string;
  /**
   * @remarks
   * The maximum upload file size. Unit: MB. Valid values: 100 to 500.
   * 
   * @example
   * 300
   */
  uploadMaxFilesize?: string;
  /**
   * @remarks
   * Specifies whether to enable WebSocket. This feature is enabled by default. Valid values:
   * 
   * @example
   * on
   */
  websocket?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      grpc: 'Grpc',
      http2Origin: 'Http2Origin',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      smartRouting: 'SmartRouting',
      uploadMaxFilesize: 'UploadMaxFilesize',
      websocket: 'Websocket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      grpc: 'string',
      http2Origin: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
      smartRouting: 'string',
      uploadMaxFilesize: 'string',
      websocket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsOriginRules extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The rewritten DNS resolution record for back-to-origin requests.
   * 
   * @example
   * test.example.com
   */
  dnsRecord?: string;
  /**
   * @remarks
   * The HOST header carried in the back-to-origin request.
   * 
   * @example
   * origin.example.com
   */
  originHost?: string;
  /**
   * @remarks
   * The origin server port used when fetching content over HTTP.
   * 
   * @example
   * 8080
   */
  originHttpPort?: string;
  /**
   * @remarks
   * The origin server port used when fetching content over HTTPS.
   * 
   * @example
   * 4433
   */
  originHttpsPort?: string;
  /**
   * @remarks
   * Specifies whether to enable mTLS for back-to-origin requests. Valid values:
   * 
   * @example
   * on
   */
  originMtls?: string;
  /**
   * @remarks
   * The origin read timeout, in seconds.
   * 
   * @example
   * 300
   */
  originReadTimeout?: string;
  /**
   * @remarks
   * The protocol used for back-to-origin requests. Valid values:
   * 
   * @example
   * http
   */
  originScheme?: string;
  /**
   * @remarks
   * The SNI carried in the back-to-origin request.
   * 
   * @example
   * origin.example.com
   */
  originSni?: string;
  /**
   * @remarks
   * Specifies whether to enable origin server certificate verification. Valid values:
   * 
   * @example
   * on
   */
  originVerify?: string;
  /**
   * @remarks
   * Uses range-based origin fetch to download files. Valid values:
   * - on: enabled.
   * - off: disabled.
   * - force: forced.
   * 
   * @example
   * on
   */
  range?: string;
  /**
   * @remarks
   * The range chunk size. Valid values:
   * 
   * @example
   * 512KB
   */
  rangeChunkSize?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      dnsRecord: 'DnsRecord',
      originHost: 'OriginHost',
      originHttpPort: 'OriginHttpPort',
      originHttpsPort: 'OriginHttpsPort',
      originMtls: 'OriginMtls',
      originReadTimeout: 'OriginReadTimeout',
      originScheme: 'OriginScheme',
      originSni: 'OriginSni',
      originVerify: 'OriginVerify',
      range: 'Range',
      rangeChunkSize: 'RangeChunkSize',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      dnsRecord: 'string',
      originHost: 'string',
      originHttpPort: 'string',
      originHttpsPort: 'string',
      originMtls: 'string',
      originReadTimeout: 'string',
      originScheme: 'string',
      originSni: 'string',
      originVerify: 'string',
      range: 'string',
      rangeChunkSize: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsRedirectRules extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to reserve the query string. Valid values:
   * 
   * @example
   * on
   */
  reserveQueryString?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @remarks
   * The HTTP status code used when the node responds to the client with a redirect address. Valid values:
   * - 301
   * - 302
   * - 303
   * - 307
   * - 308
   * 
   * @example
   * 301
   */
  statusCode?: string;
  /**
   * @remarks
   * The target URL after redirection.
   * 
   * @example
   * http://www.exapmle.com/index.html
   */
  targetUrl?: string;
  /**
   * @remarks
   * The redirect type. Valid values:
   * 
   * @example
   * static
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      reserveQueryString: 'ReserveQueryString',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      statusCode: 'StatusCode',
      targetUrl: 'TargetUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      reserveQueryString: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
      statusCode: 'string',
      targetUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsRewriteUrlRules extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The query string after rewriting.
   * 
   * @example
   * example=123
   */
  queryString?: string;
  /**
   * @remarks
   * The query string rewrite type. Valid values:
   * 
   * @example
   * static
   */
  rewriteQueryStringType?: string;
  /**
   * @remarks
   * The path rewrite type. Valid values:
   * 
   * @example
   * static
   */
  rewriteUriType?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @remarks
   * The target URI after rewriting.
   * 
   * @example
   * /image.example.com/index.html
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      queryString: 'QueryString',
      rewriteQueryStringType: 'RewriteQueryStringType',
      rewriteUriType: 'RewriteUriType',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      queryString: 'string',
      rewriteQueryStringType: 'string',
      rewriteUriType: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsSeoBypass extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The feature switch. Disabled by default. Valid values:
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      enable: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsSiteNameExclusive extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 380858020294656
   */
  configId?: number;
  /**
   * @remarks
   * The feature switch. Valid values:
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 0
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      enable: 'Enable',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      enable: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsSitePause extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 302426190190592
   */
  configId?: number;
  /**
   * @remarks
   * Specifies whether to temporarily pause the proxy acceleration feature for the entire site. When enabled, all DNS records directly return record values to the client. Valid values:
   * - true: Site acceleration is paused.
   * - false: Site acceleration is active.
   * 
   * @example
   * false
   */
  paused?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      paused: 'Paused',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      paused: 'string',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsTieredCache extends $dara.Model {
  /**
   * @remarks
   * The tiered cache architecture mode. Valid values:
   * 
   * @example
   * edge_smart
   */
  cacheArchitectureMode?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      cacheArchitectureMode: 'CacheArchitectureMode',
      configId: 'ConfigId',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheArchitectureMode: 'string',
      configId: 'number',
      sequence: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigsVideoProcessing extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 455153377667072
   */
  configId?: number;
  /**
   * @remarks
   * The custom FLV end parameter.
   * 
   * @example
   * f_end
   */
  flvSeekEnd?: string;
  /**
   * @remarks
   * The custom FLV start parameter.
   * 
   * @example
   * f_start
   */
  flvSeekStart?: string;
  /**
   * @remarks
   * The FLV seeking mode. Valid values:
   * 
   * @example
   * by_time
   */
  flvVideoSeekMode?: string;
  /**
   * @remarks
   * The custom MP4 end parameter.
   * 
   * @example
   * m_end
   */
  mp4SeekEnd?: string;
  /**
   * @remarks
   * The custom MP4 start parameter.
   * 
   * @example
   * m_start
   */
  mp4SeekStart?: string;
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule.
   * 
   * @example
   * 1
   */
  sequence?: string;
  /**
   * @remarks
   * Specifies whether to enable the audio seeking feature. Valid values:
   * 
   * @example
   * on
   */
  videoSeekEnable?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      flvSeekEnd: 'FlvSeekEnd',
      flvSeekStart: 'FlvSeekStart',
      flvVideoSeekMode: 'FlvVideoSeekMode',
      mp4SeekEnd: 'Mp4SeekEnd',
      mp4SeekStart: 'Mp4SeekStart',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      videoSeekEnable: 'VideoSeekEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      flvSeekEnd: 'string',
      flvSeekStart: 'string',
      flvVideoSeekMode: 'string',
      mp4SeekEnd: 'string',
      mp4SeekStart: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'string',
      videoSeekEnable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The cache reserve configuration.
   */
  cacheReserve?: ListSiteFunctionsResponseBodyConfigsCacheReserve[];
  /**
   * @remarks
   * The cache rules.
   */
  cacheRules?: ListSiteFunctionsResponseBodyConfigsCacheRules[];
  /**
   * @remarks
   * The cache tag configuration. When using the purge-by-cache-tag feature, specifies the CacheTag name carried in the origin server response.
   */
  cacheTags?: ListSiteFunctionsResponseBodyConfigsCacheTags[];
  /**
   * @remarks
   * The CNAME flattening configuration.
   */
  cnameFlattening?: ListSiteFunctionsResponseBodyConfigsCnameFlattening[];
  /**
   * @remarks
   * The compression rules.
   */
  compressionRules?: ListSiteFunctionsResponseBodyConfigsCompressionRules[];
  /**
   * @remarks
   * The Chinese mainland network optimization configuration.
   */
  crossBorderOptimization?: ListSiteFunctionsResponseBodyConfigsCrossBorderOptimization[];
  /**
   * @remarks
   * The custom response code configurations.
   */
  customResponseCode?: ListSiteFunctionsResponseBodyConfigsCustomResponseCode[];
  /**
   * @remarks
   * The development mode configuration.
   */
  developmentMode?: ListSiteFunctionsResponseBodyConfigsDevelopmentMode[];
  /**
   * @remarks
   * The error code redirect rules.
   */
  errorPagesRedirects?: ListSiteFunctionsResponseBodyConfigsErrorPagesRedirects[];
  /**
   * @remarks
   * The inbound request header modification rules.
   */
  httpIncomingRequestHeaderModificationRules?: ListSiteFunctionsResponseBodyConfigsHttpIncomingRequestHeaderModificationRules[];
  /**
   * @remarks
   * The rules for modifying inbound response headers.
   */
  httpIncomingResponseHeaderModificationRules?: ListSiteFunctionsResponseBodyConfigsHttpIncomingResponseHeaderModificationRules[];
  /**
   * @remarks
   * The request header modification rules.
   */
  httpRequestHeaderModificationRules?: ListSiteFunctionsResponseBodyConfigsHttpRequestHeaderModificationRules[];
  /**
   * @remarks
   * The response header modification rules.
   */
  httpResponseHeaderModificationRules?: ListSiteFunctionsResponseBodyConfigsHttpResponseHeaderModificationRules[];
  /**
   * @remarks
   * The HTTPS application configuration.
   */
  httpsApplicationConfiguration?: ListSiteFunctionsResponseBodyConfigsHttpsApplicationConfiguration[];
  /**
   * @remarks
   * The HTTPS basic configuration.
   */
  httpsBasicConfiguration?: ListSiteFunctionsResponseBodyConfigsHttpsBasicConfiguration[];
  /**
   * @remarks
   * The image transformation configuration.
   */
  imageTransform?: ListSiteFunctionsResponseBodyConfigsImageTransform[];
  /**
   * @remarks
   * The IPv6 configuration.
   */
  ipv6?: ListSiteFunctionsResponseBodyConfigsIpv6[];
  /**
   * @remarks
   * The managed transforms.
   */
  managedTransforms?: ListSiteFunctionsResponseBodyConfigsManagedTransforms[];
  markdownForAgent?: ListSiteFunctionsResponseBodyConfigsMarkdownForAgent[];
  /**
   * @remarks
   * The network optimization configuration.
   */
  networkOptimization?: ListSiteFunctionsResponseBodyConfigsNetworkOptimization[];
  /**
   * @remarks
   * The back-to-origin rules.
   */
  originRules?: ListSiteFunctionsResponseBodyConfigsOriginRules[];
  /**
   * @remarks
   * The redirect rules.
   */
  redirectRules?: ListSiteFunctionsResponseBodyConfigsRedirectRules[];
  /**
   * @remarks
   * The URL rewrite rules.
   */
  rewriteUrlRules?: ListSiteFunctionsResponseBodyConfigsRewriteUrlRules[];
  /**
   * @remarks
   * The search engine crawler bypass configuration.
   */
  seoBypass?: ListSiteFunctionsResponseBodyConfigsSeoBypass[];
  /**
   * @remarks
   * Site name exclusive. When enabled, other accounts cannot create sites or subsites with the same name as the current site.
   */
  siteNameExclusive?: ListSiteFunctionsResponseBodyConfigsSiteNameExclusive[];
  /**
   * @remarks
   * Site acceleration pause. Temporarily pauses the proxy acceleration feature for the entire site. When enabled, all DNS records directly return record values to the client.
   */
  sitePause?: ListSiteFunctionsResponseBodyConfigsSitePause[];
  /**
   * @remarks
   * The tiered cache configuration.
   */
  tieredCache?: ListSiteFunctionsResponseBodyConfigsTieredCache[];
  /**
   * @remarks
   * The video processing configurations.
   */
  videoProcessing?: ListSiteFunctionsResponseBodyConfigsVideoProcessing[];
  static names(): { [key: string]: string } {
    return {
      cacheReserve: 'CacheReserve',
      cacheRules: 'CacheRules',
      cacheTags: 'CacheTags',
      cnameFlattening: 'CnameFlattening',
      compressionRules: 'CompressionRules',
      crossBorderOptimization: 'CrossBorderOptimization',
      customResponseCode: 'CustomResponseCode',
      developmentMode: 'DevelopmentMode',
      errorPagesRedirects: 'ErrorPagesRedirects',
      httpIncomingRequestHeaderModificationRules: 'HttpIncomingRequestHeaderModificationRules',
      httpIncomingResponseHeaderModificationRules: 'HttpIncomingResponseHeaderModificationRules',
      httpRequestHeaderModificationRules: 'HttpRequestHeaderModificationRules',
      httpResponseHeaderModificationRules: 'HttpResponseHeaderModificationRules',
      httpsApplicationConfiguration: 'HttpsApplicationConfiguration',
      httpsBasicConfiguration: 'HttpsBasicConfiguration',
      imageTransform: 'ImageTransform',
      ipv6: 'Ipv6',
      managedTransforms: 'ManagedTransforms',
      markdownForAgent: 'MarkdownForAgent',
      networkOptimization: 'NetworkOptimization',
      originRules: 'OriginRules',
      redirectRules: 'RedirectRules',
      rewriteUrlRules: 'RewriteUrlRules',
      seoBypass: 'SeoBypass',
      siteNameExclusive: 'SiteNameExclusive',
      sitePause: 'SitePause',
      tieredCache: 'TieredCache',
      videoProcessing: 'VideoProcessing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheReserve: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsCacheReserve },
      cacheRules: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsCacheRules },
      cacheTags: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsCacheTags },
      cnameFlattening: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsCnameFlattening },
      compressionRules: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsCompressionRules },
      crossBorderOptimization: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsCrossBorderOptimization },
      customResponseCode: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsCustomResponseCode },
      developmentMode: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsDevelopmentMode },
      errorPagesRedirects: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsErrorPagesRedirects },
      httpIncomingRequestHeaderModificationRules: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpIncomingRequestHeaderModificationRules },
      httpIncomingResponseHeaderModificationRules: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpIncomingResponseHeaderModificationRules },
      httpRequestHeaderModificationRules: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpRequestHeaderModificationRules },
      httpResponseHeaderModificationRules: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpResponseHeaderModificationRules },
      httpsApplicationConfiguration: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpsApplicationConfiguration },
      httpsBasicConfiguration: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsHttpsBasicConfiguration },
      imageTransform: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsImageTransform },
      ipv6: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsIpv6 },
      managedTransforms: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsManagedTransforms },
      markdownForAgent: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsMarkdownForAgent },
      networkOptimization: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsNetworkOptimization },
      originRules: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsOriginRules },
      redirectRules: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsRedirectRules },
      rewriteUrlRules: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsRewriteUrlRules },
      seoBypass: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsSeoBypass },
      siteNameExclusive: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsSiteNameExclusive },
      sitePause: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsSitePause },
      tieredCache: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsTieredCache },
      videoProcessing: { 'type': 'array', 'itemType': ListSiteFunctionsResponseBodyConfigsVideoProcessing },
    };
  }

  validate() {
    if(Array.isArray(this.cacheReserve)) {
      $dara.Model.validateArray(this.cacheReserve);
    }
    if(Array.isArray(this.cacheRules)) {
      $dara.Model.validateArray(this.cacheRules);
    }
    if(Array.isArray(this.cacheTags)) {
      $dara.Model.validateArray(this.cacheTags);
    }
    if(Array.isArray(this.cnameFlattening)) {
      $dara.Model.validateArray(this.cnameFlattening);
    }
    if(Array.isArray(this.compressionRules)) {
      $dara.Model.validateArray(this.compressionRules);
    }
    if(Array.isArray(this.crossBorderOptimization)) {
      $dara.Model.validateArray(this.crossBorderOptimization);
    }
    if(Array.isArray(this.customResponseCode)) {
      $dara.Model.validateArray(this.customResponseCode);
    }
    if(Array.isArray(this.developmentMode)) {
      $dara.Model.validateArray(this.developmentMode);
    }
    if(Array.isArray(this.errorPagesRedirects)) {
      $dara.Model.validateArray(this.errorPagesRedirects);
    }
    if(Array.isArray(this.httpIncomingRequestHeaderModificationRules)) {
      $dara.Model.validateArray(this.httpIncomingRequestHeaderModificationRules);
    }
    if(Array.isArray(this.httpIncomingResponseHeaderModificationRules)) {
      $dara.Model.validateArray(this.httpIncomingResponseHeaderModificationRules);
    }
    if(Array.isArray(this.httpRequestHeaderModificationRules)) {
      $dara.Model.validateArray(this.httpRequestHeaderModificationRules);
    }
    if(Array.isArray(this.httpResponseHeaderModificationRules)) {
      $dara.Model.validateArray(this.httpResponseHeaderModificationRules);
    }
    if(Array.isArray(this.httpsApplicationConfiguration)) {
      $dara.Model.validateArray(this.httpsApplicationConfiguration);
    }
    if(Array.isArray(this.httpsBasicConfiguration)) {
      $dara.Model.validateArray(this.httpsBasicConfiguration);
    }
    if(Array.isArray(this.imageTransform)) {
      $dara.Model.validateArray(this.imageTransform);
    }
    if(Array.isArray(this.ipv6)) {
      $dara.Model.validateArray(this.ipv6);
    }
    if(Array.isArray(this.managedTransforms)) {
      $dara.Model.validateArray(this.managedTransforms);
    }
    if(Array.isArray(this.markdownForAgent)) {
      $dara.Model.validateArray(this.markdownForAgent);
    }
    if(Array.isArray(this.networkOptimization)) {
      $dara.Model.validateArray(this.networkOptimization);
    }
    if(Array.isArray(this.originRules)) {
      $dara.Model.validateArray(this.originRules);
    }
    if(Array.isArray(this.redirectRules)) {
      $dara.Model.validateArray(this.redirectRules);
    }
    if(Array.isArray(this.rewriteUrlRules)) {
      $dara.Model.validateArray(this.rewriteUrlRules);
    }
    if(Array.isArray(this.seoBypass)) {
      $dara.Model.validateArray(this.seoBypass);
    }
    if(Array.isArray(this.siteNameExclusive)) {
      $dara.Model.validateArray(this.siteNameExclusive);
    }
    if(Array.isArray(this.sitePause)) {
      $dara.Model.validateArray(this.sitePause);
    }
    if(Array.isArray(this.tieredCache)) {
      $dara.Model.validateArray(this.tieredCache);
    }
    if(Array.isArray(this.videoProcessing)) {
      $dara.Model.validateArray(this.videoProcessing);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSiteFunctionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body configurations.
   */
  configs?: ListSiteFunctionsResponseBodyConfigs;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: ListSiteFunctionsResponseBodyConfigs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.configs && typeof (this.configs as any).validate === 'function') {
      (this.configs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

