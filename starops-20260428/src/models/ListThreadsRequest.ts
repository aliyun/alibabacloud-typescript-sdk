// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListThreadsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key. Valid values: title, workspace, and project.
   * 
   * This parameter is required.
   * 
   * @example
   * title
   */
  key?: string;
  /**
   * @remarks
   * The value to set.
   * 
   * This parameter is required.
   * 
   * @example
   * test
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

export class ListThreadsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for the query. If this parameter is not specified, all topics under the instance are queried.
   */
  filter?: ListThreadsRequestFilter[];
  /**
   * @remarks
   * Specifies whether to include threads created by mission.
   */
  includeMission?: boolean;
  /**
   * @remarks
   * The maximum number of results to return. Maximum value: 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * xxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The session status.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * thread-123123
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      includeMission: 'includeMission',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListThreadsRequestFilter },
      includeMission: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

