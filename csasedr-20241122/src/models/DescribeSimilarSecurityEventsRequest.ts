// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimilarSecurityEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned results. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return in a single query. This parameter is reserved for compatibility. The backend currently uses CurrentPage and PageSize for pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the query. You can obtain the token from the result of the previous request.
   * 
   * @example
   * ****==
   */
  nextToken?: string;
  /**
   * @remarks
   * The Settings for the number of alerting events displayed on each page in a paged query. Default value: **20**, which indicates that 20 alerting events are displayed per paging.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the query task. You can call the [CreateSimilarSecurityEventsQueryTask](~~CreateSimilarSecurityEventsQueryTask~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1689135
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

