// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of maximum number of records to obtain at a time. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Marks the current position where reading starts. If you set this value to null, you can start from the beginning.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The IDs of node groups. Valid values of the number of array elements N: 1 to 100.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  nodeGroupIds?: string[];
  /**
   * @remarks
   * The list of node group names. Valid values of the number of array elements N: 1 to 100.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nodeGroupNames?: string[];
  /**
   * @remarks
   * The status of the node group. Valid values of the number of array elements N: 1 to 100.
   * 
   * @example
   * ["CORE"]
   */
  nodeGroupStates?: string[];
  /**
   * @remarks
   * The list of node group types. Valid values of the number of array elements N: 1 to 100.
   * 
   * @example
   * 20
   */
  nodeGroupTypes?: string[];
  /**
   * @remarks
   * The ID of the region in which you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupIds: 'NodeGroupIds',
      nodeGroupNames: 'NodeGroupNames',
      nodeGroupStates: 'NodeGroupStates',
      nodeGroupTypes: 'NodeGroupTypes',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeGroupNames: { 'type': 'array', 'itemType': 'string' },
      nodeGroupStates: { 'type': 'array', 'itemType': 'string' },
      nodeGroupTypes: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupIds)) {
      $dara.Model.validateArray(this.nodeGroupIds);
    }
    if(Array.isArray(this.nodeGroupNames)) {
      $dara.Model.validateArray(this.nodeGroupNames);
    }
    if(Array.isArray(this.nodeGroupStates)) {
      $dara.Model.validateArray(this.nodeGroupStates);
    }
    if(Array.isArray(this.nodeGroupTypes)) {
      $dara.Model.validateArray(this.nodeGroupTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

