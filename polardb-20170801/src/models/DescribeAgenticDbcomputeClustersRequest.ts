// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBComputeClustersRequest extends $dara.Model {
  /**
   * @example
   * pc-2ze8k
   */
  computeClusterId?: string;
  /**
   * @remarks
   * The AgenticDB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 30. Maximum value: 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
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
   * The status filter. Valid values: Running, Stopped, and Waiting.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      computeClusterId: 'ComputeClusterId',
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeClusterId: 'string',
      DBClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

