// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateVodPackagingAssetRequestAssetsInput extends $dara.Model {
  /**
   * @remarks
   * The URL of the media file. You can only specify a M3U8 file stored in Object Storage Service (OSS).
   */
  media?: string;
  /**
   * @remarks
   * The input type. Only OSS is supported.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
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

