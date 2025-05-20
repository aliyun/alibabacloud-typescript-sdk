// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventSubscriptionResponseBodyDataContacts extends $dara.Model {
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=68fa29a9eaf3ba9994f54fxxxc1aa9879700308f90e9c23ebfb3663642c9****
   */
  dingtalkHook?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * a***@example.net
   */
  email?: string;
  /**
   * @remarks
   * The contact groups to which the alert contact belongs.
   */
  groups?: string[];
  /**
   * @remarks
   * Indicates whether the alert contact name is the same as the contact name on CloudMonitor.
   * 
   * * **true**
   * * **false**
   * 
   * @example
   * true
   */
  isCmsReduplicated?: boolean;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * Mr. Zhang
   */
  name?: string;
  /**
   * @remarks
   * The mobile number of the alert contact.
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1088760496****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dingtalkHook: 'dingtalkHook',
      email: 'email',
      groups: 'groups',
      isCmsReduplicated: 'isCmsReduplicated',
      name: 'name',
      phone: 'phone',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkHook: 'string',
      email: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      isCmsReduplicated: 'boolean',
      name: 'string',
      phone: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

