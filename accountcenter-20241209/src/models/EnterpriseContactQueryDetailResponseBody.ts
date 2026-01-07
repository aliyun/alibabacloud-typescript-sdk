// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseContactQueryDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * xx@xx.xx
   */
  contactEmail?: string;
  /**
   * @example
   * xx
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
   * false
   */
  emailConfirmed?: boolean;
  /**
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
   * @example
   * xxx
   */
  hasSubscription?: boolean;
  /**
   * @example
   * false
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

export class EnterpriseContactQueryDetailResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: EnterpriseContactQueryDetailResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * F81F2090-8260-5052-BB93-7DF8996D25EB
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

