// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeGroupsRequestTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  tags?: DescribeNodeGroupsRequestTags[];
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
      tags: 'tags',
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
      tags: { 'type': 'array', 'itemType': DescribeNodeGroupsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupIds)) {
      $dara.Model.validateArray(this.nodeGroupIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

