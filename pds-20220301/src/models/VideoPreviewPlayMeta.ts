// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoPreviewPlayMetaLiveTranscodingTaskList } from "./VideoPreviewPlayMetaLiveTranscodingTaskList";
import { VideoPreviewPlayMetaMeta } from "./VideoPreviewPlayMetaMeta";
import { VideoPreviewPlayMetaOfflineVideoTranscodingList } from "./VideoPreviewPlayMetaOfflineVideoTranscodingList";
import { VideoPreviewPlayMetaQuickVideoList } from "./VideoPreviewPlayMetaQuickVideoList";


export class VideoPreviewPlayMeta extends $dara.Model {
  /**
   * @example
   * live_transcoding
   */
  category?: string;
  liveTranscodingTaskList?: VideoPreviewPlayMetaLiveTranscodingTaskList[];
  meta?: VideoPreviewPlayMetaMeta;
  offlineVideoTranscodingList?: VideoPreviewPlayMetaOfflineVideoTranscodingList[];
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

