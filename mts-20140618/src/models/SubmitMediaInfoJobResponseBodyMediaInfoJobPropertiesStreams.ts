// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList";
import { SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList";
import { SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList";


export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreams extends $dara.Model {
  /**
   * @remarks
   * The audio streams. A media file can contain up to four audio streams.
   */
  audioStreamList?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList;
  /**
   * @remarks
   * The subtitle streams. A media file can contain up to four subtitle streams.
   */
  subtitleStreamList?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList;
  /**
   * @remarks
   * The video streams. A media file can contain up to four video streams.
   */
  videoStreamList?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList,
      subtitleStreamList: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList,
      videoStreamList: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList,
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

