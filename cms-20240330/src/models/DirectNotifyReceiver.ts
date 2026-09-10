// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DirectNotifyReceiver extends $dara.Model {
  /**
   * @remarks
   * The list of notification channels. This parameter is valid only for person types (CONTACT/GROUP/DUTY). Valid values: SMS, CALL, EMAIL.
   */
  channels?: string[];
  /**
   * @remarks
   * The list of notification recipient identifiers. For person types, this is the identifier of the contact, contact group, or on-call schedule. For IM types, this is the webhook identifier.
   */
  identifiers?: string[];
  /**
   * @remarks
   * The Notification Recipient type. For person types (CONTACT/GROUP/DUTY), you must specify notification channels by using the channels parameter. For IM types (DINGTALK/FEISHU/SLACK/WEIXIN/WEBHOOK), the channels parameter is not required.
   * 
   * @example
   * CONTACT
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

