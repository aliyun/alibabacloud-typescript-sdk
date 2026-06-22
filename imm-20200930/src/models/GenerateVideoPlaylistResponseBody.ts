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
   * The token generated for the audio Media Playlist. You can use this parameter to construct the URI of the generated TS file.
   * 
   * @example
   * affe0c6042f09722fec95a21b8b******
   */
  token?: string;
  /**
   * @remarks
   * The OSS URI of the audio Media Playlist.
   * 
   * @example
   * oss://test-bucket/test-object/output-audio.m3u8
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
   * The sequence number of the subtitle stream, starting from 0.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The language of the subtitle stream.
   * 
   * > The language is obtained from the subtitle stream information of the source video specified by SourceURI. If the source video does not contain language information, this parameter is empty.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The token generated for the subtitle Media Playlist. You can use this parameter to construct the URI of the generated subtitle file.
   * 
   * > You can use the returned token value to construct the URI of the transcoded subtitle file. The format is oss\\://${Bucket}/${Object}-${Token}_${Index}.ts. oss\\://${Bucket}/${Object} is the subtitle URI specified in the request parameters. ${Token} is the returned parameter. ${Index} is the sequence number of the subtitle.
   * 
   * @example
   * affe0c6042f09722fec95a21b8b******
   */
  token?: string;
  /**
   * @remarks
   * The OSS URI of the subtitle Media Playlist.
   * 
   * @example
   * oss://test-bucket/test-object/output-subtitle.m3u8
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
   * The token generated for the video Media Playlist. You can use this parameter to construct the URI of the generated TS file.
   * 
   * > You can use the returned token value to construct the URI of the transcoded TS file. The format is oss\\://${Bucket}/${Object}-${Token}-${Index}.ts. oss\\://${Bucket}/${Object} is the target URI specified in the request parameters. ${Token} is the returned parameter. ${Index} is the sequence number of the TS file.
   * 
   * @example
   * affe0c6042f09722fec95a21b8b******
   */
  token?: string;
  /**
   * @remarks
   * The OSS URI of the video Media Playlist.
   * 
   * @example
   * oss://test-bucket/test-object/output-video.m3u8
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
   * The list of audio Media Playlist files.
   */
  audioPlaylist?: GenerateVideoPlaylistResponseBodyAudioPlaylist[];
  /**
   * @remarks
   * The total duration of the output video.
   * 
   * @example
   * 1082
   */
  duration?: number;
  /**
   * @remarks
   * The OSS URI of the Master Playlist.
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
   * The list of subtitle Media Playlist files.
   */
  subtitlePlaylist?: GenerateVideoPlaylistResponseBodySubtitlePlaylist[];
  /**
   * @remarks
   * The token of the Master Playlist.
   * 
   * @example
   * 92376fbb-171f-4259-913f-705f7ee0****
   */
  token?: string;
  /**
   * @remarks
   * The list of video Media Playlist files.
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

