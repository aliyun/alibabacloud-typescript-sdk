// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListThreadsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for the query. If this parameter is not specified, all topics under the instance are queried.
   */
  filterShrink?: string;
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

