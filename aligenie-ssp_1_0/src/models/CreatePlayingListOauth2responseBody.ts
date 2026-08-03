// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePlayingListOAuth2ResponseBodyResultCover extends $dara.Model {
  /**
   * @remarks
   * Indicates whether cropping using OSS rules is allowed.
   * 
   * @example
   * false
   */
  canResize?: boolean;
  /**
   * @remarks
   * default image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  img?: string;
  /**
   * @remarks
   * Large image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  large?: string;
  /**
   * @remarks
   * Medium image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  mediam?: string;
  /**
   * @remarks
   * medium image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  medium?: string;
  /**
   * @remarks
   * small image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListOAuth2ResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Third-party album name
   * 
   * @example
   * 晚安妈妈睡前故事
   */
  albumName?: string;
  /**
   * @remarks
   * Third-party album ID
   * 
   * @example
   * 260744
   */
  albumRawId?: string;
  /**
   * @remarks
   * Length
   * 
   * @example
   * 190
   */
  audioLength?: number;
  /**
   * @remarks
   * The copyright field has been upgraded to indicate whether the content is playable: 0 means playable, 1 or 2 means not playable.
   * 
   * @example
   * 0
   */
  copyright?: number;
  /**
   * @remarks
   * thumbnail image object
   */
  cover?: CreatePlayingListOAuth2ResponseBodyResultCover;
  /**
   * @remarks
   * Default playback order for the package: 0 for sequential, 1 for reverse order.
   * 
   * @example
   * 1
   */
  defaultPlayOrder?: number;
  /**
   * @remarks
   * Playback URL
   * 
   * @example
   * https://openaudio.cos.tx.xmcdn.com/storages/587f-audiofreehighqps/15/CE/GKwRIJIGnb11ABc6SwF59DNb.mp3
   */
  itemUrl?: string;
  /**
   * @remarks
   * is collected
   * 
   * @example
   * false
   */
  liked?: boolean;
  /**
   * @remarks
   * Lyrics URL
   * 
   * @example
   * https://aicontent.alibabausercontent.com/lyric/thirdsource/6f4c8408073db134b0d097c122b5a1a1.lrc
   */
  lyricUrl?: string;
  /**
   * @remarks
   * Playback mode (Repeat, Shuffle, RepeatOne, Normal)
   * 
   * @example
   * Repeat
   */
  playMode?: string;
  /**
   * @remarks
   * Position of this item in the playlist.
   * 
   * @example
   * 1
   */
  pos?: number;
  /**
   * @remarks
   * Song playback progress
   * 
   * @example
   * 96.0
   */
  progress?: number;
  /**
   * @remarks
   * third-party ID
   * 
   * @example
   * 123123
   */
  rawId?: string;
  /**
   * @remarks
   * Author
   * 
   * @example
   * 晚安妈妈
   */
  singer?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * qignting
   */
  source?: string;
  /**
   * @remarks
   * title
   * 
   * @example
   * 超能狂少在都市
   */
  title?: string;
  /**
   * @remarks
   * type (such as music, program, joke, news, children_song, radio, etc.)
   * 
   * @example
   * program
   */
  type?: string;
  /**
   * @remarks
   * Playback availability status: VALID(10), UNKNOWN(20), NOT_VALID(30).
   * 
   * @example
   * VALID
   */
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      albumName: 'AlbumName',
      albumRawId: 'AlbumRawId',
      audioLength: 'AudioLength',
      copyright: 'Copyright',
      cover: 'Cover',
      defaultPlayOrder: 'DefaultPlayOrder',
      itemUrl: 'ItemUrl',
      liked: 'Liked',
      lyricUrl: 'LyricUrl',
      playMode: 'PlayMode',
      pos: 'Pos',
      progress: 'Progress',
      rawId: 'RawId',
      singer: 'Singer',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumName: 'string',
      albumRawId: 'string',
      audioLength: 'number',
      copyright: 'number',
      cover: CreatePlayingListOAuth2ResponseBodyResultCover,
      defaultPlayOrder: 'number',
      itemUrl: 'string',
      liked: 'boolean',
      lyricUrl: 'string',
      playMode: 'string',
      pos: 'number',
      progress: 'number',
      rawId: 'string',
      singer: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePlayingListOAuth2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code of the invocation
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information, typically used to briefly describe a failed invocation to help the caller identify the issue.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10002398812
   */
  requestId?: string;
  /**
   * @remarks
   * Actual return result from the service
   */
  result?: CreatePlayingListOAuth2ResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the invocation succeeded. true indicates success, and false indicates failure. When the value is false, check the Message field.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: CreatePlayingListOAuth2ResponseBodyResult,
      success: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

