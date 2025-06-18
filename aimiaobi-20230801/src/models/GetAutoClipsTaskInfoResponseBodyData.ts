// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoClipsTaskInfoResponseBodyDataColorWords } from "./GetAutoClipsTaskInfoResponseBodyDataColorWords";
import { GetAutoClipsTaskInfoResponseBodyDataTimelines } from "./GetAutoClipsTaskInfoResponseBodyDataTimelines";


export class GetAutoClipsTaskInfoResponseBodyData extends $dara.Model {
  colorWords?: GetAutoClipsTaskInfoResponseBodyDataColorWords[];
  content?: string;
  mediaCloudTimeline?: string;
  musicStyle?: string;
  /**
   * @example
   * http://music.mp4
   */
  musicUrl?: string;
  /**
   * @example
   * 5
   */
  musicVolume?: number;
  /**
   * @example
   * http://output.mp4
   */
  outputVideoUrl?: string;
  status?: number;
  /**
   * @example
   * clips
   */
  step?: string;
  /**
   * @example
   * 5
   */
  subtitleFontSize?: number;
  /**
   * @example
   * e5a1a59c82d0454fad6454e8a04d0093
   */
  taskId?: string;
  timelines?: GetAutoClipsTaskInfoResponseBodyDataTimelines[];
  voiceStyle?: string;
  /**
   * @example
   * 5
   */
  voiceVolume?: number;
  static names(): { [key: string]: string } {
    return {
      colorWords: 'ColorWords',
      content: 'Content',
      mediaCloudTimeline: 'MediaCloudTimeline',
      musicStyle: 'MusicStyle',
      musicUrl: 'MusicUrl',
      musicVolume: 'MusicVolume',
      outputVideoUrl: 'OutputVideoUrl',
      status: 'Status',
      step: 'Step',
      subtitleFontSize: 'SubtitleFontSize',
      taskId: 'TaskId',
      timelines: 'Timelines',
      voiceStyle: 'VoiceStyle',
      voiceVolume: 'VoiceVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colorWords: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataColorWords },
      content: 'string',
      mediaCloudTimeline: 'string',
      musicStyle: 'string',
      musicUrl: 'string',
      musicVolume: 'number',
      outputVideoUrl: 'string',
      status: 'number',
      step: 'string',
      subtitleFontSize: 'number',
      taskId: 'string',
      timelines: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataTimelines },
      voiceStyle: 'string',
      voiceVolume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.colorWords)) {
      $dara.Model.validateArray(this.colorWords);
    }
    if(Array.isArray(this.timelines)) {
      $dara.Model.validateArray(this.timelines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

