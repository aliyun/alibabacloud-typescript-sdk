// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowDirectoriesResponseBodyData extends $dara.Model {
  /**
   * @example
   * wd-y98v7non5dx****
   */
  directoryId?: string;
  /**
   * @example
   * 目录名称。
   */
  name?: string;
  /**
   * @example
   * wd-y98v7non5dx****
   */
  parentDirectoryId?: string;
  /**
   * @example
   * p-v7n28j0m4ol****
   */
  projectId?: string;
  /**
   * @example
   * w-lxyy60mpgpg****
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      projectId: 'projectId',
      workflowId: 'workflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      projectId: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDirectoriesResponseBody extends $dara.Model {
  data?: ListWorkflowDirectoriesResponseBodyData[];
  /**
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListWorkflowDirectoriesResponseBodyData },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

