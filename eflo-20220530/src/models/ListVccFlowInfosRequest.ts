// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVccFlowInfosRequest extends $dara.Model {
  /**
   * @remarks
   * Direction
   * 
   * Valid value:
   * 
   * *   IN: inbound.
   * *   OUT: the outbound.
   * 
   * @example
   * OUT
   */
  direction?: string;
  /**
   * @remarks
   * The start time. The default value is 5 minutes ago.
   * 
   * @example
   * 1667727514000
   */
  from?: number;
  /**
   * @remarks
   * Metric
   * 
   * Valid value:
   * 
   * *   totalPacketsRate: Total Packet Rate.
   * *   dropBytesRate: the of the stream drop rate.
   * *   dropPacketsRate: Dropped Packet Rate.
   * *   totalBytesRate: the total streaming rate.
   * *   passBytesRate: by stream rate.
   * *   passPacketsRate: by packet rate.
   * 
   * @example
   * passBytesRate
   */
  metricName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The end time. The default time is the current time.
   * 
   * @example
   * 1689749749000
   */
  to?: number;
  /**
   * @remarks
   * Lingjun Connection ID
   * 
   * @example
   * vcc-cn-zvp2******
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      from: 'From',
      metricName: 'MetricName',
      regionId: 'RegionId',
      to: 'To',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      from: 'number',
      metricName: 'string',
      regionId: 'string',
      to: 'number',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

