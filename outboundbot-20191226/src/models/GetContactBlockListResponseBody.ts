// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactBlockListResponseBodyContactBlocklistListList extends $dara.Model {
  /**
   * @remarks
   * The unique key of the entry in the do-not-call list.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  contactBlockListId?: string;
  /**
   * @remarks
   * The time when the entry was created.
   * 
   * @example
   * 1640077685465
   */
  creationTime?: number;
  /**
   * @remarks
   * The user who created the entry.
   * 
   * @example
   * xxx
   */
  creator?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * xxx
   */
  operator?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 1388888888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * xxxx
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      contactBlockListId: 'ContactBlockListId',
      creationTime: 'CreationTime',
      creator: 'Creator',
      instanceId: 'InstanceId',
      name: 'Name',
      operator: 'Operator',
      phoneNumber: 'PhoneNumber',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactBlockListId: 'string',
      creationTime: 'number',
      creator: 'string',
      instanceId: 'string',
      name: 'string',
      operator: 'string',
      phoneNumber: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactBlockListResponseBodyContactBlocklistList extends $dara.Model {
  /**
   * @remarks
   * The data array.
   * 
   * @example
   * []
   */
  list?: GetContactBlockListResponseBodyContactBlocklistListList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetContactBlockListResponseBodyContactBlocklistListList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactBlockListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of blocked contacts.
   * 
   * @example
   * {}
   */
  contactBlocklistList?: GetContactBlockListResponseBodyContactBlocklistList;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactBlocklistList: 'ContactBlocklistList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactBlocklistList: GetContactBlockListResponseBodyContactBlocklistList,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.contactBlocklistList && typeof (this.contactBlocklistList as any).validate === 'function') {
      (this.contactBlocklistList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

