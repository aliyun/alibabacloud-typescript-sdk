// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoListResponseBodyMediaList extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: app-1000000.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 3679
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * Cate1
   */
  cateName?: string;
  /**
   * @remarks
   * The URL of the cover image.
   * 
   * @example
   * http://example.aliyundoc.com/snapshot/****.jpg?auth_key=1498476426-0-0-f00b9455c49a423ce69cf4e27333****
   */
  coverUrl?: string;
  /**
   * @remarks
   * The creation time. The time is in the yyyy-MM-ddTHH:mm:ssZ format and must be in UTC.
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Alibaba Cloud VOD video description
   */
  description?: string;
  /**
   * @remarks
   * The duration. Unit: seconds.
   * 
   * @example
   * 135.6
   */
  duration?: number;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 1c6ce34007d571ed94667630a6bc****
   */
  mediaId?: string;
  /**
   * @remarks
   * The update time. The time is in the yyyy-MM-ddTHH:mm:ssZ format and must be in UTC.
   * 
   * @example
   * 2017-11-14T09:16:50Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The size of the source file. Unit: bytes.
   * 
   * @example
   * 10897890
   */
  size?: number;
  /**
   * @remarks
   * The array of video snapshot URLs.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The video status.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage location.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * @example
   * Tag1, Tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * The greatest music player in history
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverUrl: 'CoverUrl',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverUrl: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      mediaId: 'string',
      modificationTime: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of media assets.
   */
  mediaList?: GetVideoListResponseBodyMediaList[];
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
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of media assets that meet the filter conditions.
   * 
   * @example
   * 163
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaList: 'MediaList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaList: { 'type': 'array', 'itemType': GetVideoListResponseBodyMediaList },
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaList)) {
      $dara.Model.validateArray(this.mediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

