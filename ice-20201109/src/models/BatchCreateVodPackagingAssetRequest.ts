// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateVodPackagingAssetRequestAssetsInput extends $dara.Model {
  /**
   * @remarks
   * The input media asset. Only Object Storage Service (OSS) paths are supported, such as OSS://test-bucket/video/202208/test.m3u8. Only inputs with the .m3u8 extension are supported.
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
   * The name of the asset. It must be unique per user and can be up to 128 characters in length. The value must match the regular expression [A-Za-z0-9_-]+.
   * 
   * @example
   * 30min_movie
   */
  assetName?: string;
  /**
   * @remarks
   * The content ID in the digital rights management (DRM) system. It can be up to 256 characters in length and must match the regular expression [A-Za-z0-9_-]+.
   * 
   * @example
   * movie
   */
  contentId?: string;
  /**
   * @remarks
   * The asset input configuration.
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
   * The list of VOD packaging asset configurations.
   */
  assets?: BatchCreateVodPackagingAssetRequestAssets[];
  /**
   * @remarks
   * The name of the VOD packaging group.
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

