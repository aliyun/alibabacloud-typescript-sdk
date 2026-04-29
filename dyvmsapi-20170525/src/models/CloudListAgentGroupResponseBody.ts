// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListAgentGroupResponseBodyDataListCtiLinkAgentGroup extends $dara.Model {
  /**
   * @remarks
   * 描述信息
   * 
   * @example
   * comment1
   */
  comment?: string;
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
   * 外呼组编号
   * 
   * @example
   * ZO874912
   */
  gno?: string;
  /**
   * @remarks
   * 外呼组名称
   * 
   * @example
   * gpname1
   */
  groupName?: string;
  /**
   * @remarks
   * 外呼组类型 1：外呼总组 2：外呼组
   * 
   * @example
   * 2
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      gno: 'Gno',
      groupName: 'GroupName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'string',
      enterpriseId: 'number',
      gno: 'string',
      groupName: 'string',
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

export class CloudListAgentGroupResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * ""
   */
  childGnos?: string;
  ctiLinkAgentGroup?: CloudListAgentGroupResponseBodyDataListCtiLinkAgentGroup;
  static names(): { [key: string]: string } {
    return {
      childGnos: 'ChildGnos',
      ctiLinkAgentGroup: 'CtiLinkAgentGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childGnos: 'string',
      ctiLinkAgentGroup: CloudListAgentGroupResponseBodyDataListCtiLinkAgentGroup,
    };
  }

  validate() {
    if(this.ctiLinkAgentGroup && typeof (this.ctiLinkAgentGroup as any).validate === 'function') {
      (this.ctiLinkAgentGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListAgentGroupResponseBodyData extends $dara.Model {
  list?: CloudListAgentGroupResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudListAgentGroupResponseBodyDataList },
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

export class CloudListAgentGroupResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListAgentGroupResponseBodyData;
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
      data: CloudListAgentGroupResponseBodyData,
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

