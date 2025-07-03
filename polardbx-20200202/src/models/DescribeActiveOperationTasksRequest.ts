// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @example
   * polarx
   */
  dbType?: string;
  /**
   * @example
   * pxc-xxxxx
   */
  insName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 25
   */
  pageSize?: number;
  /**
   * @example
   * polarx
   */
  productId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * -1
   */
  status?: number;
  /**
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

