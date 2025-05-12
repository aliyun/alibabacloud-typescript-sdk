// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBClusterBindingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-7213cjv2ez-be
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The numeric ID.
   * 
   * @example
   * 6585
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv2ez
   */
  dbInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

