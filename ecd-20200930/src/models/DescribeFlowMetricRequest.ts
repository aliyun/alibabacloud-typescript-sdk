// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The following formats are supported:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970.
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
   * The instance ID. The value can be a cloud computer ID or a premium public bandwidth plan ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-fwq23f13**** or np-6inxqsvcyv6z8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type. You can select the cloud computer type or the premium public bandwidth plan type. If you select the cloud computer type, set InstanceId and MetricType to the cloud computer ID and the traffic type of the cloud computer. The same rule applies to the premium public bandwidth plan type.
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  instanceType?: string;
  /**
   * @remarks
   * The monitoring metric type. This parameter supports the inbound and outbound bandwidth of a cloud computer, and the public inbound and outbound bandwidth of a premium public bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * intranetOutRate
   */
  metricType?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. The following formats are supported:
   * 
   * - UNIX timestamp: the number of milliseconds that have elapsed since January 1, 1970.
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

