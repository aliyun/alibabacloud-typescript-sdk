// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshErObjectCachesByCacheTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag1,tag2
   */
  cacheTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @example
   * true
   */
  force?: boolean;
  /**
   * @example
   * a.test.com,b.test.com
   */
  mergeDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      cacheTag: 'CacheTag',
      domain: 'Domain',
      force: 'Force',
      mergeDomainName: 'MergeDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTag: 'string',
      domain: 'string',
      force: 'boolean',
      mergeDomainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

