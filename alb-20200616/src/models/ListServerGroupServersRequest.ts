// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServerGroupServersRequestTag } from "./ListServerGroupServersRequestTag";


export class ListServerGroupServersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: **1** to **100**. If you do not specify a value, the default value **20** is used.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXG****
   */
  nextToken?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The IDs of the servers.
   */
  serverIds?: string[];
  /**
   * @remarks
   * The tags that are added to the server group. You can specify up to 10 tags in each call.
   */
  tag?: ListServerGroupServersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serverGroupId: 'ServerGroupId',
      serverIds: 'ServerIds',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      serverGroupId: 'string',
      serverIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListServerGroupServersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.serverIds)) {
      $dara.Model.validateArray(this.serverIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

