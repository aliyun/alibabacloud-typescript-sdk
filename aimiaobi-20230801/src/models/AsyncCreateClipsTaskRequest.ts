// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncCreateClipsTaskRequestColorWords extends $dara.Model {
  content?: string;
  effectColorStyle?: string;
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

export class AsyncCreateClipsTaskRequestStickers extends $dara.Model {
  /**
   * @example
   * 10
   */
  duration?: number;
  /**
   * @example
   * 8
   */
  dyncFrames?: number;
  /**
   * @example
   * 100
   */
  height?: number;
  /**
   * @example
   * 5
   */
  timelineIn?: number;
  /**
   * @example
   * http://xxx/xxx.gif
   */
  url?: string;
  /**
   * @example
   * 100
   */
  width?: number;
  /**
   * @example
   * 200
   */
  x?: number;
  /**
   * @example
   * 200
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

export class AsyncCreateClipsTaskRequest extends $dara.Model {
  closeMusic?: boolean;
  closeSubtitle?: boolean;
  closeVoice?: boolean;
  colorWords?: AsyncCreateClipsTaskRequestColorWords[];
  /**
   * @example
   * http://xxx/xxx.mp4
   */
  customVoiceUrl?: string;
  /**
   * @example
   * 0
   */
  customVoiceVolume?: number;
  /**
   * @example
   * 1920
   */
  height?: number;
  /**
   * @example
   * http://music.mp4
   */
  musicUrl?: string;
  musicVolume?: number;
  stickers?: AsyncCreateClipsTaskRequestStickers[];
  subtitleFontSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 17a299a9-f223-4707-b0dd-4c22519bddf5
   */
  taskId?: string;
  voiceStyle?: string;
  voiceVolume?: number;
  /**
   * @example
   * 1080
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-ipe7d81yq4sl5jmk
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      closeMusic: 'CloseMusic',
      closeSubtitle: 'CloseSubtitle',
      closeVoice: 'CloseVoice',
      colorWords: 'ColorWords',
      customVoiceUrl: 'CustomVoiceUrl',
      customVoiceVolume: 'CustomVoiceVolume',
      height: 'Height',
      musicUrl: 'MusicUrl',
      musicVolume: 'MusicVolume',
      stickers: 'Stickers',
      subtitleFontSize: 'SubtitleFontSize',
      taskId: 'TaskId',
      voiceStyle: 'VoiceStyle',
      voiceVolume: 'VoiceVolume',
      width: 'Width',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeMusic: 'boolean',
      closeSubtitle: 'boolean',
      closeVoice: 'boolean',
      colorWords: { 'type': 'array', 'itemType': AsyncCreateClipsTaskRequestColorWords },
      customVoiceUrl: 'string',
      customVoiceVolume: 'number',
      height: 'number',
      musicUrl: 'string',
      musicVolume: 'number',
      stickers: { 'type': 'array', 'itemType': AsyncCreateClipsTaskRequestStickers },
      subtitleFontSize: 'number',
      taskId: 'string',
      voiceStyle: 'string',
      voiceVolume: 'number',
      width: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.colorWords)) {
      $dara.Model.validateArray(this.colorWords);
    }
    if(Array.isArray(this.stickers)) {
      $dara.Model.validateArray(this.stickers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

