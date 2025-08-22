// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshDcdnObjectCacheByCacheTagRequest extends $dara.Model {
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
  domainName?: string;
  /**
   * @example
   * true
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      cacheTag: 'CacheTag',
      domainName: 'DomainName',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTag: 'string',
      domainName: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

