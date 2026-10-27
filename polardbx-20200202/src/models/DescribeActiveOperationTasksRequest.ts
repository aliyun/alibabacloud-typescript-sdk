// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the event can be canceled. Valid values:
   * - **-1**: All O&M events can be canceled.
   * - **0**: The event cannot be canceled. 
   * - **1**: The event can be canceled.
   * 
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the time can be modified. Valid values:
   * 
   * - **-1**: The time of all O&M events can be modified.
   * - **0**: The time cannot be modified. 
   * - **1**: The time can be modified.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The change level. Default value: all. Valid values:
   * 
   * - **all**: all exception fix and system O&M levels
   * - **S0**: exception fix
   * - **S1**: system O&M
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
   * The instance name. Default value: an empty string.
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
   * - **-1**: all pending and running tasks  
   * - **3**: pending 
   * - **4**: running
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The task type. Set the value to all to query all tasks under the current account.
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

