// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailListTraffic95Detail extends $dara.Model {
  /**
   * @remarks
   * The sampled bandwidth value, which is the larger bandwidth value in the inbound and outbound directions within a sampling interval. Unit: Mbit/s.
   * 
   * @example
   * 118.5090322113037
   */
  billBandwidth?: string;
  /**
   * @remarks
   * The inbound bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 118.5090322113037
   */
  inBandwidth?: string;
  /**
   * @remarks
   * The outbound bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 96.41217480977376
   */
  outBandwidth?: string;
  /**
   * @remarks
   * The statistical time. The value is a string.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      billBandwidth: 'BillBandwidth',
      inBandwidth: 'InBandwidth',
      outBandwidth: 'OutBandwidth',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billBandwidth: 'string',
      inBandwidth: 'string',
      outBandwidth: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

