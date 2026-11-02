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
   * The status. Valid values:
   * - Queuing: Queued for processing.
   * - Playable: Playable.
   * - Failed: Packaging failed and playback is unavailable.
   * 
   * @example
   * Playable
   */
  status?: string;
  /**
   * @remarks
   * The playback URL. If asset packaging fails, the corresponding playback URL is not returned.
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
   * The input media asset. Currently, only OSS paths are supported, such as OSS://test-bucket/video/202208/test.m3u8. Only inputs with the .m3u8 extension are supported.
   */
  media?: string;
  /**
   * @remarks
   * The input type. Currently, only Object Storage Service (OSS) is supported.
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
   * The name of the packaging asset.
   * 
   * @example
   * 30min_movie
   */
  assetName?: string;
  /**
   * @remarks
   * The content ID in the Digital Rights Management (DRM) system. The format is [A-Za-z0-9_-]+, and the maximum length is 256 characters.
   * 
   * @example
   * movie
   */
  contentId?: string;
  /**
   * @remarks
   * The time when the asset was created. The format is 2024-11-21T06:45:32Z, which indicates 2024-11-21 14:45:32 in UTC+8.
   * 
   * @example
   * 2024-11-21T06:45:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The list of output endpoints for asset packaging and playback. Each packaging configuration corresponds to one packaging playback endpoint.
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
   * The input of the packaging asset.
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
   * The details of the VOD packaging asset.
   */
  asset?: GetVodPackagingAssetResponseBodyAsset;
  /**
   * @remarks
   * The request ID.
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

