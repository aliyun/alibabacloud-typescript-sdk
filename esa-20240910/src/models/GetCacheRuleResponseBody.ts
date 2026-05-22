// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCacheRuleResponseBody extends $dara.Model {
  additionalCacheablePorts?: string;
  browserCacheMode?: string;
  browserCacheTtl?: string;
  bypassCache?: string;
  cacheDeceptionArmor?: string;
  cacheReserveEligibility?: string;
  checkPresenceCookie?: string;
  checkPresenceHeader?: string;
  configId?: number;
  configType?: string;
  edgeCacheMode?: string;
  edgeCacheTtl?: string;
  edgeStatusCodeCacheTtl?: string;
  includeCookie?: string;
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
  queryString?: string;
  queryStringMode?: string;
  requestId?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  serveStale?: string;
  siteVersion?: number;
  sortQueryStringForCache?: string;
  userDeviceType?: string;
  userGeo?: string;
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

