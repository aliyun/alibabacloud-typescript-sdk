// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentAssetsResponseBodyComponentAssets extends $dara.Model {
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * ff6fe161-93e2-464c-a326-fxxxxxx
   */
  assetUuid?: string;
  /**
   * @remarks
   * The name of the component to which the asset belongs.
   * 
   * @example
   * pyhton3
   */
  componentname?: string;
  /**
   * @remarks
   * The time when the asset was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC.
   * 
   * @example
   * 2023-03-23T14:38Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the asset was modified. The time is in the yyyy-MM-ddTHH:mm:ssZ format and is displayed in UTC.
   * 
   * @example
   * 2023-03-23T14:38Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 7xx
   */
  id?: number;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * test asset
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the asset in the JSON string format. DescribeComponentAssetForm
   * 
   * >  For more information, see [DescribeComponentAssetForm](~~DescribeComponentAssetForm~~).
   * 
   * @example
   * [
   *     {
   *         "name": "authMethod",
   *         "value": "ak"
   *     },
   *     {
   *         "name": "accessKeyId",
   *         "value": "xxxxxxx"
   *     },
   *     {
   *         "name": "accessKeySecret",
   *         "value": "xxxxx"
   *     },
   *     {
   *         "name": "roleArn",
   *         "value": ""
   *     }
   * ]
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      assetUuid: 'AssetUuid',
      componentname: 'Componentname',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetUuid: 'string',
      componentname: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentAssetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the assets.
   */
  componentAssets?: DescribeComponentAssetsResponseBodyComponentAssets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BFEFB76D-DD0E-5529-BD57-0DAC10B9B30F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentAssets: 'ComponentAssets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentAssets: { 'type': 'array', 'itemType': DescribeComponentAssetsResponseBodyComponentAssets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.componentAssets)) {
      $dara.Model.validateArray(this.componentAssets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

