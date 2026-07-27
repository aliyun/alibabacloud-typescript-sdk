// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListThreadsResponseBodyThreadsVariables extends $dara.Model {
  /**
   * @remarks
   * The project in SLS.
   * 
   * @example
   * project
   */
  project?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThreadsResponseBodyThreads extends $dara.Model {
  /**
   * @remarks
   * A map of key-value pairs that you can attach to the thread.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The creation time of the thread, in ISO 8601 format.
   * 
   * @example
   * 2025-12-19T15:19:55.040403272+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The digital employee name.
   * 
   * @example
   * test
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The thread status.
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
  /**
   * @remarks
   * The thread title.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The last update time of the thread, in ISO 8601 format.
   * 
   * @example
   * 2025-12-19T15:19:55.040403272+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The thread variables.
   */
  variables?: ListThreadsResponseBodyThreadsVariables;
  /**
   * @remarks
   * The thread version.
   * 
   * @example
   * 123123
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      createTime: 'createTime',
      digitalEmployeeName: 'digitalEmployeeName',
      status: 'status',
      threadId: 'threadId',
      title: 'title',
      updateTime: 'updateTime',
      variables: 'variables',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTime: 'string',
      digitalEmployeeName: 'string',
      status: 'string',
      threadId: 'string',
      title: 'string',
      updateTime: 'string',
      variables: ListThreadsResponseBodyThreadsVariables,
      version: 'number',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(this.variables && typeof (this.variables as any).validate === 'function') {
      (this.variables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListThreadsResponseBody extends $dara.Model {
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
   * A token to retrieve the next page of results. If this parameter is absent, no more results are available.
   * 
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * thread-123123
   */
  threadId?: string;
  /**
   * @remarks
   * A list of threads.
   */
  threads?: ListThreadsResponseBodyThreads[];
  /**
   * @remarks
   * The total number of threads.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      threadId: 'threadId',
      threads: 'threads',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      threadId: 'string',
      threads: { 'type': 'array', 'itemType': ListThreadsResponseBodyThreads },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.threads)) {
      $dara.Model.validateArray(this.threads);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

