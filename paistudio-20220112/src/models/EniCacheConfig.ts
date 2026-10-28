// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EniCacheConfig extends $dara.Model {
  /**
   * @remarks
   * The size of the cache pool.
   * 
   * @example
   * 0
   */
  cachePoolSize?: number;
  /**
   * @remarks
   * Specifies whether it is enabled.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      cachePoolSize: 'CachePoolSize',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachePoolSize: 'number',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

