// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";
import { TargetAudio } from "./TargetAudio";
import { TargetVideo } from "./TargetVideo";


export class CreateHighlightTaskRequestEditBackgroundMusics extends $dara.Model {
  /**
   * @remarks
   * The URI of the background music (OSS URI). Only audio files are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object/test.mp3
   */
  URI?: string;
  /**
   * @remarks
   * The volume intensity of the background music. Valid values: [0, 10]. Default value: 0.2. A value of 1 indicates the original volume.
   * 
   * @example
   * 0.2
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighlightTaskRequestEditTransitions extends $dara.Model {
  /**
   * @remarks
   * The transition duration. Unit: seconds. If the transition duration is greater than the clip duration minus 1, the transition effect on that clip does not take effect.
   * Valid values: [0, 5].
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The transition effect. For more information, see [Transition effects](https://www.alibabacloud.com/help/en/imm/developer-reference/transition-effect).
   * 
   * This parameter is required.
   * 
   * @example
   * fade
   */
  transition?: string;
  /**
   * @remarks
   * The transition weight. Valid values: [1, 100]. Default value: 50.
   * This parameter takes effect when TransitionMode is set to Random.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      transition: 'Transition',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      transition: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighlightTaskRequestEditVfxEffects extends $dara.Model {
  /**
   * @remarks
   * The visual effect. For more information, see [Effects](https://www.alibabacloud.com/help/en/imm/developer-reference/effects).
   * 
   * This parameter is required.
   * 
   * @example
   * letterboxed
   */
  vfxEffect?: string;
  /**
   * @remarks
   * The effect weight. Valid values: [1, 100]. Default value: 50.
   * This parameter takes effect when VfxEffectMode is set to Random.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      vfxEffect: 'VfxEffect',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vfxEffect: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighlightTaskRequestEdit extends $dara.Model {
  /**
   * @remarks
   * The background music mode. Default value: Closed. Valid values:
   * 
   * - Random: custom background music, randomly selected based on weight.
   * 
   * - Sequential: custom background music, applied in order.
   * 
   * - Closed: no background music.
   * 
   * @example
   * Closed
   */
  backgroundMusicMode?: string;
  /**
   * @remarks
   * The background music tracks. This parameter takes effect when BackgroundMusicMode is set to Random or Sequential.
   * **The maximum number is 1.**.
   */
  backgroundMusics?: CreateHighlightTaskRequestEditBackgroundMusics[];
  /**
   * @remarks
   * The editing mode. Valid values:
   * 
   * - Sequential: sequential mode.
   * 
   * This parameter is required.
   * 
   * @example
   * Sequential
   */
  mode?: string;
  /**
   * @remarks
   * The transition mode. Default value: Closed. Valid values:
   * 
   * - Auto: automatic transition.
   * 
   * - Random: custom transition, randomly selected based on weight.
   * 
   * - Sequential: custom transition, applied in order.
   * 
   * - Closed: no transition.
   * 
   * @example
   * Closed
   */
  transitionMode?: string;
  /**
   * @remarks
   * The transition effects.
   * This parameter takes effect when TransitionMode is set to Random or Sequential.
   * A maximum of 10 transitions are supported.
   */
  transitions?: CreateHighlightTaskRequestEditTransitions[];
  /**
   * @remarks
   * The effect mode. Default value: Closed. Valid values:
   * 
   * - Auto: automatic effect.
   * 
   * - Random: custom effect, randomly selected based on weight.
   * 
   * - Sequential: custom effect, applied in order.
   * 
   * - Closed: no effect.
   * 
   * @example
   * Closed
   */
  vfxEffectMode?: string;
  /**
   * @remarks
   * The visual effects. This parameter takes effect when VfxEffectMode is set to Random or Sequential.
   * A maximum of 10 effects are supported.
   */
  vfxEffects?: CreateHighlightTaskRequestEditVfxEffects[];
  static names(): { [key: string]: string } {
    return {
      backgroundMusicMode: 'BackgroundMusicMode',
      backgroundMusics: 'BackgroundMusics',
      mode: 'Mode',
      transitionMode: 'TransitionMode',
      transitions: 'Transitions',
      vfxEffectMode: 'VfxEffectMode',
      vfxEffects: 'VfxEffects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundMusicMode: 'string',
      backgroundMusics: { 'type': 'array', 'itemType': CreateHighlightTaskRequestEditBackgroundMusics },
      mode: 'string',
      transitionMode: 'string',
      transitions: { 'type': 'array', 'itemType': CreateHighlightTaskRequestEditTransitions },
      vfxEffectMode: 'string',
      vfxEffects: { 'type': 'array', 'itemType': CreateHighlightTaskRequestEditVfxEffects },
    };
  }

