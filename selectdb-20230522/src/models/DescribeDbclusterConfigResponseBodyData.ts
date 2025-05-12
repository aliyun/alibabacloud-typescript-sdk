// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterConfigResponseBodyDataParams } from "./DescribeDbclusterConfigResponseBodyDataParams";


export class DescribeDBClusterConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-wny3li00g02-be
   */
  dbClusterId?: string;
  /**
   * @remarks
   * The numeric ID of the instance.
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
   * selectdb-cn-wny3li00g02
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The details about each parameter returned.
   */
  params?: DescribeDBClusterConfigResponseBodyDataParams[];
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
      params: 'Params',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbClusterId: 'string',
      dbInstanceId: 'string',
      dbInstanceName: 'string',
      params: { 'type': 'array', 'itemType': DescribeDBClusterConfigResponseBodyDataParams },
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

