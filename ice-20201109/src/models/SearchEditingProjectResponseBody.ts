// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchEditingProjectResponseBodyProjectList } from "./SearchEditingProjectResponseBodyProjectList";


export class SearchEditingProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned on a single page. The value is set to the maximum number of entries returned on each page except for the last page.
   * 
   * Examples:
   * 
   * Valid example: 10,10,5. Invalid example: 10,5,10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * The queried online editing projects.
   */
  projectList?: SearchEditingProjectResponseBodyProjectList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****9262E3DA-07FA-4862-FCBB6BC61D08*****
   */
  requestId?: string;
  /**
   * @remarks
   * Optional. The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 110
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectList: 'ProjectList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectList: { 'type': 'array', 'itemType': SearchEditingProjectResponseBodyProjectList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

