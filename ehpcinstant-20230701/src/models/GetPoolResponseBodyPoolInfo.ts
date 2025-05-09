// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPoolResponseBodyPoolInfo extends $dara.Model {
  /**
   * @example
   * 2024-12-01 20:00:00
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  exectorUsage?: number;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * 2000
   */
  maxExectorNum?: number;
  /**
   * @example
   * PoolTest
   */
  poolName?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Fails to *** pool: ***.
   */
  reason?: string;
  /**
   * @example
   * Working
   */
  status?: string;
  /**
   * @example
   * 2024-12-01 20:00:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      exectorUsage: 'ExectorUsage',
      isDefault: 'IsDefault',
      maxExectorNum: 'MaxExectorNum',
      poolName: 'PoolName',
      priority: 'Priority',
      reason: 'Reason',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      exectorUsage: 'number',
      isDefault: 'boolean',
      maxExectorNum: 'number',
      poolName: 'string',
      priority: 'number',
      reason: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

