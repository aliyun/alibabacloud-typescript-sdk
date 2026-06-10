// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactWhiteListResponseBodyContactWhitelistListList extends $dara.Model {
  /**
   * @remarks
   * Whitelist ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  contactWhiteListId?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1640174411848
   */
  creationTime?: number;
  /**
   * @remarks
   * Creator
   * 
   * @example
   * 测试123
   */
  creator?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  instanceId?: string;
  /**
   * @remarks
   * Name
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * Operator
   * 
   * @example
   * xxx
   */
  operator?: string;
  /**
   * @remarks
   * Mobile phone number
   * 
   * @example
   * 13959999999
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Remarks
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
   * Contact list
   * 
   * @example
   * {}
   */
  list?: GetContactWhiteListResponseBodyContactWhitelistListList[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of entries
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
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Contact list
   * 
   * @example
   * {}
   */
  contactWhitelistList?: GetContactWhiteListResponseBodyContactWhitelistList;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
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

