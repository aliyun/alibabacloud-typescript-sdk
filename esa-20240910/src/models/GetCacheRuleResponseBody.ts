// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCacheRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Enable caching on the specified ports. Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
   * 
   * @example
   * 2095
   */
  additionalCacheablePorts?: string;
  /**
   * @remarks
   * Browser cache mode. Value range:
   * - no_cache: Do not cache.
   * - follow_origin: Follow origin cache policy.
   * - override_origin: Override origin cache policy.
   * 
   * @example
   * follow_origin
   */
  browserCacheMode?: string;
  /**
   * @remarks
   * Browser cache expiration time, in seconds.
   * 
   * @example
   * 300
   */
  browserCacheTtl?: string;
  /**
   * @remarks
   * Set bypass cache mode. Value range:
   * 
   * - cache_all: Cache all requests.
   * - bypass_all: Bypass cache for all requests.
   * 
   * @example
   * cache_all
   */
  bypassCache?: string;
  /**
   * @remarks
   * Cache deception defense. Used to defend against web cache deception attacks. Only the verified cache content will be cached. Value range:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * Cache reserve eligibility. Used to control whether user requests bypass the cache reserve node when returning to the origin. Value range:
   * 
   * - bypass_cache_reserve: Requests bypass the cache reserve.
   * - eligible_for_cache_reserve: Eligible for cache reserve.
   * 
   * @example
   * bypass_cache_reserve
   */
  cacheReserveEligibility?: string;
  /**
   * @remarks
   * When generating the cache key, check if the cookie exists. If it does, add the cookie name (cookie names are case-insensitive) to the cache key. Supports multiple cookie names, separated by spaces.
   * 
   * @example
   * cookiename
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * When generating the cache key, check if the header exists. If it does, add the header name (header names are case-insensitive) to the cache key. Supports multiple header names, separated by spaces.
   * 
   * @example
   * headername
   */
  checkPresenceHeader?: string;
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule configurations. Value range:
   * - global: Query global configuration;
   * - rule: Query rule configuration;
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Edge cache mode. Value range:
   * - follow_origin: Follow origin cache policy (if exists), otherwise use the default cache policy.
   * - no_cache: Do not cache.
   * - override_origin: Override origin cache policy.
   * - follow_origin_bypass: Follow origin cache policy (if exists), otherwise do not cache.
   * 
   * @example
   * follow_origin
   */
  edgeCacheMode?: string;
  /**
   * @remarks
   * Edge cache expiration time, in seconds.
   * 
   * @example
   * 300
   */
  edgeCacheTtl?: string;
  /**
   * @remarks
   * Status code cache expiration time, in seconds.
   * 
   * @example
   * 300
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * When generating the cache key, include the specified cookie names and their values. Supports multiple values, separated by spaces.
   * 
   * @example
   * cookie_exapmle
   */
  includeCookie?: string;
  /**
   * @remarks
   * When generating the cache key, include the specified header names and their values. Supports multiple values, separated by spaces.
   * 
   * @example
   * example
   */
  includeHeader?: string;
  /**
   * @example
   * ignore
   */
  postBodyCacheKey?: string;
  postBodySizeLimit?: string;
  /**
   * @example
   * on
   */
  postCache?: string;
  /**
   * @remarks
   * The query strings to be retained or deleted, supporting multiple values separated by spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * The processing mode for query strings when generating cache keys. Value range:
   * 
   * - ignore_all: Ignore all.
   * - exclude_query_string: Exclude specified query strings.
   * - reserve_all: Default, reserve all.
   * - include_query_string: Include specified query strings.
   * 
   * @example
   * reserve_all
   */
  queryStringMode?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter does not need to be set when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter does not need to be set when adding a global configuration. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter does not need to be set when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * Rule execution order. The smaller the value, the higher the priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * Serve stale cache. When enabled, the node can still use the cached expired files to respond to user requests even if the origin server is unavailable. Value range:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  serveStale?: string;
  /**
   * @remarks
   * Version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the effective version of the configuration, defaulting to version 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Query string sorting. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  sortQueryStringForCache?: string;
  /**
   * @remarks
   * When generating the cache key, include the client device type. Value range:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  userDeviceType?: string;
  /**
   * @remarks
   * When generating the cache key, include the client\\"s geographic location. Value range:
   * 
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  userGeo?: string;
  /**
   * @remarks
   * When generating the cache key, include the client\\"s language type. Value range:
   * 
   * - on: Enabled.
   * - off: Disabled.
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

