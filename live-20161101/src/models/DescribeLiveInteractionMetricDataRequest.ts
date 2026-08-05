// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveInteractionMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ARTC application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e4d7f08a-01fe-41b5-a091-fe41060a****
   */
  appId?: string;
  /**
   * @remarks
   * The start time of the query, specified as a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1698195600000
   */
  beginTs?: number;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * 770513
   */
  channelId?: string;
  /**
   * @remarks
   * The end time of the query, specified as a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1698201013000
   */
  endTs?: number;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * - `JoinChannelSucRate`: the success rate of joining a channel within 5 seconds.
   * 
   * - `VideoStuckRate`: the video stuttering rate.
   * 
   * - `AudioStuckRate`: the audio stuttering rate.
   * 
   * - `FirstFrameCost`: the time to first frame.
   * 
   * This parameter is required.
   * 
   * @example
   * FirstFrameCost
   */
  metricType?: string;
  /**
   * @remarks
   * The operating system. Valid values: `iOS` and `Android`.
   * 
   * @example
   * Android
   */
  os?: string;
  /**
   * @remarks
   * The terminal type. Valid values: `web` and `mobile`.
   * 
   * @example
   * mobile
   */
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      beginTs: 'BeginTs',
      channelId: 'ChannelId',
      endTs: 'EndTs',
      metricType: 'MetricType',
      os: 'Os',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      beginTs: 'number',
      channelId: 'string',
      endTs: 'number',
      metricType: 'string',
      os: 'string',
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

