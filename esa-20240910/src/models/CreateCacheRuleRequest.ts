// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCacheRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Enable caching on specified ports. Value range: 8880, 2052, 2082, 2086, 2095, 2053, 2083, 2087, 2096
   * 
   * @example
   * 8880
   */
  additionalCacheablePorts?: string;
  /**
   * @remarks
   * Browser cache mode. Possible values:
   * - no_cache: Do not cache.
   * - follow_origin: Follow the origin server\\"s cache policy.
   * - override_origin: Override the origin server\\"s cache policy.
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
   * Set the bypass cache mode. Possible values:
   * - cache_all: Cache all requests.
   * - bypass_all: Bypass cache for all requests.
   * 
   * @example
   * cache_all
   */
  bypassCache?: string;
  /**
   * @remarks
   * Cache deception defense. Used to defend against web cache deception attacks; only the verified cache content will be cached. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  cacheDeceptionArmor?: string;
  /**
   * @remarks
   * Cache retention eligibility. Used to control whether user requests bypass the cache retention node when returning to the origin. Possible values:
   * - bypass_cache_reserve: Requests bypass cache retention.
   * - eligible_for_cache_reserve: Eligible for cache retention.
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
   * Edge cache mode. Possible values:
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
   * Status code cache expiration time, in seconds.
   * 
   * @example
   * 300
   */
  edgeStatusCodeCacheTtl?: string;
  /**
   * @remarks
   * When generating the cache key, add the specified cookie names and their values. Multiple values are supported, separated by spaces.
   * 
   * @example
   * cookie_exapmle
   */
  includeCookie?: string;
  /**
   * @remarks
   * When generating the cache key, add the specified header names and their values. Multiple values are supported, separated by spaces.
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
   * Query strings to be reserved or excluded. Multiple values are supported, separated by spaces.
   * 
   * @example
   * example
   */
  queryString?: string;
  /**
   * @remarks
   * The processing mode for query strings when generating the cache key. Possible values:
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
   * Rule switch. This parameter is not required when adding a global configuration. Possible values:
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
   * 340035003106221
   */
  siteId?: number;
  /**
   * @remarks
   * Version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the version for the configuration to take effect. The default is version 0.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Query string sorting, disabled by default. Possible values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  sortQueryStringForCache?: string;
  /**
   * @remarks
   * When generating the cache key, include the client device type. Possible values:
   * - on: Enable.
   * - off: Disable.
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

