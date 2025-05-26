// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateVideoPlaylistResponseBodyAudioPlaylist } from "./GenerateVideoPlaylistResponseBodyAudioPlaylist";
import { GenerateVideoPlaylistResponseBodySubtitlePlaylist } from "./GenerateVideoPlaylistResponseBodySubtitlePlaylist";
import { GenerateVideoPlaylistResponseBodyVideoPlaylist } from "./GenerateVideoPlaylistResponseBodyVideoPlaylist";


export class GenerateVideoPlaylistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The audio media playlist files.
   */
  audioPlaylist?: GenerateVideoPlaylistResponseBodyAudioPlaylist[];
  /**
   * @remarks
   * The total duration of the generated video.
   * 
   * @example
   * 1082
   */
  duration?: number;
  /**
   * @remarks
   * The OSS path of the master playlist.
   * 
   * @example
   * oss://test-bucket/test-object/master.m3u8
   */
  masterURI?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CA995EFD-083D-4F40-BE8A-BDF75FFF*****
   */
  requestId?: string;
  /**
   * @remarks
   * The subtitle media playlist files.
   */
  subtitlePlaylist?: GenerateVideoPlaylistResponseBodySubtitlePlaylist[];
  /**
   * @remarks
   * The token of the master playlist.
   * 
   * @example
   * 92376fbb-171f-4259-913f-705f7ee0****
   */
  token?: string;
  /**
   * @remarks
   * The video media playlist files.
   */
  videoPlaylist?: GenerateVideoPlaylistResponseBodyVideoPlaylist[];
  static names(): { [key: string]: string } {
    return {
      audioPlaylist: 'AudioPlaylist',
      duration: 'Duration',
      masterURI: 'MasterURI',
      requestId: 'RequestId',
      subtitlePlaylist: 'SubtitlePlaylist',
      token: 'Token',
      videoPlaylist: 'VideoPlaylist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioPlaylist: { 'type': 'array', 'itemType': GenerateVideoPlaylistResponseBodyAudioPlaylist },
      duration: 'number',
      masterURI: 'string',
      requestId: 'string',
      subtitlePlaylist: { 'type': 'array', 'itemType': GenerateVideoPlaylistResponseBodySubtitlePlaylist },
      token: 'string',
      videoPlaylist: { 'type': 'array', 'itemType': GenerateVideoPlaylistResponseBodyVideoPlaylist },
    };
  }

  validate() {
    if(Array.isArray(this.audioPlaylist)) {
      $dara.Model.validateArray(this.audioPlaylist);
    }
    if(Array.isArray(this.subtitlePlaylist)) {
      $dara.Model.validateArray(this.subtitlePlaylist);
    }
    if(Array.isArray(this.videoPlaylist)) {
      $dara.Model.validateArray(this.videoPlaylist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

