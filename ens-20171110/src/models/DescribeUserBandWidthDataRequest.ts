// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBandWidthDataRequest extends $dara.Model {
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
   * 2019-05-21T12:22:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the node. You can specify only one node ID. By default, all nodes are queried.
   * 
   * @example
   * cn-taiyuan-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to query the data. You can specify only one instance ID. By default, all instances are queried.
   * 
   * @example
   * i-5inkeimcipxk26yqtzm4q****
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
   * 2019-05-21T10:22:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      isp: 'Isp',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      isp: 'string',
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

