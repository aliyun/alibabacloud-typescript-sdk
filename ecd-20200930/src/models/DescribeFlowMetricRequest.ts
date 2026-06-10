// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowMetricRequest extends $dara.Model {
  /**
   * @remarks
   * End Time. Supported formats:
   * 
   * - UNIX timestamp: the number of milliseconds elapsed since January 1, 1970.
   * 
   * - Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 1664714703743
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID, which can be either a cloud computr ID or a premium public bandwidth plan ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecd-fwq23f13****ornp-6inxqsvcyv6z8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. You can select either cloud computer type or premium public bandwidth type. If you select cloud computer type, the `InstanceId` and `MetricType` must be filled in with a cloud computer ID and its corresponding traffic type. The same applies to premium public bandwidth.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  instanceType?: string;
  /**
   * @remarks
   * The type of monitoring metric. Supports monitoring data for inbound and outbound bandwidth of cloud computers, as well as inbound and outbound bandwidth for public network access of premium public bandwidth.
   * 
   * This parameter is required.
   * 
   * @example
   * intranetOutRate
   */
  metricType?: string;
  /**
   * @remarks
   * The statistic period of monitoring data. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The Region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to obtain the list of Regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Start Time. Supported formats:
   * 
   * - UNIX timestamp: the number of milliseconds elapsed since January 1, 1970.
   * 
   * - Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 1651817220643
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      metricType: 'MetricType',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      metricType: 'string',
      period: 'number',
      regionId: 'string',
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

