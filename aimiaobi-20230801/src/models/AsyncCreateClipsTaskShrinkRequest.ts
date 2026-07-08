// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncCreateClipsTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * AutoWrap：自动换行
   * 
   * AutoScale：自动缩放
   * 
   * AutoWrapAtSpaces：只在空格位置自动换行（适用于纯英文字幕自动换行场景）
   */
  adaptMode?: string;
  /**
   * @example
   * 支持设置：
   * 
   * TopLeft：视频左上角
   * 
   * TopCenter：视频竖直中轴线上侧
   * 
   * TopRight：视频右上角
   * 
   * CenterLeft：视频水平中轴线左侧
   * 
   * CenterCenter：视频中心位置
   * 
   * CenterRight：视频水平中轴线右侧
   * 
   * BottomLeft：视频左下角
   * 
   * BottomCenter：视频竖直中轴线下侧
   * 
   * BottomRight：视频右下角
   * 
   * 若需要在不同对齐方式下准确定位字幕位置，建议设置以下对齐方式：
   * 
   * Left，左对齐，X、Y传入字幕左上角顶点相对于视频左上角的坐标
   * 
   * Center，居中对齐，X、Y传入字幕中轴线上边界交点相对于视频左上角的坐标
   * 
   * Right，右对齐，X、Y传入字幕右上角顶点相对于视频左上角的坐标
   */
  alignment?: string;
  /**
   * @remarks
   * Specifies whether to disable the background music.
   * 
   * @example
   * true
   */
  closeMusic?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the subtitles.
   */
  closeSubtitle?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the narration voice.
   * 
   * @example
   * false
   */
  closeVoice?: boolean;
  /**
   * @remarks
   * The URL of the closing credits video.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  closingCreditsUrl?: string;
  /**
   * @remarks
   * The array of animated text elements.
   */
  colorWordsShrink?: string;
  /**
   * @remarks
   * The AppKey of CosyVoice.
   * 
   * @example
   * ddgsase
   */
  cosyVoiceAppKey?: string;
  /**
   * @remarks
   * The token of CosyVoice.
   * 
   * @example
   * xxsfazs
   */
  cosyVoiceToken?: string;
  /**
   * @remarks
   * The voice tone of CosyVoice.
   * 
   * @example
   * longxian_normal
   */
  customVoiceStyle?: string;
  /**
   * @remarks
   * The URL of the custom audio track.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  customVoiceUrl?: string;
  /**
   * @remarks
   * The volume of the custom audio track.
   * 
   * @example
   * 0
   */
  customVoiceVolume?: number;
  /**
   * @remarks
   * The height of the video.
   * 
   * @example
   * 1920
   */
  height?: number;
  /**
   * @remarks
   * The list of high-definition video structures.
   */
  highDefSourceVideosShrink?: string;
  /**
   * @remarks
   * The type of recommended music.
   * 
   * @example
   * 浪漫, 美食,国风,轻快,动感,舒缓,搞怪,时尚
   */
  musicStyle?: string;
  /**
   * @remarks
   * The URL of the background music.
   * 
   * @example
   * http://music.mp4
   */
  musicUrl?: string;
  /**
   * @remarks
   * The volume of the background music.
   * 
   * @example
   * 0-10，默认5
   */
  musicVolume?: number;
  /**
   * @remarks
   * The URL of the opening credits video.
   * 
   * @example
   * http://xxx/xxx.mp4
   */
  openingCreditsUrl?: string;
  /**
   * @remarks
   * The array of sticker structures.
   */
  stickersShrink?: string;
  /**
   * @remarks
   * The font size of the subtitles.
   * 
   * @example
   * 默认120
   */
  subtitleFontSize?: number;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 17a299a9-f223-4707-b0dd-4c22519bddf5
   */
  taskId?: string;
  /**
   * @example
   * 将按照该值设置文本框宽度进行自动换行或缩放。不填写时，会按照视频宽度进行自动换行或缩放。当值大于0小于等于1时，表示相对输出视频的宽度，当值大于1时，表示绝对像素值。
   */
  textWidth?: string;
  /**
   * @remarks
   * The type of narration voice.
   * 
   * @example
   * 甜美女声
   * 中国台湾话女声
   * 舌尖男声
   * 新闻男声
   * 激昂解说
   * 标准女声
   * 悬疑解说
   * 广告男声
   * 温柔女声
   * 资讯女声
   * 新闻女声
   * 萝莉女声
   * 磁性男声
   */
  voiceStyle?: string;
  /**
   * @remarks
   * The volume of the narration voice.
   * 
   * @example
   * 0-10，默认5
   */
  voiceVolume?: number;
  /**
   * @remarks
   * The width of the video.
   * 
   * @example
   * 1080
   */
  width?: number;
  /**
   * @remarks
   * The [Bailian workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-ipe7d81yq4sl5jmk
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      adaptMode: 'AdaptMode',
      alignment: 'Alignment',
      closeMusic: 'CloseMusic',
      closeSubtitle: 'CloseSubtitle',
      closeVoice: 'CloseVoice',
      closingCreditsUrl: 'ClosingCreditsUrl',
      colorWordsShrink: 'ColorWords',
      cosyVoiceAppKey: 'CosyVoiceAppKey',
      cosyVoiceToken: 'CosyVoiceToken',
      customVoiceStyle: 'CustomVoiceStyle',
      customVoiceUrl: 'CustomVoiceUrl',
      customVoiceVolume: 'CustomVoiceVolume',
      height: 'Height',
      highDefSourceVideosShrink: 'HighDefSourceVideos',
      musicStyle: 'MusicStyle',
      musicUrl: 'MusicUrl',
      musicVolume: 'MusicVolume',
      openingCreditsUrl: 'OpeningCreditsUrl',
      stickersShrink: 'Stickers',
      subtitleFontSize: 'SubtitleFontSize',
      taskId: 'TaskId',
      textWidth: 'TextWidth',
      voiceStyle: 'VoiceStyle',
      voiceVolume: 'VoiceVolume',
      width: 'Width',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptMode: 'string',
      alignment: 'string',
      closeMusic: 'boolean',
      closeSubtitle: 'boolean',
      closeVoice: 'boolean',
      closingCreditsUrl: 'string',
      colorWordsShrink: 'string',
      cosyVoiceAppKey: 'string',
      cosyVoiceToken: 'string',
      customVoiceStyle: 'string',
      customVoiceUrl: 'string',
      customVoiceVolume: 'number',
      height: 'number',
      highDefSourceVideosShrink: 'string',
      musicStyle: 'string',
      musicUrl: 'string',
      musicVolume: 'number',
      openingCreditsUrl: 'string',
      stickersShrink: 'string',
      subtitleFontSize: 'number',
      taskId: 'string',
      textWidth: 'string',
      voiceStyle: 'string',
      voiceVolume: 'number',
      width: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

