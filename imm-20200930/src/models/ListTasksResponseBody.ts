// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TaskInfo } from "./TaskInfo";


export class ListTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The length of the returned result list.
   * 
   * @example
   * 1
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token. The pagination token is used in the next request to retrieve a new page of results if the total number of results exceeds the value of the MaxResults parameter. This parameter has a value only when not all results are returned.
   * 
   * You can specify the value of the NextToken parameter in the next request to list remaining results.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9847E7D0-A9A3-0053-84C6-BA16FFFA726E
   */
  requestId?: string;
  /**
   * @remarks
   * The tasks.
   */
  tasks?: TaskInfo[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      projectName: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': TaskInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

