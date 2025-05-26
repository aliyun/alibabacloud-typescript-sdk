// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateVideoPlaylistResponseBodyAudioPlaylist extends $dara.Model {
  /**
   * @remarks
   * The number of audio channels.
   * 
   * @example
   * 1
   */
  channels?: number;
  /**
   * @remarks
   * The token of the audio media playlist. You can use this parameter to generate the path of a TS file.
   * 
   * @example
   * affe0c6042f09722fec95a21b8b******
   */
  token?: string;
  /**
   * @remarks
   * The OSS path of the audio media playlist.
   * 
   * @example
   * oss://imm-test/testcases/video.m3u8
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      token: 'Token',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: 'number',
      token: 'string',
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

