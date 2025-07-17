// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateNotificationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable simple mode.
   * 
   * @example
   * false
   */
  directedMode?: boolean;
  /**
   * @remarks
   * The ID of the escalation policy.
   * 
   * @example
   * 123
   */
  escalationPolicyId?: number;
  /**
   * @remarks
   * An array of alert event group objects.
   * 
   * *   If you do not specify the groupingFields field, all alerts will be sent to contacts based on `alertname`.
   * *   If you specify the groupingFields field, alerts with the same field will be sent to contacts in one notification.
   * 
   * Sample statement:
   * 
   *     { 
   *     "groupWait":5,    // The waiting time for grouping. 
   *     "groupInterval":30,     // The time interval of grouping. 
   *     "groupingFields":["alertname"]       // The field that is used to group alert events. 
   *     }
   * 
   * @example
   * { 	"groupWait":5, 	"groupInterval":30, 	"groupingFields":["alertname"] }
   */
  groupRule?: string;
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * *   If you do not specify this parameter, a new notification policy is created.
   * *   If you specify this parameter, the specified notification policy is modified.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The integration ID of the ticket system to which alerts are pushed.
   * 
   * @example
   * 34
   */
  integrationId?: number;
  /**
   * @remarks
   * The matching rules. Format:
   * 
   *     [
   *      {
   *      "matchingConditions": [
   *      { 
   *      "value": "test",    // The value of the matching condition. 
   *      "key": "alertname",     // The key of the matching condition. 
   *      "operator": "eq"   // The logical operator of the matching condition, including eq (equal to), neq (not equal to), in (contains), nin (does not contain), re (regular expression match), and nre (regular expression mismatch).   
   *      }
   *      ]
   *      } 
   *      ]
   * 
   * @example
   * [ 		 { 		 "matchingConditions": [          { 		 "value": "test", 		 "key": "alertname", 		 "operator": "eq"         }       ]     }   ]
   */
  matchingRules?: string;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * This parameter is required.
   * 
   * @example
   * notificationpolicy_test
   */
  name?: string;
  /**
   * @remarks
   * An array of notification rule objects. Format:
   * 
   *     { 
   *      "notifyStartTime":"00:00",      // The start time of the notification window. 
   *      "notifyEndTime":"23:59",       // The end time of the notification window. 
   *      "notifyChannels":["dingTalk", "email", "sms", "tts", "webhook"],       // The notification methods. Valid values: dingTalk, email, sms, tts, and webhook. 
   *      "notifyObjects":[{       // An array of notification objects. 
   *      "notifyObjectType":"CONTACT",       // The type of the notification object. Valid values: CONTACT (contact), CONTACT_GROUP (contact group), ARMS_CONTACT (ARMS contact), ARMS_CONTACT_GROUP (ARMS contact group), DING_ROBOT_GROUP (DingTalk, Lark, WeCom, or IM robot), and CONTACT_SCHEDULE (user on duty defined by a schedule). 
   *      "notifyObjectId":123,       // The ID of the notification object. 
   *      "notifyObjectName":"test"       // The name of the notification object. 
   *      }]
   * 
   * This parameter is required.
   * 
   * @example
   * {     "notifyStartTime":"00:00",     "notifyEndTime":"23:59",     "notifyChannels":[         "dingTalk",         "email",         "sms",         "tts",         "webhook"     ],     "notifyObjects":[         {             "notifyObjectType":"CONTACT",             "notifyObjectId":123,             "notifyObjectName":"test"         }     ] }
   */
  notifyRule?: string;
  /**
   * @remarks
   * The notification template. The default notification template is provided below the table.
   * 
   * @example
   * "robotContent":"{{if .commonLabels.clustername }} > Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} > Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}{{ for .alerts }} > {{.annotations.message}} {{if .generatorURL }} [Link]\\({{.generatorURL}}) {{ end }} {{if eq "true" .labels._aliyun_arms_is_denoise_filtered }} (Suspected noise) {{end}} {{end}}"
   */
  notifyTemplate?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to resend a notification for a long-lasting unresolved alert. Default value: true. Valid values:
   * 
   * *   `true`: If you set this parameter to `true`, you must set **RepeatInterval**.
   * *   `false`: If you set this parameter to `false`, you must set **EscalationPolicyId**.
   * 
   * @example
   * true
   */
  repeat?: boolean;
  /**
   * @remarks
   * The time interval at which a notification is resent for a long-lasting unresolved alert. Unit: seconds.
   * 
   * @example
   * 600
   */
  repeatInterval?: number;
  /**
   * @remarks
   * Specifies whether the status of an alert automatically changes to Resolved when all events related to the alert change to the Restored state. ARMS notifies contacts when the alert status changes to Resolved.
   * 
   * *   `true`: The system sends a notification.
   * *   `false`: The system does not send a notification.
   * 
   * @example
   * true
   */
  sendRecoverMessage?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the notification policy. Valid values: enable and disable.
   * 
   * @example
   * enable
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      directedMode: 'DirectedMode',
      escalationPolicyId: 'EscalationPolicyId',
      groupRule: 'GroupRule',
      id: 'Id',
      integrationId: 'IntegrationId',
      matchingRules: 'MatchingRules',
      name: 'Name',
      notifyRule: 'NotifyRule',
      notifyTemplate: 'NotifyTemplate',
      regionId: 'RegionId',
      repeat: 'Repeat',
      repeatInterval: 'RepeatInterval',
      sendRecoverMessage: 'SendRecoverMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directedMode: 'boolean',
      escalationPolicyId: 'number',
      groupRule: 'string',
      id: 'number',
      integrationId: 'number',
      matchingRules: 'string',
      name: 'string',
      notifyRule: 'string',
      notifyTemplate: 'string',
      regionId: 'string',
      repeat: 'boolean',
      repeatInterval: 'number',
      sendRecoverMessage: 'boolean',
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

