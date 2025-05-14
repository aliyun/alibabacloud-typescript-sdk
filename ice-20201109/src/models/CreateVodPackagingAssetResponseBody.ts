// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingAsset } from "./VodPackagingAsset";


export class CreateVodPackagingAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the asset.
   */
  asset?: VodPackagingAsset;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
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
      asset: VodPackagingAsset,
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

