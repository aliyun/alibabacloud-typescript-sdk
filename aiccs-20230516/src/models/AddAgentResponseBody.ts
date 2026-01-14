// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddAgentResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 1
   */
  agentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAgentResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @remarks
   * 坐席ID
   */
  model?: AddAgentResponseBodyModel;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 82
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
      model: AddAgentResponseBodyModel,
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

