// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamList } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamList";
import { QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamList } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamList";
import { QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamList } from "./QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamList";


export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreams extends $dara.Model {
  /**
   * @remarks
   * The information about each audio stream.
   */
  audioStreamList?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamList;
  /**
   * @remarks
   * The information about each subtitle stream.
   */
  subtitleStreamList?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamList;
  /**
   * @remarks
   * The information about each video stream.
   */
  videoStreamList?: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamList,
      subtitleStreamList: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsSubtitleStreamList,
      videoStreamList: QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsVideoStreamList,
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

