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
   * The maximum number of records to return in a single request. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the start of the query. Leave this parameter empty to start from the beginning.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * A list of node group IDs. The number of array elements N can range from 1 to 100.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  nodeGroupIds?: string[];
  /**
   * @remarks
   * A list of node group names. The number of array elements N can range from 1 to 100.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nodeGroupNames?: string[];
  /**
   * @remarks
   * The state of the node group. The number of array elements N can range from 1 to 100.
   * 
   * @example
   * ["CORE"]
   */
  nodeGroupStates?: string[];
  /**
   * @remarks
   * A list of node group types. The number of array elements N can range from 1 to 100.
   * 
   * @example
   * 20
   */
  nodeGroupTypes?: string[];
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

