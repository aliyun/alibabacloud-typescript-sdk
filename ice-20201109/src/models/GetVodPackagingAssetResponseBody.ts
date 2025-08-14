// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVodPackagingAssetResponseBodyAssetEgressEndpoints extends $dara.Model {
  /**
   * @remarks
   * The name of the packaging configuration.
   * 
   * @example
   * hls_3s
   */
  configurationName?: string;
  /**
   * @remarks
   * The asset status. Valid values:
   * 
   * *   Queuing: The asset is waiting for packaging.
   * *   Playable: The asset is packaged and playable.
   * *   Failed: The asset fails to be packaged.
   * 
   * @example
   * Playable
   */
  status?: string;
  /**
   * @remarks
   * The playback URL. If the asset fails to be packaged, no playback URL is returned.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      configurationName: 'ConfigurationName',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationName: 'string',
      status: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVodPackagingAssetResponseBodyAssetInput extends $dara.Model {
  /**
   * @remarks
   * The URL of the media file. Only M3U8 files stored in OSS are supported.
   */
  media?: string;
  /**
   * @remarks
   * The input type. Only Object Storage Service (OSS) is supported.
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

export class GetVodPackagingAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the asset.
   */
  asset?: GetVodPackagingAssetResponseBodyAsset;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0622C702-41BE-467E-AF2E-883D4517962E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      asset: 'Asset',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asset: GetVodPackagingAssetResponseBodyAsset,
      requestId: 'string',
    };
  }

  validate() {
    if(this.asset && typeof (this.asset as any).validate === 'function') {
      (this.asset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

