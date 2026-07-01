// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMobilesCardSupportResponseBodyDataQueryResult extends $dara.Model {
  /**
   * @remarks
   * 查询的手机号码。
   * 
   * @example
   * 1380000****
   */
  mobile?: string;
  /**
   * @remarks
   * 是否支持卡片短信。取值：
   * 
   * - **true**：支持。
   * - **false**：不支持。
   * 
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      support: 'Support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
      support: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 查询值。
   */
  queryResult?: QueryMobilesCardSupportResponseBodyDataQueryResult[];
  static names(): { [key: string]: string } {
    return {
      queryResult: 'QueryResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: { 'type': 'array', 'itemType': QueryMobilesCardSupportResponseBodyDataQueryResult },
    };
  }

  validate() {
    if(Array.isArray(this.queryResult)) {
      $dara.Model.validateArray(this.queryResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMobilesCardSupportResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求状态码。
   * 
   * - 返回OK代表请求成功。
   * - 其他错误码，请参见[错误码列表](https://help.aliyun.com/document_detail/101346.html)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回数据。
   */
  data?: QueryMobilesCardSupportResponseBodyData;
  /**
   * @remarks
   * 阿里云为该请求生成的唯一标识符。
   * 
   * @example
   * 08C17DFE-2E10-54F4-BAFB-7180039CC217
   */
  requestId?: string;
  /**
   * @remarks
   * 调用接口是否成功。取值：
   * 
   * - **true**：调用成功。
   * 
   * - **false**：调用失败。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryMobilesCardSupportResponseBodyData,
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

