// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoClipsTaskInfoResponseBodyDataColorWords extends $dara.Model {
  content?: string;
  /**
   * @example
   * CS0002-000008
   */
  effectColorStyle?: string;
  /**
   * @example
   * 5
   */
  fontSize?: number;
  /**
   * @example
   * 0
   */
  timelineIn?: number;
  /**
   * @example
   * 5
   */
  timelineOut?: number;
  /**
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @example
   * 0.5
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      effectColorStyle: 'EffectColorStyle',
      fontSize: 'FontSize',
      timelineIn: 'TimelineIn',
      timelineOut: 'TimelineOut',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      effectColorStyle: 'string',
      fontSize: 'number',
      timelineIn: 'number',
      timelineOut: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoClipsTaskInfoResponseBodyDataTimelinesClips extends $dara.Model {
  /**
   * @example
   * 20774ebd9abc71ef80486632b68f0102
   */
  clipId?: string;
  contentInner?: string;
  /**
   * @example
   * 0
   */
  in?: number;
  /**
   * @example
   * 5
   */
  out?: number;
  /**
   * @example
   * 20774ebd9abc71ef80486632b68f0102
   */
  videoId?: string;
  /**
   * @example
   * 123.mp4
   */
  videoName?: string;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      contentInner: 'ContentInner',
      in: 'In',
      out: 'Out',
      videoId: 'VideoId',
      videoName: 'VideoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      contentInner: 'string',
      in: 'number',
      out: 'number',
      videoId: 'string',
      videoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoClipsTaskInfoResponseBodyDataTimelines extends $dara.Model {
  clips?: GetAutoClipsTaskInfoResponseBodyDataTimelinesClips[];
  content?: string;
  /**
   * @example
   * 20774ebd9abc71ef80486632b68f0102
   */
  timelineId?: string;
  static names(): { [key: string]: string } {
    return {
      clips: 'Clips',
      content: 'Content',
      timelineId: 'TimelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clips: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataTimelinesClips },
      content: 'string',
      timelineId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clips)) {
      $dara.Model.validateArray(this.clips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetAutoClipsTaskInfoResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetAutoClipsTaskInfoResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAutoClipsTaskInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

