// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactQueryPageListResponseBodyData extends $dara.Model {
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
   * The mobile number of the contact.
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
   * 1
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
   * Indicates whether the mobile number is verified.
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
      mobileConfirmed: 'MobileConfirmed',
      sharedContact: 'SharedContact',
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
      mobileConfirmed: 'boolean',
      sharedContact: 'boolean',
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

export class AccountContactQueryPageListResponseBody extends $dara.Model {
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
  data?: AccountContactQueryPageListResponseBodyData[];
  /**
   * @remarks
   * The log content of the standard output during function execution.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 3
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 19
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 27A90A55-120A-59DC-812E-62448D440E95
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
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': AccountContactQueryPageListResponseBodyData },
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
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

