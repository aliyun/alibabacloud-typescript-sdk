// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaResponseBodyMediaFile extends $dara.Model {
  /**
   * @remarks
   * The state of the input file. Valid values:
   * 
   * *   **Normal**: The input file is normal.
   * *   **Deleted**: The input file is deleted.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The name of the OSS bucket in which the input media file is stored.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaResponseBodyMediaRunIdList extends $dara.Model {
  runId?: string[];
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.runId)) {
      $dara.Model.validateArray(this.runId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaResponseBodyMediaTags extends $dara.Model {
  tag?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMediaResponseBodyMedia extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the media file.
   * 
   * @example
   * 2659.326
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
   * The review state of the media file. Valid values:
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
   * http://example-bucket-****.oss-cn-shanghai.aliyuncs.com/example-****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media file was created.
   * 
   * @example
   * 2016-09-14T08:30:33Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the media file.
   * 
   * @example
   * example description
   */
  description?: string;
  /**
   * @remarks
   * The duration of the media file.
   * 
   * @example
   * 7.965000
   */
  duration?: string;
  /**
   * @remarks
   * The information about the input file.
   */
  file?: UpdateMediaResponseBodyMediaFile;
  /**
   * @remarks
   * The format of the media file. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mov
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
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The ID of the media file.
   * 
   * @example
   * 3e1cd21131a94525be55acf65888****
   */
  mediaId?: string;
  /**
   * @remarks
   * The publishing state of the media file. Valid values:
   * 
   * *   **Initiated**: The media file is in the initial state.
   * *   **UnPublish**: The media file has not been published, and the playback permission on the OSS object is Private.
   * *   **Published**: The media file has been published, and the playback permission on the OSS object is Default.
   * *   **Deleted**: The media file is deleted.
   * 
   * @example
   * Published
   */
  publishState?: string;
  /**
   * @remarks
   * The IDs of the media workflow execution instances.
   */
  runIdList?: UpdateMediaResponseBodyMediaRunIdList;
  /**
   * @remarks
   * The size of the media file.
   * 
   * @example
   * 2647692
   */
  size?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: UpdateMediaResponseBodyMediaTags;
  /**
   * @remarks
   * The title of the media file.
   * 
   * @example
   * hello
   */
  title?: string;
  /**
   * @remarks
   * The width of the media file.
   * 
   * @example
   * 1920
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
      file: UpdateMediaResponseBodyMediaFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaId: 'string',
      publishState: 'string',
      runIdList: UpdateMediaResponseBodyMediaRunIdList,
      size: 'string',
      tags: UpdateMediaResponseBodyMediaTags,
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

export class UpdateMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the media file.
   */
  media?: UpdateMediaResponseBodyMedia;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6A88246F-C91F-42BD-BABE-DB0DF993F960
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: UpdateMediaResponseBodyMedia,
      requestId: 'string',
    };
  }

  validate() {
    if(this.media && typeof (this.media as any).validate === 'function') {
      (this.media as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

