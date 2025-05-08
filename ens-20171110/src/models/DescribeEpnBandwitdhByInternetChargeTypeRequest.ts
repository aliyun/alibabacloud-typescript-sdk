// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnBandwitdhByInternetChargeTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * *   Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * *   If the value of the seconds place is not 00, the start time is automatically set to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-12-06T15:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * @example
   * cn-changsha-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The Internet service provider (ISP). Valid values:
   * 
   * *   cmcc: China Mobile
   * *   telecom: China Telecom
   * *   unicom: China Unicom
   * *   multiCarrier: multi-line ISP
   * 
   * @example
   * telecom
   */
  isp?: string;
  /**
   * @remarks
   * The networking mode. Valid values:
   * 
   * *   **SpeedUp**: intelligent acceleration network (Internet)
   * *   **Connection**: internal network
   * *   **SpeedUpAndConnection**: intelligent acceleration network and internal network
   * 
   * @example
   * Connection
   */
  networkingModel?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * *   Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * *   If the value of the seconds place is not 00, the start time is automatically set to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-12-02T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      isp: 'Isp',
      networkingModel: 'NetworkingModel',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ensRegionId: 'string',
      isp: 'string',
      networkingModel: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

