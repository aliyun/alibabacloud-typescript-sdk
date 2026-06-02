// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactWhiteListResponseBodyContactWhitelistListList extends $dara.Model {
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  contactWhiteListId?: string;
  /**
   * @example
   * 1640174411848
   */
  creationTime?: number;
  creator?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * xxx
   */
  operator?: string;
  /**
   * @example
   * 13959999999
   */
  phoneNumber?: string;
  /**
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
   * @example
   * {}
   */
  list?: GetContactWhiteListResponseBodyContactWhitelistListList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * {}
   */
  contactWhitelistList?: GetContactWhiteListResponseBodyContactWhitelistList;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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

