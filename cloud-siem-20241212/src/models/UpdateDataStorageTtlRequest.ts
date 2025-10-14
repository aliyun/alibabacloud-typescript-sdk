// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataStorageTtlRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 0
   */
  logStoreColdTtl?: string;
  /**
   * @example
   * 180
   */
  logStoreHotTtl?: string;
  /**
   * @example
   * network-activity
   */
  logStoreName?: string;
  /**
   * @example
   * 180
   */
  logStoreTtl?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      logStoreColdTtl: 'LogStoreColdTtl',
      logStoreHotTtl: 'LogStoreHotTtl',
      logStoreName: 'LogStoreName',
      logStoreTtl: 'LogStoreTtl',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      logStoreColdTtl: 'string',
      logStoreHotTtl: 'string',
      logStoreName: 'string',
      logStoreTtl: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

