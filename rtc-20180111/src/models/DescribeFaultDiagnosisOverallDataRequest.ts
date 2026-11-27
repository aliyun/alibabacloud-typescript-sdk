// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultDiagnosisOverallDataRequest extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4eah****
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615910399
   */
  endTs?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1615824000
   */
  startTs?: number;
  /**
   * @remarks
   * The statistical dimension. Valid values:
   * - **JOIN_SLOW_USER**: the number of users who joined the channel slowly
   * - **AUDIO_STUCK_USER**: the number of users who experienced audio stuttering
   * - **VIDEO_STUCK_USER**: the number of users who experienced video stuttering
   * - **VIDEO_VAGUE_USER**: the number of users who experienced blurry video
   * - **HIGH_DELAY_USER**: the number of users who experienced high call latency
   * - **FIRST_FRAME_SLOW_USER**: the number of users who experienced slow first screen rendering
   * 
   * This parameter is required.
   * 
   * @example
   * JOIN_SLOW_USER
   */
  statDim?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTs: 'EndTs',
      startTs: 'StartTs',
      statDim: 'StatDim',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTs: 'number',
      startTs: 'number',
      statDim: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

