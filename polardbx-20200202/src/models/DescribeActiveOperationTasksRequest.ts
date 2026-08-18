// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether cancellation is allowed. Valid values:
   * - **-1**: allows cancellation of all O&M events.
   * - **0**: not allowed. 
   * - **1**: allowed.
   * 
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the time can be modified. Valid values:
   * 
   * - **-1**: allows modification of the time for all O&M events.
   * - **0**: not allowed. 
   * - **1**: allowed.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The change level. Default value: all. Valid values:
   * 
   * - **all**: all levels of exception repair and system O&M.
   * - **S0**: exception repair.
   * - **S1**: system O&M.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The database type. Set the value to polarx.
   * 
   * @example
   * polarx
   */
  dbType?: string;
  /**
   * @remarks
   * The instance name. Default value: empty string.
   * 
   * @example
   * pxc-xxxxx
   */
  insName?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 25.
   * 
   * @example
   * 25
   */
  pageSize?: number;
  /**
   * @remarks
   * The product name. Default value: polarx.
   * 
   * @example
   * polarx
   */
  productId?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **-1**: all pending and running tasks.  
   * - **3**: pending. 
   * - **4**: running.
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The task type. A value of all indicates that all tasks of the user are queried. Set the value to all.
   * 
   * @example
   * all
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      dbType: 'DbType',
      insName: 'InsName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      region: 'Region',
      regionId: 'RegionId',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'number',
      allowChange: 'number',
      changeLevel: 'string',
      dbType: 'string',
      insName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      region: 'string',
      regionId: 'string',
      status: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

