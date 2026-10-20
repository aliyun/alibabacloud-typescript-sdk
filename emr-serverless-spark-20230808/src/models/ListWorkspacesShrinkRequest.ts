// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the workspace. Fuzzy search by workspace name is supported.
   * 
   * @example
   * test_workspace
   */
  name?: string;
  /**
   * @remarks
   * The token that indicates the position from which to start reading.
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
   * - Error: The workspace failed.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The list of tags used to filter workspaces.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      state: 'state',
      tagShrink: 'tag',
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
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

