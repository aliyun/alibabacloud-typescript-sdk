// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRuntimesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results by agent runtime name.
   * 
   * @example
   * my-runtime
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * The service discovery resource group ID.
   * 
   * @example
   * rg-123456
   * 
   * @deprecated
   */
  discoveryResourceGroupId?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. This parameter is deprecated.
   * 
   * @deprecated
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The search mode.
   * 
   * @example
   * fuzzy
   */
  searchMode?: string;
  /**
   * @remarks
   * Filters the results by status.
   * 
   * @example
   * READY,CREATING
   */
  status?: string;
  /**
   * @remarks
   * Filters the results by system tags. Separate multiple tags with commas. This parameter supports only exact matches.
   * 
   * @example
   * acs:ecs:tag1,acs:ecs:tag2
   */
  systemTags?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  /**
   * @remarks
   * A comma-separated string of workspace IDs.
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeName: 'agentRuntimeName',
      discoveryResourceGroupId: 'discoveryResourceGroupId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      searchMode: 'searchMode',
      status: 'status',
      systemTags: 'systemTags',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeName: 'string',
      discoveryResourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      searchMode: 'string',
      status: 'string',
      systemTags: 'string',
      workspaceId: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

