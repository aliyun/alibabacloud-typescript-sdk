// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the event-triggered task.
   * 
   * @example
   * asg-bp1hvbnmkl10vll5****_f95ce797-dc2e-4bad-9618-14fee7d1****
   */
  alarmTaskId?: string;
  /**
   * @remarks
   * Specifies whether to enable the event-triggered task. Valid values:
   * 
   * *   true: enables the event-triggered task.
   * *   false: disables the event-triggered task.
   * 
   * @example
   * true
   */
  isEnable?: boolean;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * CpuUtilization
   */
  metricName?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * *   system: a system metric of CloudMonitor
   * *   custom: a custom metric that is reported to CloudMonitor.
   * *   hybrid: a metric of Hybrid Cloud Monitoring.
   * 
   * @example
   * true
   */
  metricType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the event-triggered task.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group with which the event-triggered task is associated.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The status of the event-triggered task. Valid values:
   * 
   * *   ALARM: The alert condition is met and an alert is triggered.
   * *   OK: The alert condition is not met.
   * *   INSUFFICIENT_DATA: Auto Scaling cannot determine whether the alert condition is met due to insufficient data.
   * 
   * @example
   * OK
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      alarmTaskId: 'AlarmTaskId',
      isEnable: 'IsEnable',
      metricName: 'MetricName',
      metricType: 'MetricType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmTaskId: 'string',
      isEnable: 'boolean',
      metricName: 'string',
      metricType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

