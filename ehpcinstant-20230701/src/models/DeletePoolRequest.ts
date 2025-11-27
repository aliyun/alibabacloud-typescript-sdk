// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the resource pool.
   * 
   * *   The value can be up to 15 characters in length.
   * *   It can contain digits, uppercase letters, lowercase letters, underscores (_), and dots (.).
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

