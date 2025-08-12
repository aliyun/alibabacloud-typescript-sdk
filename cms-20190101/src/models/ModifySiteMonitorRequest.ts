// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySiteMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address that is monitored by the task.
   * 
   * @example
   * http://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The ID of the alert rule. You can call the DescribeMetricRuleList operation to query the IDs of existing alert rules in CloudMonitor. For more information, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * 49f7c317-7645-4cc9-94fd-ea42e122****
   */
  alertIds?: string;
  /**
   * @remarks
   * The custom detection period. You can only select a time period from Monday to Sunday for detection.
   * 
   * @example
   * {"start_hour":0,"end_hour":24, "days":[0], "time_zone":"Local"}
   */
  customSchedule?: string;
  /**
   * @remarks
   * The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit: minutes. Default value: 1.
   * 
   * @example
   * 1
   */
  interval?: string;
  /**
   * @remarks
   * The unit of the metric.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * ms
   */
  intervalUnit?: string;
  /**
   * @remarks
   * The information of the detection points. The value is a JSON array. Example: `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`. The values of the `city` field indicate Beijing, Hangzhou, and Qingdao.
   * 
   * > You can call the DescribeSiteMonitorISPCityList operation to query the detection points. For more information, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html). If you leave this parameter empty, the system randomly selects three detection points.
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCities?: string;
  /**
   * @remarks
   * The extended options of the protocol that is used by the site monitoring task. The options vary based on the protocol.
   * 
   * @example
   * {"time_out":5000}
   */
  optionsJson?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the site monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 2c8dbdf9-a3ab-46a1-85a4-f094965e****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the site monitoring task. The name must be 4 to 100 characters in length, and can contain letters, digits, and underscores (_).
   * 
   * @example
   * HanZhou_ECS2
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      alertIds: 'AlertIds',
      customSchedule: 'CustomSchedule',
      interval: 'Interval',
      intervalUnit: 'IntervalUnit',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      alertIds: 'string',
      customSchedule: 'string',
      interval: 'string',
      intervalUnit: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      regionId: 'string',
      taskId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

