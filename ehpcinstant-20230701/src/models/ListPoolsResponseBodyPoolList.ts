// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoolsResponseBodyPoolList extends $dara.Model {
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
   * Working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      maxExectorNum: 'MaxExectorNum',
      poolName: 'PoolName',
      priority: 'Priority',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      maxExectorNum: 'number',
      poolName: 'string',
      priority: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

