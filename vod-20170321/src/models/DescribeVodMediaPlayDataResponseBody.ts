// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodMediaPlayDataResponseBodyQoeInfoList extends $dara.Model {
  /**
   * @remarks
   * The number of visits to the audio or video per day.
   * 
   * @example
   * 5
   */
  DAU?: number;
  /**
   * @remarks
   * The ID of the media file (VideoId).
   * 
   * @example
   * 9ae2af636ca6c10412f44891fc****
   */
  mediaId?: string;
  /**
   * @remarks
   * The total playback duration of the audio or video. Unit: seconds.
   * 
   * @example
   * 2400
   */
  playDuration?: number;
  /**
   * @remarks
   * The average playback duration of the audio or video per viewer. Unit: seconds.
   * 
   * @example
   * 120
   */
  playDurationPerUv?: number;
  /**
   * @remarks
   * The average number of times that the audio or video was played per viewer.
   * 
   * @example
   * 4
   */
  playPerVv?: number;
  /**
   * @remarks
   * The total number of times the audio or video has been played.
   * 
   * @example
   * 20
   */
  playSuccessVv?: number;
  /**
   * @remarks
   * The duration of the audio or video file. Unit: seconds.
   * 
   * @example
   * 246
   */
  videoDuration?: number;
  /**
   * @remarks
   * The name of the audio or video file.
   * 
   * @example
   * title
   */
  videoTitle?: string;
  static names(): { [key: string]: string } {
    return {
      DAU: 'DAU',
      mediaId: 'MediaId',
      playDuration: 'PlayDuration',
      playDurationPerUv: 'PlayDurationPerUv',
      playPerVv: 'PlayPerVv',
      playSuccessVv: 'PlaySuccessVv',
      videoDuration: 'VideoDuration',
      videoTitle: 'VideoTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DAU: 'number',
      mediaId: 'string',
      playDuration: 'number',
      playDurationPerUv: 'number',
      playPerVv: 'number',
      playSuccessVv: 'number',
      videoDuration: 'number',
      videoTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodMediaPlayDataResponseBody extends $dara.Model {
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The data returned.
   */
  qoeInfoList?: DescribeVodMediaPlayDataResponseBodyQoeInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qoeInfoList: 'QoeInfoList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qoeInfoList: { 'type': 'array', 'itemType': DescribeVodMediaPlayDataResponseBodyQoeInfoList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qoeInfoList)) {
      $dara.Model.validateArray(this.qoeInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

