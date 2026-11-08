// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The URL or IP address of the monitoring task.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The detection point group used by the monitoring task. Different options correspond to different detection point types. PC corresponds to PC clients, MOBIEL corresponds to mobile clients, and FC corresponds to VPC internal network detection. If this parameter is not specified, the default value is PC.
   * 
   * @example
   * PC
   */
  agentGroup?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * For more information about how to obtain the ID of an existing alert rule in CloudMonitor, see [DescribeMetricRuleList](https://help.aliyun.com/document_detail/114941.html).
   * 
   * @example
   * SystemDefault_acs_ecs_dashboard_InternetOutRate_Percent
   */
  alertIds?: string;
  /**
   * @remarks
   * The custom detection period. You can only select a specific time period from Monday to Sunday for detection.
   * 
   * @example
   * {"start_hour":0,"end_hour":24, "days":[0], "time_zone":"Local"}
   */
  customSchedule?: string;
  /**
   * @remarks
   * The monitoring frequency.
   * 
   * Valid values: 1 minute, 5 minutes, 15 minutes, 30 minutes, and 60 minutes.
   * 
   * Default value: 1 minute.
   * 
   * @example
   * 1
   */
  interval?: string;
  /**
   * @remarks
   * The probe information. If this parameter is left empty, the system randomly selects three detection points.
   * 
   * The value is a JSON array. Example: `[{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]`, which correspond to Beijing, Hangzhou, and Qingdao.
   * 
   * For more information about how to obtain detection point information, see [DescribeSiteMonitorISPCityList](https://help.aliyun.com/document_detail/115045.html).
   * 
   * @example
   * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]
   */
  ispCities?: string;
  /**
   * @remarks
   * The advanced extension options for the protocol type of the monitoring task. Different protocol types correspond to different extension options.
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
   * The name must be 4 to 100 characters in length and can contain letters, digits, underscores (_), and Chinese characters.
   * 
   * This parameter is required.
   * 
   * @example
   * HanZhou_ECS1
   */
  taskName?: string;
  /**
   * @remarks
   * Site monitoring type of site monitoring task.
   * 
   * Valid values: HTTP(S), PING, TCP, UDP, DNS, SMTP, POP3, FTP, and WEBSOCKET.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  taskType?: string;
  /**
   * @remarks
   * The network information required when creating a VPC internal network monitoring task. You must provide a JSON string that contains the following four fields: vpcId, vswitchId, securityGroupId, and region.
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

