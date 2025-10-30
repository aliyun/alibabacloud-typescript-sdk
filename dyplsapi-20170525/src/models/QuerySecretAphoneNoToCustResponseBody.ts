// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecretAPhoneNoToCustResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 所属a号码组id
   * 
   * @example
   * 19
   */
  ANoWhiteGroupId?: string;
  /**
   * @remarks
   * 固话报备的经办人/法人电话
   * 
   * @example
   * 130*****8888
   */
  custPhoneNo?: string;
  /**
   * @remarks
   * 号码类型
   * 
   * @example
   * Mobile
   */
  noType?: string;
  /**
   * @remarks
   * A号码
   * 
   * @example
   * 130*****1234
   */
  phoneNoA?: string;
  /**
   * @remarks
   * 备注（客户自己的业务备注，可编辑）
   * 
   * @example
   * ***报备
   */
  remark?: string;
  /**
   * @remarks
   * 报备失败原因
   * 
   * @example
   * ["系统判断为不同人"]
   */
  reportResult?: string;
  /**
   * @remarks
   * 报备结果
   * 
   * @example
   * REVIEWING
   */
  reportStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ANoWhiteGroupId: 'ANoWhiteGroupId',
      custPhoneNo: 'CustPhoneNo',
      noType: 'NoType',
      phoneNoA: 'PhoneNoA',
      remark: 'Remark',
      reportResult: 'ReportResult',
      reportStatus: 'ReportStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ANoWhiteGroupId: 'string',
      custPhoneNo: 'string',
      noType: 'string',
      phoneNoA: 'string',
      remark: 'string',
      reportResult: 'string',
      reportStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecretAPhoneNoToCustResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 请求状态码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * A号码报备状态查询结构体
   */
  data?: QuerySecretAPhoneNoToCustResponseBodyData;
  /**
   * @remarks
   * 失败错误提示
   * 
   * @example
   * 号码组不存在
   */
  message?: string;
  /**
   * @remarks
   * 返回id
   * 
   * @example
   * 1D73E648-0978-18A5-B089-3BB2
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否成功
   * 
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
      data: QuerySecretAPhoneNoToCustResponseBodyData,
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

