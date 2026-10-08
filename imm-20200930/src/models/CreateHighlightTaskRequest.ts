// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";
import { TargetAudio } from "./TargetAudio";
import { TargetVideo } from "./TargetVideo";


export class CreateHighlightTaskRequestEditBackgroundMusics extends $dara.Model {
  /**
   * @remarks
   * The URI of the background music, which is an OSS URI. Only audio files are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object/test.mp3
   */
  URI?: string;
  /**
   * @remarks
   * The volume of the background music. Valid values: [0, 10]. Default value: 0.2. A value of 1 indicates the original volume.
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
   * The duration of the transition. Unit: seconds. If the transition duration is greater than the clip duration minus 1, the transition effect on the clip does not take effect. Valid values: [0, 5].
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
   * The weight of the transition. Valid values: [1, 100]. Default value: 50. This parameter is valid only when TransitionMode is set to Random.
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
   * The visual effect. For more information, see [Visual effects](https://www.alibabacloud.com/help/en/imm/developer-reference/effects).
   * 
   * This parameter is required.
   * 
   * @example
   * letterboxed
   */
  vfxEffect?: string;
  /**
   * @remarks
   * The weight of the visual effect. Valid values: [1, 100]. Default value: 50. This parameter is valid only when VfxEffectMode is set to Random.
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
   * The background music mode. Valid values:
   * - Random: custom background music, randomly selected based on weights
   * - Sequential: custom background music, applied in sequence
   * - Closed: no background music
   * Default value: Closed.
   * 
   * @example
   * Closed
   */
  backgroundMusicMode?: string;
  /**
   * @remarks
   * The background music. This parameter is valid only when BackgroundMusicMode is set to Random or Sequential. **The current maximum number of background music tracks is 1.**
   */
  backgroundMusics?: CreateHighlightTaskRequestEditBackgroundMusics[];
  /**
   * @remarks
   * The editing mode. Valid values:
   * - Sequential: sequential mode
   * 
   * This parameter is required.
   * 
   * @example
   * Sequential
   */
  mode?: string;
  /**
   * @remarks
   * The transition mode. Valid values:
   * - Auto: automatic transition
   * - Random: custom transition, randomly selected based on weights
   * - Sequential: custom transition, applied in sequence
   * - Closed: no transition
   * Default value: Closed.
   * 
   * @example
   * Closed
   */
  transitionMode?: string;
  /**
   * @remarks
   * The transition effects. This parameter is valid only when TransitionMode is set to Random or Sequential. You can specify up to 10 transition effects.
   */
  transitions?: CreateHighlightTaskRequestEditTransitions[];
  /**
   * @remarks
   * The visual effect mode. Valid values:
   * - Auto: automatic visual effect
   * - Random: custom visual effect, randomly selected based on weights
   * - Sequential: custom visual effect, applied in sequence
   * - Closed: no visual effect
   * Default value: Closed.
   * 
   * @example
   * Closed
   */
  vfxEffectMode?: string;
  /**
   * @remarks
   * The visual effects. This parameter is valid only when VfxEffectMode is set to Random or Sequential. You can specify up to 10 visual effects.
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
   * - Pet
   * - Person
   * - Sports
   * - Meeting
   * 
   * The value cannot exceed 100 characters in length.
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
   * The length of each segment. Unit: seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The media segmentation format. Valid values:
   * - hls
   * - dash
   * 
   * @example
   * hls
   */
  format?: string;
  /**
   * @remarks
   * The start number. This parameter is supported only for hls. Default value: 0.
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
   * The audio processing parameter settings. >Notice: If Audio is empty, the first audio stream (if any) is directly copied to the output file.</notice>
   */
  audio?: TargetAudio;
  /**
   * @remarks
   * The media container type. This parameter is required when Type is set to Concat or Compose. Valid values:
   * - Audio and video containers: mp4, mkv, mov, asf, avi, mxf, ts, and flv
   * 
   * >Notice: You must specify both Container and URI.</notice>
   * 
   * @example
   * mp4
   */
  container?: string;
  /**
   * @remarks
   * The maximum duration of the edited video. Unit: seconds.
   * 
   * @example
   * 10.0
   */
  maxDuration?: number;
  /**
   * @remarks
   * The media segmentation settings. By default, segmentation is not performed.
   */
  segment?: CreateHighlightTaskRequestOutputSegment;
  /**
   * @remarks
   * The playback speed multiplier for the media. Valid values: [0.5, 1.0]. Default value: 1.0.
   * 
   * > The ratio of the default playback speed of the transcoded media file to that of the source media file. This is not speed-adjusted transcoding.
   * 
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * The target duration of the video. Unit: seconds.
   * 
   * @example
   * 10.0
   */
  targetDuration?: number;
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
   * The video processing parameter settings. >Notice: If Video is empty, the first video stream (if any) is directly copied to the output file.</notice>
   */
  video?: TargetVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      maxDuration: 'MaxDuration',
      segment: 'Segment',
      speed: 'Speed',
      targetDuration: 'TargetDuration',
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
      targetDuration: 'number',
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
   * The duration of the media clip. Unit: seconds. Default value: 0, which indicates the end time of the video. This parameter is valid only when Type is set to Concat.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The start time of the media resource. Valid values: [0, video duration]. This parameter is valid only when Type is set to Concat. Unit: seconds.
   * 
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
   * The URI of the media resource, which is an OSS URI. Only videos are supported.
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
   * The chained authorization configuration. **Leave this parameter empty unless otherwise required.**
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
   * - Scene: scene and frame recognition
   * - Average: average clip recognition
   * Default value: Average.
   * 
   * @example
   * Average
   */
  mode?: string;
  /**
   * @remarks
   * The message notification configuration. For more information, see Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://www.alibabacloud.com/help/en/imm/developer-reference/asynchronous-notification-message-examples).
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
   * The name of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The list of media resources to be processed. You can specify up to 10 videos.
   * 
   * This parameter is required.
   */
  sources?: CreateHighlightTaskRequestSources[];
  /**
   * @remarks
   * The custom tags used to search and filter asynchronous tasks.
   * 
   * @example
   * {"test":"val1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The processing type. Valid values:
   * - Retrieval: highlight extraction
   * - Concat: video composition
   * - Compose: one-click video creation
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

