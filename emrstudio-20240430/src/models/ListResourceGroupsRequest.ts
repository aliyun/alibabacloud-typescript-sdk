// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @example
   * name
   */
  resourceGroupName?: string;
  /**
   * @example
   * CLUSTER_RESOURCE_GROUP
   */
  resourceGroupType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * w-lxyy60mpgpg****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceGroupName: 'resourceGroupName',
      resourceGroupType: 'resourceGroupType',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupName: 'string',
      resourceGroupType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

