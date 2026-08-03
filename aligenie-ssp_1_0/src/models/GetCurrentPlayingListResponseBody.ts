// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCurrentPlayingListResponseBodyResultCover extends $dara.Model {
  /**
   * @remarks
   * Indicates whether OSS rules can be used for cropping.
   * 
   * @example
   * false
   */
  canResize?: boolean;
  /**
   * @remarks
   * Default image
   * 
   * @example
   * http://imgopen.xmcdn.com/group58/M06/08/9B/wKgLglzTyTjiOy0oAAcOTv16ohg815.jpg!op_type=3&columns=640&rows=640
   */
  img?: string;
  /**
   * @remarks
   * Large image
   * 
   * @example
   * http://imgopen.xmcdn.com/group58/M06/08/9B/wKgLglzTyTjiOy0oAAcOTv16ohg815.jpg!op_type=3&columns=640&rows=640
   */
  large?: string;
  /**
   * @remarks
   * Medium image
   * 
   * @example
   * http://imgopen.xmcdn.com/group58/M06/08/9B/wKgLglzTyTjiOy0oAAcOTv16ohg815.jpg!op_type=3&columns=640&rows=640
   */
  mediam?: string;
  /**
   * @remarks
   * Medium image
   * 
   * @example
   * http://imgopen.xmcdn.com/group58/M06/08/9B/wKgLglzTyTjiOy0oAAcOTv16ohg815.jpg!op_type=3&columns=640&rows=640
   */
  medium?: string;
  /**
   * @remarks
   * Small image
   * 
   * @example
   * http://imgopen.xmcdn.com/group58/M06/08/9B/wKgLglzTyTjiOy0oAAcOTv16ohg815.jpg!op_type=3&columns=640&rows=640
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

export class GetCurrentPlayingListResponseBodyResult extends $dara.Model {
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
   * The copyright field has been upgraded to indicate whether playback is allowed: 0 means playable, 1 or 2 means not playable.
   * 
   * @example
   * 0
   */
  copyright?: number;
  /**
   * @remarks
   * Thumbnail image object
   */
  cover?: GetCurrentPlayingListResponseBodyResultCover;
  /**
   * @remarks
   * Default playback order for the package: 0 for sequential, 1 for reverse order
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
   * Normal
   */
  playMode?: string;
  /**
   * @remarks
   * Position of this item in the playlist
   * 
   * @example
   * 0
   */
  pos?: number;
  /**
   * @remarks
   * Playback progress of the song
   * 
   * @example
   * 0
   */
  progress?: number;
  /**
   * @remarks
   * Third-party ID
   * 
   * @example
   * 550144364
   */
  rawId?: string;
  /**
   * @remarks
   * author
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
   * ximalayav2
   */
  source?: string;
  /**
   * @remarks
   * title
   * 
   * @example
   * 足球鞋赛车 晚安妈妈
   */
  title?: string;
  /**
   * @remarks
   * Type (such as music, program, joke, news, children_song, radio, etc.)
   * 
   * @example
   * story
   */
  type?: string;
  /**
   * @remarks
   * Whether playable: VALID(10), UNKNOWN(20), NOT_VALID(30)
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
      cover: GetCurrentPlayingListResponseBodyResultCover,
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

export class GetCurrentPlayingListResponseBody extends $dara.Model {
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
   * Additional information. A typical scenario is providing a brief description for failed invocations to help the caller identify the issue.
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
   * Actual return result of the service
   */
  result?: GetCurrentPlayingListResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the invocation succeeded. true indicates success, and false indicates failure. When the invocation fails, check the Message field.
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
      result: { 'type': 'array', 'itemType': GetCurrentPlayingListResponseBodyResult },
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

