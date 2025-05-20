// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoPreviewSubtitleInfo } from "./VideoPreviewSubtitleInfo";
import { VideoPreviewPlayInfoLiveTranscodingTaskList } from "./VideoPreviewPlayInfoLiveTranscodingTaskList";
import { VideoPreviewPlayInfoMeta } from "./VideoPreviewPlayInfoMeta";
import { VideoPreviewPlayInfoOfflineVideoTranscodingList } from "./VideoPreviewPlayInfoOfflineVideoTranscodingList";
import { VideoPreviewPlayInfoQuickVideoList } from "./VideoPreviewPlayInfoQuickVideoList";


export class VideoPreviewPlayInfo extends $dara.Model {
  /**
   * @example
   * live_transcoding
   */
  category?: string;
  liveTranscodingSubtitleTaskList?: VideoPreviewSubtitleInfo[];
  liveTranscodingTaskList?: VideoPreviewPlayInfoLiveTranscodingTaskList[];
  masterUrl?: string;
  meta?: VideoPreviewPlayInfoMeta;
  offlineVideoTranscodingList?: VideoPreviewPlayInfoOfflineVideoTranscodingList[];
  offlineVideoTranscodingSubtitleList?: VideoPreviewSubtitleInfo[];
  quickVideoList?: VideoPreviewPlayInfoQuickVideoList[];
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

