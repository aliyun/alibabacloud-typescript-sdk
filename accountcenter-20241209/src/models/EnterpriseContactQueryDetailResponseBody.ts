// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseContactQueryDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The contact email address.
   * 
   * @example
   * xx@xx.xx
   */
  contactEmail?: string;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * xx
   */
  contactId?: number;
  /**
   * @remarks
   * The contact mobile number.
   * 
   * @example
   * 1xxxxxxxxxx
   */
  contactMobile?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * xxx
   */
  contactName?: string;
  /**
   * @remarks
   * The position of the contact.
   * 
   * @example
   * 4
   */
  contactPosition?: string;
  /**
   * @remarks
   * The customer ID, compatible with the legacy model.
   * 
   * @example
   * xxx
   */
  customerId?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified.
   * 
   * @example
   * false
   */
  emailConfirmed?: boolean;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 3489d3bc-077a-449b-b41e-dd81f7451a42
   */
  entityId?: string;
  /**
   * @remarks
   * leId/customerId
   * 
   * @example
   * customerId
   */
  entityType?: string;
  /**
   * @remarks
   * Indicates whether the contact has subscribed to projects when querying contact details.
   * 
   * @example
   * xxx
   */
  hasSubscription?: boolean;
  /**
   * @remarks
   * Indicates whether the mobile number is verified.
   * 
   * @example
   * false
   */
  mobileConfirmed?: boolean;
  /**
   * @remarks
   * Indicates whether the contact is a shared contact.
   * 
   * @example
   * false
   */
  sharedContact?: boolean;
  /**
   * @remarks
   * The owner of the contact.
   * 
   * @example
   * xxx
   */
  uid?: string;
  /**
   * @remarks
   * The time when the contact was last modified.
   * 
   * @example
   * xxx
   */
  updateDate?: number;
  /**
   * @remarks
   * The user who last modified the contact.
   * 
   * @example
   * xxx
   */
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'ContactEmail',
      contactId: 'ContactId',
      contactMobile: 'ContactMobile',
      contactName: 'ContactName',
      contactPosition: 'ContactPosition',
      customerId: 'CustomerId',
      emailConfirmed: 'EmailConfirmed',
      entityId: 'EntityId',
      entityType: 'EntityType',
      hasSubscription: 'HasSubscription',
      mobileConfirmed: 'MobileConfirmed',
      sharedContact: 'SharedContact',
      uid: 'Uid',
      updateDate: 'UpdateDate',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactId: 'number',
      contactMobile: 'string',
      contactName: 'string',
      contactPosition: 'string',
      customerId: 'string',
      emailConfirmed: 'boolean',
      entityId: 'string',
      entityType: 'string',
      hasSubscription: 'boolean',
      mobileConfirmed: 'boolean',
      sharedContact: 'boolean',
      uid: 'string',
      updateDate: 'number',
      updateUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseContactQueryDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The operation result.
   */
  data?: EnterpriseContactQueryDetailResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F81F2090-8260-5052-BB93-7DF8996D25EB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * True
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
      data: EnterpriseContactQueryDetailResponseBodyData,
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

