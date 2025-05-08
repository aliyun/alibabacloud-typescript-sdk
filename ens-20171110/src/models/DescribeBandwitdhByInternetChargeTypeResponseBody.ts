// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwitdhByInternetChargeTypeResponseBody extends $dara.Model {
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
   * 95BandwidthByMonth
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 08027633-8501-5A36-B90D-F7C38B5EC75D
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp. The time follows the ISO 8601 standard. The time is displayed in UTC. Example: 2016-10-20T04:00:00Z.
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

