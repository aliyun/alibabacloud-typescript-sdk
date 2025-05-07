// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFreeUserAssetCountResponseBodyAsset extends $dara.Model {
  /**
   * @remarks
   * The number of active APIs.
   * 
   * @example
   * 34
   */
  assetActive?: number;
  /**
   * @remarks
   * The total number of APIs.
   * 
   * @example
   * 15
   */
  assetCount?: number;
  /**
   * @remarks
   * The number of deactivated APIs.
   * 
   * @example
   * 13
   */
  assetOffline?: number;
  static names(): { [key: string]: string } {
    return {
      assetActive: 'AssetActive',
      assetCount: 'AssetCount',
      assetOffline: 'AssetOffline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetActive: 'number',
      assetCount: 'number',
      assetOffline: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

