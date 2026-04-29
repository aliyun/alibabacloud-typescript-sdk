// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListAssignedAgentGroupResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * name1
   */
  cname?: number;
  /**
   * @remarks
   * 座席编号
   * 
   * @example
   * 59517582
   */
  cno?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2026-03-30 06:12:30
   */
  createTime?: string;
  /**
   * @remarks
   * 呼叫中心编号
   * 
   * @example
   * 7122600
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 外呼组编号
   * 
   * @example
   * ZO874912
   */
  gno?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      cno: 'Cno',
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      gno: 'Gno',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'number',
      cno: 'string',
      createTime: 'string',
      enterpriseId: 'string',
      gno: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListAssignedAgentGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 返回数据
   */
  list?: CloudListAssignedAgentGroupResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudListAssignedAgentGroupResponseBodyDataList },
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

export class CloudListAssignedAgentGroupResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListAssignedAgentGroupResponseBodyData;
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
      data: CloudListAssignedAgentGroupResponseBodyData,
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

