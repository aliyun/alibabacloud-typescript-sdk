// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListThreadsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key. Supported values are title, workspace, and project.
   * 
   * This parameter is required.
   * 
   * @example
   * title
   */
  key?: string;
  /**
   * @remarks
   * The set value.
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
   * The filter conditions for the query. If you do not specify this parameter, all threads in the instance are queried.
   */
  filter?: ListThreadsRequestFilter[];
  /**
   * @remarks
   * The maximum number of results to return. The maximum value is 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The paging token.
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
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListThreadsRequestFilter },
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

