// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVodPackagingAssetResponseBodyAssetEgressEndpoints } from "./GetVodPackagingAssetResponseBodyAssetEgressEndpoints";
import { GetVodPackagingAssetResponseBodyAssetInput } from "./GetVodPackagingAssetResponseBodyAssetInput";


export class GetVodPackagingAssetResponseBodyAsset extends $dara.Model {
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * 30min_movie
   */
  assetName?: string;
  /**
   * @remarks
   * The content ID in the DRM system. The maximum length is 256 characters. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * movie
   */
  contentId?: string;
  /**
   * @remarks
   * The time when the asset was created. It follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-11-21T06:45:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The egress endpoints, each corresponding to a packaging configuration.
   */
  egressEndpoints?: GetVodPackagingAssetResponseBodyAssetEgressEndpoints[];
  /**
   * @remarks
   * The name of the packaging group.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  /**
   * @remarks
   * The asset input configurations.
   */
  input?: GetVodPackagingAssetResponseBodyAssetInput;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      contentId: 'ContentId',
      createTime: 'CreateTime',
      egressEndpoints: 'EgressEndpoints',
      groupName: 'GroupName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      contentId: 'string',
      createTime: 'string',
      egressEndpoints: { 'type': 'array', 'itemType': GetVodPackagingAssetResponseBodyAssetEgressEndpoints },
      groupName: 'string',
      input: GetVodPackagingAssetResponseBodyAssetInput,
    };
  }

  validate() {
    if(Array.isArray(this.egressEndpoints)) {
      $dara.Model.validateArray(this.egressEndpoints);
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

