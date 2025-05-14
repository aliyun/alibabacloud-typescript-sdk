// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateVodPackagingAssetRequestAssets } from "./BatchCreateVodPackagingAssetRequestAssets";


export class BatchCreateVodPackagingAssetRequest extends $dara.Model {
  /**
   * @remarks
   * The assets that you want to ingest.
   */
  assets?: BatchCreateVodPackagingAssetRequestAssets[];
  /**
   * @remarks
   * The name of the packaging group.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': BatchCreateVodPackagingAssetRequestAssets },
      groupName: 'string',
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

