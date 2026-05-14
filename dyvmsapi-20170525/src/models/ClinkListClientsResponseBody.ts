// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListClientsResponseBodyDataClients extends $dara.Model {
  /**
   * @remarks
   * 是否激活，0: 否；1: 是
   * 
   * @example
   * 1
   */
  active?: number;
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
   * 座席绑定电话
   * 
   * @example
   * xxx
   */
  bindTel?: string;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1775024775
   */
  createTime?: number;
  /**
   * @remarks
   * 座席crm id
   * 
   * @example
   * xxx
   */
  crmId?: string;
  /**
   * @remarks
   * 号码隐藏类型，0: 不隐藏；1: 隐藏规则与全局设置保持一致
   * 
   * @example
   * 0
   */
  hiddenTel?: number;
  /**
   * @remarks
   * 座席 Id
   * 
   * @example
   * 34
   */
  id?: number;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * 2222
   */
  name?: string;
  /**
   * @remarks
   * 座席所属队列的队列号数组
   */
  qnos?: string[];
  /**
   * @remarks
   * 座席角色，0: 普通座席；1: 班长座席
   * 
   * @example
   * 0
   */
  role?: number;
  /**
   * @remarks
   * 座席状态，0: 离线；1: 在线
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * 座席类型，1：全渠道、2：呼叫中心、3：在线客服
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 1775024775
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      areaCode: 'AreaCode',
      bindTel: 'BindTel',
      cno: 'Cno',
      createTime: 'CreateTime',
      crmId: 'CrmId',
      hiddenTel: 'HiddenTel',
      id: 'Id',
      name: 'Name',
      qnos: 'Qnos',
      role: 'Role',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      areaCode: 'string',
      bindTel: 'string',
      cno: 'string',
      createTime: 'number',
      crmId: 'string',
      hiddenTel: 'number',
      id: 'number',
      name: 'string',
      qnos: { 'type': 'array', 'itemType': 'string' },
      role: 'number',
      status: 'number',
      type: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qnos)) {
      $dara.Model.validateArray(this.qnos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListClientsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席对象列表
   */
  clients?: ClinkListClientsResponseBodyDataClients[];
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * xxx
   */
  clinkRequestId?: string;
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
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      clinkRequestId: 'ClinkRequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': ClinkListClientsResponseBodyDataClients },
      clinkRequestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkListClientsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkListClientsResponseBodyData;
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
      data: ClinkListClientsResponseBodyData,
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

