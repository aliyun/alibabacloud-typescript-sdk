// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCacheRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Enable caching on specified ports. Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
   * 
   * @example
   * 8880
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
   * no_cache
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
   * - cache_all: Cache all requests.
   * - bypass_all: Bypass cache for all requests.
   * 
   * @example
   * cache_all
   */
  bypassCache?: string;
  /**
   * @remarks
   * Cache deception defense. Used to defend against web cache deception attacks; only the cache content that passes the validation will be cached. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * Cache retention eligibility. Used to control whether user requests bypass the cache retention node when returning to the origin. Value range:
   * - bypass_cache_reserve: Requests bypass cache retention.
   * - eligible_for_cache_reserve: Eligible for cache retention.
   * 
   * @example
   * bypass_cache_reserve
   */
  cacheReserveEligibility?: string;
  /**
   * @remarks
   * Check if the cookie exists when generating cache keys, and if it does, add the cookie name (case-insensitive) to the cache key. Supports multiple cookie names, separated by spaces.
   * 
   * @example
   * cookiename
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * Check if the header exists when generating cache keys, and if it does, add the header name (case-insensitive) to the cache key. Supports multiple header names, separated by spaces.
   * 
   * @example
   * headername
   */
  checkPresenceHeader?: string;
  /**
   * @remarks
   * Configuration ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
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
   * Include the specified cookie names and their values when generating cache keys, supporting multiple values separated by spaces.
   * 
   * @example
   * cookiename
   */
  includeCookie?: string;
  /**
   * @remarks
   * Include the specified header names and their values when generating cache keys, supporting multiple values separated by spaces.
   * 
   * @example
   * headername
   */
  includeHeader?: string;
  /**
   * @remarks
   * Query strings to be retained or excluded, supporting multiple values separated by spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * The processing mode of query strings when generating cache keys. Values:
   * - ignore_all: Ignore all.
   * - exclude_query_string: Exclude specified query strings.
   * - reserve_all: Default, reserve all.
   * - include_query_string: Include specified query strings.
   * 
   * @example
   * ignore_all
   */
  queryStringMode?: string;
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - Match all incoming requests: Set the value to true
   * - Match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  sequence?: number;
  /**
   * @remarks
   * Serve stale cache. When enabled, the node can still use the expired cached files to respond to user requests even if the origin server is unavailable. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  serveStale?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
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
   * When generating cache keys, include the client device type. Value range: 
   * - on: enabled. 
   * - off: disabled.
   * 
   * @example
   * on
   */
  userDeviceType?: string;
  /**
   * @remarks
   * Include the client\\"s geographical location when generating the cache key. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  userGeo?: string;
  /**
   * @remarks
   * Include the client\\"s language type when generating the cache key. Value range:
   * - on: Enable.
   * - off: Disable.
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

