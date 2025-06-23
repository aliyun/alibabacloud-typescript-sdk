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

