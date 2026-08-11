// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactQueryDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * xxx@xxx.xx
   */
  contactEmail?: string;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * xxx
   */
  contactId?: number;
  /**
   * @remarks
   * The mobile phone number of the contact.
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
   * The customer ID. This parameter is compatible with the legacy model.
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
   * true
   */
  emailConfirmed?: boolean;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * xxx
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
   * Indicates whether the contact has subscriptions when querying contact details.
   * 
   * @example
   * xxx
   */
  hasSubscription?: boolean;
  /**
   * @remarks
   * Indicates whether the mobile phone number is verified.
   * 
   * @example
   * true
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

export class AccountContactQueryDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The operation result.
   */
  data?: AccountContactQueryDetailResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DA632E90-32DB-52DE-823B-4A182169D954
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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
      data: AccountContactQueryDetailResponseBodyData,
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

