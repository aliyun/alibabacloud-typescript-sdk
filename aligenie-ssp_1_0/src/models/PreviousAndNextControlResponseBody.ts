// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviousAndNextControlResponseBodyResultCover extends $dara.Model {
  /**
   * @example
   * false
   */
  canResize?: boolean;
  /**
   * @example
   * http://imgopen.xmcdn.com/group58/M06/08/9B/wKgLglzTyTjiOy0oAAcOTv16ohg815.jpg!op_type=3&columns=640&rows=640
   */
  img?: string;
  /**
   * @example
   * http://imgopen.xmcdn.com/group58/M06/08/9B/wKgLglzTyTjiOy0oAAcOTv16ohg815.jpg!op_type=3&columns=640&rows=640
   */
  large?: string;
  /**
   * @example
   * http://imgopen.xmcdn.com/group58/M06/08/9B/wKgLglzTyTjiOy0oAAcOTv16ohg815.jpg!op_type=3&columns=640&rows=640
   */
  mediam?: string;
  /**
   * @example
   * http://imgopen.xmcdn.com/group58/M06/08/9B/wKgLglzTyTjiOy0oAAcOTv16ohg815.jpg!op_type=3&columns=640&rows=640
   */
  medium?: string;
  /**
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

export class PreviousAndNextControlResponseBodyResult extends $dara.Model {
  albumName?: string;
  /**
   * @example
   * 260744
   */
  albumRawId?: string;
  /**
   * @example
   * 190
   */
  audioLength?: number;
  /**
   * @example
   * 0
   */
  copyright?: number;
  cover?: PreviousAndNextControlResponseBodyResultCover;
  /**
   * @example
   * 1
   */
  defaultPlayOrder?: number;
  /**
   * @example
   * https://openaudio.cos.tx.xmcdn.com/storages/587f-audiofreehighqps/15/CE/GKwRIJIGnb11ABc6SwF59DNb.mp3
   */
  itemUrl?: string;
  /**
   * @example
   * false
   */
  liked?: boolean;
  /**
   * @example
   * https://aicontent.alibabausercontent.com/lyric/thirdsource/6f4c8408073db134b0d097c122b5a1a1.lrc
   */
  lyricUrl?: string;
  /**
   * @example
   * Repeat
   */
  playMode?: string;
  /**
   * @example
   * 0
   */
  pos?: number;
  /**
   * @example
   * 0
   */
  progress?: number;
  /**
   * @example
   * 550144364
   */
  rawId?: string;
  singer?: string;
  /**
   * @example
   * ximalayav2
   */
  source?: string;
  title?: string;
  /**
   * @example
   * story
   */
  type?: string;
  /**
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
      cover: PreviousAndNextControlResponseBodyResultCover,
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

export class PreviousAndNextControlResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 10002398812
   */
  requestId?: string;
  result?: PreviousAndNextControlResponseBodyResult;
  /**
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
      result: PreviousAndNextControlResponseBodyResult,
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

