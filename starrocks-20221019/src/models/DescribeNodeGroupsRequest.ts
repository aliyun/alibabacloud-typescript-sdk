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
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-718fb04c7112****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number for paging. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The compute group type. Valid values:
   * 
   * - FE
   * - BE
   * - CN
   * - OBSERVER
   * - AGENT
   * 
   * @example
   * FE
   */
  componentType?: string;
  /**
   * @remarks
   * **[Deprecated]** The instance ID. This parameter is deprecated.
   * 
   * @example
   * null
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of compute group IDs to query.
   */
  nodeGroupIds?: string[];
  /**
   * @remarks
   * The compute group name.
   * 
   * @example
   * ng_1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The compute group status. Valid values:
   * 
   * - UNPAID: Unpaid.
   * - PAID: Paid.
   * - CREATING_FAILED: Creation failed.
   * - CREATING: Being created.
   * - RUNNING: Running.
   * - MODIFYING_CONFIG: Configuration being modified.
   * - MODIFYING_TIMEZONE: Time zone being modified.
   * - ELASTIC_SCALING_OUT: Elastic scale-out in progress.
   * - ELASTIC_SCALING_IN: Elastic scale-in in progress.
   * - SCALING_OUT: Scale-out in progress.
   * - RESTARTING: Restarting.
   * - SCALING_IN: Scale-in in progress.
   * - SCALING_UP: Upgrading specifications.
   * - SCALING_DOWN: Downgrading specifications.
   * - UPGRADING: Upgrading.
   * - ENABLE_PUBLIC_NETWORK: Enabling public network access.
   * - DISABLE_PUBLIC_NETWORK: Disabling public network access.
   * - SWITCH_AZ: Switching zone.
   * - DISABLE: Disabled.
   * - DELETING: Being deleted.
   * - DELETED: Deleted.
   * 
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

