// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListExtenResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 允许的语音编码,支持格式: 1. g729 2. g729,alaw,ulaw 3. alaw,ulaw,g729 4. alaw,ulaw 5. myopus,alaw,ulaw 公网+远程话机支持配置1/2/3;专线+远程话机支持配置1/2;公网+软电话支持配置4;专线+软电话支持配置5;
   * 
   * @example
   * alaw,ulaw
   */
  allow?: string;
  /**
   * @remarks
   * 区号
   * 
   * @example
   * 010
   */
  areaCode?: string;
  /**
   * @remarks
   * 呼叫权限，0：无限制，1：国内长途，2：国内本市，3：内部呼叫，默认无限制
   * 
   * @example
   * 0
   */
  callPower?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2026-03-30 06:09:02
   */
  createTime?: string;
  /**
   * @remarks
   * 降噪开关 0:关闭 1:开启 默认关闭(该参数只有在类型为注册到webrtc才有效)
   * 
   * @example
   * 0
   */
  denoise?: number;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7000002
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 分机号,3-11位
   * 
   * @example
   * 66749
   */
  exten?: string;
  /**
   * @remarks
   * 呼入是否录音，0：不录用，1：录音，默认录音
   * 
   * @example
   * 1
   */
  ibRecord?: number;
  /**
   * @remarks
   * 分机号id
   * 
   * @example
   * 59
   */
  id?: number;
  /**
   * @remarks
   * 是否允许摘机外呼，0：不允许，1：可以，默认允许
   * 
   * @example
   * 1
   */
  isDirect?: number;
  /**
   * @remarks
   * 是否允许外呼，0：不允许，1：可以，默认允许
   * 
   * @example
   * 1
   */
  isOb?: number;
  /**
   * @remarks
   * 网络防抖
   * 
   * @example
   * 0
   */
  jitterBuffer?: number;
  /**
   * @remarks
   * 外呼是否录音，0：不录音，1：录音，默认录音
   * 
   * @example
   * 1
   */
  obRecord?: number;
  /**
   * @remarks
   * 密码
   * 
   * @example
   * Aa626670
   */
  password?: string;
  /**
   * @remarks
   * 类型，1. 注册到IAD分机 2.注册到webrtc 3.注册到远程话机
   * 
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      allow: 'Allow',
      areaCode: 'AreaCode',
      callPower: 'CallPower',
      createTime: 'CreateTime',
      denoise: 'Denoise',
      enterpriseId: 'EnterpriseId',
      exten: 'Exten',
      ibRecord: 'IbRecord',
      id: 'Id',
      isDirect: 'IsDirect',
      isOb: 'IsOb',
      jitterBuffer: 'JitterBuffer',
      obRecord: 'ObRecord',
      password: 'Password',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allow: 'string',
      areaCode: 'string',
      callPower: 'string',
      createTime: 'string',
      denoise: 'number',
      enterpriseId: 'string',
      exten: 'string',
      ibRecord: 'number',
      id: 'number',
      isDirect: 'number',
      isOb: 'number',
      jitterBuffer: 'number',
      obRecord: 'number',
      password: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListExtenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3
   */
  endRow?: string;
  /**
   * @example
   * 1
   */
  firstPage?: string;
  /**
   * @example
   * false
   */
  hasNextPage?: number;
  /**
   * @example
   * true
   */
  hasPreviousPage?: number;
  /**
   * @example
   * true
   */
  isFirstPage?: number;
  /**
   * @example
   * true
   */
  isLastPage?: number;
  /**
   * @example
   * 1
   */
  lastPage?: string;
  list?: CloudListExtenResponseBodyDataList[];
  /**
   * @example
   * 示例值示例值
   */
  navigatePages?: string;
  navigatepageNums?: string[];
  /**
   * @example
   * 0
   */
  nextPage?: string;
  /**
   * @example
   * exten
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 1
   */
  pages?: string;
  /**
   * @example
   * 0
   */
  prePage?: string;
  /**
   * @example
   * 3
   */
  size?: string;
  /**
   * @example
   * 1
   */
  startRow?: string;
  /**
   * @example
   * 3
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      endRow: 'EndRow',
      firstPage: 'FirstPage',
      hasNextPage: 'HasNextPage',
      hasPreviousPage: 'HasPreviousPage',
      isFirstPage: 'IsFirstPage',
      isLastPage: 'IsLastPage',
      lastPage: 'LastPage',
      list: 'List',
      navigatePages: 'NavigatePages',
      navigatepageNums: 'NavigatepageNums',
      nextPage: 'NextPage',
      orderBy: 'OrderBy',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      prePage: 'PrePage',
      size: 'Size',
      startRow: 'StartRow',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endRow: 'string',
      firstPage: 'string',
      hasNextPage: 'number',
      hasPreviousPage: 'number',
      isFirstPage: 'number',
      isLastPage: 'number',
      lastPage: 'string',
      list: { 'type': 'array', 'itemType': CloudListExtenResponseBodyDataList },
      navigatePages: 'string',
      navigatepageNums: { 'type': 'array', 'itemType': 'string' },
      nextPage: 'string',
      orderBy: 'string',
      pageNum: 'string',
      pageSize: 'string',
      pages: 'string',
      prePage: 'string',
      size: 'string',
      startRow: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(Array.isArray(this.navigatepageNums)) {
      $dara.Model.validateArray(this.navigatepageNums);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListExtenResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListExtenResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudListExtenResponseBodyData,
      message: 'string',
      requestId: 'string',
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

