// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePoolRequest extends $dara.Model {
  /**
   * @remarks
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

