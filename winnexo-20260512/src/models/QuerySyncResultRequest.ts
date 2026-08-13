// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySyncResultRequest extends $dara.Model {
  /**
   * @remarks
   * 同步任务 ID（由 syncOrgStructure 返回）
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

