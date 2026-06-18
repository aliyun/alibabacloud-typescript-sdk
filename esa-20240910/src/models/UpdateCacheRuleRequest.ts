// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCacheRuleRequest extends $dara.Model {
  /**
   * @remarks
   * - Enables caching on the specified ports.
   * 
   * - Valid values: `8880`, `2052`, `2082`, `2086`, `2095`, `2053`, `2083`, `2087`, `2096`
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
   * - `no_cache`: Does not cache content in the browser.
   * 
   * - `follow_origin`: Follows the caching policy of the origin server.
   * 
   * - `override_origin`: Overrides the caching policy of the origin server.
   * 
   * @example
   * no_cache
   */
  browserCacheMode?: string;
  /**
   * @remarks
   * The browser cache TTL (Time to Live), in seconds.
   * 
   * @example
   * 300
   */
  browserCacheTtl?: string;
  /**
   * @remarks
   * The cache bypass mode. Valid values:
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
   * Defends against Web Cache Deception attacks by caching only validated content. Valid values:
   * 
   * - `on`: Enables the feature.
   * 
   * - `off`: Disables the feature.
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * Controls whether requests bypass the cache reserve node during an origin-pull. Valid values:
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
   * The cookies to check for. If a specified cookie is present in the request, its name (case-insensitive) is added to the cache key. Separate multiple cookies with spaces. Cookie names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Lowercase letters: a-z
   * 
   * @example
   * cookiename1 cookiename2
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * The headers to check for. If a specified header is present in the request, its name (case-insensitive) is added to the cache key. Separate multiple headers with spaces. Header names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Lowercase letters: a-z
   * 
   * @example
   * headername1 headername2
   */
  checkPresenceHeader?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The cache mode for the edge node. Valid values:
   * 
   * - `follow_origin`: Follows the origin server\\"s caching policy. If the origin server has no policy, the default policy is used.
   * 
   * - `no_cache`: Does not cache content.
   * 
   * - `override_origin`: Overrides the caching policy of the origin server.
   * 
   * - `follow_origin_bypass`: Follows the caching policy of the origin server, if one exists. Otherwise, content is not cached.
   * 
   * - `follow_origin_override`: Follows the caching policy of the origin server, if one exists. Otherwise, a custom cache TTL is used.
   * 
   * @example
   * follow_origin
   */
  edgeCacheMode?: string;
  /**
   * @remarks
   * The edge node cache TTL (Time to Live), in seconds.
   * 
   * @example
   * 300
   */
  edgeCacheTtl?: string;
  /**
   * @remarks
   * The cache TTL for specific status codes, in seconds.
   * 
   * - You can set the cache TTL for a specific status code. For example, `404=10` caches responses with a 404 status code for 10 seconds.
   * 
   * - You can set the cache TTL for `4xx` and `5xx` status code ranges. For example, `4xx=10` caches all responses with a `4xx` status code for 10 seconds.
   * 
   * - Separate multiple status code settings with commas.
   * 
   * @example
   * 5xx=0,404=10
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * The cookies to include in the cache key. Both the cookie names (case-insensitive) and their values are used. Separate multiple cookies with spaces. Cookie names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Lowercase letters: a-z
   * 
   * @example
   * cookiename1 cookiename2
   */
  includeCookie?: string;
  /**
   * @remarks
   * The headers to include in the cache key. Both the header names (case-insensitive) and their values are used. Separate multiple headers with spaces. Header names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Lowercase letters: a-z
   * 
   * @example
   * headername1 headername2
   */
  includeHeader?: string;
  /**
   * @remarks
   * Controls how the request body is used to generate the cache key for POST requests. Valid values:
   * 
   * - `md5`: Calculates the MD5 hash of the request body and includes the hash in the cache key.
   * 
   * - `ignore`: Ignores the request body when generating the cache key.
   * 
   * @example
   * ignore
   */
  postBodyCacheKey?: string;
  /**
   * @remarks
   * The maximum size of a request body for POST caching, in KB. The value must be an integer from 1 to 8. If you leave this parameter empty, the default value of 8 KB is used.
   * 
   * @example
   * 1
   */
  postBodySizeLimit?: string;
  /**
   * @remarks
   * Controls whether to cache responses to POST requests.
   * 
   * @example
   * on
   */
  postCache?: string;
  /**
   * @remarks
   * The query string parameters to include in or exclude from the cache key. Separate multiple parameters with spaces.
   * 
   * @example
   * example1 example2
   */
  queryString?: string;
  /**
   * @remarks
   * Controls how query strings are used to generate a cache key. Valid values:
   * 
   * - `ignore_all`: Ignores all query strings.
   * 
   * - `exclude_query_string`: Removes specified query strings.
   * 
   * - `reserve_all`: Retains all query strings. This is the default value.
   * 
   * - `include_query_string`: Retains only specified query strings.
   * 
   * @example
   * ignore_all
   */
  queryStringMode?: string;
  /**
   * @remarks
   * A conditional expression that matches user requests. This parameter is optional for a global configuration. Two scenarios are supported:
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression, for example, `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Controls whether the rule is enabled. This parameter is optional for a global configuration. Valid values:
   * 
   * - `on`: Enables the rule.
   * 
   * - `off`: Disables the rule.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. This parameter is optional for a global configuration.
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
  sequence?: number;
  /**
   * @remarks
   * Controls whether to serve stale content. If enabled, an edge node can serve expired content from its cache if the origin server is unavailable. Valid values:
   * 
   * - `on`: Enables this feature.
   * 
   * - `off`: Disables this feature.
   * 
   * @example
   * on
   */
  serveStale?: string;
  /**
   * @remarks
   * The ID of the site. To get this ID, call the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * Controls whether to sort query string parameters when generating a cache key. Valid values:
   * 
   * - `on`: Enables sorting.
   * 
   * - `off`: Disables sorting.
   * 
   * @example
   * on
   */
  sortQueryStringForCache?: string;
  /**
   * @remarks
   * Controls whether to include the client device type in the cache key. Valid values:
   * 
   * - `on`: Enables this feature.
   * 
   * - `off`: Disables this feature.
   * 
   * @example
   * on
   */
  userDeviceType?: string;
  /**
   * @remarks
   * Controls whether to include the client\\"s geographic location in the cache key. Valid values:
   * 
   * - `on`: Enables this feature.
   * 
   * - `off`: Disables this feature.
   * 
   * @example
   * on
   */
  userGeo?: string;
  /**
   * @remarks
   * Controls whether to include the client\\"s language in the cache key. Valid values:
   * 
   * - `on`: Enables this feature.
   * 
   * - `off`: Disables this feature.
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
      siteId: 'SiteId',
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
      sequence: 'number',
      serveStale: 'string',
      siteId: 'number',
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

