// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadCommonContactResponseBodyData extends $dara.Model {
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
   * The contact ID in Account Center. A value of 0 indicates the account contact.
   * 
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @remarks
   * The mobile phone number of the contact in Account Center (masked).
   * 
   * @example
   * 130**123
   */
  contactMobile?: string;
  /**
   * @remarks
   * The contact name in Account Center.
   * 
   * @example
   * test
   */
  contactName?: string;
  /**
   * @remarks
   * Indicates whether the email address of the contact is verified.
   * 
   * @example
   * true
   */
  emailConfirmed?: boolean;
  /**
   * @remarks
   * Indicates whether the mobile phone number of the contact in Account Center is verified.
   * 
   * @example
   * true
   */
  mobileConfirmed?: boolean;
  /**
   * @remarks
   * The position of the contact in Account Center.
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

export class ReadCommonContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed. For more information, see error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: ReadCommonContactResponseBodyData;
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
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
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
      data: ReadCommonContactResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

