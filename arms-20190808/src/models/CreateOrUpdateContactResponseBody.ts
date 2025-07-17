// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateContactResponseBodyAlertContact extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * @example
   * 123
   */
  contactId?: number;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * JohnDoe
   */
  contactName?: string;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://test1.com
   */
  dingRobotUrl?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the mobile number was verified. Valid values:
   * 
   * *   `false` (default value): No
   * *   `true`: Yes
   * 
   * You can call the **SendTTSVerifyLink** operation to verify the mobile number of an alert contact. Only verified mobile numbers can be specified in a notification policy to receive phone calls.
   * 
   * @example
   * false
   */
  isVerify?: boolean;
  /**
   * @remarks
   * The mobile number of the alert contact.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The operation that you want to perform if phone calls fail to be answered. Valid values: 0: No operation is performed. 1: A phone call is made again. 2: A text message is sent. 3 (default value): The global default value is used.
   * 
   * @example
   * 3
   */
  reissueSendNotice?: number;
  /**
   * @remarks
   * Indicates whether the email address was verified.
   * 
   * @example
   * true
   */
  isEmailVerify?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      dingRobotUrl: 'DingRobotUrl',
      email: 'Email',
      isVerify: 'IsVerify',
      phone: 'Phone',
      reissueSendNotice: 'ReissueSendNotice',
      isEmailVerify: 'isEmailVerify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      dingRobotUrl: 'string',
      email: 'string',
      isVerify: 'boolean',
      phone: 'string',
      reissueSendNotice: 'number',
      isEmailVerify: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The object of the alert contact.
   */
  alertContact?: CreateOrUpdateContactResponseBodyAlertContact;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9C9DA3D-10FE-472E-9EEF-2D0A3E41****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertContact: 'AlertContact',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertContact: CreateOrUpdateContactResponseBodyAlertContact,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertContact && typeof (this.alertContact as any).validate === 'function') {
      (this.alertContact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

