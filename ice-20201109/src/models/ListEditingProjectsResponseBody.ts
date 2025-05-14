// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEditingProjectsResponseBodyProjectList } from "./ListEditingProjectsResponseBodyProjectList";


export class ListEditingProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * This parameter is required.
   * 
   * @example
   * Nzv3rcKla9wHUGua9YXHNA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The queried online editing projects.
   */
  projectList?: ListEditingProjectsResponseBodyProjectList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * *****ACB-44F2-5F2D-88D7-1283E70*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectList: 'ProjectList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectList: { 'type': 'array', 'itemType': ListEditingProjectsResponseBodyProjectList },
      requestId: 'string',
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

