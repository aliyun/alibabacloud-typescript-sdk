// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideoSnapshots extends $dara.Model {
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

export class ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideo extends $dara.Model {
  /**
   * @remarks
   * The ID of the video category.
   * 
   * @example
   * 78
   */
  cateId?: number;
  /**
   * @remarks
   * The category of the video.
   * 
   * @example
   * Category name
   */
  cateName?: string;
  /**
   * @remarks
   * The URL of the video thumbnail.
   * 
   * @example
   * https://example.aliyundoc.com/coversample.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the audio or video file was created. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-08T07:40:56Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the video file.
   * 
   * @example
   * Description of the ApsaraVideo VOD video
   */
  description?: string;
  /**
   * @remarks
   * The duration of the video file. Unit: seconds.
   * 
   * @example
   * 135.6
   */
  duration?: number;
  /**
   * @remarks
   * The time when the video was updated. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-08T09:40:56Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The size of the source video file. Unit: bytes.
   * 
   * @example
   * 10897890
   */
  size?: number;
  /**
   * @remarks
   * The array of video snapshot URLs.
   */
  snapshots?: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideoSnapshots;
  /**
   * @remarks
   * The status of the video. Valid values:
   * 
   * *   **Uploading**
   * *   **UploadFail**
   * *   **UploadSuccess**
   * *   **Transcoding**
   * *   **TranscodeFail**
   * *   **Blocked**
   * *   **Normal**: The video is normal.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The tags of the video. Multiple tags are separated with commas (,).
   * 
   * @example
   * tag1, tag2
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * 1
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The title of the video.
   * 
   * @example
   * Title of the ApsaraVideo VOD video
   */
  title?: string;
  /**
   * @remarks
   * The ID of the video.
   * 
   * @example
   * 93ab850b4f6f*****54b6e91d24d81d4
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      modifyTime: 'ModifyTime',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      tags: 'Tags',
      templateGroupId: 'TemplateGroupId',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      modifyTime: 'string',
      size: 'number',
      snapshots: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideoSnapshots,
      status: 'string',
      tags: 'string',
      templateGroupId: 'string',
      title: 'string',
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

export class ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideo extends $dara.Model {
  /**
   * @remarks
   * The name of the app.
   * 
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the playlist.
   * 
   * @example
   * ****
   */
  playlistId?: string;
  /**
   * @remarks
   * The recording end time. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-08T08:44:56Z
   */
  recordEndTime?: string;
  /**
   * @remarks
   * The recording start time. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-12-08T07:40:56Z
   */
  recordStartTime?: string;
  /**
   * @remarks
   * The name of the live-to-VOD file.
   * 
   * @example
   * live-test
   */
  streamName?: string;
  /**
   * @remarks
   * The information about the live-to-VOD file.
   */
  video?: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideo;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      playlistId: 'PlaylistId',
      recordEndTime: 'RecordEndTime',
      recordStartTime: 'RecordStartTime',
      streamName: 'StreamName',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      playlistId: 'string',
      recordEndTime: 'string',
      recordStartTime: 'string',
      streamName: 'string',
      video: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideo,
    };
  }

  validate() {
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponseBodyLiveRecordVideoList extends $dara.Model {
  liveRecordVideo?: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideo[];
  static names(): { [key: string]: string } {
    return {
      liveRecordVideo: 'LiveRecordVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordVideo: { 'type': 'array', 'itemType': ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideo },
    };
  }

  validate() {
    if(Array.isArray(this.liveRecordVideo)) {
      $dara.Model.validateArray(this.liveRecordVideo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveRecordVideoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of videos.
   */
  liveRecordVideoList?: ListLiveRecordVideoResponseBodyLiveRecordVideoList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-****-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of videos.
   * 
   * @example
   * 123
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      liveRecordVideoList: 'LiveRecordVideoList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveRecordVideoList: ListLiveRecordVideoResponseBodyLiveRecordVideoList,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.liveRecordVideoList && typeof (this.liveRecordVideoList as any).validate === 'function') {
      (this.liveRecordVideoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

