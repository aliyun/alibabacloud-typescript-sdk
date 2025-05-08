// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnBandWidthDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EPN instance.
   * 
   * @example
   * epn-20200825134537VyK81T
   */
  EPNInstanceId?: string;
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
   * 2021-12-16T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-5sg1owx0g4ojy66ab2tez77r2
   */
  instanceId?: string;
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
   * cmcc
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
   * SpeedUp
   */
  networkingModel?: string;
  /**
   * @remarks
   * The precision of the monitoring data that you want to obtain. Valid values: 300, 1200, 3600, and 14400. Default value: 300. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  period?: string;
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
   * 2021-12-15T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      EPNInstanceId: 'EPNInstanceId',
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      isp: 'Isp',
      networkingModel: 'NetworkingModel',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EPNInstanceId: 'string',
      endTime: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      isp: 'string',
      networkingModel: 'string',
      period: 'string',
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

