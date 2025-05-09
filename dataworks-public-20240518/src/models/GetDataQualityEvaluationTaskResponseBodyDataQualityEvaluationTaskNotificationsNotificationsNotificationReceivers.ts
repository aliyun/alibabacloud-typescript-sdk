// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskResponseBodyDataQualityEvaluationTaskNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {  "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * The additional parameters that are required when alerts are sent. The parameters are JSON-formatted strings. The following keys are supported:
   * 
   * *   atAll: specifies that all members in a group are mentioned when alerts are sent by using DingTalk. This parameter is valid only if you set ReceiverType to DingdingUrl.
   * 
   * Valid values:
   * 
   * *   WebhookUrl
   * *   FeishuUrl
   * *   DingdingUrl
   * *   WeixinUrl
   * *   AliUid
   * 
   * @example
   * DingdingUrl
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

