// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecAssetTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of active APIs.
   * 
   * @example
   * 60
   */
  assetActive?: number;
  /**
   * @remarks
   * The total number of API assets.
   * 
   * @example
   * 80
   */
  assetCount?: number;
  /**
   * @remarks
   * The number of inactive APIs.
   * 
   * @example
   * 20
   */
  assetOffline?: number;
  /**
   * @remarks
   * The timestamp of the data point. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1683600042
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      assetActive: 'AssetActive',
      assetCount: 'AssetCount',
      assetOffline: 'AssetOffline',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetActive: 'number',
      assetCount: 'number',
      assetOffline: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecAssetTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API asset trend data.
   */
  data?: DescribeApisecAssetTrendResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecAssetTrendResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

