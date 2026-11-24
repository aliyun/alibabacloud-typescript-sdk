// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataStorageTtlRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The cold storage duration in Simple Log Service. This parameter is not available for configuration.
   * 
   * @example
   * 0
   */
  logStoreColdTtl?: string;
  /**
   * @remarks
   * The hot storage duration in Simple Log Service.
   * 
   * @example
   * 180
   */
  logStoreHotTtl?: string;
  /**
   * @remarks
   * The name of the Logstore for Threat Analysis.
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
   * The region of the data management center for Threat Analysis. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
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

