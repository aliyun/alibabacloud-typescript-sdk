// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterNodesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * my_key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * my_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class ListClusterNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i15b480fbd2fcdbc2869cd80
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for pagination. To retrieve the next page of results, set this parameter to the NextToken value returned from the previous call.
   * 
   * @example
   * AAAAAdQ3Z+oPlg49gsr2y8jb6wY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-ec3c96ff0aa4c60d
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The operating states for filtering nodes.
   */
  operatingStates?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-ksld39333ss
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags for filtering nodes.
   */
  tags?: ListClusterNodesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      nodeGroupId: 'NodeGroupId',
      operatingStates: 'OperatingStates',
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
      operatingStates: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListClusterNodesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.operatingStates)) {
      $dara.Model.validateArray(this.operatingStates);
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

