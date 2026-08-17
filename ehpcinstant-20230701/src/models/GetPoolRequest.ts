// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the resource pool.
   * 
   * - The name can be up to 15 characters long.
   * 
   * - The name can contain letters, digits, underscores (_), and periods (.).
   * 
   * This parameter is required.
   * 
   * @example
   * PoolTest
   */
  poolName?: string;
  static names(): { [key: string]: string } {
    return {
      poolName: 'PoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      poolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

