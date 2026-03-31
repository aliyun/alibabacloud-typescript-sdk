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

export class DescribeFreeUserAssetCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asset statistics provided by basic detection.
   */
  asset?: DescribeFreeUserAssetCountResponseBodyAsset;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30488BF0-FD58-52DD-B396-D014549F43A3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      asset: 'Asset',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asset: DescribeFreeUserAssetCountResponseBodyAsset,
      requestId: 'string',
    };
  }

  validate() {
    if(this.asset && typeof (this.asset as any).validate === 'function') {
      (this.asset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

