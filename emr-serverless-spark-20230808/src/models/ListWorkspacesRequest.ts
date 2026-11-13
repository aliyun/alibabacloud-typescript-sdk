// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * cn-shenzhen-finance.edas.config.server
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * iPhone disk space remaining rate
   */
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

export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the workspace. Fuzzy search is supported.
   * 
   * @example
   * test_workspace
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that specifies the starting position for the current read operation.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2thxggoqhmhq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the workspace. Valid values:
   * - Starting: The workspace is starting.
   * - Running: The workspace is running.
   * - Stopping: The workspace is stopping.
   * - Stopped: The workspace is stopped.
   * - Error: The workspace has failed.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The list of tags used to filter workspaces.
   */
  tag?: ListWorkspacesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      state: 'state',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tag: { 'type': 'array', 'itemType': ListWorkspacesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

