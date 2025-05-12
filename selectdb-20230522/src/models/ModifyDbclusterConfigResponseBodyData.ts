// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * selectdb-cn-wny3li00g02-be
   */
  dbClusterId?: string;
  /**
   * @example
   * 6585
   */
  dbInstanceId?: string;
  /**
   * @example
   * selectdb-cn-wny3li00g02
   */
  dbInstanceName?: string;
  /**
   * @example
   * 107878719
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

