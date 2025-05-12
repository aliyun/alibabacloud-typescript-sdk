// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList } from "./QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList";
import { QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList } from "./QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList";
import { QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList } from "./QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList";


export class QueryJobListResponseBodyJobListJobOutputPropertiesStreams extends $dara.Model {
  /**
   * @remarks
   * The audio streams.
   */
  audioStreamList?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList;
  /**
   * @remarks
   * The caption streams.
   */
  subtitleStreamList?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList;
  /**
   * @remarks
   * The video streams.
   */
  videoStreamList?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamList,
      subtitleStreamList: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsSubtitleStreamList,
      videoStreamList: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamList,
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

