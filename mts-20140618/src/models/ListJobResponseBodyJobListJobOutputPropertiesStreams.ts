// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList } from "./ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList";
import { ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList } from "./ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList";
import { ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList } from "./ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList";


export class ListJobResponseBodyJobListJobOutputPropertiesStreams extends $dara.Model {
  /**
   * @remarks
   * The audio streams.
   */
  audioStreamList?: ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList;
  /**
   * @remarks
   * The subtitle streams.
   */
  subtitleStreamList?: ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList;
  /**
   * @remarks
   * The video streams.
   */
  videoStreamList?: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: ListJobResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList,
      subtitleStreamList: ListJobResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList,
      videoStreamList: ListJobResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList,
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

