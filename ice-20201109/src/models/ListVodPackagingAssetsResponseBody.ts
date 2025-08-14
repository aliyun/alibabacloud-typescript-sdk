// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVodPackagingAssetsResponseBodyAssetsInput extends $dara.Model {
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

export class ListVodPackagingAssetsResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The name of the VOD packaging asset.
   * 
   * @example
   * 30min_movie
   */
  assetName?: string;
  /**
   * @remarks
   * The time when the asset was ingested. It follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-11-21T06:45:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The asset description.
   * 
   * @example
   * movie 30min
   */
  description?: string;
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
  input?: ListVodPackagingAssetsResponseBodyAssetsInput;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      createTime: 'CreateTime',
      description: 'Description',
      groupName: 'GroupName',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      createTime: 'string',
      description: 'string',
      groupName: 'string',
      input: ListVodPackagingAssetsResponseBodyAssetsInput,
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

export class ListVodPackagingAssetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The VOD packaging assets.
   */
  assets?: ListVodPackagingAssetsResponseBodyAssets[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order of the assets based on the time when they were ingested. Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': ListVodPackagingAssetsResponseBodyAssets },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
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

