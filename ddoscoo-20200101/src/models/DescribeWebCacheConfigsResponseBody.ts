// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the page cache. Unit: seconds.
   * 
   * @example
   * 86400
   */
  cacheTtl?: number;
  /**
   * @remarks
   * The cache mode. Valid values:
   * 
   * *   **standard**: The standard cache mode is used.
   * *   **aggressive**: The enhanced cache mode is used.
   * *   **bypass**: No data is cached.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * c1
   */
  name?: string;
  /**
   * @remarks
   * The path to the cached page.
   * 
   * @example
   * /blog/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      cacheTtl: 'CacheTtl',
      mode: 'Mode',
      name: 'Name',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTtl: 'number',
      mode: 'string',
      name: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponseBodyDomainCacheConfigs extends $dara.Model {
  /**
   * @remarks
   * An array that consists of custom caching rules.
   */
  customRules?: DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules[];
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The status of the Static Page Caching policy. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  enable?: number;
  /**
   * @remarks
   * The cache mode. Valid values:
   * 
   * *   **standard**: The standard cache mode is used.
   * *   **aggressive**: The enhanced cache mode is used.
   * *   **bypass**: No data is cached.
   * 
   * @example
   * bypass
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      customRules: 'CustomRules',
      domain: 'Domain',
      enable: 'Enable',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customRules: { 'type': 'array', 'itemType': DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules },
      domain: 'string',
      enable: 'number',
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customRules)) {
      $dara.Model.validateArray(this.customRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebCacheConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of Static Page Caching configurations.
   */
  domainCacheConfigs?: DescribeWebCacheConfigsResponseBodyDomainCacheConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6623EA1F-30FB-5BC8-BEC9-74D55F6F08F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainCacheConfigs: 'DomainCacheConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCacheConfigs: { 'type': 'array', 'itemType': DescribeWebCacheConfigsResponseBodyDomainCacheConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainCacheConfigs)) {
      $dara.Model.validateArray(this.domainCacheConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

