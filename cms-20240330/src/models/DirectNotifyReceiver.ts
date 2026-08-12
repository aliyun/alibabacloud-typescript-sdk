// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DirectNotifyReceiver extends $dara.Model {
  /**
   * @remarks
   * The list of notification channels. This parameter is valid only for person-based types (CONTACT/GROUP/DUTY). Valid values: SMS, CALL, EMAIL.
   */
  channels?: string[];
  /**
   * @remarks
   * The list of Notification Recipient identifiers. For person-based types, the identifiers are contacts, contact groups, or on-call schedule identifiers. For IM-based types, the identifiers are webhook identifiers.
   */
  identifiers?: string[];
  /**
   * @remarks
   * The Notification Recipient type. Person-object types (CONTACT/GROUP/DUTY) require channels to specify notification methods. IM-object types (DINGTALK/FEISHU/SLACK/WEIXIN/WEBHOOK) do not require channels.
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      identifiers: 'identifiers',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      identifiers: { 'type': 'array', 'itemType': 'string' },
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(Array.isArray(this.identifiers)) {
      $dara.Model.validateArray(this.identifiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

