// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactQueryDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxx@xxx.xx
   */
  contactEmail?: string;
  /**
   * @example
   * xxx
   */
  contactId?: number;
  /**
   * @example
   * 1xxxxxxxxxx
   */
  contactMobile?: string;
  /**
   * @example
   * xxx
   */
  contactName?: string;
  /**
   * @example
   * 4
   */
  contactPosition?: string;
  /**
   * @example
   * xxx
   */
  customerId?: string;
  /**
   * @example
   * true
   */
  emailConfirmed?: boolean;
  /**
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
   * @example
   * xxx
   */
  hasSubscription?: boolean;
  /**
   * @example
   * true
   */
  mobileConfirmed?: boolean;
  /**
   * @example
   * false
   */
  sharedContact?: boolean;
  /**
   * @example
   * xxx
   */
  uid?: string;
  /**
   * @example
   * xxx
   */
  updateDate?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: AccountContactQueryDetailResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * DA632E90-32DB-52DE-823B-4A182169D954
   */
  requestId?: string;
  /**
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

