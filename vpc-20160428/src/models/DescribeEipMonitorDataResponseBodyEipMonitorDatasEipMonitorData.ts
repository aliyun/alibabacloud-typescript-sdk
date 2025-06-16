// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData extends $dara.Model {
  /**
   * @example
   * 10
   */
  eipBandwidth?: number;
  /**
   * @remarks
   * The sum of inbound and outbound traffic.
   * 
   * @example
   * 465
   */
  eipFlow?: number;
  /**
   * @remarks
   * The number of packets.
   * 
   * @example
   * 3434
   */
  eipPackets?: number;
  /**
   * @remarks
   * The inbound traffic. Unit: bytes.
   * 
   * @example
   * 122
   */
  eipRX?: number;
  /**
   * @remarks
   * The outbound traffic. Unit: bytes.
   * 
   * @example
   * 343
   */
  eipTX?: number;
  /**
   * @remarks
   * The timestamp of the monitoring data. Specify the time in the ISO8601 standard. Example: `2020-01-21T09:50:23Z`.
   * 
   * @example
   * 2020-01-21T09:50:23Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'EipBandwidth',
      eipFlow: 'EipFlow',
      eipPackets: 'EipPackets',
      eipRX: 'EipRX',
      eipTX: 'EipTX',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      eipFlow: 'number',
      eipPackets: 'number',
      eipRX: 'number',
      eipTX: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

