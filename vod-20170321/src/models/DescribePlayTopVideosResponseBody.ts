// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayTopVideosResponseBodyTopPlayVideosTopPlayVideoStatis extends $dara.Model {
  /**
   * @remarks
   * The total playback duration. Unit: milliseconds.
   * 
   * @example
   * 4640369
   */
  playDuration?: string;
  /**
   * @remarks
   * The title of the video.
   * 
   * @example
   * Four streams (two streams encrypted): LD-HLS-encrypted + SD-MP4 + HD-H
   */
  title?: string;
  /**
   * @remarks
   * The number of unique visitors.
   * 
   * @example
   * 1
   */
  UV?: string;
  /**
   * @remarks
   * The number of video views.
   * 
   * @example
   * 107
   */
  VV?: string;
  /**
   * @remarks
   * The ID of the video.
   * 
   * @example
   * 2a8d4cb9ecbb487681473a15****8fda
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      playDuration: 'PlayDuration',
      title: 'Title',
      UV: 'UV',
      VV: 'VV',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playDuration: 'string',
      title: 'string',
      UV: 'string',
      VV: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosResponseBodyTopPlayVideos extends $dara.Model {
  topPlayVideoStatis?: DescribePlayTopVideosResponseBodyTopPlayVideosTopPlayVideoStatis[];
  static names(): { [key: string]: string } {
    return {
      topPlayVideoStatis: 'TopPlayVideoStatis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topPlayVideoStatis: { 'type': 'array', 'itemType': DescribePlayTopVideosResponseBodyTopPlayVideosTopPlayVideoStatis },
    };
  }

  validate() {
    if(Array.isArray(this.topPlayVideoStatis)) {
      $dara.Model.validateArray(this.topPlayVideoStatis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayTopVideosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4B0BCF9F-2FD5-4817-****-7BEBBE3AF90B"
   */
  requestId?: string;
  /**
   * @remarks
   * The daily playback statistics on each top video.
   */
  topPlayVideos?: DescribePlayTopVideosResponseBodyTopPlayVideos;
  /**
   * @remarks
   * The total number of entries that were collected in playback statistics on top videos.
   * 
   * @example
   * 2
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      topPlayVideos: 'TopPlayVideos',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      topPlayVideos: DescribePlayTopVideosResponseBodyTopPlayVideos,
      totalNum: 'number',
    };
  }

  validate() {
    if(this.topPlayVideos && typeof (this.topPlayVideos as any).validate === 'function') {
      (this.topPlayVideos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

