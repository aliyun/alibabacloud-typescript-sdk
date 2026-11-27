// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQualityOverallDataRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * The End Time of the query, represented as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endDate?: number;
  /**
   * @remarks
   * The Start Time of the query, represented as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startDate?: number;
  /**
   * @remarks
   * The Metric Types to query, separated by commas (,). Valid values:
   * - **JOIN_CHANNEL_SUC_RATE**: Channel Join Success Rate.
   * - **JOIN_CHANNEL_SUC_FIVE_SEC_RATE**: Five-second Channel Join Success Rate.
   * - **VIDEO_FIRST_PIC_DUR**: Time to First Video Frame.
   * - **AUDIO_STUCK_RATE**: Audio Lag Rate.
   * - **VIDEO_STUCK_RATE**: Video Lag Rate.
   * - **AUDIO_DELAY**: Audio Delay.
   * - **VIDEO_DELAY**: Video Delay.
   * - **AUDIO_HIGH_QUALITY_TRANSMISSION_RATE**: Audio High-quality Transmission Rate.
   * - **VIDEO_HIGH_QUALITY_TRANSMISSION_RATE**: Video High-quality Transmission Rate.
   * 
   * This parameter is required.
   * 
   * @example
   * JOIN_CHANNEL_SUC_RATE
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      startDate: 'StartDate',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'number',
      startDate: 'number',
      types: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

