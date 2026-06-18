// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheRulesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * - Enables caching on the specified ports.
   * 
   * - Valid values: `8880`, `2052`, `2082`, `2086`, `2095`, `2053`, `2083`, `2087`, and `2096`.
   * 
   * - You can specify multiple ports, separated by commas (`,`).
   * 
   * @example
   * 8880,2052,2086
   */
  additionalCacheablePorts?: string;
  /**
   * @remarks
   * The browser cache mode. Valid values:
   * 
   * - `no_cache`: Disables browser caching.
   * 
   * - `follow_origin`: Follows the origin server\\"s cache policy.
   * 
   * - `override_origin`: Overrides the origin server\\"s cache policy.
   * 
   * @example
   * no_cache
   */
  browserCacheMode?: string;
  /**
   * @remarks
   * The browser cache TTL, in seconds.
   * 
   * @example
   * 300
   */
  browserCacheTtl?: string;
  /**
   * @remarks
   * Specifies the bypass cache mode. Valid values:
   * 
   * - `cache_all`: Caches all requests.
   * 
   * - `bypass_all`: Bypasses all requests.
   * 
   * @example
   * cache_all
   */
  bypassCache?: string;
  /**
   * @remarks
   * The cache deception protection. This feature defends against web cache deception attacks by caching only validated content. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * The cache reserve eligibility. This setting controls whether a user request bypasses the cache reserve node when it is forwarded to the origin server. Valid values:
   * 
   * - `bypass_cache_reserve`: The request bypasses the cache reserve.
   * 
   * - `eligible_for_cache_reserve`: The request is eligible for the cache reserve.
   * 
   * @example
   * bypass_cache_reserve
   */
  cacheReserveEligibility?: string;
  /**
   * @remarks
   * Checks for the presence of specified cookies when generating the cache key. If a cookie exists, its name (case-insensitive) is included in the cache key. Separate multiple cookie names with spaces. Cookie names can contain the following characters:
   * 
   * - Symbols: ``! # $ % & \\" * + - . ^ _ ` | ~``
   * 
   * - Digits: `0-9`
   * 
   * - Letters: lowercase English letters `a-z`
   * 
   * @example
   * cookiename1 cookiename2
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * Checks for the presence of specified headers when generating the cache key. If a header exists, its name (case-insensitive) is included in the cache key. Separate multiple header names with spaces. Header names can contain the following characters:
   * 
   * - Symbols: ``! # $ % & \\" * + - . ^ _ ` | ~``
   * 
   * - Digits: `0-9`
   * 
   * - Letters: lowercase English letters `a-z`
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
   * The configuration type, which indicates whether the configuration is global or rule-specific. Valid values:
   * 
   * - `global`
   * 
   * - `rule`
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The edge cache mode. Valid values:
   * 
   * - `follow_origin`: Follows the origin server\\"s cache policy. If no policy exists, the default policy is used.
   * 
   * - `no_cache`: Disables caching on edge nodes.
   * 
   * - `override_origin`: Overrides the origin server\\"s cache policy.
   * 
   * - `follow_origin_bypass`: Follows the origin server\\"s cache policy. If no policy exists, requests bypass the cache.
   * 
   * - `follow_origin_override`: Follows the cache policy of the origin server. If no policy exists, a custom cache TTL is used.
   * 
   * @example
   * follow_origin
   */
  edgeCacheMode?: string;
  /**
   * @remarks
   * The edge cache TTL, in seconds.
   * 
   * @example
   * 300
   */
  edgeCacheTtl?: string;
  /**
   * @remarks
   * The status code cache TTL, in seconds.
   * 
   * - You can set the cache TTL for a specific status code. For example, `404=10` caches responses with a 404 status code for 10 seconds.
   * 
   * - You can set the cache TTL for a series of status codes, such as 4xx and 5xx. For example, `4xx=10` caches all responses with a 4xx status code for 10 seconds.
   * 
   * - Separate multiple settings with commas (`,`).
   * 
   * @example
   * 5xx=0,404=10
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * The cookie names whose values are included in the cache key. Names are case-insensitive. Separate multiple names with spaces. Cookie names can contain the following characters:
   * 
   * - Symbols: ``! # $ % & \\" * + - . ^ _ ` | ~``
   * 
   * - Digits: `0-9`
   * 
   * - Letters: lowercase English letters `a-z`
   * 
   * @example
   * cookiename1 cookiename2
   */
  includeCookie?: string;
  /**
   * @remarks
   * The header names whose values are included in the cache key. Names are case-insensitive. Separate multiple names with spaces. Header names can contain the following characters:
   * 
   * - Symbols: ``! # $ % & \\" * + - . ^ _ ` | ~``
   * 
   * - Digits: `0-9`
   * 
   * - Letters: lowercase English letters `a-z`
   * 
   * @example
   * headername1 headername2
   */
  includeHeader?: string;
  /**
   * @remarks
   * The handling mode for the request body when generating the cache key for a POST request.
   * 
   * - `md5`: Calculates the MD5 hash of the body content and includes the hash in the cache key.
   * 
   * - `ignore`: Ignores the body content in the cache key.
   * 
   * @example
   * ignore
   */
  postBodyCacheKey?: string;
  /**
   * @remarks
   * The maximum size of a POST request body that can be cached, in KB. The value must be an integer from 1 to 8. The default is 8 KB.
   * 
   * @example
   * 1
   */
  postBodySizeLimit?: string;
  /**
   * @remarks
   * Specifies whether to enable caching for POST requests.
   * 
   * @example
   * on
   */
  postCache?: string;
  /**
   * @remarks
   * The query strings to include in or exclude from the cache key. Separate multiple values with spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * Specifies how to handle query strings when generating a cache key. Valid values:
   * 
   * - `ignore_all`: Ignores all query strings.
   * 
   * - `exclude_query_string`: Excludes specified query strings.
   * 
   * - `reserve_all`: Retains all query strings. This is the default value.
   * 
   * - `include_query_string`: Includes specified query strings.
   * 
   * @example
   * ignore_all
   */
  queryStringMode?: string;
  /**
   * @remarks
   * The rule content, which uses a conditional expression to match user requests. This parameter is not required for a global configuration.
   * 
   * - To match all incoming requests, set this to `true`.
   * 
   * - To match specific requests, set this to a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * The rule status. This parameter is not required for a global configuration. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. This parameter is not required for a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule execution sequence. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Specifies whether to serve stale content. If enabled, edge nodes serve expired cached files when the origin server is unavailable. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  serveStale?: string;
  /**
   * @remarks
   * The site version. If version management is enabled for the site, this specifies the version to which the configuration applies. The default is 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Specifies whether to enable query string sorting. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  sortQueryStringForCache?: string;
  /**
   * @remarks
   * Specifies whether to include the client device type in the cache key. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  userDeviceType?: string;
  /**
   * @remarks
   * Specifies whether to include the client\\"s geographical location in the cache key. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  userGeo?: string;
  /**
   * @remarks
   * Specifies whether to include the client language in the cache key. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
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
   * The list of configurations.
   */
  configs?: ListCacheRulesResponseBodyConfigs[];
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
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of records.
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

