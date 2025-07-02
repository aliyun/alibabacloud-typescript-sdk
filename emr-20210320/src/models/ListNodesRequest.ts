// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class ListNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
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
   * The IDs of node groups.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nodeGroupIds?: string[];
  /**
   * @remarks
   * An array that consists of information about the ID of the node.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The names of the nodes.
   * 
   * @example
   * 20
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * ["CREATED"]
   */
  nodeStates?: string[];
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * ["172.12.0.91"]
   */
  privateIps?: string[];
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * ["120.13.14.38"]
   */
  publicIps?: string[];
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
  /**
   * @remarks
   * The tags.
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupIds: 'NodeGroupIds',
      nodeIds: 'NodeIds',
      nodeNames: 'NodeNames',
      nodeStates: 'NodeStates',
      privateIps: 'PrivateIps',
      publicIps: 'PublicIps',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupIds: { 'type': 'array', 'itemType': 'string' },
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      nodeStates: { 'type': 'array', 'itemType': 'string' },
      privateIps: { 'type': 'array', 'itemType': 'string' },
      publicIps: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupIds)) {
      $dara.Model.validateArray(this.nodeGroupIds);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    if(Array.isArray(this.nodeStates)) {
      $dara.Model.validateArray(this.nodeStates);
    }
    if(Array.isArray(this.privateIps)) {
      $dara.Model.validateArray(this.privateIps);
    }
    if(Array.isArray(this.publicIps)) {
      $dara.Model.validateArray(this.publicIps);
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