  validate() {
    if(Array.isArray(this.backgroundMusics)) {
      $dara.Model.validateArray(this.backgroundMusics);
    }
    if(Array.isArray(this.transitions)) {
      $dara.Model.validateArray(this.transitions);
    }
    if(Array.isArray(this.vfxEffects)) {
      $dara.Model.validateArray(this.vfxEffects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighlightTaskRequestHighlight extends $dara.Model {
  /**
   * @remarks
   * The highlight content. Valid values:
   * 
   * - Pets
   * 
   * - People
   * 
   * - Sports
   * 
   * - Meetings
   * 
   * The value cannot exceed 100 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * character
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighlightTaskRequestOutputSegment extends $dara.Model {
  /**
   * @remarks
   * The segment duration. Unit: seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The media segmentation format. Valid values:
   * 
   * - hls
   * 
   * - dash.
   * 
   * @example
   * hls
   */
  format?: string;
  /**
   * @remarks
   * The start number. Only hls is supported. Default value: 0.
   * 
   * @example
   * 0
   */
  startNumber?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      format: 'Format',
      startNumber: 'StartNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      format: 'string',
      startNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighlightTaskRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The audio processing parameter settings.
   * >Notice: If Audio is empty, the first audio stream (if any) is directly copied to the output file.
   */
  audio?: TargetAudio;
  /**
   * @remarks
   * The media container type. This parameter is required when Type is set to Concat or Compose. Valid values:
   * 
   * - Audio and video containers: mp4, mkv, mov, asf, avi, mxf, ts, flv
   * 
   * >Notice: Container and URI must be specified together..
   * 
   * @example
   * mp4
   */
  container?: string;
  /**
   * @remarks
   * The maximum duration of the clipped video. Unit: seconds.
   * 
   * @example
   * 10.0
   */
  maxDuration?: number;
  /**
   * @remarks
   * The media segmentation settings. By default, no segmentation is performed.
   */
  segment?: CreateHighlightTaskRequestOutputSegment;
  /**
   * @remarks
   * The playback speed of the media. Valid values: [0.5, 1.0]. Default value: 1.0.
   * 
   * > This value is the ratio of the default playback speed of the transcoded media file to that of the source media file. This is not speed-adjusted transcoding.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * The URI of the output file.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-target-object.mp4
   */
  URI?: string;
  /**
   * @remarks
   * The video processing parameter settings.
   * >Notice: If Video is empty, the first video stream (if any) is directly copied to the output file.
   */
  video?: TargetVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      maxDuration: 'MaxDuration',
      segment: 'Segment',
      speed: 'Speed',
      URI: 'URI',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: TargetAudio,
      container: 'string',
      maxDuration: 'number',
      segment: CreateHighlightTaskRequestOutputSegment,
      speed: 'number',
      URI: 'string',
      video: TargetVideo,
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighlightTaskRequestSources extends $dara.Model {
  /**
   * @remarks
   * The duration of the media clip. Unit: seconds. Default value: 0, which indicates the end of the video.
   * This parameter takes effect only when Type is set to Concat.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The start time of the media resource. Valid values: [0, video duration].
   * This parameter takes effect only when Type is set to Concat.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The URI of the media resource (OSS URI). Only videos are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      startTime: 'StartTime',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      startTime: 'number',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHighlightTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The China authorization configuration. **Leave this parameter empty unless you have specific requirements.**.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The editing configuration.
   */
  edit?: CreateHighlightTaskRequestEdit;
  /**
   * @remarks
   * The highlight configuration.
   */
  highlight?: CreateHighlightTaskRequestHighlight;
  /**
   * @remarks
   * The highlight recognition mode. Valid values:
   * 
   * - Scene: scene and frame recognition.
   * 
   * - Average (default): average slice recognition.
   * 
   * @example
   * Average
   */
  mode?: string;
  /**
   * @remarks
   * The message notification configuration. For more information, click Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://www.alibabacloud.com/help/en/imm/developer-reference/asynchronous-notification-message-examples).
   */
  notification?: Notification;
  /**
   * @remarks
   * The output configuration.
   * 
   * This parameter is required.
   */
  output?: CreateHighlightTaskRequestOutput;
  /**
   * @remarks
   * The project name.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The list of media resources to process.
   * A maximum of 10 videos are supported.
   * 
   * This parameter is required.
   */
  sources?: CreateHighlightTaskRequestSources[];
  /**
   * @remarks
   * The custom tags used to search for and filter asynchronous tasks.
   * 
   * @example
   * {"test":"val1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The processing type. Valid values:
   * 
   * - Retrieval: highlight extraction.
   * 
   * - Concat: video composition.
   * 
   * - Compose: one-click video creation.
   * 
   * This parameter is required.
   * 
   * @example
   * Retrieval
   */
  type?: string;
  /**
   * @remarks
   * The custom user data, which is returned in asynchronous message notifications.
   * 
   * @example
   * {"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      edit: 'Edit',
      highlight: 'Highlight',
      mode: 'Mode',
      notification: 'Notification',
      output: 'Output',
      projectName: 'ProjectName',
      sources: 'Sources',
      tags: 'Tags',
      type: 'Type',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      edit: CreateHighlightTaskRequestEdit,
      highlight: CreateHighlightTaskRequestHighlight,
      mode: 'string',
      notification: Notification,
      output: CreateHighlightTaskRequestOutput,
      projectName: 'string',
      sources: { 'type': 'array', 'itemType': CreateHighlightTaskRequestSources },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(this.edit && typeof (this.edit as any).validate === 'function') {
      (this.edit as any).validate();
    }
    if(this.highlight && typeof (this.highlight as any).validate === 'function') {
      (this.highlight as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

