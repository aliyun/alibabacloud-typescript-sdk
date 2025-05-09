// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The recipient type. Valid values: AliyunUid, DingToken, FeishuToken, and WebHookUrl.
   * 
   * @example
   * DingToken
   */
  receiverType?: string;
  /**
   * @remarks
   * The recipient.
   * 
   * *   If the value of the ReceiverType parameter is AliyunUid, the value of this parameter is the Alibaba Cloud account ID of a user.
   * *   If the value of the ReceiverType parameter is DingToken, the value of this parameter is the token of a DingTalk chatbot.
   */
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

