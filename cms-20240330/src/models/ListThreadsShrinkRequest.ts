// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListThreadsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for the query. If you do not specify this parameter, all threads in the instance are queried.
   */
  filterShrink?: string;
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
      filterShrink: 'filter',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      threadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

