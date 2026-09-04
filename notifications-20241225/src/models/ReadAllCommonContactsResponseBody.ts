// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ReadAllCommonContactsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * /
   */
  aliUid?: number;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * t*@qq.*
   */
  contactEmail?: string;
  /**
   * @remarks
   * The contact ID in the Account Center. A value of 0 indicates the account contact.
   * 
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @remarks
   * The mobile phone number of the contact in the Account Center (masked).
   * 
   * @example
   * 130**123
   */
  contactMobile?: string;
  /**
   * @remarks
   * The contact name in the Account Center.
   * 
   * @example
   * test
   */
  contactName?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified.
   * 
   * @example
   * true
   */
  emailConfirmed?: boolean;
  /**
   * @remarks
   * Indicates whether the mobile phone number of the contact in the Account Center is verified.
   * 
   * @example
   * true
   */
  mobileConfirmed?: boolean;
  /**
   * @remarks
   * The position of the contact in the Account Center.
   * 
   * @example
   * CEO
   */
  position?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      contactEmail: 'ContactEmail',
      contactId: 'ContactId',
      contactMobile: 'ContactMobile',
      contactName: 'ContactName',
      emailConfirmed: 'EmailConfirmed',
      mobileConfirmed: 'MobileConfirmed',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      contactEmail: 'string',
      contactId: 'number',
      contactMobile: 'string',
      contactName: 'string',
      emailConfirmed: 'boolean',
      mobileConfirmed: 'boolean',
      position: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadAllCommonContactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: ReadAllCommonContactsResponseBodyData[];
  /**
   * @remarks
   * The result message.
   * 
   * @example
   * /
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73FD6AE8-898F-5D09-9763-69B8A875488A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ReadAllCommonContactsResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

