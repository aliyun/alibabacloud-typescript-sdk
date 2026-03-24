// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAssetResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The number of assets.
   * 
   * @example
   * 134
   */
  assetNum?: number;
  /**
   * @remarks
   * The time when the statistics are collected. This value is a UNIX timestamp in seconds. The time is in UTC.
   * 
   * @example
   * 1723435200
   */
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      assetNum: 'AssetNum',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetNum: 'number',
      timeStamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of asset statistics.
   */
  assets?: DescribeUserAssetResponseBodyAssets[];
  /**
   * @remarks
   * The ID of the request.
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

