// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentImportNumberResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 批次ID
   * 
   * @example
   * 示例值示例值示例值
   */
  batchId?: string;
  /**
   * @remarks
   * 外呼编号ID
   * 
   * @example
   * 80
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentImportNumberResponseBody extends $dara.Model {
  /**
   * @example
   * Access Denied
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
  model?: AgentImportNumberResponseBodyModel;
  /**
   * @example
   * 示例值示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 93
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
      model: AgentImportNumberResponseBodyModel,
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

