// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";
import { TargetAudio } from "./TargetAudio";
import { TargetVideo } from "./TargetVideo";


export class CreateHighlightTaskRequestEditBackgroundMusics extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  /**
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
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * directional
   */
  transition?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * open
   */
  vfxEffect?: string;
  /**
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
   * @example
   * Closed
   */
  backgroundMusicMode?: string;
  backgroundMusics?: CreateHighlightTaskRequestEditBackgroundMusics[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Sequential
   */
  mode?: string;
  /**
   * @example
   * Closed
   */
  transitionMode?: string;
  transitions?: CreateHighlightTaskRequestEditTransitions[];
  /**
   * @example
   * Closed
   */
  vfxEffectMode?: string;
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
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * hls
   */
  format?: string;
  /**
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
  audio?: TargetAudio;
  /**
   * @example
   * mp4
   */
  container?: string;
  /**
   * @example
   * 10.0
   */
  maxDuration?: number;
  segment?: CreateHighlightTaskRequestOutputSegment;
  /**
   * @example
   * 1.0
   */
  speed?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-target-object.mp4
   */
  URI?: string;
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
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @remarks
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
  credentialConfig?: CredentialConfig;
  edit?: CreateHighlightTaskRequestEdit;
  highlight?: CreateHighlightTaskRequestHighlight;
  /**
   * @example
   * Average
   */
  mode?: string;
  notification?: Notification;
  /**
   * @remarks
   * This parameter is required.
   */
  output?: CreateHighlightTaskRequestOutput;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sources?: CreateHighlightTaskRequestSources[];
  /**
   * @example
   * {"test":"val1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Retrieval
   */
  type?: string;
  /**
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

