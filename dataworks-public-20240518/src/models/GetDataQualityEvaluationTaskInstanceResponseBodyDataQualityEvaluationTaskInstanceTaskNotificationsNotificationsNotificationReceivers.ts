// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityEvaluationTaskInstanceResponseBodyDataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * Additional parameter settings for sending alerts in json format. The supported keys are as follows:
   * 
   * - atAll: when sending DingTalk alerts, do you need to @ everyone in the group. It takes effect when ReceiverType is DingdingUrl.
   * 
   * @example
   * { "atAll": true }
   */
  extension?: string;
  /**
   * @remarks
   * The type of alert recipient.
   * 
   * @example
   * DingdingUrl
   */
  receiverType?: string;
  /**
   * @remarks
   * The recipient of the alert.
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

