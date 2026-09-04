// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadAllMarketingPreferencesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether notifications are allowed.
   * 
   * @example
   * true
   */
  allowMarketing?: boolean;
  /**
   * @remarks
   * The email address of the contact in the Account Center (masked).
   * 
   * @example
   * test@aliyun.com
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
   * 130*123
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
   * The position of the contact in the Account Center.
   * 
   * @example
   * CEO
   */
  position?: string;
  static names(): { [key: string]: string } {
    return {
      allowMarketing: 'AllowMarketing',
      contactEmail: 'ContactEmail',
      contactId: 'ContactId',
      contactMobile: 'ContactMobile',
      contactName: 'ContactName',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMarketing: 'boolean',
      contactEmail: 'string',
      contactId: 'number',
      contactMobile: 'string',
      contactName: 'string',
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

export class ReadAllMarketingPreferencesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned by the system. For more information about error codes, see error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The execution result.
   */
  data?: ReadAllMarketingPreferencesResponseBodyData[];
  /**
   * @remarks
   * The message.
   * 
   * @example
   * /
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
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
      data: { 'type': 'array', 'itemType': ReadAllMarketingPreferencesResponseBodyData },
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

