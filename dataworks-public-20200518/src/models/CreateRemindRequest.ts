// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRemindRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum interval at which alerts are reported. Unit: seconds. Minimum value: 1200. Default value: 1800.
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
   * *   SMS: Alert notifications are sent by text message. Alert notifications can be sent by text message only in the Singapore, Malaysia (Kuala Lumpur), and Germany (Frankfurt) regions.
   * *   WEBHOOKS (WeCom or Lark chatbot): Alert notifications are sent by WeCom or Lark message. If you want to use this notification method, you must configure the Webhooks parameter.
   * 
   * You can specify multiple notification methods. Separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * SMS,MAIL
   */
  alertMethods?: string;
  /**
   * @remarks
   * *   If the AlertUnit parameter is set to OWNER, leave this parameter empty.
   * *   If the AlertUnit parameter is set to OTHER, set this parameter to the ID of the Alibaba Cloud account used by the specified user. You can specify multiple IDs. Separate multiple IDs with commas (,). You can specify a maximum of 10 IDs.
   * 
   * @example
   * 9527952795279527
   */
  alertTargets?: string;
  /**
   * @remarks
   * The recipient of the alert. Valid values: OWNER and OTHER. The value OWNER indicates the node owner. The value OTHER indicates a specified user.
   * 
   * This parameter is required.
   * 
   * @example
   * OWNER
   */
  alertUnit?: string;
  /**
   * @remarks
   * The ID of the baseline to which the custom alert rule is applied. This parameter takes effect when the RemindUnit parameter is set to BASELINE. You can specify multiple IDs. Separate multiple IDs with commas (,). A maximum of five baselines can be specified for a custom alert rule.
   * 
   * @example
   * 1,2,3
   */
  baselineIds?: string;
  /**
   * @remarks
   * The ID of the workflow to which the custom alert rule is applied. This parameter takes effect when the RemindUnit parameter is set to BIZPROCESS. You can specify multiple IDs. Separate multiple IDs with commas (,). A maximum of five workflows can be specified for a custom alert rule.
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
   * *   If the RemindType parameter is set to UNFINISHED, configure this parameter as key-value pairs. Example: {"hour":23,"minu":59}. Valid values of hour: [0,47]. Valid values of minu: [0,59].
   * *   If the RemindType parameter is set to ERROR, leave this parameter empty.
   * *   If the RemindType parameter is set to CYCLE_UNFINISHED, configure this parameter as key-value pairs. Example: {"1":"05:50","2":"06:50","3":"07:50","4":"08:50","5":"09:50","6":"10:50","7":"11:50","8":"12:50","9":"13:50","10":"14:50","11":"15:50","12":"16:50","13":"17:50","14":"18:50","15":"19:50","16":"20:50","17":"21:50","18":"22:50","19":"23:50","20":"24:50","21":"25:50"}. The key indicates the ID of the cycle. Valid values: [1,288]. The value indicates the timeout period of the node that is running in the cycle. Specify the value in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * *   If the RemindType parameter is set to TIMEOUT, set this parameter to the timeout period. Unit: seconds. Example: 1800. This value indicates that an alert is reported if the node has run for more than 30 minutes.
   * 
   * @example
   * {"hour":23,"minu":59}
   */
  detail?: string;
  /**
   * @remarks
   * The end time of the quiet hours. Specify the time in the hh:mm format. Valid values of hh: [0,23]. Valid values of mm: [0,59].
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
   * 2
   */
  maxAlertTimes?: number;
  /**
   * @remarks
   * The ID of the node to which the custom alert rule is applied. This parameter takes effect when the RemindUnit parameter is set to NODE. You can specify multiple IDs. Separate multiple IDs with commas (,). A maximum of 50 nodes can be specified for a custom alert rule.
   * 
   * @example
   * 1,2,3
   */
  nodeIds?: string;
  /**
   * @remarks
   * The ID of the workspace to which the custom alert rule is applied. This parameter takes effect when the RemindUnit parameter is set to PROJECT. You can specify only one workspace for a custom alert rule.
   * 
   * @example
   * 9527
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the custom alert rule. The name cannot exceed 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_error_remind
   */
  remindName?: string;
  /**
   * @remarks
   * The conditions that trigger an alert. Valid values: FINISHED, UNFINISHED, ERROR, CYCLE_UNFINISHED, and TIMEOUT.
   * 
   * This parameter is required.
   * 
   * @example
   * FINISHED
   */
  remindType?: string;
  /**
   * @remarks
   * The type of the object to which the custom alert rule is applied. Valid values: NODE, BASELINE, PROJECT, and BIZPROCESS. The value NODE indicates a node. The value BASELINE indicates a baseline. The value PROJECT indicates a workspace. The value BIZPROCESS indicates a workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * NODE
   */
  remindUnit?: string;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot. You can specify multiple webhook URLs. Separate multiple webhook URLs with commas (,).
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=******************************
   */
  robotUrls?: string;
  /**
   * @remarks
   * The webhook URL of the WeCom or Lark chatbot. You can specify multiple webhook URLs. Separate multiple webhook URLs with commas (,). You must specify WEBHOOKS for AlertMethods.
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
      remindName: 'RemindName',
      remindType: 'RemindType',
      remindUnit: 'RemindUnit',
      robotUrls: 'RobotUrls',
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
      remindName: 'string',
      remindType: 'string',
      remindUnit: 'string',
      robotUrls: 'string',
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

