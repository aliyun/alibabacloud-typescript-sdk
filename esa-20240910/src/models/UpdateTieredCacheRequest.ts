// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTieredCacheRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cacheArchitectureMode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      cacheArchitectureMode: 'CacheArchitectureMode',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheArchitectureMode: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

