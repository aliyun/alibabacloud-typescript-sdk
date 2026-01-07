// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactQueryPageListResponseBodyData extends $dara.Model {
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
   * 1
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
   * @example
   * 200
   */
  code?: string;
  data?: AccountContactQueryPageListResponseBodyData[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3
   */
  pageNo?: number;
  /**
   * @example
   * 19
   */
  pageSize?: number;
  /**
   * @example
   * 27A90A55-120A-59DC-812E-62448D440E95
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 4
   */
  totalCount?: number;
  /**
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

