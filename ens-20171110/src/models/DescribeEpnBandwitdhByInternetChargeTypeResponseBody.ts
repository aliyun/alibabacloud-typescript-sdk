// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnBandwitdhByInternetChargeTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 123
   */
  bandwidthValue?: number;
  /**
   * @remarks
   * The metering method. Valid values:
   * 
   * *   BandwidthByDay: Pay by daily peak bandwidth
   * *   95BandwidthByMonth: Pay by monthly 95th percentile bandwidth
   * *   PayByBandwidth4thMonth: Pay by monthly fourth peak bandwidth
   * *   PayByBandwidth: Pay by fixed bandwidth
   * 
   * You can specify only one metering method for network usage and cannot overwrite the existing metering method.
   * 
   * @example
   * BandwidthByDay
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 216BCED0-E055-5DDB-8E06-4084A62A4A44
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp when the monitoring data was queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-12T05:45:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthValue: 'BandwidthValue',
      internetChargeType: 'InternetChargeType',
      requestId: 'RequestId',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthValue: 'number',
      internetChargeType: 'string',
      requestId: 'string',
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

