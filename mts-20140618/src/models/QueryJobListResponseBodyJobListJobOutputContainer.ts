// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputContainer extends $dara.Model {
  /**
   * @remarks
   * The container format.
   * 
   * *   Default value: mp4.
   * *   Video formats include FLV, MP4, HLS (M3U8 + TS), and MPEG-DASH (MPD + fMP4).
   * *   Audio formats include MP3, MP4, Ogg, FLAC, and M4A.
   * *   Image formats include GIF and WebP. If the container format is GIF, the video codec must be GIF.
   * *   If the container format is WebP, the video codec must be WebP.
   * *   If the container format is FLV, the video codec cannot be H.265.
   * 
   * @example
   * mp4
   */
  format?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

