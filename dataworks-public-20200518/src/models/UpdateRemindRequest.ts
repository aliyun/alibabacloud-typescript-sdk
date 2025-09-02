// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRemindRequest extends $dara.Model {
  /**
   * @remarks
   * The intervals at which alert notifications are sent. Unit: seconds. Minimum value: 1200. Default value: 1800.
   * 
   * @example
   * 1800
   */
  alertInterval?: number;
  /**
   * @remarks
   * The notification method. Valid values:
   * 
   * *   MAIL: Alert notifications are sent by email.
   * *   SMS: Alert notifications are sent by text message.
   * *   PHONE: Alert notifications are sent by phone call. You can use this notification method only in DataWorks Professional Edition or more advanced editions.
   * *   DINGROBOTS: Alert notifications are sent by DingTalk message. You can use this notification method only if the RobotUrls parameter is configured.
   * *   WEBHOOKS (WeCom or Lark chatbot): Alert notifications are sent by WeCom or Lark message. You can use this notification method only if the Webhooks parameter is configured.
   * 
   * Multiple notification methods are separated by commas (,).
   * 
   * @example
   * SMS,MAIL
   */
  alertMethods?: string;
  /**
   * @remarks
   * The value format required by this parameter varies based on the value that you specify for the AlertUnit parameter. Take note of the following items:
   * 
   * *   If the AlertUnit parameter is set to OWNER, leave this parameter empty.
   * *   If the AlertUnit parameter is set to OTHER, set this parameter to the unique ID (UID) of the specified user. You can specify multiple UIDs. Separate them with commas (,). A maximum of 10 UIDs can be specified for receiving alert notifications.
   * 
   * @example
   * 9527952795279527
   */
  alertTargets?: string;
  /**
   * @remarks
   * The recipient to whom alert notifications are sent. Valid values: OWNER and OTHER. The value OWNER indicates that alert notifications are sent to the object owner. The value OTHER indicates that alert notifications are sent to a specified user.
   * 
   * @example
   * OWNER
   */
  alertUnit?: string;
  /**
   * @remarks
   * The ID of the baseline to which the custom alert rule is applied. A maximum of 5 baselines can be specified for a custom alert rule. You can specify multiple IDs. Separate multiple IDs with commas (,). This parameter takes effect when you set the RemindUnit parameter to BASELINE.
   * 
   * @example
   * 1,2,3
   */
  baselineIds?: string;
  /**
   * @remarks
   * The ID of the workflow to which the custom alert rule is applied. A maximum of 5 workflows can be specified for a custom alert rule. You can specify multiple IDs. Separate multiple IDs with commas (,). This parameter takes effect when you set the RemindUnit parameter to BIZPROCESS.
   * 
   * @example
   * 1,2,3
   */
  bizProcessIds?: string;
  /**
   * @remarks
   * The details of the conditions that trigger an alert.
   * 
   * *   If the RemindType parameter is set to FINISHED, leave this parameter empty.
   * *   If the RemindType parameter is set to UNFINISHED, set this parameter to key-value pairs. Example: {"hour":23,"minu":59}. Valid values of hour: [0,47]. Valid values of minu: [0,59].
   * *   If the RemindType parameter is set to ERROR, leave this parameter empty.
   * *   If the RemindType parameter is set to CYCLE_UNFINISHED, set this parameter to key-value pairs in the JSON format. Example: {"1":"05:50","2":"06:50","3":"07:50","4":"08:50","5":"09:50","6":"10:50","7":"11:50","8":"12:50","9":"13:50","10":"14:50","11":"15:50","12":"16:50","13":"17:50","14":"18:50","15":"19:50","16":"20:50","17":"21:50","18":"22:50","19":"23:50","20":"24:50","21":"25:50"}. A key in the JSON string indicates the sequence number of a cycle. Valid values of keys: 1 to 288. A value in the JSON string indicates the time in point when a monitored instance times out in the relevant cycle. Values must be in the format of hh:mm. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * *   If the RemindType parameter is set to TIMEOUT, set this parameter to the timeout period. Unit: seconds. Example: 1800. This indicates that an alert notification is sent if the running duration of a monitored instance exceeds 30 minutes.
   * 
   * @example
   * {"hour":23,"minu":59}
   */
  detail?: string;
  /**
   * @remarks
   * The end of the period during which no alert notifications are sent. Specify the time in the hh:mm format. Valid values of hh: [0,23]. Valid values of mm: [0,59].
   * 
   * @example
   * 08:00
   */
  dndEnd?: string;
  /**
   * @remarks
   * The maximum number of alerts. Valid values: 1 to 10. Default value: 3.
   * 
   * @example
   * 3
   */
  maxAlertTimes?: number;
  /**
   * @remarks
   * The ID of the node to which the custom alert rule is applied. A maximum of 50 nodes can be specified for a custom alert rule. You can specify multiple IDs. Separate multiple IDs with commas (,). This parameter takes effect when you set the RemindUnit parameter to NODE.
   * 
   * @example
   * 1,2,3
   */
  nodeIds?: string;
  /**
   * @remarks
   * The ID of the workspace to which the custom alert rule is applied. You can specify only one workspace for a custom alert rule. This parameter takes effect when you set the RemindUnit parameter to PROJECT.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The custom alert rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  remindId?: number;
  /**
   * @remarks
   * The name of the custom alert rule. The name cannot exceed 128 characters in length.
   * 
   * @example
   * update_remindname
   */
  remindName?: string;
  /**
   * @remarks
   * The condition that triggers the alert rule. Valid values:
   * 
   * *   FINISHED: The system monitors an instance when it starts to run and sends an alert notification after the running of the instance is complete.
   * *   UNFINISHED: The system monitors an instance when it starts to run and sends an alert notification if the instance is still running at the specified point in time.
   * *   ERROR: The system monitors an instance when it starts to run and sends an alert notification if an error occurs.
   * *   CYCLE_UNFINISHED: The system sends an alert notification if a monitored instance is still running at the end of the specified cycle. In most cases, you can configure this trigger condition for node instances that are scheduled to run by hour.
   * *   TIMEOUT: The system monitors an instance when it starts to run and sends an alert notification if the instance is still running after the specified period ends. In most cases, you can configure this trigger condition to monitor the running duration of node instances.
   * 
   * For more information, see [Manage custom alert rules](https://help.aliyun.com/document_detail/138172.html).
   * 
   * @example
   * FINISHED
   */
  remindType?: string;
  /**
   * @remarks
   * The type of the object to which the custom alert rule is applied. Valid values:
   * 
   * *   NODE
   * *   BASELINE
   * *   PROJECT
   * *   BIZPROCESS
   * 
   * @example
   * NODE
   */
  remindUnit?: string;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot. You can specify multiple webhook URLs. Separate multiple webhook URLs with commas (,). If this parameter is set to undefined, the specified webhook URLs are cleared.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=******************************
   */
  robotUrls?: string;
  /**
   * @remarks
   * Specifies whether to enable the alert rule. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  useFlag?: boolean;
  /**
   * @remarks
   * The webhook URL of the WeCom or Lark chatbot. You can specify multiple webhook URLs. Separate multiple webhook URLs with commas (,). The value of AlertMethods must include WEBHOOKS. If this parameter is set to undefined, the specified webhook URLs are cleared.
   * 
   * Only DataWorks Enterprise Edition supports this parameter. The webhook URL-based alerting feature is supported in the following regions: China (Shanghai), China (Chengdu), China (Zhangjiakou), China (Beijing), China (Hangzhou), China (Shenzhen), China (Hong Kong), Germany (Frankfurt), and Singapore.
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

