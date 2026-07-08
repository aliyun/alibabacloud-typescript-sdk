// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig extends $dara.Model {
  /**
   * @remarks
   * Background music style. Default value: empty. If background music is already configured in InputConfig, this field does not take effect.
   * Valid values:
   * bgm-beauty: Fashion
   * bgm-chinese-style: Chinese style
   * bgm-cuisine: Food
   * bgm-dynamic: Dynamic
   * bgm-quirky: Quirky
   * bgm-relaxing: Relaxing
   * bgm-romantic: Romantic
   * bgm-upbeat: Upbeat
   */
  style?: string;
  /**
   * @remarks
   * Volume of the background music. Valid values: 0 to 10.0.
   * 
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
  /**
   * @remarks
   * Volume of the video material. 0 means mute.
   */
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
  /**
   * @remarks
   * Caption alignment.
   * TopLeft: Top-left corner of the video.
   * TopCenter: Top center of the vertical axis of the video.
   * TopRight: Top-right corner of the video.
   * CenterLeft: Left side of the horizontal center line of the video.
   * CenterCenter: Center of the video.
   * CenterRight: Right side of the horizontal center line of the video.
   * BottomLeft: Bottom-left corner of the video.
   * BottomCenter: Bottom center of the vertical axis of the video.
   * BottomRight: Bottom-right corner of the video.
   */
  alignment?: string;
  /**
   * @remarks
   * Font of the caption text. For supported fonts, see the font list. Default font: SimSun.
   * 
   * @example
   * SimSun
   */
  font?: string;
  /**
   * @remarks
   * Color of the caption text. Format: # followed by a hexadecimal value. Example: #ffffff.
   * 
   * @example
   * #ffffff
   */
  fontColor?: string;
  /**
   * @remarks
   * Font size of the caption text. This size scales based on the source material size and the final output size. Default value: 0. Maximum value: 5000.
   * 
   * @example
   * 0
   */
  fontSize?: string;
  /**
   * @remarks
   * Letter spacing of the caption text, in pixels.
   * 
   * @example
   * 0
   */
  spacing?: string;
  /**
   * @remarks
   * Horizontal distance from the top-left corner of the caption text to the top-left corner of the output video. You can specify this value as a percentage or in pixels. If the value is between 0 and 0.9999, it represents a percentage of the output video width. If the value is an integer greater than or equal to 2, it represents an absolute pixel value. Default value: 0. This coordinate scales based on the source material size and the final output size.
   */
  x?: number;
  /**
   * @remarks
   * Vertical distance from the top-left corner of the caption text to the top-left corner of the output video. You can specify this value as a percentage or in pixels. If the value is between 0 and 0.9999, it represents a percentage of the output video height. If the value is an integer greater than or equal to 2, it represents an absolute pixel value. Default value: 0. This coordinate scales based on the source material size and the final output size.
   */
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
  /**
   * @remarks
   * Caption parameter configuration.
   */
  asrConfig?: SubmitSmartClipTaskRequestEditingConfigSpeechConfigAsrConfig;
  /**
   * @remarks
   * Speech rate of the voiceover script.
   * Valid values: -500 to 500. Default value: 0.
   * The corresponding playback speed multipliers for [-500, 0, 500] are [0.5, 1.0, 2.0].
   * Calculation method:
   * For 0.8× speed: (1 - 1/0.8) / 0.002 = -125
   * For 1.2× speed: (1 - 1/1.2) / 0.001 = 166
   * Use coefficient 0.002 for speeds less than 1×.
   * Use coefficient 0.001 for speeds greater than 1×.
   * Round the result to the nearest integer.
   * 
   * The calculation method is as follows:<br>
   * 0.8× speed: (1 − 1/0.8)/0.002 = −125<br>
   * 1.2× speed: (1 − 1/1.2)/0.001 = 166<br>
   * When the speed is less than 1×, use a coefficient of 0.002.<br>
   * When the speed is greater than 1×, use a coefficient of 0.001.<br>
   * The actual algorithm result is approximated.<br><br><br><br><br>
   * 
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * Voiceover style. Default value: empty. If both Voice and Style are specified, Voice takes precedence.
   * Gentle: Gentle
   * Serious: Serious
   * Entertainment: Entertainment
   */
  style?: string;
  /**
   * @remarks
   * Specify one or more voice styles for the voiceover, separated by commas. When multiple voices are specified, one is randomly selected for synthesis. For available voice styles, see [Smart Voice Effect Examples](https://help.aliyun.com/zh/ims/developer-reference/smart-voice-effect-example?spm=a2c4g.11186623.0.0.13091ee6Pw4Jqz). Example: "zhimiao_emo,zhilun".
   */
  voice?: string;
  /**
   * @remarks
   * Volume of the voiceover audio. Default value: 1. Valid values: 0 to 10.0. Decimal values are supported. Example: 0.5.
   * 
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
   * @remarks
   * TopLeft: Top-left corner of the video.
   * TopCenter: Top center of the vertical axis of the video.
   * TopRight: Top-right corner of the video.
   * CenterLeft: Left side of the horizontal center line of the video.
   * CenterCenter: Center of the video.
   * CenterRight: Right side of the horizontal center line of the video.
   * BottomLeft: Bottom-left corner of the video.
   * BottomCenter: Bottom center of the vertical axis of the video.
   * BottomRight: Bottom-right corner of the video.
   * 
   * @example
   * TopLeft
   */
  alignment?: string;
  /**
   * @remarks
   * Time when the title appears.
   * 
   * @example
   * 2
   */
  timelineIn?: number;
  /**
   * @remarks
   * Time when the title disappears.
   * 
   * @example
   * 3
   */
  timelineOut?: number;
  /**
   * @remarks
   * Horizontal distance from the top-left corner of the banner text to the top-left corner of the output video. You can specify this value as a percentage or in pixels. If the value is between 0 and 0.9999, it represents a percentage of the output video width. If the value is an integer greater than or equal to 2, it represents an absolute pixel value. Default value: 0. This coordinate scales based on the source material size and the final output size.
   * 
   * @example
   * 100
   */
  x?: number;
  /**
   * @remarks
   * Vertical distance from the top-left corner of the banner text to the top-left corner of the output video. You can specify this value as a percentage or in pixels. If the value is between 0 and 0.9999, it represents a percentage of the output video height. If the value is an integer greater than or equal to 2, it represents an absolute pixel value. Default value: 0. This coordinate scales based on the source material size and the final output size.
   * 
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
  /**
   * @remarks
   * Background music configuration.
   */
  backgroundMusicConfig?: SubmitSmartClipTaskRequestEditingConfigBackgroundMusicConfig;
  /**
   * @remarks
   * Media configuration.
   */
  mediaConfig?: SubmitSmartClipTaskRequestEditingConfigMediaConfig;
  /**
   * @remarks
   * Voiceover configuration.
   */
  speechConfig?: SubmitSmartClipTaskRequestEditingConfigSpeechConfig;
  /**
   * @remarks
   * Title configuration.
   */
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
   * Background music ID.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/video.mp3
   */
  id?: string;
  /**
   * @remarks
   * ID type:
   * materialId: Material Library reference ID
   * fileKey: FileKey in Alibaba Cloud Model Studio
   * url: Publicly accessible URL
   * 
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
   * Sticker ID.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/sticker.png
   */
  id?: string;
  /**
   * @remarks
   * ID type:
   * materialId: Material Library reference ID
   * fileKey: FileKey in Alibaba Cloud Model Studio
   * url: Publicly accessible URL
   * 
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
   * Height of the sticker.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  height?: number;
  /**
   * @remarks
   * Sticker ID.
   * 
   * This parameter is required.
   */
  stickerId?: SubmitSmartClipTaskRequestInputConfigStickersStickerId;
  /**
   * @remarks
   * Width of the sticker.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  width?: number;
  /**
   * @remarks
   * X coordinate of the top-left corner of the sticker.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.5
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate of the top-left corner of the sticker.
   * 
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
   * Material ID.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/video.mp4
   */
  id?: string;
  /**
   * @remarks
   * ID type:
   * materialId: Material Library reference ID
   * fileKey: FileKey in Alibaba Cloud Model Studio
   * url: Publicly accessible URL
   * 
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
  /**
   * @remarks
   * List of background music IDs.
   */
  backgroundMusics?: SubmitSmartClipTaskRequestInputConfigBackgroundMusics[];
  /**
   * @remarks
   * List of voiceover script texts.
   */
  speechTexts?: string[];
  /**
   * @remarks
   * List of stickers.
   */
  stickers?: SubmitSmartClipTaskRequestInputConfigStickers[];
  /**
   * @remarks
   * List of titles.
   */
  titles?: string[];
  /**
   * @remarks
   * List of video material ID objects.
   * 
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
   * @remarks
   * Number of output videos.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Output file name. Must include {index}.
   * 
   * @example
   * test_{index}.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * Output video height.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * Maximum duration of the output video, in seconds.
   * 
   * @example
   * 120
   */
  maxDuration?: number;
  /**
   * @remarks
   * Save to Content Management.
   * 
   * @example
   * true
   */
  saveToGeneratedContent?: boolean;
  /**
   * @remarks
   * Output video width.
   * 
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
  /**
   * @remarks
   * Video editing configuration.
   */
  editingConfig?: SubmitSmartClipTaskRequestEditingConfig;
  /**
   * @remarks
   * Additional extended parameters. These parameters merge with InputConfig, OutputConfig, and EditingConfig.
   */
  extendParam?: string;
  /**
   * @remarks
   * Input configuration.
   * 
   * This parameter is required.
   */
  inputConfig?: SubmitSmartClipTaskRequestInputConfig;
  /**
   * @remarks
   * Output configuration.
   */
  outputConfig?: SubmitSmartClipTaskRequestOutputConfig;
  /**
   * @remarks
   * Alibaba Cloud Model Studio workspace ID. For more information, see [workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 业务空间ID
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

