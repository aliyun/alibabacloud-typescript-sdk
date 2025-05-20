// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterNodesRequestTags } from "./ListClusterNodesRequestTags";


export class ListClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * This parameter is required.
   * 
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @remarks
   * Number of items per page in a paginated query, with a default value of 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Query token (Token), which is the value of the NextToken parameter returned by the previous API call.
   * 
   * @example
   * AAAAAdQ3Z+oPlg49gsr2y8jb6wY=
   */
  nextToken?: string;
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * resource group id
   * 
   * @example
   * rg-xxkxkllss
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * tag information
   */
  tags?: ListClusterNodesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      nodeGroupId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListClusterNodesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

