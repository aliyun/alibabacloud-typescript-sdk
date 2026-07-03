// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataStorageTtlRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The storage duration for cold storage in Simple Log Service. This setting is not yet available.
   * 
   * @example
   * 0
   */
  logStoreColdTtl?: string;
  /**
   * @remarks
   * The storage duration for hot storage in Simple Log Service.
   * 
   * @example
   * 180
   */
  logStoreHotTtl?: string;
  /**
   * @remarks
   * The name of the Logstore for threat analysis.
   * 
   * @example
   * network-activity
   */
  logStoreName?: string;
  /**
   * @remarks
   * The storage duration of the Logstore.
   * 
   * @example
   * 180
   */
  logStoreTtl?: string;
  /**
   * @remarks
   * The region of the Data Management Center for threat analysis. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: The Chinese mainland.
   * 
   * - ap-southeast-1: Regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose perspective the administrator assumes.
   * 
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

