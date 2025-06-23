// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules } from "./DescribeWebCacheConfigsResponseBodyDomainCacheConfigsCustomRules";


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

