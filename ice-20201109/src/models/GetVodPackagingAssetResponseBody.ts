// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVodPackagingAssetResponseBodyAsset } from "./GetVodPackagingAssetResponseBodyAsset";


export class GetVodPackagingAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the asset.
   */
  asset?: GetVodPackagingAssetResponseBodyAsset;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0622C702-41BE-467E-AF2E-883D4517962E
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
      asset: GetVodPackagingAssetResponseBodyAsset,
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

