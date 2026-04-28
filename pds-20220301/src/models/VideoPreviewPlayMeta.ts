// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoPreviewPlayMetaLiveTranscodingTaskList extends $dara.Model {
  /**
   * @remarks
   * Whether the original resolution is maintained.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  keepOriginalResolution?: boolean;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   finished: The index is complete, and the url can be obtained.
   * *   running: Indexing in progress. Wait a moment and try again.
   * *   failed: Transcoding failed. Check the media file. If you have any questions, contact customer service.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 264_720p
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMetaMeta extends $dara.Model {
  /**
   * @remarks
   * Length of the video.
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * Height of the video.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * Width of the video.
   * 
   * @example
   * 1280
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      height: 'height',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      height: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMetaOfflineVideoTranscodingList extends $dara.Model {
  /**
   * @remarks
   * Whether the original resolution is maintained.
   * 
   * @example
   * true
   */
  keepOriginalResolution?: string;
  /**
   * @remarks
   * The status. finished: The index is completed, and the url can be obtained. running: Indexing in progress. Wait a moment and try again. failed: Transcoding failed. Check the media file. If you have any questions, contact customer service.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 264_720p
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'string',
      status: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMetaQuickVideoList extends $dara.Model {
  /**
   * @remarks
   * The status. finished: The index is completed, and the url can be obtained. running: Indexing in progress. Wait a moment and try again. failed: Transcoding failed. Check the media file. If you have any questions, contact customer service.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 264_720p
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      templateId: 'template_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoPreviewPlayMeta extends $dara.Model {
  /**
   * @remarks
   * Category
   * 
   * @example
   * live_transcoding
   */
  category?: string;
  /**
   * @remarks
   * Status of the live transcoding job.
   */
  liveTranscodingTaskList?: VideoPreviewPlayMetaLiveTranscodingTaskList[];
  /**
   * @remarks
   * Video meta information.
   */
  meta?: VideoPreviewPlayMetaMeta;
  /**
   * @remarks
   * The status of the offline transcoding job.
   */
  offlineVideoTranscodingList?: VideoPreviewPlayMetaOfflineVideoTranscodingList[];
  /**
   * @remarks
   * The state of the transcoding job.
   */
  quickVideoList?: VideoPreviewPlayMetaQuickVideoList[];
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      liveTranscodingTaskList: 'live_transcoding_task_list',
      meta: 'meta',
      offlineVideoTranscodingList: 'offline_video_transcoding_list',
      quickVideoList: 'quick_video_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      liveTranscodingTaskList: { 'type': 'array', 'itemType': VideoPreviewPlayMetaLiveTranscodingTaskList },
      meta: VideoPreviewPlayMetaMeta,
      offlineVideoTranscodingList: { 'type': 'array', 'itemType': VideoPreviewPlayMetaOfflineVideoTranscodingList },
      quickVideoList: { 'type': 'array', 'itemType': VideoPreviewPlayMetaQuickVideoList },
    };
  }

  validate() {
    if(Array.isArray(this.liveTranscodingTaskList)) {
      $dara.Model.validateArray(this.liveTranscodingTaskList);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(Array.isArray(this.offlineVideoTranscodingList)) {
      $dara.Model.validateArray(this.offlineVideoTranscodingList);
    }
    if(Array.isArray(this.quickVideoList)) {
      $dara.Model.validateArray(this.quickVideoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

