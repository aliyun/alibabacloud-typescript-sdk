// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMarketingPreferenceResponseBodyData extends $dara.Model {
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
   * The email address of the contact in Account Center.
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
   * 130*123
   */
  contactMobile?: string;
  /**
   * @remarks
   * The name of the contact in Account Center.
   * 
   * @example
   * test
   */
  contactName?: string;
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

export class ReadMarketingPreferenceResponseBody extends $dara.Model {
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
  data?: ReadMarketingPreferenceResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Succeeded
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
   * Indicates whether the call was successful. A value of true indicates success. A value of false indicates failure.
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
      data: ReadMarketingPreferenceResponseBodyData,
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

