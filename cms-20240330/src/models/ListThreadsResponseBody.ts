// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListThreadsResponseBodyThreadsVariables extends $dara.Model {
  /**
   * @remarks
   * SLS project。
   * 
   * @example
   * ciec_rl_ads
   */
  project?: string;
  /**
   * @example
   * hd1-np
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
   * @example
   * 2025-04-22T12:46:34Z
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  digitalEmployeeName?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * thread-t71rrw-1s7r7z9gu0v2s
   */
  threadId?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * 2025-06-24 10:05:21
   */
  updateTime?: string;
  variables?: ListThreadsResponseBodyThreadsVariables;
  /**
   * @example
   * *
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-78B0FECD14B5
   */
  requestId?: string;
  /**
   * @example
   * thread_id01
   */
  threadId?: string;
  threads?: ListThreadsResponseBodyThreads[];
  /**
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

