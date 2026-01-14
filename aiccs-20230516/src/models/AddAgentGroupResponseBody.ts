// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAgentGroupResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 坐席组ID
   * 
   * @example
   * 48
   */
  agentGroupId?: number;
  /**
   * @remarks
   * 坐席组名称
   * 
   * @example
   * 示例值示例值示例值
   */
  agentGroupName?: string;
  /**
   * @remarks
   * 创建坐席组的时间
   * 
   * @example
   * 示例值
   */
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentGroupId: 'AgentGroupId',
      agentGroupName: 'AgentGroupName',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentGroupId: 'number',
      agentGroupName: 'string',
      createTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAgentGroupResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: AddAgentGroupResponseBodyModel;
  /**
   * @example
   * 示例值
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 40
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
      model: AddAgentGroupResponseBodyModel,
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

