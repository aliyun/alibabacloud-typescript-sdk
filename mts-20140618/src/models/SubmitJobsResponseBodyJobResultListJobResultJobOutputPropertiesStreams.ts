// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList";
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreams extends $dara.Model {
  /**
   * @remarks
   * The audio streams.
   */
  audioStreamList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList;
  /**
   * @remarks
   * The subtitle streams.
   */
  subtitleStreamList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList;
  /**
   * @remarks
   * The video streams.
   */
  videoStreamList?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsAudioStreamList,
      subtitleStreamList: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsSubtitleStreamList,
      videoStreamList: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamList,
    };
  }

  validate() {
    if(this.audioStreamList && typeof (this.audioStreamList as any).validate === 'function') {
      (this.audioStreamList as any).validate();
    }
    if(this.subtitleStreamList && typeof (this.subtitleStreamList as any).validate === 'function') {
      (this.subtitleStreamList as any).validate();
    }
    if(this.videoStreamList && typeof (this.videoStreamList as any).validate === 'function') {
      (this.videoStreamList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

