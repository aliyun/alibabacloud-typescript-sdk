// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkspacesRequestTag } from "./ListWorkspacesRequestTag";


export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the workspace. Fuzzy match is supported.
   * 
   * @example
   * test_workspace
   */
  name?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
   * The state of the workspace.
   * 
   * @example
   * running
   */
  state?: string;
  tag?: ListWorkspacesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      regionId: 'regionId',
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

