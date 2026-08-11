// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseContactQueryPageListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The contact email.
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
   * xxx
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
   * 曾老师
   */
  contactName?: string;
  /**
   * @remarks
   * The position.
   * 
   * @example
   * 1
   */
  contactPosition?: string;
  /**
   * @remarks
   * The customer ID, compatible with the old model.
   * 
   * @example
   * xxx
   */
  customerId?: string;
  /**
   * @remarks
   * Whether the email is verified.
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
   * The entity type. Valid values: leId and customerId.
   * 
   * @example
   * customerId
   */
  entityType?: string;
  /**
   * @remarks
   * Whether the mobile number is verified.
   * 
   * @example
   * true
   */
  mobileConfirmed?: boolean;
  /**
   * @remarks
   * Whether it is a shared contact.
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
  data?: EnterpriseContactQueryPageListResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0A6196F-52A0-5EC9-B8D3-263CEF806EC4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true: The operation is successful. false: The operation failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Total data count.
   * 
   * @example
   * 11
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
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

