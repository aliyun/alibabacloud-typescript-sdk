// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address that is monitored by the task.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * For more information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * SystemDefault_acs_ecs_dashboard_InternetOutRate_Percent
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
   * The interval at which detection requests are sent.
   * 
   * Valid values: 1, 5, 15, 30, and 60. Unit: minutes.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  interval?: string;
  /**
   * @remarks
   * The information of the detection points. If you leave this parameter empty, the system randomly selects three detection points.
   * 
   * The value is a JSON array. Example: `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`. The values of the city field indicate Beijing, Hangzhou, and Qingdao.
   * 
   * For information about how to obtain detection points, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html).
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
   * The name of the site monitoring task.
   * 
   * The name must be 4 to 100 characters in length, and can contain letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * HanZhou_ECS1
   */
  taskName?: string;
  /**
   * @remarks
   * The protocol that is used by the site monitoring task.
   * 
   * Valid values: HTTP, HTTPS, PING, TCP, UDP, DNS, SMTP, POP3, FTP, and WEBSOCKET.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTPS
   */
  taskType?: string;
  /**
   * @example
   * {"vpcId": "vpc-xxxxxx", "vswitchId": "vsw-xxxxxx", "securityGroupId": "sg-xxxxxx", "region": "cn-beijing"}
   */
  vpcConfig?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      alertIds: 'AlertIds',
      customSchedule: 'CustomSchedule',
      interval: 'Interval',
      ispCities: 'IspCities',
      optionsJson: 'OptionsJson',
      regionId: 'RegionId',
      taskName: 'TaskName',
      taskType: 'TaskType',
      vpcConfig: 'VpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      alertIds: 'string',
      customSchedule: 'string',
      interval: 'string',
      ispCities: 'string',
      optionsJson: 'string',
      regionId: 'string',
      taskName: 'string',
      taskType: 'string',
      vpcConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

