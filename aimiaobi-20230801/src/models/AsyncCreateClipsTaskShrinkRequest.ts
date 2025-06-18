// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncCreateClipsTaskShrinkRequest extends $dara.Model {
  colorWordsShrink?: string;
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
      colorWordsShrink: 'ColorWords',
      height: 'Height',
      musicUrl: 'MusicUrl',
      musicVolume: 'MusicVolume',
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
      colorWordsShrink: 'string',
      height: 'number',
      musicUrl: 'string',
      musicVolume: 'number',
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

