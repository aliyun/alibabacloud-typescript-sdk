// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAITaskEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to be returned from a single query when the NextToken parameter is used in the query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAdDWBF2****w==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the AI task.
   * 
   * @example
   * t-asasas*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

