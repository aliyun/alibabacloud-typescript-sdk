// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncCreateClipsTaskShrinkRequest extends $dara.Model {
  closeMusic?: boolean;
  closeSubtitle?: boolean;
  closeVoice?: boolean;
  colorWordsShrink?: string;
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
  stickersShrink?: string;
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
      colorWordsShrink: 'ColorWords',
      customVoiceUrl: 'CustomVoiceUrl',
      customVoiceVolume: 'CustomVoiceVolume',
      height: 'Height',
      musicUrl: 'MusicUrl',
      musicVolume: 'MusicVolume',
      stickersShrink: 'Stickers',
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
      colorWordsShrink: 'string',
      customVoiceUrl: 'string',
      customVoiceVolume: 'number',
      height: 'number',
      musicUrl: 'string',
      musicVolume: 'number',
      stickersShrink: 'string',
      subtitleFontSize: 'number',
      taskId: 'string',
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

