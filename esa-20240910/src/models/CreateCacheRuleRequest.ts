// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCacheRuleRequest extends $dara.Model {
  /**
   * @remarks
   * - Specifies additional ports on which caching is enabled.
   * 
   * - Valid values: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, and 2096.
   * 
   * - You can specify multiple ports, separated by commas (,).
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
   * - `follow_origin`: Follows the origin server cache policy.
   * 
   * - `override_origin`: Overrides the origin server cache policy.
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
   * The bypass cache mode. Valid values:
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
   * Specifies whether to enable cache deception defense. This feature helps defend against web cache deception attacks. When this feature is enabled, only content that passes validation is cached. Valid values:
   * 
   * - `on`: Enables the defense.
   * 
   * - `off`: Disables the defense.
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * Specifies whether requests bypass cache reservation nodes during an origin fetch. Valid values:
   * 
   * - `bypass_cache_reserve`: The request bypasses cache reservation.
   * 
   * - `eligible_for_cache_reserve`: The request is eligible for cache reservation.
   * 
   * @example
   * bypass_cache_reserve
   */
  cacheReserveEligibility?: string;
  /**
   * @remarks
   * Specifies the cookies to check for presence when generating a cache key. If a specified cookie is present in the request, its name (case-insensitive) is included in the cache key. To specify multiple cookies, separate their names with spaces. The cookie names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Letters: a-z (lowercase)
   * 
   * @example
   * cookiename1 cookiename2
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * Specifies the headers to check for presence when generating a cache key. If a specified header is present in the request, its name (case-insensitive) is included in the cache key. To specify multiple headers, separate their names with spaces. The header names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Letters: a-z (lowercase)
   * 
   * @example
   * headername1 headername2
   */
  checkPresenceHeader?: string;
  /**
   * @remarks
   * The edge cache mode. Valid values:
   * 
   * - `follow_origin`: Follows the origin server cache policy if one exists; otherwise, uses the default cache policy.
   * 
   * - `no_cache`: Disables caching on the edge node.
   * 
   * - `override_origin`: Overrides the origin server cache policy.
   * 
   * - `follow_origin_bypass`: Follows the origin server cache policy if one exists; otherwise, the content is not cached.
   * 
   * - `follow_origin_override`: Follows the origin server cache policy if one exists; otherwise, uses a custom edge cache TTL.
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
   * - You can set the cache TTL for a series of status codes, such as 4xx or 5xx. For example, `4xx=10` caches all responses that have a status code in the 4xx series for 10 seconds.
   * 
   * - You can specify multiple status code TTLs, separated by commas (,).
   * 
   * @example
   * 5xx=0,404=10
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * The cookies to include in the cache key. Both the cookie names (case-insensitive) and their values are included. Separate multiple cookie names with spaces. The cookie names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Letters: a-z (lowercase)
   * 
   * @example
   * cookiename1 cookiename2
   */
  includeCookie?: string;
  /**
   * @remarks
   * The headers to include in the cache key. Both the header names (case-insensitive) and their values are included. Separate multiple header names with spaces. The header names can contain the following characters:
   * 
   * - Symbols: ! # $ % & \\" \\* + - . ^ _ | \\~
   * 
   * - Digits: 0-9
   * 
   * - Letters: a-z (lowercase)
   * 
   * @example
   * headername1 headername2
   */
  includeHeader?: string;
  /**
   * @remarks
   * Specifies how to process the request body when generating a cache key for POST requests. The following modes are supported:
   * 
   * - `md5`: Calculates the MD5 hash of the request body and adds the hash value to the cache key.
   * 
   * - `ignore`: Ignores the request body when the cache key is generated.
   * 
   * @example
   * ignore
   */
  postBodyCacheKey?: string;
  /**
   * @remarks
   * The size limit for the request body when using POST request caching, in KB. Supported values range from 1 to 8. If unspecified, the default is 8 KB.
   * 
   * @example
   * 1
   */
  postBodySizeLimit?: string;
  /**
   * @remarks
   * Specifies whether to enable POST request caching.
   * 
   * @example
   * on
   */
  postCache?: string;
  /**
   * @remarks
   * The query strings to include in or exclude from the cache key. Separate multiple query strings with spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * The mode for processing query strings when generating a cache key. Valid values:
   * 
   * - `ignore_all`: Ignores all query strings.
   * 
   * - `exclude_query_string`: Excludes specified query strings.
   * 
   * - `reserve_all`: Includes all query strings (the default).
   * 
   * - `include_query_string`: Includes only specified query strings.
   * 
   * @example
   * reserve_all
   */
  queryStringMode?: string;
  /**
   * @remarks
   * The content of the rule, which is a conditional expression used to match user requests. This parameter is not required for a global configuration.
   * 
   * - To match all requests, set the value to `true`.
   * 
   * - To match specific requests, set the value to a custom expression, such as `(http.host eq "video.example.com")`.
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. This parameter is not required for a global configuration. Valid values:
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
   * The rule name. This parameter is not required for a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution order of the rule. A smaller number indicates a higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Specifies whether to serve stale content. If enabled, an edge node can serve stale (expired) content when the origin server is unavailable. Valid values:
   * 
   * - `on`: Enables serving stale content.
   * 
   * - `off`: Disables serving stale content.
   * 
   * @example
   * on
   */
  serveStale?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 340035003106221
   */
  siteId?: number;
  /**
   * @remarks
   * The site configuration version. For sites with version management enabled, this parameter specifies the site version to which the configuration applies.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Specifies whether to sort query strings. This feature is disabled by default. Valid values:
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
   * Specifies whether to include the client device type in the cache key. Valid values:
   * 
   * - `on`: Includes the client device type.
   * 
   * - `off`: Does not include the client device type.
   * 
   * @example
   * on
   */
  userDeviceType?: string;
  /**
   * @remarks
   * Specifies whether to include the client\\"s geographic location in the cache key. Valid values:
   * 
   * - `on`: Includes the geographic location.
   * 
   * - `off`: Does not include the geographic location.
   * 
   * @example
   * on
   */
  userGeo?: string;
  /**
   * @remarks
   * Specifies whether to include the client\\"s language in the cache key. Valid values:
   * 
   * - `on`: Includes the language.
   * 
   * - `off`: Does not include the language.
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

