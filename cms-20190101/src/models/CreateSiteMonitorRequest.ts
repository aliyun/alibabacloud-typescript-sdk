// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address to monitor.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The group of detection points for the network probe task. \\`PC\\` indicates detection points on PCs. \\`MOBILE\\` indicates detection points on mobile devices. \\`FC\\` indicates detection points in a VPC. The default value is \\`PC\\`.
   * 
   * @example
   * PC
   */
  agentGroup?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * For more information, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * SystemDefault_acs_ecs_dashboard_InternetOutRate_Percent
   */
  alertIds?: string;
  /**
   * @remarks
   * The custom detection schedule. Specify a time period and the days of the week for detection.
   * 
   * @example
   * {"start_hour":0,"end_hour":24, "days":[0], "time_zone":"Local"}
   */
  customSchedule?: string;
  /**
   * @remarks
   * The monitoring frequency in minutes.
   * 
   * Valid values: 1, 5, 15, 30, and 60.
   * 
   * Default: 1.
   * 
   * @example
   * 1
   */
  interval?: string;
  /**
   * @remarks
   * The detection points. If you do not specify this parameter, the system randomly selects three detection points from different Internet Service Providers (ISPs).
   * 
   * The value must be a JSON array. Example: `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`. The values correspond to Beijing, Hangzhou, and Qingdao.
   * 
   * For more information, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html).
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCities?: string;
  /**
   * @remarks
   * The advanced options for the specified protocol. The available options vary based on the protocol type.
   * 
   * @example
   * {"time_out":5000}
   */
  optionsJson?: string;
  regionId?: string;
  /**
   * @remarks
   * The name of the monitoring task.
   * 
   * The name must be 4 to 100 characters long and can contain letters, digits, underscores (_), and Chinese characters.
   * 
   * This parameter is required.
   * 
   * @example
   * HanZhou_ECS1
   */
  taskName?: string;
  /**
   * @remarks
   * The type of monitoring task.
   * 
   * Valid protocols include HTTP(S), PING, TCP, UDP, DNS, SMTP, POP3, FTP, and WEBSOCKET.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  taskType?: string;
  /**
   * @remarks
   * The network information required to create a network probe task in a VPC. This must be a JSON object that contains the \\`vpcId\\`, \\`vswitchId\\`, \\`securityGroupId\\`, and \\`region\\` fields.
   * 
   * @example
   * {"vpcId": "vpc-xxxxxx", "vswitchId": "vsw-xxxxxx", "securityGroupId": "sg-xxxxxx", "region": "cn-beijing"}
   */
  vpcConfig?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agentGroup: 'AgentGroup',
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
      agentGroup: 'string',
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

