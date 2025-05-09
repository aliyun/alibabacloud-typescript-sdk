// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRuleResponseBodyAlertRuleNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The additional configuration of the alert recipient. If the ReceiverType parameter is set to DingdingUrl, you can set this parameter to {"atAll":true} to remind all members in a DingTalk group.
   * 
   * @example
   * {"atAll":true}
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient. Valid valves:
   * 
   * *   AliUid: Alibaba Cloud account ID.
   * *   Shift Schedules: the personnel in a shift schedule.
   * *   TaskOwner: the task owner. The task owner can receive custom alerts and event alerts.
   * *   Owner: the baseline owner. The baseline owner can receive baseline alerts.
   * *   WebhookUrl: URL of a custom webhook.
   * *   DingdingUrl: DingTalk webhook URL.
   * *   FeishuUrl: Lark webhook URL.
   * *   WeixinUrl: WeCom webhook URL.
   * 
   * @example
   * WebhookUrl
   */
  receiverType?: string;
  /**
   * @remarks
   * The alert recipients.
   */
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.receiverValues)) {
      $dara.Model.validateArray(this.receiverValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

