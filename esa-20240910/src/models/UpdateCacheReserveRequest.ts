// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCacheReserveRequest extends $dara.Model {
  /**
   * @remarks
   * The cache reserve instance ID.
   * 
   * @example
   * cr_hk_123456789
   */
  cacheReserveInstanceId?: string;
  /**
   * @remarks
   * The switch. Valid values:
   * 
   * - **on**: enabled.
   * - **off**: disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      cacheReserveInstanceId: 'CacheReserveInstanceId',
      enable: 'Enable',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheReserveInstanceId: 'string',
      enable: 'string',
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

