// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodMediaPlayDataRequest extends $dara.Model {
  /**
   * @remarks
   * The media ID, which is the audio or video ID (VideoId). Specify this parameter filtered query playback data for a specific media file. Only one media ID can be specified. You can obtain the media ID by using the following methods:
   * - For audio or video files uploaded through the console, log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Media Files** > **Audio/Video** to view the audio or video ID.
   * - When you upload an audio or video file by calling the [CreateUploadVideo](~~CreateUploadVideo~~) operation, the audio or video ID is the value of the VideoId response parameter.
   * - After the audio or video file is uploaded, you can call the [SearchMedia](~~SearchMedia~~) operation filtered query the audio or video ID, which is the value of the VideoId response parameter.
   * 
   * @example
   * 9ae2af636ca6c10412f44891fc****
   */
  mediaId?: string;
  /**
   * @remarks
   * The metric name. This parameter is used together with the `OrderType` parameter. Specify this parameter to sort the returned data in ascending or descending order by a specified metric. Valid values:
   * - **PlaySuccessVv**: total plays.
   * - **PlayPerVv**: average plays per user.
   * - **PlayDuration**: total play duration.
   * - **PlayDurationPerUv**: average play duration per user.
   * 
   * @example
   * PlaySuccessVv
   */
  orderName?: string;
  /**
   * @remarks
   * The sort order. This parameter is used together with the `OrderName` parameter. Specify this parameter to sort the returned data in ascending or descending order by a specified metric. Valid values:
   * - **ASC**: ascending order. The returned data is sorted from smallest to largest.
   * - **DESC**: descending order. The returned data is sorted from largest to smallest.
   * 
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @remarks
   * The operating system of the playback device. Specify this parameter to perform a filtered query for playback data of all audio and video files by operating system. Valid values:
   * - **Android**
   * - **iOS**
   * - **Windows**
   * - **macOS**
   * - **Linux**
   * 
   * @example
   * Android
   */
  os?: string;
  /**
   * @remarks
   * The page number of the data to return. Specify this parameter to set the page from which data starts to be returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Specify this parameter to set the number of entries displayed on each page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The playback date. Unit: day. Format: yyyyMMdd.
   * > - Only daily queries are supported.
   * > - Only data within the last 30 days can be queried.
   * 
   * @example
   * 20240322
   */
  playDate?: string;
  /**
   * @remarks
   * The service region. Specify this parameter to perform a filtered query for playback data of all audio and video files by service region. Valid values:
   * - **cn-beijing**: China (Beijing)
   * - **cn-shanghai**: China (Shanghai)
   * - **cn-shenzhen**: China (Shenzhen)
   * - **ap-northeast-1**: Japan (Tokyo)
   * - **ap-southeast-1**: Singapore
   * - **ap-southeast-5**: Indonesia (Jakarta)
   * - **eu-central-1**: Germany (Frankfurt)
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The terminal type of the Player SDK. Specify this parameter to perform a filtered query for playback data of all audio and video files by terminal type. Valid values:
   * - **Native**: Android Player SDK or iOS Player SDK.
   * - **Web**: Web Player SDK.
   * 
   * @example
   * Native
   */
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      orderName: 'OrderName',
      orderType: 'OrderType',
      os: 'Os',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      playDate: 'PlayDate',
      region: 'Region',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      orderName: 'string',
      orderType: 'string',
      os: 'string',
      pageNo: 'number',
      pageSize: 'number',
      playDate: 'string',
      region: 'string',
      terminalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

