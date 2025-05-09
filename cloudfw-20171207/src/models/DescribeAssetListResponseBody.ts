// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAssetListResponseBodyAssets } from "./DescribeAssetListResponseBodyAssets";


export class DescribeAssetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The assets that are protected by Cloud Firewall.
   */
  assets?: DescribeAssetListResponseBodyAssets[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the assets that are protected by Cloud Firewall.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': DescribeAssetListResponseBodyAssets },
      requestId: 'string',
      totalCount: 'number',
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

