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

export class GenerateVideoPlaylistResponseBodySubtitlePlaylist extends $dara.Model {
  /**
   * @remarks
   * The serial number of the subtitle stream. The value starts from 0.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The language of the subtitle stream.
   * 
   * >  The language is derived from the subtitle stream information in the OSS path specified by the SourceURI parameter for a source video. If no language information exists in the source video, null is returned.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The token of the subtitle media playlist. You can use this parameter to generate the path of a subtitle file.
   * 
   * >  You can generate the path of a transcoded subtitle file based on the returned token value. The path must be in the oss://${Bucket}/${Object}-${Token}_${Index}.ts format. oss://${Bucket}/${Object} specifies the URI specified by input parameters for output files. ${Token} specifies the returned token value, and ${Index} specifies the serial number of a subtitle file.
   * 
   * @example
   * affe0c6042f09722fec95a21b8b******
   */
  token?: string;
  /**
   * @remarks
   * The OSS path of the subtitle media playlist.
   * 
   * @example
   * oss://imm-test/testcases/vide_0.m3u8
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      language: 'Language',
      token: 'Token',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      language: 'string',
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

export class GenerateVideoPlaylistResponseBodyVideoPlaylist extends $dara.Model {
  /**
   * @remarks
   * The video frame rate.
   * 
   * @example
   * 25/1
   */
  frameRate?: string;
  /**
   * @remarks
   * The video resolution.
   * 
   * @example
   * 640x480
   */
  resolution?: string;
  /**
   * @remarks
   * The token of the video media playlist. You can use this parameter to generate the path of a TS file.
   * 
   * >  You can generate the path of a transcoded TS file based on the value of this parameter. The path must be in the oss://${Bucket}/${Object}-${Token}-${Index}.ts format. oss://${Bucket}/${Object} specifies the URI specified by input parameters for output files. ${Token} specifies the returned token, and ${Index} specifies the serial number of a TS file.
   * 
   * @example
   * affe0c6042f09722fec95a21b8b******
   */
  token?: string;
  /**
   * @remarks
   * The OSS path of the video media playlist.
   * 
   * @example
   * oss://imm-test/testcases/video.m3u8
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      frameRate: 'FrameRate',
      resolution: 'Resolution',
      token: 'Token',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameRate: 'string',
      resolution: 'string',
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

