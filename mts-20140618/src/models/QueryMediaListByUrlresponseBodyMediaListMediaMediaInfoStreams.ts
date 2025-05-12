// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList } from "./QueryMediaListByUrlresponseBodyMediaListMediaMediaInfoStreamsAudioStreamList";
import { QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList } from "./QueryMediaListByUrlresponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList";
import { QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList } from "./QueryMediaListByUrlresponseBodyMediaListMediaMediaInfoStreamsVideoStreamList";


export class QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreams extends $dara.Model {
  /**
   * @remarks
   * The list of audio streams.
   */
  audioStreamList?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList;
  /**
   * @remarks
   * The list of subtitle streams.
   */
  subtitleStreamList?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList;
  /**
   * @remarks
   * The list of video streams.
   */
  videoStreamList?: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList,
      subtitleStreamList: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList,
      videoStreamList: QueryMediaListByURLResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList,
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

