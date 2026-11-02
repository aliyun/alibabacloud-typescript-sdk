// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VodPackagingAssetInput extends $dara.Model {
  /**
   * @remarks
   * The input media asset. Currently, only OSS paths are supported, such as OSS://test-bucket/video/202208/test.m3u8. Only inputs with the .m3u8 extension are supported.
   */
  media?: string;
  /**
   * @remarks
   * The input type. Currently, only OSS is supported.
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

export class VodPackagingAsset extends $dara.Model {
  /**
   * @remarks
   * The asset name. It must be unique per user, up to 128 characters in length, and match the format [A-Za-z0-9_-]+.
   * 
   * @example
   * example-asset
   */
  assetName?: string;
  /**
   * @remarks
   * The content ID in the DRM system. The format is [A-Za-z0-9_-]+, and the maximum length is 256 characters.
   * 
   * @example
   * example-content
   */
  contentId?: string;
  /**
   * @remarks
   * The creation time. The format is 2024-11-21T06:45:32Z, which indicates 2024-11-21 14:45:32 in UTC+8.
   * 
   * @example
   * 2024-11-21T06:45:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the packaging group.
   */
  groupName?: string;
  /**
   * @remarks
   * The input configuration of the asset.
   */
  input?: VodPackagingAssetInput;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      contentId: 'ContentId',
      createTime: 'CreateTime',
      groupName: 'GroupName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      contentId: 'string',
      createTime: 'string',
      groupName: 'string',
      input: VodPackagingAssetInput,
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

