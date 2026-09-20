// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRemindRequest extends $dara.Model {
  /**
   * @remarks
   * The alert interval, in seconds. Minimum value: 1200. Default value: 1800.
   * 
   * @example
   * 1800
   */
  alertInterval?: number;
  /**
   * @remarks
   * The alert notification method. Valid values:
   * - MAIL
   * - SMS
   * - PHONE. Only DataWorks Professional Edition and higher support phone alerts.
   * - DINGROBOTS (DingTalk chatbot). This method takes effect only after the RobotUrls parameter is configured.
   * - Webhooks (WeCom or Lark chatbot). This method takes effect only after the Webhooks parameter is configured.
   * 
   * Separate multiple alert methods with commas (,).
   * 
   * @example
   * SMS,MAIL
   */
  alertMethods?: string;
  /**
   * @remarks
   * The configuration details for different alert recipients:
   * - When AlertUnit is set to OWNER (node owner), the configuration is left empty.
   * - When AlertUnit is set to OTHER (specified user), set this parameter to the Alibaba Cloud UIDs of the specified users. Separate multiple UIDs with commas (,). You can specify up to 10 users to receive alerts.
   * 
   * @example
   * 9527952795279527
   */
  alertTargets?: string;
  /**
   * @remarks
   * The recipient of the alert. Valid values:
   * - OWNER: the node owner.
   * - OTHER: a specified user.
   * 
   * @example
   * OWNER
   */
  alertUnit?: string;
  /**
   * @remarks
   * The baseline IDs when the monitored object is a baseline. A rule can monitor up to 5 baselines. Separate multiple baseline IDs with commas (,).
   * This parameter takes effect only when RemindUnit is set to BASELINE.
   * 
   * @example
   * 1,2,3
   */
  baselineIds?: string;
  /**
   * @remarks
   * The business process IDs when the monitored object is a business process. A rule can monitor up to 5 business processes. Separate multiple business process IDs with commas (,).
   * This parameter takes effect only when RemindUnit is set to BIZPROCESS.
   * 
   * @example
   * 1,2,3
   */
  bizProcessIds?: string;
  /**
   * @remarks
   * The configuration details for different trigger conditions:
   * - When RemindType (trigger condition) is set to FINISHED, the configuration is left empty.
   * - When RemindType (trigger condition) is set to UNFINISHED, the configuration format is {"hour":23,"minu":59}. Valid values of hour: [0,47\\]. Valid values of minu: [0,59\\].
   * - When RemindType (trigger condition) is set to ERROR, the configuration is left empty.
   * - When RemindType (trigger condition) is set to CYCLE_UNFINISHED (cycle unfinished), the configuration format is {"1":"05:50","2":"06:50","3":"07:50","4":"08:50","5":"09:50","6":"10:50","7":"11:50","8":"12:50","9":"13:50","10":"14:50","11":"15:50","12":"16:50","13":"17:50","14":"18:50","15":"19:50","16":"20:50","17":"21:50","18":"22:50","19":"23:50","20":"24:50","21":"25:50"}.
   * The key in the JSON string is the cycle number. Valid values: [1,288\\]. The value is the unfinished time for the corresponding cycle in the format hh:mm. Valid values of hh: [0,47\\]. Valid values of mm: [0,59\\].
   * - When RemindType (trigger condition) is set to TIMEOUT, the configuration format is 1800, in seconds. This means an alert is triggered if the instance has been running for more than 30 minutes.
   * 
   * @example
   * {"hour":23,"minu":59}
   */
  detail?: string;
  /**
   * @remarks
   * The end time of the do-not-disturb period. Alerts are not sent before this time. Format: hh:mm. Valid values of hh: [0,23\\]. Valid values of mm: [0,59\\].
   * 
   * @example
   * 08:00
   */
  dndEnd?: string;
  /**
   * @remarks
   * The maximum number of alerts. Valid values: [1,10\\]. Default value: 3.
   * 
   * @example
   * 3
   */
  maxAlertTimes?: number;
  /**
   * @remarks
   * The node IDs when the monitored object is a node. A rule can monitor up to 50 nodes. Separate multiple node IDs with commas (,).
   * This parameter takes effect only when RemindUnit is set to NODE.
   * 
   * @example
   * 1,2,3
   */
  nodeIds?: string;
  /**
   * @remarks
   * The workspace ID when the monitored object is a workspace. A rule can monitor only one workspace.
   * This parameter takes effect only when RemindUnit is set to PROJECT.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  remindId?: number;
  /**
   * @remarks
   * The name of the custom rule. The name cannot exceed 128 characters in length.
   * 
   * @example
   * update_remindname
   */
  remindName?: string;
  /**
   * @remarks
   * The condition that triggers the alert rule. Valid values:
   * - FINISHED: The system monitors the instance from the start time and sends an alert when the node runs successfully.
   * - UNFINISHED: The system monitors the instance from the start time and sends an alert if the node has not finished running by the specified target time.
   * - ERROR: The system monitors the instance from the start time and sends an alert when the node encounters an error.
   * - CYCLE_UNFINISHED: The system sends an alert if the instance has not finished running within the specified cycle. This is typically used to monitor instances that run on an hourly cycle.
   * - TIMEOUT: The system monitors the instance from the start time and sends an alert if the node has not finished running after the specified duration. This is typically used to monitor the running duration of instances.
   * 
   * For more information about alert trigger conditions, see [Custom rules](https://help.aliyun.com/document_detail/138172.html).
   * 
   * @example
   * FINISHED
   */
  remindType?: string;
  /**
   * @remarks
   * The type of the monitored object. Valid values:
   * - NODE
   * - BASELINE
   * - PROJECT (workspace)
   * - BIZPROCESS (business process)
   * 
   * @example
   * NODE
   */
  remindUnit?: string;
  /**
   * @remarks
   * The webhook URLs of DingTalk group chatbots. Separate multiple webhook URLs with commas (,).
   * When the parameter settings are set to undefined, the system clears the DingTalk chatbot webhook URLs.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=******************************
   */
  robotUrls?: string;
  /**
   * @remarks
   * Specifies whether to enable the alert rule. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  useFlag?: boolean;
  /**
   * @remarks
   * The webhook URLs of WeCom or Lark chatbots. Separate multiple webhook URLs with commas (,). The alertMethods parameter must include the WEBHOOKS alerting method. When the parameter is set to undefined, the system clears the webhook URLs.
   * 
   * Only DataWorks Enterprise Edition is supported.
   * Active regions: China (Shanghai), China (Chengdu), China (Zhangjiakou), China (Beijing), China (Hangzhou), China (Shenzhen), Hong Kong (China), Germany (Frankfurt), Asia-Pacific Southeast 1 (Singapore).
   * 
   * @example
   * https://open.feishu.cn/open-apis/bot/v2/hook/*******
   */
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      alertInterval: 'AlertInterval',
      alertMethods: 'AlertMethods',
      alertTargets: 'AlertTargets',
      alertUnit: 'AlertUnit',
      baselineIds: 'BaselineIds',
      bizProcessIds: 'BizProcessIds',
      detail: 'Detail',
      dndEnd: 'DndEnd',
      maxAlertTimes: 'MaxAlertTimes',
      nodeIds: 'NodeIds',
      projectId: 'ProjectId',
      remindId: 'RemindId',
      remindName: 'RemindName',
      remindType: 'RemindType',
      remindUnit: 'RemindUnit',
      robotUrls: 'RobotUrls',
      useFlag: 'UseFlag',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertInterval: 'number',
      alertMethods: 'string',
      alertTargets: 'string',
      alertUnit: 'string',
      baselineIds: 'string',
      bizProcessIds: 'string',
      detail: 'string',
      dndEnd: 'string',
      maxAlertTimes: 'number',
      nodeIds: 'string',
      projectId: 'number',
      remindId: 'number',
      remindName: 'string',
      remindType: 'string',
      remindUnit: 'string',
      robotUrls: 'string',
      useFlag: 'boolean',
      webhooks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

