// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIAlarmRuleRequestNotificationSettingsNotificationReceivers extends $dara.Model {
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
   * *   If the ReceiverType parameter is set to AliyunUid, set this parameter to the Alibaba Cloud account ID of a user.
   * *   If the ReceiverType parameter is set to DingToken, set this parameter to the token of a DingTalk chatbot.
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

