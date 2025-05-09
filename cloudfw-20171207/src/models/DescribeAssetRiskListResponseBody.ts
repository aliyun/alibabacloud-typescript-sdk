// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAssetRiskListResponseBodyAssetList } from "./DescribeAssetRiskListResponseBodyAssetList";


export class DescribeAssetRiskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the assets.
   */
  assetList?: DescribeAssetRiskListResponseBodyAssetList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 443C5781-1C03-5FCD-8EC5-FB9C0B9AC396
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetList: 'AssetList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': DescribeAssetRiskListResponseBodyAssetList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

