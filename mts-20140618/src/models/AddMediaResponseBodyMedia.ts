// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddMediaResponseBodyMediaFile } from "./AddMediaResponseBodyMediaFile";
import { AddMediaResponseBodyMediaRunIdList } from "./AddMediaResponseBodyMediaRunIdList";
import { AddMediaResponseBodyMediaTags } from "./AddMediaResponseBodyMediaTags";


export class AddMediaResponseBodyMedia extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 1148.77
   */
  bitrate?: string;
  /**
   * @remarks
   * The ID of the category to which the media file belongs.
   * 
   * @example
   * 1
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
   * The URL of the thumbnail.
   * 
   * @example
   * http://bucket.oss-cn-hangzhou.aliyuncs.com/example/1.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media file was created.
   * 
   * @example
   * 2016-09-20T03:02:40Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the media file. The description can be up to 1,024 bytes in length.
   * 
   * @example
   * A test video
   */
  description?: string;
  /**
   * @remarks
   * The duration of the media file.
   * 
   * @example
   * 2.645333
   */
  duration?: string;
  /**
   * @remarks
   * The information about the input file.
   */
  file?: AddMediaResponseBodyMediaFile;
  /**
   * @remarks
   * The format of the media file. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mp4
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the media file.
   * 
   * @example
   * 25.0
   */
  fps?: string;
  /**
   * @remarks
   * The height of the media file.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The ID of the media file.
   * 
   * @example
   * 3e6149d5a8c944c09b1a8d2dc3e4****
   */
  mediaId?: string;
  /**
   * @remarks
   * The publishing status of the media file. Valid values:
   * 
   * *   **Initiated**: The media file is in the initial state.
   * *   **UnPublish**: The media file has not been published, and the playback permission on the OSS object is Private.
   * *   **Published**: The media file has been published, and the playback permission on the OSS object is Default.
   * 
   * @example
   * Published
   */
  publishState?: string;
  /**
   * @remarks
   * The IDs of the media workflow execution instances.
   */
  runIdList?: AddMediaResponseBodyMediaRunIdList;
  /**
   * @remarks
   * The size of the media file.
   * 
   * @example
   * 379860
   */
  size?: string;
  /**
   * @remarks
   * The tags of the media file.
   */
  tags?: AddMediaResponseBodyMediaTags;
  /**
   * @remarks
   * The title of the media file. The title can be up to 128 bytes in length.
   * 
   * @example
   * mytest.mp4
   */
  title?: string;
  /**
   * @remarks
   * The width of the media file.
   * 
   * @example
   * 1280
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
      publishState: 'PublishState',
      runIdList: 'RunIdList',
      size: 'Size',
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
      file: AddMediaResponseBodyMediaFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaId: 'string',
      publishState: 'string',
      runIdList: AddMediaResponseBodyMediaRunIdList,
      size: 'string',
      tags: AddMediaResponseBodyMediaTags,
      title: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    if(this.runIdList && typeof (this.runIdList as any).validate === 'function') {
      (this.runIdList as any).validate();
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

