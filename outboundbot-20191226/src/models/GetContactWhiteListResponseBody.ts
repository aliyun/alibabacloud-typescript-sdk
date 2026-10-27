// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactWhiteListResponseBodyContactWhitelistListList extends $dara.Model {
  /**
   * @remarks
   * The whitelist ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  contactWhiteListId?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640174411848
   */
  creationTime?: number;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * Test123
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
   * The name.
   * 
   * @example
   * Zhang San
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
   * The phone number.
   * 
   * @example
   * 13959999999
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * xxxx
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      contactWhiteListId: 'ContactWhiteListId',
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
      contactWhiteListId: 'string',
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

export class GetContactWhiteListResponseBodyContactWhitelistList extends $dara.Model {
  /**
   * @remarks
   * The contact whitelist.
   * 
   * @example
   * {}
   */
  list?: GetContactWhiteListResponseBodyContactWhitelistListList[];
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
      list: { 'type': 'array', 'itemType': GetContactWhiteListResponseBodyContactWhitelistListList },
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

export class GetContactWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The contact whitelist.
   * 
   * @example
   * {}
   */
  contactWhitelistList?: GetContactWhiteListResponseBodyContactWhitelistList;
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
   * The API message.
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
      contactWhitelistList: 'ContactWhitelistList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactWhitelistList: GetContactWhiteListResponseBodyContactWhitelistList,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.contactWhitelistList && typeof (this.contactWhitelistList as any).validate === 'function') {
      (this.contactWhitelistList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

