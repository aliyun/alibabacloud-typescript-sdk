// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseContactQueryPageListResponseBodyData extends $dara.Model {
  /**
   * @example
   * xx@xx.xx
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
   * xx
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

export class EnterpriseContactQueryPageListResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: EnterpriseContactQueryPageListResponseBodyData[];
  /**
   * @remarks
   * msg
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * C0A6196F-52A0-5EC9-B8D3-263CEF806EC4
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 11
   */
  totalCount?: number;
  /**
   * @example
   * 0
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
      data: { 'type': 'array', 'itemType': EnterpriseContactQueryPageListResponseBodyData },
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

