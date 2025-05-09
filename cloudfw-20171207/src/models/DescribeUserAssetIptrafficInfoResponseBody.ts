// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserAssetIPTrafficInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1656923760
   */
  endTime?: number;
  /**
   * @remarks
   * The network throughput, which indicates the inbound traffic rate. Unit: bit/s.
   * 
   * @example
   * 4520
   */
  inBps?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the number of packets that are sent inbound per second. Unit: packets per second (pps).
   * 
   * @example
   * 233
   */
  inPps?: number;
  /**
   * @remarks
   * The new connection creation rate.
   * 
   * @example
   * 43
   */
  newConn?: number;
  /**
   * @remarks
   * The network throughput, which indicates the outbound traffic rate. Unit: bit/s.
   * 
   * @example
   * 4180
   */
  outBps?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the number of packets that are sent outbound per second. Unit: pps.
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
   * The number of requests.
   * 
   * @example
   * 50
   */
  sessionCount?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
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

