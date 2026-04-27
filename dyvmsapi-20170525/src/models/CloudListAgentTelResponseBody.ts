// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListAgentTelResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 座席id
   * 
   * @example
   * 19
   */
  agentId?: number;
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
   * 座席工号
   * 
   * @example
   * 7098
   */
  cno?: string;
  /**
   * @remarks
   * 创建时间，格式: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7122600
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 座席电话id
   * 
   * @example
   * 9
   */
  id?: number;
  /**
   * @remarks
   * 是否绑定，0:未绑定 1:绑定
   * 
   * @example
   * 1
   */
  isBind?: number;
  /**
   * @remarks
   * 是否验证，0:未验证 1:已验证
   * 
   * @example
   * 1
   */
  isValidity?: number;
  /**
   * @remarks
   * 电话号码
   * 
   * @example
   * 41008502
   */
  tel?: string;
  /**
   * @remarks
   * 电话类型，1:固话 2:手机 3:分机 4:软电话
   * 
   * @example
   * 1
   */
  telType?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      areaCode: 'AreaCode',
      cno: 'Cno',
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      isBind: 'IsBind',
      isValidity: 'IsValidity',
      tel: 'Tel',
      telType: 'TelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      areaCode: 'string',
      cno: 'string',
      createTime: 'string',
      enterpriseId: 'number',
      id: 'number',
      isBind: 'number',
      isValidity: 'number',
      tel: 'string',
      telType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListAgentTelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席电话数组
   */
  list?: CloudListAgentTelResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudListAgentTelResponseBodyDataList },
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

export class CloudListAgentTelResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListAgentTelResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
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
      data: CloudListAgentTelResponseBodyData,
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

