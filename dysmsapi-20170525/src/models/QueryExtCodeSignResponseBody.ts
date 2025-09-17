// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryExtCodeSignResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 是否可回收
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * 扩展码A3
   * 
   * @example
   * 01
   */
  extCode?: string;
  /**
   * @remarks
   * 近1个月发送成功条数（只读）
   * 
   * @example
   * 69
   */
  sendCount?: number;
  /**
   * @remarks
   * 签名
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  /**
   * @remarks
   * 来源
   * 
   * @example
   * 示例值示例值示例值
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      extCode: 'ExtCode',
      sendCount: 'SendCount',
      signName: 'SignName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      extCode: 'string',
      sendCount: 'number',
      signName: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExtCodeSignResponseBodyData extends $dara.Model {
  list?: QueryExtCodeSignResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 5
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
      list: { 'type': 'array', 'itemType': QueryExtCodeSignResponseBodyDataList },
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

export class QueryExtCodeSignResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QueryExtCodeSignResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
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
      data: QueryExtCodeSignResponseBodyData,
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

