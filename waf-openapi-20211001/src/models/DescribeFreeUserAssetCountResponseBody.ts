// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFreeUserAssetCountResponseBodyAsset } from "./DescribeFreeUserAssetCountResponseBodyAsset";


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

