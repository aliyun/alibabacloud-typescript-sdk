// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoClipsTaskInfoResponseBodyDataAnalysisResultsLensInfosEndTime extends $dara.Model {
  /**
   * @remarks
   * Hour.
   * 
   * @example
   * 2
   */
  hour?: number;
  /**
   * @remarks
   * Millisecond.
   * 
   * @example
   * 100
   */
  millSecond?: number;
  /**
   * @remarks
   * Minute.
   * 
   * @example
   * 1
   */
  minute?: number;
  /**
   * @remarks
   * Second.
   * 
   * @example
   * 30
   */
  second?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'Hour',
      millSecond: 'MillSecond',
      minute: 'Minute',
      second: 'Second',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      millSecond: 'number',
      minute: 'number',
      second: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoClipsTaskInfoResponseBodyDataAnalysisResultsLensInfosStartTime extends $dara.Model {
  /**
   * @remarks
   * Hour.
   * 
   * @example
   * 2
   */
  hour?: number;
  /**
   * @remarks
   * Millisecond.
   * 
   * @example
   * 100
   */
  millSecond?: number;
  /**
   * @remarks
   * Minute.
   * 
   * @example
   * 1
   */
  minute?: number;
  /**
   * @remarks
   * Second.
   * 
   * @example
   * 30
   */
  second?: number;
  static names(): { [key: string]: string } {
    return {
      hour: 'Hour',
      millSecond: 'MillSecond',
      minute: 'Minute',
      second: 'Second',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hour: 'number',
      millSecond: 'number',
      minute: 'number',
      second: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoClipsTaskInfoResponseBodyDataAnalysisResultsLensInfos extends $dara.Model {
  /**
   * @remarks
   * Content analysis
   * 
   * @example
   * 视频理解内容
   */
  analysisContent?: string;
  /**
   * @remarks
   * End time.
   */
  endTime?: GetAutoClipsTaskInfoResponseBodyDataAnalysisResultsLensInfosEndTime;
  /**
   * @remarks
   * Start time.
   */
  startTime?: GetAutoClipsTaskInfoResponseBodyDataAnalysisResultsLensInfosStartTime;
  static names(): { [key: string]: string } {
    return {
      analysisContent: 'AnalysisContent',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisContent: 'string',
      endTime: GetAutoClipsTaskInfoResponseBodyDataAnalysisResultsLensInfosEndTime,
      startTime: GetAutoClipsTaskInfoResponseBodyDataAnalysisResultsLensInfosStartTime,
    };
  }

  validate() {
    if(this.endTime && typeof (this.endTime as any).validate === 'function') {
      (this.endTime as any).validate();
    }
    if(this.startTime && typeof (this.startTime as any).validate === 'function') {
      (this.startTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoClipsTaskInfoResponseBodyDataAnalysisResults extends $dara.Model {
  /**
   * @remarks
   * List of shot information.
   */
  lensInfos?: GetAutoClipsTaskInfoResponseBodyDataAnalysisResultsLensInfos[];
  /**
   * @remarks
   * Video ID.
   * 
   * @example
   * 975e1d91a8d057e132cc5d88e4d5b360
   */
  mediaId?: string;
  /**
   * @remarks
   * Video name.
   * 
   * @example
   * video001.mp4
   */
  mediaName?: string;
  /**
   * @remarks
   * Video URL.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  mediaUrl?: string;
  static names(): { [key: string]: string } {
    return {
      lensInfos: 'LensInfos',
      mediaId: 'MediaId',
      mediaName: 'MediaName',
      mediaUrl: 'MediaUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lensInfos: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataAnalysisResultsLensInfos },
      mediaId: 'string',
      mediaName: 'string',
      mediaUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lensInfos)) {
      $dara.Model.validateArray(this.lensInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoClipsTaskInfoResponseBodyDataColorWords extends $dara.Model {
  /**
   * @remarks
   * Text content.
   * 
   * @example
   * 花字内容
   */
  content?: string;
  /**
   * @remarks
   * Visual effect of the decorative text.
   * 
   * @example
   * CS0002-000008
   */
  effectColorStyle?: string;
  /**
   * @remarks
   * Font size of the decorative text.
   * 
   * @example
   * 5
   */
  fontSize?: number;
  /**
   * @remarks
   * Start time of the decorative text in seconds.
   * 
   * @example
   * 0
   */
  timelineIn?: number;
  /**
   * @remarks
   * End time of the decorative text in seconds.
   * 
   * @example
   * 5
   */
  timelineOut?: number;
  /**
   * @remarks
   * X-coordinate of the decorative text.
   * 
   * @example
   * 0.2
   */
  x?: number;
  /**
   * @remarks
   * Y-coordinate of the decorative text.
   * 
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

export class GetAutoClipsTaskInfoResponseBodyDataReferenceVideo extends $dara.Model {
  /**
   * @remarks
   * Video ID.
   * 
   * @example
   * 90ca686b11c371f08339752281ed0102
   */
  videoId?: string;
  /**
   * @remarks
   * Video name.
   * 
   * @example
   * video001.mp4
   */
  videoName?: string;
  /**
   * @remarks
   * Video URL.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      videoName: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoClipsTaskInfoResponseBodyDataSourceVideos extends $dara.Model {
  /**
   * @remarks
   * Video ID.
   * 
   * @example
   * fdaswe
   */
  videoId?: string;
  /**
   * @remarks
   * Video name.
   * 
   * @example
   * video001.mp4
   */
  videoName?: string;
  /**
   * @remarks
   * Video URL.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      videoId: 'VideoId',
      videoName: 'VideoName',
      videoUrl: 'VideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoId: 'string',
      videoName: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoClipsTaskInfoResponseBodyDataStickers extends $dara.Model {
  /**
   * @remarks
   * Duration of the sticker display.
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * Height of the sticker
   * 
   * @example
   * 8
   */
  dyncFrames?: number;
  /**
   * @remarks
   * Height of the sticker.
   * 
   * @example
   * 200
   */
  height?: number;
  /**
   * @remarks
   * Start time of the sticker in seconds.
   * 
   * @example
   * 10
   */
  timelineIn?: number;
  /**
   * @remarks
   * URL of the sticker GIF file.
   * 
   * @example
   * http://xxx/xxx.gif
   */
  url?: string;
  /**
   * @remarks
   * Width of the sticker.
   * 
   * @example
   * 200
   */
  width?: number;
  /**
   * @remarks
   * X-coordinate of the sticker position.
   * 
   * @example
   * 100
   */
  x?: number;
  /**
   * @remarks
   * Y-coordinate of the sticker position.
   * 
   * @example
   * 100
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      dyncFrames: 'DyncFrames',
      height: 'Height',
      timelineIn: 'TimelineIn',
      url: 'Url',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      dyncFrames: 'number',
      height: 'number',
      timelineIn: 'number',
      url: 'string',
      width: 'number',
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
   * @remarks
   * ID of the clip.
   * 
   * @example
   * 20774ebd9abc71ef80486632b68f0102
   */
  clipId?: string;
  /**
   * @remarks
   * Segmented voiceover script.
   * 
   * @example
   * 口播分段内容
   */
  contentInner?: string;
  /**
   * @remarks
   * Start time of the clip in seconds. This field is deprecated.
   * 
   * @example
   * 0
   */
  in?: number;
  /**
   * @remarks
   * Start time of the clip in milliseconds.
   * 
   * @example
   * 0.33
   */
  inEx?: number;
  /**
   * @remarks
   * End time of the clip in seconds. This field is deprecated.
   * 
   * @example
   * 5
   */
  out?: number;
  /**
   * @remarks
   * End time of the clip in milliseconds.
   * 
   * @example
   * 3.45
   */
  outEx?: number;
  /**
   * @remarks
   * ID of the video.
   * 
   * @example
   * 20774ebd9abc71ef80486632b68f0102
   */
  videoId?: string;
  /**
   * @remarks
   * Name of the video.
   * 
   * @example
   * 123.mp4
   */
  videoName?: string;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      contentInner: 'ContentInner',
      in: 'In',
      inEx: 'InEx',
      out: 'Out',
      outEx: 'OutEx',
      videoId: 'VideoId',
      videoName: 'VideoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      contentInner: 'string',
      in: 'number',
      inEx: 'number',
      out: 'number',
      outEx: 'number',
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
  /**
   * @remarks
   * Array of video clips.
   */
  clips?: GetAutoClipsTaskInfoResponseBodyDataTimelinesClips[];
  /**
   * @remarks
   * Voiceover script.
   * 
   * @example
   * 口播内容
   */
  content?: string;
  /**
   * @remarks
   * ID of the timeline.
   * 
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
  /**
   * @remarks
   * List of video understanding results.
   */
  analysisResults?: GetAutoClipsTaskInfoResponseBodyDataAnalysisResults[];
  /**
   * @remarks
   * Disable background music.
   */
  closeMusic?: boolean;
  /**
   * @remarks
   * Disable subtitles.
   */
  closeSubtitle?: boolean;
  /**
   * @remarks
   * Disable voiceover.
   */
  closeVoice?: boolean;
  /**
   * @remarks
   * URL of the closing credits video.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  closingCreditsUrl?: string;
  /**
   * @remarks
   * Array of decorative text elements.
   */
  colorWords?: GetAutoClipsTaskInfoResponseBodyDataColorWords[];
  /**
   * @remarks
   * Full voiceover script.
   * 
   * @example
   * 口播内容
   */
  content?: string;
  /**
   * @remarks
   * Voice style for CosyVoice.
   * 
   * @example
   * longxian_normal
   */
  customVoiceStyle?: string;
  /**
   * @remarks
   * URL of the custom audio track file.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  customVoiceUrl?: string;
  /**
   * @remarks
   * Volume of the custom audio track.
   * 
   * @example
   * 0
   */
  customVoiceVolume?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * ApsaraVideo timeline.
   * 
   * @example
   * 视频云格式timeline
   */
  mediaCloudTimeline?: string;
  /**
   * @remarks
   * Recommended music style.
   * 
   * @example
   * 国风
   */
  musicStyle?: string;
  /**
   * @remarks
   * URL of the background music.
   * 
   * @example
   * http://music.mp4
   */
  musicUrl?: string;
  /**
   * @remarks
   * Volume of the background music.
   * 
   * @example
   * 5
   */
  musicVolume?: number;
  /**
   * @remarks
   * URL of the opening credits video.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  openingCreditsUrl?: string;
  /**
   * @remarks
   * File key of the output video.
   * 
   * @example
   * oss://xxx/xxx.mp4
   */
  outputVideoFileKey?: string;
  /**
   * @remarks
   * URL of the final video.
   * 
   * @example
   * http://output.mp4
   */
  outputVideoUrl?: string;
  /**
   * @remarks
   * Reference video information.
   */
  referenceVideo?: GetAutoClipsTaskInfoResponseBodyDataReferenceVideo;
  /**
   * @remarks
   * List of video sources used for editing.
   */
  sourceVideos?: GetAutoClipsTaskInfoResponseBodyDataSourceVideos[];
  /**
   * @remarks
   * Status
   * 
   * @example
   * 0-待执行、1-执行中、2-执行成功、3-暂停、4-执行失败-可重试、5-执行失败-不可重试,6-任务取消
   */
  status?: number;
  /**
   * @remarks
   * Current step.
   * 
   * @example
   * clips
   */
  step?: string;
  /**
   * @remarks
   * Array of stickers.
   */
  stickers?: GetAutoClipsTaskInfoResponseBodyDataStickers[];
  /**
   * @remarks
   * Font size of subtitles.
   * 
   * @example
   * 5
   */
  subtitleFontSize?: number;
  /**
   * @remarks
   * Unique ID of the task.
   * 
   * @example
   * e5a1a59c82d0454fad6454e8a04d0093
   */
  taskId?: string;
  /**
   * @remarks
   * Array of voiceover timelines.
   */
  timelines?: GetAutoClipsTaskInfoResponseBodyDataTimelines[];
  /**
   * @remarks
   * Voice style for voiceover.
   * 
   * @example
   * 温柔女声
   */
  voiceStyle?: string;
  /**
   * @remarks
   * Volume of the voiceover.
   * 
   * @example
   * 5
   */
  voiceVolume?: number;
  static names(): { [key: string]: string } {
    return {
      analysisResults: 'AnalysisResults',
      closeMusic: 'CloseMusic',
      closeSubtitle: 'CloseSubtitle',
      closeVoice: 'CloseVoice',
      closingCreditsUrl: 'ClosingCreditsUrl',
      colorWords: 'ColorWords',
      content: 'Content',
      customVoiceStyle: 'CustomVoiceStyle',
      customVoiceUrl: 'CustomVoiceUrl',
      customVoiceVolume: 'CustomVoiceVolume',
      errorMessage: 'ErrorMessage',
      mediaCloudTimeline: 'MediaCloudTimeline',
      musicStyle: 'MusicStyle',
      musicUrl: 'MusicUrl',
      musicVolume: 'MusicVolume',
      openingCreditsUrl: 'OpeningCreditsUrl',
      outputVideoFileKey: 'OutputVideoFileKey',
      outputVideoUrl: 'OutputVideoUrl',
      referenceVideo: 'ReferenceVideo',
      sourceVideos: 'SourceVideos',
      status: 'Status',
      step: 'Step',
      stickers: 'Stickers',
      subtitleFontSize: 'SubtitleFontSize',
      taskId: 'TaskId',
      timelines: 'Timelines',
      voiceStyle: 'VoiceStyle',
      voiceVolume: 'VoiceVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisResults: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataAnalysisResults },
      closeMusic: 'boolean',
      closeSubtitle: 'boolean',
      closeVoice: 'boolean',
      closingCreditsUrl: 'string',
      colorWords: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataColorWords },
      content: 'string',
      customVoiceStyle: 'string',
      customVoiceUrl: 'string',
      customVoiceVolume: 'number',
      errorMessage: 'string',
      mediaCloudTimeline: 'string',
      musicStyle: 'string',
      musicUrl: 'string',
      musicVolume: 'number',
      openingCreditsUrl: 'string',
      outputVideoFileKey: 'string',
      outputVideoUrl: 'string',
      referenceVideo: GetAutoClipsTaskInfoResponseBodyDataReferenceVideo,
      sourceVideos: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataSourceVideos },
      status: 'number',
      step: 'string',
      stickers: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataStickers },
      subtitleFontSize: 'number',
      taskId: 'string',
      timelines: { 'type': 'array', 'itemType': GetAutoClipsTaskInfoResponseBodyDataTimelines },
      voiceStyle: 'string',
      voiceVolume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.analysisResults)) {
      $dara.Model.validateArray(this.analysisResults);
    }
    if(Array.isArray(this.colorWords)) {
      $dara.Model.validateArray(this.colorWords);
    }
    if(this.referenceVideo && typeof (this.referenceVideo as any).validate === 'function') {
      (this.referenceVideo as any).validate();
    }
    if(Array.isArray(this.sourceVideos)) {
      $dara.Model.validateArray(this.sourceVideos);
    }
    if(Array.isArray(this.stickers)) {
      $dara.Model.validateArray(this.stickers);
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
   * @remarks
   * Status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * Business data.
   */
  data?: GetAutoClipsTaskInfoResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded. A value of true indicates success. A value of false indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAutoClipsTaskInfoResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

