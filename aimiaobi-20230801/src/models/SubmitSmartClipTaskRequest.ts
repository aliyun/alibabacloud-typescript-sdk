// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig extends $dara.Model {
  style?: string;
  /**
   * @example
   * 0.2
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      style: 'Style',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      style: 'string',
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

export class SubmitSmartClipTaskRequestEditingConfigMediaConfig extends $dara.Model {
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SubmitSmartClipTaskRequestEditingConfigSpeechConfigAsrConfig extends $dara.Model {
  alignment?: string;
  /**
   * @example
   * SimSun
   */
  font?: string;
  /**
   * @example
   * #ffffff
   */
  fontColor?: string;
  /**
   * @example
   * 0
   */
  fontSize?: string;
  /**
   * @example
   * 0
   */
  spacing?: string;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alignment: 'Alignment',
      font: 'Font',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      spacing: 'Spacing',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      font: 'string',
      fontColor: 'string',
      fontSize: 'string',
      spacing: 'string',
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

export class SubmitSmartClipTaskRequestEditingConfigSpeechConfig extends $dara.Model {
  asrConfig?: SubmitSmartClipTaskRequestEditingConfigSpeechConfigAsrConfig;
  /**
   * @example
   * 0
   */
  speechRate?: number;
  style?: string;
  voice?: string;
  /**
   * @example
   * 0.5
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      speechRate: 'SpeechRate',
      style: 'Style',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: SubmitSmartClipTaskRequestEditingConfigSpeechConfigAsrConfig,
      speechRate: 'number',
      style: 'string',
      voice: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestEditingConfigTitleConfig extends $dara.Model {
  /**
   * @example
   * TopLeft
   */
  alignment?: string;
  /**
   * @example
   * 2
   */
  timelineIn?: number;
  /**
   * @example
   * 3
   */
  timelineOut?: number;
  /**
   * @example
   * 100
   */
  x?: number;
  /**
   * @example
   * 100
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      alignment: 'Alignment',
      timelineIn: 'TimelineIn',
      timelineOut: 'TimelineOut',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
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

export class SubmitSmartClipTaskRequestEditingConfig extends $dara.Model {
  backgroundMusicConfig?: SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig;
  mediaConfig?: SubmitSmartClipTaskRequestEditingConfigMediaConfig;
  speechConfig?: SubmitSmartClipTaskRequestEditingConfigSpeechConfig;
  titleConfig?: SubmitSmartClipTaskRequestEditingConfigTitleConfig;
  static names(): { [key: string]: string } {
    return {
      backgroundMusicConfig: 'BackgroundMusicConfig',
      mediaConfig: 'MediaConfig',
      speechConfig: 'SpeechConfig',
      titleConfig: 'TitleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundMusicConfig: SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig,
      mediaConfig: SubmitSmartClipTaskRequestEditingConfigMediaConfig,
      speechConfig: SubmitSmartClipTaskRequestEditingConfigSpeechConfig,
      titleConfig: SubmitSmartClipTaskRequestEditingConfigTitleConfig,
    };
  }

  validate() {
    if(this.backgroundMusicConfig && typeof (this.backgroundMusicConfig as any).validate === 'function') {
      (this.backgroundMusicConfig as any).validate();
    }
    if(this.mediaConfig && typeof (this.mediaConfig as any).validate === 'function') {
      (this.mediaConfig as any).validate();
    }
    if(this.speechConfig && typeof (this.speechConfig as any).validate === 'function') {
      (this.speechConfig as any).validate();
    }
    if(this.titleConfig && typeof (this.titleConfig as any).validate === 'function') {
      (this.titleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfigBackgroundMusics extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/video.mp3
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fileKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfigStickersStickerId extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/sticker.png
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fileKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfigStickers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  height?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  stickerId?: SubmitSmartClipTaskRequestInputConfigStickersStickerId;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  width?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  x?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      stickerId: 'StickerId',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      stickerId: SubmitSmartClipTaskRequestInputConfigStickersStickerId,
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(this.stickerId && typeof (this.stickerId as any).validate === 'function') {
      (this.stickerId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfigVideoIds extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/video.mp4
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fileKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestInputConfig extends $dara.Model {
  backgroundMusics?: SubmitSmartClipTaskRequestInputConfigBackgroundMusics[];
  speechTexts?: string[];
  stickers?: SubmitSmartClipTaskRequestInputConfigStickers[];
  titles?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  videoIds?: SubmitSmartClipTaskRequestInputConfigVideoIds[];
  static names(): { [key: string]: string } {
    return {
      backgroundMusics: 'BackgroundMusics',
      speechTexts: 'SpeechTexts',
      stickers: 'Stickers',
      titles: 'Titles',
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundMusics: { 'type': 'array', 'itemType': SubmitSmartClipTaskRequestInputConfigBackgroundMusics },
      speechTexts: { 'type': 'array', 'itemType': 'string' },
      stickers: { 'type': 'array', 'itemType': SubmitSmartClipTaskRequestInputConfigStickers },
      titles: { 'type': 'array', 'itemType': 'string' },
      videoIds: { 'type': 'array', 'itemType': SubmitSmartClipTaskRequestInputConfigVideoIds },
    };
  }

  validate() {
    if(Array.isArray(this.backgroundMusics)) {
      $dara.Model.validateArray(this.backgroundMusics);
    }
    if(Array.isArray(this.speechTexts)) {
      $dara.Model.validateArray(this.speechTexts);
    }
    if(Array.isArray(this.stickers)) {
      $dara.Model.validateArray(this.stickers);
    }
    if(Array.isArray(this.titles)) {
      $dara.Model.validateArray(this.titles);
    }
    if(Array.isArray(this.videoIds)) {
      $dara.Model.validateArray(this.videoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequestOutputConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * test_{index}.mp4
   */
  fileName?: string;
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * 120
   */
  maxDuration?: number;
  /**
   * @example
   * true
   */
  saveToGeneratedContent?: boolean;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      fileName: 'FileName',
      height: 'Height',
      maxDuration: 'MaxDuration',
      saveToGeneratedContent: 'SaveToGeneratedContent',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      fileName: 'string',
      height: 'number',
      maxDuration: 'number',
      saveToGeneratedContent: 'boolean',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSmartClipTaskRequest extends $dara.Model {
  editingConfig?: SubmitSmartClipTaskRequestEditingConfig;
  extendParam?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputConfig?: SubmitSmartClipTaskRequestInputConfig;
  outputConfig?: SubmitSmartClipTaskRequestOutputConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      editingConfig: 'EditingConfig',
      extendParam: 'ExtendParam',
      inputConfig: 'InputConfig',
      outputConfig: 'OutputConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingConfig: SubmitSmartClipTaskRequestEditingConfig,
      extendParam: 'string',
      inputConfig: SubmitSmartClipTaskRequestInputConfig,
      outputConfig: SubmitSmartClipTaskRequestOutputConfig,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.editingConfig && typeof (this.editingConfig as any).validate === 'function') {
      (this.editingConfig as any).validate();
    }
    if(this.inputConfig && typeof (this.inputConfig as any).validate === 'function') {
      (this.inputConfig as any).validate();
    }
    if(this.outputConfig && typeof (this.outputConfig as any).validate === 'function') {
      (this.outputConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

