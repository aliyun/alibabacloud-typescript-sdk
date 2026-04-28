// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoPreviewSubtitleInfo } from "./VideoPreviewSubtitleInfo";


export class VideoPreviewPlayInfoLiveTranscodingTaskList extends $dara.Model {
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
   * Template ID.
   * 
   * @example
   * 264_480p
   */
  templateId?: string;
  /**
   * @remarks
   * Playback URL.
   * 
   * @example
   * https://example.data.aliyunpds.com/lt/xxx/media.m3u8
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
      templateId: 'string',
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

export class VideoPreviewPlayInfoMeta extends $dara.Model {
  /**
   * @remarks
   * Video length.
   * 
   * @example
   * 4.2898
   */
  duration?: number;
  /**
   * @remarks
   * Height of the video
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * Width of the video.
   * 
   * @example
   * 1920
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

export class VideoPreviewPlayInfoOfflineVideoTranscodingList extends $dara.Model {
  /**
   * @remarks
   * Whether the transcoded video has the same resolution as the source video.
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
   * The task status.
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 264_1080p
   */
  templateId?: string;
  /**
   * @remarks
   * Playback URL.
   * 
   * @example
   * https://example.data.aliyunpds.com/xxx/master.mp4
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
      templateId: 'string',
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

export class VideoPreviewPlayInfoQuickVideoList extends $dara.Model {
  /**
   * @remarks
   * Valid values:
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
   * 264_480p
   */
  templateId?: string;
  /**
   * @remarks
   * Playback URL.
   * 
   * @example
   * https://example.data.aliyunpds.com/qv/xxx/media.m3u8
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      templateId: 'template_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      templateId: 'string',
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

export class VideoPreviewPlayInfo extends $dara.Model {
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
   * Live transcoding subtitle information.
   */
  liveTranscodingSubtitleTaskList?: VideoPreviewSubtitleInfo[];
  /**
   * @remarks
   * The information about video playback.
   */
  liveTranscodingTaskList?: VideoPreviewPlayInfoLiveTranscodingTaskList[];
  /**
   * @remarks
   * Playback URL of master m3u8.
   * 
   * @example
   * https://pds-xxx-valueadd.oss-xxx.aliyuncs.com/qv/xxx/master.m3u8
   */
  masterUrl?: string;
  /**
   * @remarks
   * Video meta information.
   */
  meta?: VideoPreviewPlayInfoMeta;
  /**
   * @remarks
   * Offline transcoding playback information.
   */
  offlineVideoTranscodingList?: VideoPreviewPlayInfoOfflineVideoTranscodingList[];
  /**
   * @remarks
   * Offline transcoding subtitle information.
   */
  offlineVideoTranscodingSubtitleList?: VideoPreviewSubtitleInfo[];
  /**
   * @remarks
   * The information about video playback.
   */
  quickVideoList?: VideoPreviewPlayInfoQuickVideoList[];
  /**
   * @remarks
   * Quick transcoding subtitle information.
   */
  quickVideoSubtitleList?: VideoPreviewSubtitleInfo[];
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      liveTranscodingSubtitleTaskList: 'live_transcoding_subtitle_task_list',
      liveTranscodingTaskList: 'live_transcoding_task_list',
      masterUrl: 'master_url',
      meta: 'meta',
      offlineVideoTranscodingList: 'offline_video_transcoding_list',
      offlineVideoTranscodingSubtitleList: 'offline_video_transcoding_subtitle_list',
      quickVideoList: 'quick_video_list',
      quickVideoSubtitleList: 'quick_video_subtitle_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      liveTranscodingSubtitleTaskList: { 'type': 'array', 'itemType': VideoPreviewSubtitleInfo },
      liveTranscodingTaskList: { 'type': 'array', 'itemType': VideoPreviewPlayInfoLiveTranscodingTaskList },
      masterUrl: 'string',
      meta: VideoPreviewPlayInfoMeta,
      offlineVideoTranscodingList: { 'type': 'array', 'itemType': VideoPreviewPlayInfoOfflineVideoTranscodingList },
      offlineVideoTranscodingSubtitleList: { 'type': 'array', 'itemType': VideoPreviewSubtitleInfo },
      quickVideoList: { 'type': 'array', 'itemType': VideoPreviewPlayInfoQuickVideoList },
      quickVideoSubtitleList: { 'type': 'array', 'itemType': VideoPreviewSubtitleInfo },
    };
  }

  validate() {
    if(Array.isArray(this.liveTranscodingSubtitleTaskList)) {
      $dara.Model.validateArray(this.liveTranscodingSubtitleTaskList);
    }
    if(Array.isArray(this.liveTranscodingTaskList)) {
      $dara.Model.validateArray(this.liveTranscodingTaskList);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(Array.isArray(this.offlineVideoTranscodingList)) {
      $dara.Model.validateArray(this.offlineVideoTranscodingList);
    }
    if(Array.isArray(this.offlineVideoTranscodingSubtitleList)) {
      $dara.Model.validateArray(this.offlineVideoTranscodingSubtitleList);
    }
    if(Array.isArray(this.quickVideoList)) {
      $dara.Model.validateArray(this.quickVideoList);
    }
    if(Array.isArray(this.quickVideoSubtitleList)) {
      $dara.Model.validateArray(this.quickVideoSubtitleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

