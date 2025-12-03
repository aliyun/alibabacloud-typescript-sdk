// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoListResponseBodyVideoListVideoSnapshots extends $dara.Model {
  snapshot?: string[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snapshot)) {
      $dara.Model.validateArray(this.snapshot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBodyVideoListVideo extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Default value: **app-1000000**.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The category ID of the audio or video file.
   * 
   * @example
   * 781111
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * Category name
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL of the audio or video file.
   * 
   * @example
   * https://example.aliyundoc.com/****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the audio or video file was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the audio or video file.
   * 
   * @example
   * Video description in ApsaraVideo VOD
   */
  description?: string;
  /**
   * @remarks
   * The duration of the audio or video file. Unit: seconds. 86,400 seconds is equivalent to 24 hours.
   * 
   * @example
   * 135.6
   */
  duration?: number;
  /**
   * @remarks
   * The time when the video was updated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T09:16:50Z
   */
  modificationTime?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The period of time in which the audio or video file remains in the restored state.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The restoration status of the audio or video file. Valid values:
   * 
   * *   **Processing**
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  restoreStatus?: string;
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
   * The URL array of video snapshots.
   */
  snapshots?: GetVideoListResponseBodyVideoListVideoSnapshots;
  /**
   * @remarks
   * The status of the audio or video file. Valid values:
   * 
   * *   **Uploading**: The video is being uploaded.
   * *   **UploadFail**: The video failed to be uploaded.
   * *   **UploadSucc**: The video is uploaded.
   * *   **Transcoding**: The video is being transcoded.
   * *   **TranscodeFail**: The video failed to be transcoded.
   * *   **checking**: The video is being reviewed.
   * *   **Blocked**: The video is blocked.
   * *   **Normal**: The video is normal.
   * *   **ProduceFail**: The video failed to be produced.
   * 
   * For more information about each video status, see the "Status: the status of a video" section of the [Basic data types](~~52839#section-p7c-jgy-070~~) topic.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the audio or video file. Valid values:
   * 
   * *   **Standard**: All media resources are stored as Standard objects.
   * *   **IA**: All media resources are stored as IA objects.
   * *   **Archive**: All media resources are stored as Archive objects.
   * *   **ColdArchive**: All media resources are stored as Cold Archive objects.
   * *   **SourceIA**: Only the source files are IA objects.
   * *   **SourceArchive**: Only the source files are Archive objects.
   * *   **SourceColdArchive**: Only the source files are Cold Archive objects.
   * *   **Changing**: The storage class of the audio or video file is being changed.
   * *   **SourceChanging**: The storage class of the source file is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The storage address of the audio or video file.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the audio or video file. Multiple tags are separated by commas (,).
   * 
   * @example
   * Tag 1,Tag 2
   */
  tags?: string;
  /**
   * @remarks
   * The title of the audio or video file.
   * 
   * @example
   * Video title in ApsaraVideo VOD
   */
  title?: string;
  userData?: string;
  /**
   * @remarks
   * The ID of the audio or video file.
   * 
   * @example
   * 9ae2af636ca6c10412f44891fc****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      modificationTime: 'ModificationTime',
      referenceId: 'ReferenceId',
      restoreExpiration: 'RestoreExpiration',
      restoreStatus: 'RestoreStatus',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      storageClass: 'StorageClass',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      modificationTime: 'string',
      referenceId: 'string',
      restoreExpiration: 'string',
      restoreStatus: 'string',
      size: 'number',
      snapshots: GetVideoListResponseBodyVideoListVideoSnapshots,
      status: 'string',
      storageClass: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  validate() {
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoListResponseBodyVideoList extends $dara.Model {
  video?: GetVideoListResponseBodyVideoListVideo[];
  static names(): { [key: string]: string } {
    return {
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      video: { 'type': 'array', 'itemType': GetVideoListResponseBodyVideoListVideo },
    };
  }

  validate() {
    if(Array.isArray(this.video)) {
      $dara.Model.validateArray(this.video);
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
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of media files returned.
   * 
   * @example
   * 100
   */
  total?: number;
  /**
   * @remarks
   * The information about the audio or video files. Information about a maximum of 5,000 audio or video files can be returned.
   */
  videoList?: GetVideoListResponseBodyVideoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      videoList: 'VideoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      videoList: GetVideoListResponseBodyVideoList,
    };
  }

  validate() {
    if(this.videoList && typeof (this.videoList as any).validate === 'function') {
      (this.videoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

