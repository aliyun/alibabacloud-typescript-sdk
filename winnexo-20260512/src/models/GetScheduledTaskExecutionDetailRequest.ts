// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskExecutionDetailRequest extends $dara.Model {
  /**
   * @remarks
   * 执行记录 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleExecutionId
   */
  executionId?: string;
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
      executionId: 'executionId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionId: 'string',
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

