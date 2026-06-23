// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheRulesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * - Enables caching on specified ports.
   * - Valid values: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, and 2096.
   * - Multiple ports are separated by commas (,).
   * 
   * @example
   * 8880,2052,2086
   */
  additionalCacheablePorts?: string;
  /**
   * @remarks
   * The browser cache mode. Valid values:
   * - no_cache: does not cache.
   * - follow_origin: follows the origin cache policy.
   * - override_origin: overrides the origin cache policy.
   * 
   * @example
   * no_cache
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
   * - cache_all: caches all requests.
   * - bypass_all: bypasses cache for all requests.
   * 
   * @example
   * cache_all
   */
  bypassCache?: string;
  /**
   * @remarks
   * The cache deception armor. Protects against web cache deception attacks by caching only content that passes validation. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * The cache reserve eligibility. Controls whether user requests bypass the cache reserve node during back-to-origin. Valid values:
   * - bypass_cache_reserve: requests bypass cache reserve.
   * - eligible_for_cache_reserve: requests are eligible for cache reserve.
   * 
   * @example
   * bypass_cache_reserve
   */
  cacheReserveEligibility?: string;
  /**
   * @remarks
   * When generating cache keys, checks whether the specified cookies exist. If a cookie exists, its name (case-insensitive) is added to the cache key. Multiple cookie names are separated by spaces. Cookie names support the following character types:
   * - Symbols: ! # $ % & \\" * + - . ^ _ ` | ~
   * - Digits: 0-9
   * - Letters: lowercase a-z.
   * 
   * @example
   * cookiename1 cookiename2
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * When generating cache keys, checks whether the specified headers exist. If a header exists, its name (case-insensitive) is added to the cache key. Multiple header names are separated by spaces. Header names support the following character types:
   * - Symbols: ! # $ % & \\" * + - . ^ _ ` | ~
   * - Digits: 0-9
   * - Letters: lowercase a-z.
   * 
   * @example
   * headername1 headername2
   */
  checkPresenceHeader?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 395386449776640
   */
  configId?: number;
  /**
   * @remarks
   * The configuration type. You can use this parameter to query global or rule configurations. Valid values:
   * 
   * - global: global configuration.
   * - rule: rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The edge cache mode. Valid values:
   * - follow_origin: follows the origin cache policy if present. Otherwise, uses the default cache policy.
   * - no_cache: does not cache.
   * - override_origin: overrides the origin cache policy.
   * - follow_origin_bypass: follows the origin cache policy if present. Otherwise, does not cache.
   * - follow_origin_override: follows the origin cache policy if present. Otherwise, uses a custom cache TTL.
   * 
   * @example
   * follow_origin
   */
  edgeCacheMode?: string;
  /**
   * @remarks
   * The edge cache expiration time, in seconds.
   * 
   * @example
   * 300
   */
  edgeCacheTtl?: string;
  /**
   * @remarks
   * The status code cache expiration time, in seconds.
   * - You can set the cache expiration time for specific status codes. For example, 404=10 indicates that the 404 status code is cached for 10 seconds.
   * - You can set the cache expiration time for 4xx or 5xx series status codes. For example, 4xx=10 indicates that all 4xx status codes are cached for 10 seconds.
   * - You can set the cache expiration time for multiple status codes. Separate multiple status codes with commas (,).
   * 
   * @example
   * 5xx=0,404=10
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * The specified cookie names (case-insensitive) and their values to include when generating cache keys. Multiple values are separated by spaces. Cookie names support the following character types:
   * - Symbols: ! # $ % & \\" * + - . ^ _ ` | ~
   * - Digits: 0-9
   * - Letters: lowercase a-z.
   * 
   * @example
   * cookiename1 cookiename2
   */
  includeCookie?: string;
  /**
   * @remarks
   * The specified header names (case-insensitive) and their values to include when generating cache keys. Multiple values are separated by spaces. Header names support the following character types:
   * - Symbols: ! # $ % & \\" * + - . ^ _ ` | ~
   * - Digits: 0-9
   * - Letters: lowercase a-z.
   * 
   * @example
   * headername1 headername2
   */
  includeHeader?: string;
  /**
   * @remarks
   * The cache key handling mode for POST caching. The following two modes are supported:
   * - md5: calculates the MD5 hash of the body content and adds the MD5 value to the cache key.
   * - ignore: ignores the body content in the cache key.
   * 
   * @example
   * ignore
   */
  postBodyCacheKey?: string;
  /**
   * @remarks
   * The body size limit for POST caching. The value is a number in KB. Valid values: 1 to 8. If this parameter is left empty, the default value of 8 KB takes effect.
   * 
   * @example
   * 1
   */
  postBodySizeLimit?: string;
  /**
   * @remarks
   * Specifies whether to enable POST caching.
   * 
   * @example
   * on
   */
  postCache?: string;
  /**
   * @remarks
   * The query strings to retain or remove when generating cache keys. Multiple values are separated by spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * The query string handling mode when generating cache keys. Valid values:
   * - ignore_all: ignores all query strings.
   * - exclude_query_string: removes specified query strings.
   * - reserve_all: retains all query strings. This is the default value.
   * - include_query_string: retains specified query strings.
   * 
   * @example
   * ignore_all
   */
  queryStringMode?: string;
  /**
   * @remarks
   * The rule content, which uses conditional expressions to match user requests. You do not need to set this parameter when you add a global configuration. Two scenarios are supported:
   * - Match all incoming requests: set the value to true.
   * - Match specified requests: set the value to a custom expression, such as (http.host eq \\"video.example.com\\").
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to set this parameter when you add a global configuration. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when you add a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution order. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Specifies whether to serve stale cache. When enabled, edge nodes can respond to user requests with cached expired files when the origin server is unavailable. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  serveStale?: string;
  /**
   * @remarks
   * The version number of the site configuration. For sites with configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Specifies whether to sort query strings. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  sortQueryStringForCache?: string;
  /**
   * @remarks
   * Specifies whether to include the type of the client when generating cache keys. Valid values:
   * - on: enabled.
   * - off: shutdown.
   * 
   * @example
   * on
   */
  userDeviceType?: string;
  /**
   * @remarks
   * Specifies whether to include the client geographic location when generating cache keys. Valid values:
   * - on: enabled.
   * - off: disabled.
   * 
   * @example
   * on
   */
  userGeo?: string;
  /**
   * @remarks
   * Specifies whether to include the client language type when generating cache keys. Valid values:
   * - on: enabled.
   * - off: disabled.
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
      configType: 'ConfigType',
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
      siteVersion: 'SiteVersion',
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
      configType: 'string',
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
      sequence: 'number',
      serveStale: 'string',
      siteVersion: 'number',
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

export class ListCacheRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration list in the response body.
   */
  configs?: ListCacheRulesResponseBodyConfigs[];
  /**
   * @remarks
   * The current page number, which is the same as the PageNumber request parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 20
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
      configs: { 'type': 'array', 'itemType': ListCacheRulesResponseBodyConfigs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

