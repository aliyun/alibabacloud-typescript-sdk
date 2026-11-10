// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheRulesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The additional cacheable ports. You can enable the caching feature on specified ports.
   * - Valid values: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, and 2096.
   * - You can specify multiple ports separated by commas (,).
   * 
   * @example
   * 8880,2052,2086
   */
  additionalCacheablePorts?: string;
  /**
   * @remarks
   * The browser cache mode. Valid values:
   * - no_cache: does not cache content.
   * - follow_origin: follows the cache policy of the origin server.
   * - override_origin: overrides the cache policy of the origin server.
   * 
   * @example
   * no_cache
   */
  browserCacheMode?: string;
  /**
   * @remarks
   * The browser cache TTL. Unit: seconds.
   * 
   * @example
   * 300
   */
  browserCacheTtl?: string;
  /**
   * @remarks
   * The bypass cache mode. Valid values:
   * - cache_all: caches all requests.
   * - bypass_all: bypasses the cache for all requests.
   * 
   * @example
   * cache_all
   */
  bypassCache?: string;
  /**
   * @remarks
   * Specifies whether to enable cache deception armor. This feature defends against web cache deception attacks. Only verified cache content is cached. Valid values:
   * - on: enables the feature.
   * - off: disables the feature.
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * The cache reserve eligibility. This parameter controls whether user requests bypass cache reserve nodes when being routed to the origin server. Valid values:
   * - bypass_cache_reserve: requests bypass cache reserve.
   * - eligible_for_cache_reserve: requests are eligible for cache reserve.
   * 
   * @example
   * bypass_cache_reserve
   */
  cacheReserveEligibility?: string;
  /**
   * @remarks
   * Specifies whether to check the presence of specified cookies when generating a cache key. If a specified cookie exists, its name is added to the cache key. Cookie names are not case-sensitive. You can specify multiple cookie names separated by spaces. Cookie names support the following characters:
   * - Symbols: ! # $ % & \\" * + - . ^ _ ` | ~
   * - Digits: 0-9
   * - Letters: lowercase letters a-z
   * 
   * @example
   * cookiename1 cookiename2
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * Specifies whether to check the presence of specified headers when generating a cache key. If a specified header exists, its name is added to the cache key. Header names are not case-sensitive. You can specify multiple header names separated by spaces. Header names support the following characters:
   * - Symbols: ! # $ % & \\" * + - . ^ _ ` | ~
   * - Digits: 0-9
   * - Letters: lowercase letters a-z
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
   * The configuration type. You can use this parameter to query global configurations or rule configurations. Valid values:
   * - global: queries global configurations.
   * - rule: queries rule configurations.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The edge node cache mode. Valid values:
   * - follow_origin: follows the cache policy of the origin server if it exists. Otherwise, the default cache policy is used.
   * - no_cache: does not cache content.
   * - override_origin: overrides the cache policy of the origin server.
   * - follow_origin_bypass: follows the cache policy of the origin server if it exists. Otherwise, content is not cached.
   * - follow_origin_override: follows the cache policy of the origin server if it exists. Otherwise, a custom cache TTL is used.
   * 
   * @example
   * follow_origin
   */
  edgeCacheMode?: string;
  /**
   * @remarks
   * The edge node cache TTL. Unit: seconds.
   * 
   * @example
   * 300
   */
  edgeCacheTtl?: string;
  /**
   * @remarks
   * The status code cache TTL. Unit: seconds.
   * - You can set the cache TTL for a specific status code. For example, 404=10 indicates that the 404 status code is cached for 10 seconds.
   * - You can set the cache TTL for 4xx or 5xx status codes. For example, 4xx=10 indicates that all 4xx status codes are cached for 10 seconds.
   * - You can set the cache TTL for multiple status codes. Separate multiple status codes with commas (,).
   * 
   * @example
   * 5xx=0,404=10
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * The cookie names and their values to be included when generating a cache key. Cookie names are not case-sensitive. Separate multiple values with spaces. Cookie names support the following characters:
   * - Symbols: ! # $ % & \\" * + - . ^ _ ` | ~
   * - Digits: 0-9
   * - Letters: lowercase letters a-z
   * 
   * @example
   * cookiename1 cookiename2
   */
  includeCookie?: string;
  /**
   * @remarks
   * The header names and their values to be included when generating a cache key. Header names are not case-sensitive. You can specify multiple values separated by spaces. Header names support the following characters:
   * - Symbols: ! # $ % & \\" * + - . ^ _ ` | ~
   * - Digits: 0-9
   * - Letters: lowercase letters a-z
   * 
   * @example
   * headername1 headername2
   */
  includeHeader?: string;
  /**
   * @remarks
   * The cache key processing mode for POST caching. Valid values:
   * - md5: calculates the MD5 hash of the body content and adds the MD5 value to the cache key.
   * - ignore: ignores the body content in the cache key.
   * 
   * @example
   * ignore
   */
  postBodyCacheKey?: string;
  /**
   * @remarks
   * The body size limit for POST caching. The value is a number. Unit: KB. The supported body size ranges from 1 KB to 8 KB. If this parameter is left empty, the default value 8 KB is used.
   * 
   * @example
   * 1
   */
  postBodySizeLimit?: string;
  /**
   * @remarks
   * The POST cache feature switch.
   * 
   * @example
   * on
   */
  postCache?: string;
  /**
   * @remarks
   * The query strings to be reserved or excluded when generating a cache key. You can specify multiple values separated by spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * The query string processing mode used when generating a cache key. Valid values:
   * - ignore_all: ignores all query strings.
   * - exclude_query_string: excludes specified query strings.
   * - reserve_all: reserves all query strings. This is the default value.
   * - include_query_string: includes specified query strings.
   * 
   * @example
   * ignore_all
   */
  queryStringMode?: string;
  /**
   * @remarks
   * The rule content. A conditional expression is used to match user requests. You do not need to specify this parameter when adding a global configuration. This parameter applies to the following scenarios:
   * - Match all incoming requests: Set the value to true.
   * - Match specific requests: Set the value to a custom expression, such as (http.host eq "video.example.com").
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule switch. You do not need to specify this parameter when adding a global configuration. Valid values:
   * - on: enables the rule.
   * - off: disables the rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to specify this parameter when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution order. A smaller value indicates a higher execution priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Specifies whether to serve stale content. After this feature is enabled, edge nodes can use cached stale files to respond to user requests when the origin server is unavailable. Valid values:
   * - on: enables the feature.
   * - off: disables the feature.
   * 
   * @example
   * on
   */
  serveStale?: string;
  /**
   * @remarks
   * The site configuration version number. For sites with configuration version management enabled, you can use this parameter to specify the site version for which the configuration takes effect. Default value: 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Specifies whether to sort query strings. Valid values:
   * - on: enables query string sorting.
   * - off: disables query string sorting.
   * 
   * @example
   * on
   */
  sortQueryStringForCache?: string;
  /**
   * @remarks
   * Specifies whether to include the type of the client when generating a cache key. Valid values:
   * - on: enabled.
   * - off: shutdown.
   * 
   * @example
   * on
   */
  userDeviceType?: string;
  /**
   * @remarks
   * Specifies whether to include the client geographic location when generating a cache key. Valid values:
   * - on: includes the client geographic location.
   * - off: does not include the client geographic location.
   * 
   * @example
   * on
   */
  userGeo?: string;
  /**
   * @remarks
   * Specifies whether to include the client language type when generating a cache key. Valid values:
   * - on: includes the client language type.
   * - off: does not include the client language type.
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
   * The configurations in the response.
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

