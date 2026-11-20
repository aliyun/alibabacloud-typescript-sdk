// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecretTransferDetailsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 杭州
   */
  city?: string;
  /**
   * @example
   * 号码不存在
   */
  failReason?: string;
  /**
   * @example
   * "2026-11-20 00:00:00"
   */
  gmtCreate?: string;
  /**
   * @example
   * "2026-11-20 00:00:00"
   */
  gmtModified?: string;
  /**
   * @example
   * 90
   */
  id?: number;
  /**
   * @example
   * 46
   */
  recordId?: number;
  /**
   * @example
   * 138XXXXXX
   */
  secretNo?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      failReason: 'FailReason',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      recordId: 'RecordId',
      secretNo: 'SecretNo',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      failReason: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      recordId: 'number',
      secretNo: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretTransferDetailsResponseBodyData extends $dara.Model {
  list?: QuerySecretTransferDetailsResponseBodyDataList[];
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
   * 87
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QuerySecretTransferDetailsResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
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

export class QuerySecretTransferDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QuerySecretTransferDetailsResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 123456
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QuerySecretTransferDetailsResponseBodyData,
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

