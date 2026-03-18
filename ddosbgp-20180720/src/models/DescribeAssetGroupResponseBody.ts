// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAssetGroupResponseBodyAssetGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * waf_v2_public_cn-lbj382l****
   */
  name?: string;
  /**
   * @remarks
   * The region to which the asset belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the asset.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the asset.
   */
  assetGroupList?: DescribeAssetGroupResponseBodyAssetGroupList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 487EC0F7-8D14-504E-914E-3A1BC314B581
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      assetGroupList: 'AssetGroupList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupList: { 'type': 'array', 'itemType': DescribeAssetGroupResponseBodyAssetGroupList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetGroupList)) {
      $dara.Model.validateArray(this.assetGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

