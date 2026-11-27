// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultDiagnosisUserListRequest extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel to search.
   * 
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * The end time of the query. The time is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  endTs?: number;
  /**
   * @remarks
   * The fault types to filter. Separate multiple fault types with commas (,). Valid values:
   * - **JOIN_SLOW**: Slow channel joining.
   * - **AUDIO_STUCK**: Audio stuttering. 
   * - **VIDEO_STUCK**: Video stuttering.
   * - **VIDEO_VAGUE**: Blurry video.
   * - **HIGH_DELAY**: High call latency.
   * - **FIRST_FRAME_SLOW**: Slow first frame rendering.
   * 
   * For more information about fault types, see [Fault types](https://help.aliyun.com/document_detail/2639494.html).
   * 
   * @example
   * JOIN_SLOW,AUDIO_STUCK
   */
  faultTypes?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. The time is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615806196
   */
  startTs?: number;
  /**
   * @remarks
   * The ID of the user to search.
   * 
   * @example
   * c906531af5f9****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      faultTypes: 'FaultTypes',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTs: 'StartTs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      endTs: 'number',
      faultTypes: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTs: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

