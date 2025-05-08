// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnBandWidthDataResponseBodyMonitorDataBandWidthMonitorData extends $dara.Model {
  /**
   * @remarks
   * The outbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 0
   */
  downBandWidth?: number;
  /**
   * @remarks
   * The Internet traffic to the instance. Unit: bytes.
   * 
   * @example
   * 0
   */
  internetRX?: number;
  /**
   * @remarks
   * The Internet traffic from the instance. Unit: bytes.
   * 
   * @example
   * 0
   */
  internetTX?: number;
  /**
   * @remarks
   * The timestamp when the monitoring data was queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-12T05:45:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 0
   */
  upBandWidth?: number;
  static names(): { [key: string]: string } {
    return {
      downBandWidth: 'DownBandWidth',
      internetRX: 'InternetRX',
      internetTX: 'InternetTX',
      timeStamp: 'TimeStamp',
      upBandWidth: 'UpBandWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downBandWidth: 'number',
      internetRX: 'number',
      internetTX: 'number',
      timeStamp: 'string',
      upBandWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

