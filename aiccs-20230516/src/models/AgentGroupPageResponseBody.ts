// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentGroupPageResponseBodyModelRecords extends $dara.Model {
  /**
   * @remarks
   * 坐席组ID
   * 
   * @example
   * 1
   */
  agentGroupId?: number;
  /**
   * @remarks
   * 坐席组名称
   * 
   * @example
   * a
   */
  agentGroupName?: string;
  /**
   * @remarks
   * 坐席组下的坐席id列表
   */
  agentIds?: number[];
  /**
   * @remarks
   * 创建坐席组的时间
   * 
   * @example
   * 2026-01-01 11:11:11
   */
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentGroupId: 'AgentGroupId',
      agentGroupName: 'AgentGroupName',
      agentIds: 'AgentIds',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentGroupId: 'number',
      agentGroupName: 'string',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      createTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentGroupPageResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 62
   */
  current?: number;
  /**
   * @example
   * 82
   */
  pages?: number;
  records?: AgentGroupPageResponseBodyModelRecords[];
  /**
   * @example
   * 15
   */
  size?: number;
  /**
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      pages: 'Pages',
      records: 'Records',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': AgentGroupPageResponseBodyModelRecords },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentGroupPageResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值
   */
  code?: string;
  /**
   * @example
   * a
   */
  message?: string;
  model?: AgentGroupPageResponseBodyModel;
  /**
   * @example
   * 12345
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 71
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: AgentGroupPageResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

