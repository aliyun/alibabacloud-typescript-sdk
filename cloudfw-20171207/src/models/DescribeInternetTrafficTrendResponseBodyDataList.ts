// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetTrafficTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The inbound network throughput, which indicates the number of bits that are sent inbound per second. Unit: bit/s.
   * 
   * @example
   * 187
   */
  inBps?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the total number of bytes that are sent inbound. Unit: bytes.
   * 
   * @example
   * 235
   */
  inBytes?: number;
  /**
   * @remarks
   * The inbound network throughput, which indicates the number of packets that are sent inbound per second. Unit: packets per second (pps).
   * 
   * @example
   * 2
   */
  inPps?: number;
  /**
   * @remarks
   * The number of new connections.
   * 
   * @example
   * 27
   */
  newConn?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the number of bits that are sent outbound per second. Unit: bit/s.
   * 
   * @example
   * 45
   */
  outBps?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the total number of bytes that are sent outbound. Unit: bytes.
   * 
   * @example
   * 1123
   */
  outBytes?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the number of packets that are sent outbound per second. Unit: pps.
   * 
   * @example
   * 2
   */
  outPps?: number;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 27
   */
  sessionCount?: number;
  /**
   * @remarks
   * The time when traffic is generated. The value is a UNIX timestamp. Unit: seconds.
   * 
   * If processing is not complete at this point in time, -1 is returned for all other fields.
   * 
   * @example
   * 1659405600
   */
  time?: number;
  /**
   * @remarks
   * The total outbound and inbound network throughput, which indicates the total number of bits that are sent inbound and outbound per second. Unit: bit/s.
   * 
   * @example
   * 323
   */
  totalBps?: number;
  static names(): { [key: string]: string } {
    return {
      inBps: 'InBps',
      inBytes: 'InBytes',
      inPps: 'InPps',
      newConn: 'NewConn',
      outBps: 'OutBps',
      outBytes: 'OutBytes',
      outPps: 'OutPps',
      sessionCount: 'SessionCount',
      time: 'Time',
      totalBps: 'TotalBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inBps: 'number',
      inBytes: 'number',
      inPps: 'number',
      newConn: 'number',
      outBps: 'number',
      outBytes: 'number',
      outPps: 'number',
      sessionCount: 'number',
      time: 'number',
      totalBps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

