// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaFile } from "./QueryMediaListByUrlresponseBodyMediaListMediaFile";
import { QueryMediaListByURLResponseBodyMediaListMediaMediaInfo } from "./QueryMediaListByUrlresponseBodyMediaListMediaMediaInfo";
import { QueryMediaListByURLResponseBodyMediaListMediaPlayList } from "./QueryMediaListByUrlresponseBodyMediaListMediaPlayList";
import { QueryMediaListByURLResponseBodyMediaListMediaRunIdList } from "./QueryMediaListByUrlresponseBodyMediaListMediaRunIdList";
import { QueryMediaListByURLResponseBodyMediaListMediaSnapshotList } from "./QueryMediaListByUrlresponseBodyMediaListMediaSnapshotList";
import { QueryMediaListByURLResponseBodyMediaListMediaSummaryList } from "./QueryMediaListByUrlresponseBodyMediaListMediaSummaryList";
import { QueryMediaListByURLResponseBodyMediaListMediaTags } from "./QueryMediaListByUrlresponseBodyMediaListMediaTags";


export class QueryMediaListByURLResponseBodyMediaListMedia extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 593.192
   */
  bitrate?: string;
  /**
   * @remarks
   * The ID of the category to which the media file belongs.
   * 
   * @example
   * 123
   */
  cateId?: number;
  /**
   * @remarks
   * The review status of the media file. Valid values:
   * 
   * *   **Initiated**: The media file is uploaded but not reviewed.
   * *   **Pass**: The media file is uploaded and passes the review.
   * 
   * @example
   * Initiated
   */
  censorState?: string;
  /**
   * @remarks
   * The OSS URL of the thumbnail.
   * 
   * @example
   * http://example-bucket1-****.oss-cn-hangzhou.aliyuncs.com//example-****.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media file was created.
   * 
   * @example
   * 2021-07-14T13:05:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is description ****
   */
  description?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 79.204000
   */
  duration?: string;
  /**
   * @remarks
   * The details of the input file.
   */
  file?: QueryMediaListByURLResponseBodyMediaListMediaFile;
  /**
   * @remarks
   * The encoding format. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mov
   */
  format?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 15.0
   */
  fps?: string;
  /**
   * @remarks
   * The height of the queried media file.
   * 
   * @example
   * 360
   */
  height?: string;
  /**
   * @remarks
   * The ID of the media file.
   * 
   * @example
   * 52d7e98b05e648199612290bb819****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media information.
   */
  mediaInfo?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfo;
  /**
   * @remarks
   * The playlist.
   */
  playList?: QueryMediaListByURLResponseBodyMediaListMediaPlayList;
  /**
   * @remarks
   * The publishing status of the media file. Valid values:
   * 
   * - **Initiated**: The media file is in the initial state.
   * - **UnPublish**: The media file has not been published, and the playback permission on the OSS object is Private.
   * - **Published**: The media file has been published, and the playback permission on the OSS object is Default.
   * - **Deleted**: The file is deleted.
   * 
   * @example
   * Published
   */
  publishState?: string;
  /**
   * @remarks
   * The IDs of the media workflow execution instances.
   */
  runIdList?: QueryMediaListByURLResponseBodyMediaListMediaRunIdList;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 5872904
   */
  size?: string;
  /**
   * @remarks
   * The list of snapshots.
   */
  snapshotList?: QueryMediaListByURLResponseBodyMediaListMediaSnapshotList;
  /**
   * @remarks
   * The list of video summaries.
   */
  summaryList?: QueryMediaListByURLResponseBodyMediaListMediaSummaryList;
  /**
   * @remarks
   * The tags of the media file.
   */
  tags?: QueryMediaListByURLResponseBodyMediaListMediaTags;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * kled.mp4
   */
  title?: string;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 640
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      cateId: 'CateId',
      censorState: 'CensorState',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaId: 'MediaId',
      mediaInfo: 'MediaInfo',
      playList: 'PlayList',
      publishState: 'PublishState',
      runIdList: 'RunIdList',
      size: 'Size',
      snapshotList: 'SnapshotList',
      summaryList: 'SummaryList',
      tags: 'Tags',
      title: 'Title',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      cateId: 'number',
      censorState: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'string',
      file: QueryMediaListByURLResponseBodyMediaListMediaFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaId: 'string',
      mediaInfo: QueryMediaListByURLResponseBodyMediaListMediaMediaInfo,
      playList: QueryMediaListByURLResponseBodyMediaListMediaPlayList,
      publishState: 'string',
      runIdList: QueryMediaListByURLResponseBodyMediaListMediaRunIdList,
      size: 'string',
      snapshotList: QueryMediaListByURLResponseBodyMediaListMediaSnapshotList,
      summaryList: QueryMediaListByURLResponseBodyMediaListMediaSummaryList,
      tags: QueryMediaListByURLResponseBodyMediaListMediaTags,
      title: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    if(this.mediaInfo && typeof (this.mediaInfo as any).validate === 'function') {
      (this.mediaInfo as any).validate();
    }
    if(this.playList && typeof (this.playList as any).validate === 'function') {
      (this.playList as any).validate();
    }
    if(this.runIdList && typeof (this.runIdList as any).validate === 'function') {
      (this.runIdList as any).validate();
    }
    if(this.snapshotList && typeof (this.snapshotList as any).validate === 'function') {
      (this.snapshotList as any).validate();
    }
    if(this.summaryList && typeof (this.summaryList as any).validate === 'function') {
      (this.summaryList as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

