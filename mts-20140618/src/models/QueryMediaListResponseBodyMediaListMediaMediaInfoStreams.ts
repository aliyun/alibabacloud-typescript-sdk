// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList } from "./QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList";
import { QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList } from "./QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList";
import { QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList } from "./QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList";


export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreams extends $dara.Model {
  /**
   * @remarks
   * The list of audio streams.
   */
  audioStreamList?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList;
  /**
   * @remarks
   * The list of subtitle streams.
   */
  subtitleStreamList?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList;
  /**
   * @remarks
   * The list of video streams.
   */
  videoStreamList?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList,
      subtitleStreamList: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList,
      videoStreamList: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList,
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

