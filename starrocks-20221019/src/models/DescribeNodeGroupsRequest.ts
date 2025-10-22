// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeGroupsRequest extends $dara.Model {
  /**
   * @example
   * c-718fb04c7112****
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * FE
   */
  componentType?: string;
  /**
   * @example
   * null
   */
  instanceId?: string;
  nodeGroupIds?: string[];
  /**
   * @example
   * ng_1
   */
  nodeGroupName?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      componentType: 'componentType',
      instanceId: 'instanceId',
      nodeGroupIds: 'nodeGroupIds',
      nodeGroupName: 'nodeGroupName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      componentType: 'string',
      instanceId: 'string',
      nodeGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeGroupName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupIds)) {
      $dara.Model.validateArray(this.nodeGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

