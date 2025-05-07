// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserAssetResponseBodyAssets } from "./DescribeUserAssetResponseBodyAssets";


export class DescribeUserAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API statistics.
   */
  assets?: DescribeUserAssetResponseBodyAssets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1823E96-EF4B-5BD2-9E02-1D18****3ED8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': DescribeUserAssetResponseBodyAssets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assets)) {
      $dara.Model.validateArray(this.assets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

