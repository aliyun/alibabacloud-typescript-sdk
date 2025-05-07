// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAssetResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The number of APIs returned.
   * 
   * @example
   * 134
   */
  assetNum?: number;
  /**
   * @remarks
   * The time at which the API was called. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
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

