// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAssetIPTrafficInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end time of the query, as a UNIX timestamp in seconds.
   * 
   * @example
   * 1656923760
   */
  endTime?: number;
  /**
   * @remarks
   * The inbound network throughput, in bits per second (bps).
   * 
   * @example
   * 4520
   */
  inBps?: number;
  /**
   * @remarks
   * The inbound packet rate, in packets per second (pps).
   * 
   * @example
   * 233
   */
  inPps?: number;
  /**
   * @remarks
   * The number of new connections.
   * 
   * @example
   * 43
   */
  newConn?: number;
  /**
   * @remarks
   * The outbound network throughput, in bits per second (bps).
   * 
   * @example
   * 4180
   */
  outBps?: number;
  /**
   * @remarks
   * The outbound packet rate, in packets per second (pps).
   * 
   * @example
   * 224
   */
  outPps?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 50
   */
  sessionCount?: number;
  /**
   * @remarks
   * The start time of the query, as a UNIX timestamp in seconds.
   * 
   * @example
   * 1656837360
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      inBps: 'InBps',
      inPps: 'InPps',
      newConn: 'NewConn',
      outBps: 'OutBps',
      outPps: 'OutPps',
      requestId: 'RequestId',
      sessionCount: 'SessionCount',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      inBps: 'number',
      inPps: 'number',
      newConn: 'number',
      outBps: 'number',
      outPps: 'number',
      requestId: 'string',
      sessionCount: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

