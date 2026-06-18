// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCacheRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * - Additional ports on which caching is enabled.
   * 
   * - Valid values: `8880`, `2052`, `2082`, `2086`, `2095`, `2053`, `2083`, `2087`, `2096`.
   * 
   * - Separate multiple ports with commas.
   * 
   * @example
   * 8880,2052,2086
   */
  additionalCacheablePorts?: string;
  /**
   * @remarks
   * The browser cache mode. Valid values:
   * 
   * - `no_cache`: Does not cache content.
   * 
   * - `follow_origin`: Follows the origin cache policy.
   * 
   * - `override_origin`: Overrides the origin cache policy.
   * 
   * @example
   * follow_origin
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
   * Specifies whether to cache requests or bypass the cache. Valid values:
   * 
   * - `cache_all`: Caches all requests.
   * 
   * - `bypass_all`: Bypasses the cache for all requests.
   * 
   * @example
   * cache_all
   */
  bypassCache?: string;
  /**
   * @remarks
   * Specifies whether to enable Cache Deception Armor. This feature helps mitigate web cache deception attacks by ensuring that only validated content is cached. Valid values:
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
   * The eligibility for cache reserve. This controls whether a request bypasses the cache reserve node during an origin fetch. Valid values:
   * 
   * - `bypass_cache_reserve`: The request bypasses the cache reserve.
   * 
   * - `eligible_for_cache_reserve`: The request is eligible for cache reserve.
   * 
   * @example
   * bypass_cache_reserve
   */
  cacheReserveEligibility?: string;
  /**
   * @remarks
   * Specifies cookies whose presence is checked when generating a cache key. If a specified cookie exists in the request, its name (case-insensitive) is added to the cache key. Separate multiple cookie names with spaces. Cookie names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Letters: lowercase English letters a-z
   * 
   * @example
   * cookiename1 cookiename2
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * Specifies headers whose presence is checked when generating a cache key. If a specified header exists in the request, its name (case-insensitive) is added to the cache key. Separate multiple header names with spaces. Header names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Letters: lowercase English letters a-z
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
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Indicates whether the response contains a global or a rule configuration. Valid values:
   * 
   * - `global`: A global configuration.
   * 
   * - `rule`: A rule configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * The edge cache mode. Valid values:
   * 
   * - `follow_origin`: Uses the origin server\\"s cache policy. If none is provided, the default policy applies.
   * 
   * - `no_cache`: Does not cache content.
   * 
   * - `override_origin`: Overrides the origin cache policy.
   * 
   * - `follow_origin_bypass`: Uses the origin server\\"s cache policy. If none is provided, content is not cached.
   * 
   * - `follow_origin_override`: Uses the origin server\\"s cache policy. If none is provided, a custom cache TTL applies.
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
   * - Set the cache TTL for a specific status code. For example, `404=10` specifies that responses with a 404 status code are cached for 10 seconds.
   * 
   * - Set the cache TTL for status code classes, such as 4xx and 5xx. For example, `4xx=10` specifies that all responses with a 4xx status code are cached for 10 seconds.
   * 
   * - Separate multiple entries with commas.
   * 
   * @example
   * 5xx=0,404=10
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * Specifies the cookies to include in the cache key. Both the cookie names (case-insensitive) and their values are added to the key. Separate multiple cookie names with spaces. Cookie names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Letters: lowercase English letters a-z
   * 
   * @example
   * cookiename1 cookiename2
   */
  includeCookie?: string;
  /**
   * @remarks
   * Specifies the headers to include in the cache key. Both the header names (case-insensitive) and their values are added to the key. Separate multiple header names with spaces. Header names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Letters: lowercase English letters a-z
   * 
   * @example
   * headername1 headername2
   */
  includeHeader?: string;
  /**
   * @remarks
   * The mode for handling the body content when generating a cache key for POST requests. Valid values:
   * 
   * - `md5`: Calculates the MD5 hash of the body content and adds the hash to the cache key.
   * 
   * - `ignore`: Ignores the body content in the cache key.
   * 
   * @example
   * ignore
   */
  postBodyCacheKey?: string;
  /**
   * @remarks
   * The size limit (in KB) of the body content for POST caching. The value is an integer from 1 to 8. A null or empty value defaults to 8 KB.
   * 
   * @example
   * 1
   */
  postBodySizeLimit?: string;
  /**
   * @remarks
   * Specifies whether to enable the POST cache feature.
   * 
   * @example
   * on
   */
  postCache?: string;
  /**
   * @remarks
   * Specifies the query strings to include in or exclude from the cache key. Separate multiple query strings with spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * The mode for handling query strings when generating a cache key. Valid values:
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
   * reserve_all
   */
  queryStringMode?: string;
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
   * The rule content, which is a conditional expression used to match user requests. This parameter applies only to rule configurations.
   * 
   * - To match all incoming requests, use `true`.
   * 
   * - To match specific requests, use a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. This parameter applies only to rule configurations. Valid values:
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
   * The name of the rule. This parameter applies only to rule configurations.
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
   * Specifies whether to serve stale content. If enabled, edge nodes serve stale (expired) content from the cache when the origin server is unavailable. Valid values:
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
   * The version number of the site configuration. For sites with version management enabled, this indicates the configuration version. The default is 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Specifies whether to sort query strings before generating the cache key. Valid values:
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
   * Specifies whether to include the client\\"s device type in the cache key. Valid values:
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
   * Specifies whether to include the client\\"s geographic location in the cache key. Valid values:
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
   * Specifies whether to include the client\\"s language in the cache key. Valid values:
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

