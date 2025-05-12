// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs } from "./DescribeDbclusterConfigChangeLogsResponseBodyDataParamChangeLogs";


export class DescribeDBClusterConfigChangeLogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
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
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-wny3li00g02
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The parameter change logs.
   */
  paramChangeLogs?: DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 107841167
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      dbClusterId: 'DbClusterId',
      dbInstanceId: 'DbInstanceId',
      dbInstanceName: 'DbInstanceName',
      paramChangeLogs: 'ParamChangeLogs',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
      paramChangeLogs: { 'type': 'array', 'itemType': DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs },
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.paramChangeLogs)) {
      $dara.Model.validateArray(this.paramChangeLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

