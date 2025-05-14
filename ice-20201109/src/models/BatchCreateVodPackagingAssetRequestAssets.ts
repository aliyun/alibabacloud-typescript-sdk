// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateVodPackagingAssetRequestAssetsInput } from "./BatchCreateVodPackagingAssetRequestAssetsInput";


export class BatchCreateVodPackagingAssetRequestAssets extends $dara.Model {
  /**
   * @remarks
   * The name of the asset. The name must be unique and can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * 30min_movie
   */
  assetName?: string;
  /**
   * @remarks
   * The content ID in the digital rights management (DRM) system. The maximum length is 256 characters. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * @example
   * movie
   */
  contentId?: string;
  /**
   * @remarks
   * The asset input configurations.
   */
  input?: BatchCreateVodPackagingAssetRequestAssetsInput;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      contentId: 'ContentId',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      contentId: 'string',
      input: BatchCreateVodPackagingAssetRequestAssetsInput,
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

