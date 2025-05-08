// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCacheRulesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * Enable caching on specified ports. Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096.
   * 
   * @example
   * 2082
   */
  additionalCacheablePorts?: string;
  /**
   * @remarks
   * Browser cache mode. Possible values:
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
   * Set bypass cache mode. Possible values:
   * - cache_all: Cache all requests.
   * - bypass_all: Bypass cache for all requests.
   * 
   * @example
   * cache_all
   */
  bypassCache?: string;
  /**
   * @remarks
   * Cache deception defense. Used to defend against web cache deception attacks; only verified cache content will be cached. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * Cache reserve eligibility. This is used to control whether user requests bypass the cache reserve node when returning to the origin. The value range is as follows:
   * - bypass_cache_reserve: Requests bypass the cache reserve.
   * - eligible_for_cache_reserve: Eligible for cache reserve.
   * 
   * @example
   * bypass_cache_reserve
   */
  cacheReserveEligibility?: string;
  /**
   * @remarks
   * When generating the cache key, check if the cookie exists. If it does, add the cookie name (case-insensitive) to the cache key. Multiple cookie names are supported, separated by spaces.
   * 
   * @example
   * cookiename
   */
  checkPresenceCookie?: string;
  /**
   * @remarks
   * When generating the cache key, check if the header exists. If it does, add the header name (case-insensitive) to the cache key. Multiple header names are supported, separated by spaces.
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
   * 395386449776640
   */
  configId?: number;
  /**
   * @remarks
   * Configuration type, which can be used to query global or rule-based configurations. Possible values:
   * - global: Query global configuration.
   * - rule: Query rule-based configuration.
   * 
   * @example
   * global
   */
  configType?: string;
  /**
   * @remarks
   * Edge cache mode. The value range is as follows:
   * - follow_origin: Follow the origin server\\"s cache policy (if it exists), otherwise use the default cache policy.
   * - no_cache: Do not cache.
   * - override_origin: Override the origin server\\"s cache policy.
   * - follow_origin_bypass: Follow the origin server\\"s cache policy (if it exists), otherwise do not cache.
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
   * Edge cache expiration time, in seconds.
   * 
   * @example
   * 300
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * Include the specified cookie names and their values when generating the cache key. Multiple values are supported, separated by spaces.
   * 
   * @example
   * cookie_exapmle
   */
  includeCookie?: string;
  /**
   * @remarks
   * Include the specified header names and their values when generating the cache key. Multiple values are supported, separated by spaces.
   * 
   * @example
   * example
   */
  includeHeader?: string;
  /**
   * @remarks
   * The query strings to be reserved or excluded. Multiple values are supported, separated by spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * The processing mode for query strings when generating the cache key. The value range is as follows:
   * - ignore_all: Ignore all query strings.
   * - exclude_query_string: Exclude specified query strings.
   * - reserve_all: Default, reserve all query strings.
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
   * - Match specific requests: Set the value to a custom expression, e.g., (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq \\"video.example.com\\")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Possible values:
   * - on: Enabled.
   * - off: Disabled.
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
   * Serve stale cache. When enabled, the node can still respond to user requests with expired cached files even when the origin server is unavailable. Value range:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  serveStale?: string;
  /**
   * @remarks
   * Site configuration version number. For sites with version management enabled, this parameter can specify the site version for which the configuration takes effect, defaulting to version 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Query string sorting. The value range is as follows:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  sortQueryStringForCache?: string;
  /**
   * @remarks
   * Include the client device type when generating the cache key. The value range is as follows:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  userDeviceType?: string;
  /**
   * @remarks
   * Include the client\\"s geographic location when generating the cache key. The value range is as follows:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  userGeo?: string;
  /**
   * @remarks
   * Include the client\\"s language type when generating the cache key. The value range is as follows:
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
      configType: 'ConfigType',
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

