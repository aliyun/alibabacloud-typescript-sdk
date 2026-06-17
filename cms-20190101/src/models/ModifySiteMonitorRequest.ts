// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySiteMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address of the monitoring task.
   * 
   * @example
   * http://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The ID of the alert rule. The ID of an existing alert rule in CloudMonitor. You can call the DescribeMetricRuleList operation to query alert rule IDs. For more information, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * 49f7c317-7645-4cc9-94fd-ea42e122****
   */
  alertIds?: string;
  /**
   * @remarks
   * The custom monitoring schedule. You can select a specific time period from Monday to Sunday for monitoring.
   * 
   * @example
   * {"start_hour":0,"end_hour":24, "days":[0], "time_zone":"Local"}
   */
  customSchedule?: string;
  /**
   * @remarks
   * The monitoring frequency. Valid values: 1, 5, and 15. Unit: minutes. Default value: 1.
   * 
   * @example
   * 1
   */
  interval?: string;
  /**
   * @remarks
   * The unit of the monitoring metrics.
   * 
   * Unit: milliseconds (ms).
   * 
   * @example
   * ms
   */
  intervalUnit?: string;
  /**
   * @remarks
   * The detection point information. The value is in JSONArray format, for example: `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`, where `city` corresponds to Beijing, Hangzhou, and Qingdao respectively.
   * 
   * > You can call the DescribeSiteMonitorISPCityList operation to query detection point information. For more information, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html). If this parameter is left empty, the system randomly selects three detection points.
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCities?: string;
  /**
   * @remarks
   * The advanced extended options for the protocol type of the monitoring task. Different protocol types correspond to different extended options.
   * 
   * @example
   * {"time_out":5000}
   */
  optionsJson?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * 2c8dbdf9-a3ab-46a1-85a4-f094965e****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the monitoring task. The name must be 4 to 100 characters in length and can contain letters, digits, underscores (_), and Chinese characters.
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

