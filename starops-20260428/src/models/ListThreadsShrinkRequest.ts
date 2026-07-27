// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListThreadsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results. If this parameter is omitted, the operation returns all threads in the instance.
   */
  filterShrink?: string;
  /**
   * @remarks
   * Specifies whether to include threads created by missions.
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
   * The status of the thread.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * thread-123123
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      filterShrink: 'filter',
      includeMission: 'includeMission',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      includeMission: 'boolean',
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

