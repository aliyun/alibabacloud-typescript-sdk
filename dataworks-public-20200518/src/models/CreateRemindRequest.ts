// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRemindRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum alert interval, in seconds. Minimum value: 1200. Default value: 1800.
   * 
   * @example
   * 1800
   */
  alertInterval?: number;
  /**
   * @remarks
   * The alert method. Valid values:
   * - MAIL: email.
   * - SMS: text message.
   * <props="intl">The regions that support SMS alerts are Singapore, Malaysia (Kuala Lumpur), and Germany (Frankfurt).
   * <props="china">- PHONE: phone call. Only DataWorks Professional Edition and higher editions are supported.
   * - Webhooks (WeCom or Lark chatbot). This alert method takes effect only after the Webhooks parameter is configured.
   * - DINGROBOTS: DingTalk chatbot.
   * 
   * Separate multiple alert methods with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * SMS,MAIL
   */
  alertMethods?: string;
  /**
   * @remarks
   * - When AlertUnit (alert recipient) is set to OWNER (node owner), pass an empty value.
   * 
   * - When AlertUnit (alert recipient) is set to OTHER (specified user), pass the Alibaba Cloud UIDs of the specified users. Separate multiple Alibaba Cloud UIDs with commas (,). A maximum of 10 UIDs are supported.
   * 
   * @example
   * 9527952795279527
   */
  alertTargets?: string;
  /**
   * @remarks
   * The granularity of the alert recipient. Valid values: OWNER (node owner) and OTHER (specified user).
   * 
   * This parameter is required.
   * 
   * @example
   * OWNER
   */
  alertUnit?: string;
  /**
   * @remarks
   * The IDs of the baselines to monitor when RemindUnit (object type) is set to BASELINE (baseline). Separate multiple IDs with commas (,). A maximum of 5 baselines can be monitored by a single rule.
   * 
   * @example
   * 1,2,3
   */
  baselineIds?: string;
  /**
   * @remarks
   * The IDs of the business processes to monitor when RemindUnit (object type) is set to BIZPROCESS (business process). Separate multiple business process IDs with commas (,). A maximum of 5 business processes can be monitored by a single rule.
   * 
   * @example
   * 1,2,3
   */
  bizProcessIds?: string;
  /**
   * @remarks
   * The descriptions for different trigger conditions are as follows:
   * 
   * - When RemindType (trigger condition) is set to FINISHED (completed), pass an empty value.
   * 
   * - When RemindType (trigger condition) is set to UNFINISHED (not completed), pass parameter in the format of {"hour":23,"minu":59}. Valid values of hour: [0,47\\]. Valid values of minu: [0,59\\].
   * 
   * - When RemindType (trigger condition) is set to ERROR (error), pass an empty value.
   * 
   * - When RemindType (trigger condition) is set to CYCLE_UNFINISHED (cycle not completed), pass parameter in the format of {"1":"05:50","2":"06:50","3":"07:50","4":"08:50","5":"09:50","6":"10:50","7":"11:50","8":"12:50","9":"13:50","10":"14:50","11":"15:50","12":"16:50","13":"17:50","14":"18:50","15":"19:50","16":"20:50","17":"21:50","18":"22:50","19":"23:50","20":"24:50","21":"25:50"}. The key in the JSON character string is the cycle number. Valid values: [1,288\\]. The value is the not-completed time for the corresponding cycle, in the hh:mm format. Valid values of hh: [0,47\\]. Valid values of mm: [0,59\\].
   * 
   * - When RemindType (trigger condition) is set to TIMEOUT (running timeout), pass parameter as a value such as 1800, in seconds. This means that an alert is triggered if the running time exceeds 30 minutes from the start of execution.
   * 
   * @example
   * {"hour":"23","minu":"59"}
   */
  detail?: string;
  /**
   * @remarks
   * The end time of the do-not-disturb period, in the hh:mm format. Valid values of hh: [0,23\\]. Valid values of mm: [0,59\\].
   * 
   * @example
   * 08:00
   */
  dndEnd?: string;
  /**
   * @remarks
   * The maximum number of alerts. Minimum value: 1. Maximum value: 10. Default value: 3.
   * 
   * @example
   * 2
   */
  maxAlertTimes?: number;
  /**
   * @remarks
   * The IDs of the nodes to monitor when RemindUnit (object type) is set to NODE (node). Separate multiple IDs with commas (,). A maximum of 50 nodes can be monitored by a single rule.
   * 
   * @example
   * 1,2,3
   */
  nodeIds?: string;
  /**
   * @remarks
   * The ID of the workspace to monitor when RemindUnit (object type) is set to PROJECT (workspace). A single rule can monitor only one workspace.
   * 
   * @example
   * 9527
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the custom rule. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_error_remind
   */
  remindName?: string;
  /**
   * @remarks
   * The trigger condition. Valid values: FINISHED (completed), UNFINISHED (not completed), ERROR (error), CYCLE_UNFINISHED (cycle not completed), and TIMEOUT (running timeout).
   * 
   * This parameter is required.
   * 
   * @example
   * FINISHED
   */
  remindType?: string;
  /**
   * @remarks
   * The type of the object. Valid values: NODE (node), BASELINE (baseline), PROJECT (workspace), and BIZPROCESS (business process).
   * 
   * This parameter is required.
   * 
   * @example
   * NODE
   */
  remindUnit?: string;
  /**
   * @remarks
   * The webhook URLs of DingTalk chatbots. Separate multiple webhook URLs with commas (,).
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=******************************
   */
  robotUrls?: string;
  /**
   * @remarks
   * The webhook URLs of WeCom or Lark chatbots. Separate multiple webhook URLs with commas (,). The alertMethods parameter must include the WEBHOOKS alert method.
   * 
   * Only DataWorks Enterprise Edition is supported.
   * Available regions: China (Shanghai), China (Chengdu), China (Zhangjiakou), China (Beijing), China (Hangzhou), China (Shenzhen), Hong Kong (China), Germany (Frankfurt), and Singapore.
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

