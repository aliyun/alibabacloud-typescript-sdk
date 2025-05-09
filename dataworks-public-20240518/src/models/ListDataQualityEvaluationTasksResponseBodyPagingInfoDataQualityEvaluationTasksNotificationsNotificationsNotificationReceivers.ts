// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasksNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The extended information in the JSON format. For example, the DingTalk chatbot can remind all members in a DingTalk group by using the at sign (@).
   * 
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @remarks
   * The type of the alert recipient. Valid values:
   * 
   * *   AliUid: Alibaba Cloud account ID
   * *   WebhookUrl: URL of a custom webhook
   * *   DingdingUrl: DingTalk chatbot URL
   * *   FeishuUrl: Lark chatbot URL
   * *   WeixinUrl: WeCom chatbot URL
   * 
   * @example
   * AliUid
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

