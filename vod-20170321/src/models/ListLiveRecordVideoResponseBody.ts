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
  cateId?: number;
  cateName?: string;
  coverURL?: string;
  creationTime?: string;
  description?: string;
  duration?: number;
  modifyTime?: string;
  size?: number;
  snapshots?: ListLiveRecordVideoResponseBodyLiveRecordVideoListLiveRecordVideoVideoSnapshots;
  status?: string;
  tags?: string;
  templateGroupId?: string;
  title?: string;
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
  appName?: string;
  domainName?: string;
  playlistId?: string;
  recordEndTime?: string;
  recordStartTime?: string;
  streamName?: string;
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

