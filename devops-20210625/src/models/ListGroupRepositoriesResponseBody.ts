// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupRepositoriesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  archived?: boolean;
  /**
   * @example
   * 10
   */
  commitCount?: number;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * 19238
   */
  creatorId?: number;
  description?: string;
  /**
   * @example
   * https://xxx/test/test
   */
  httpUrl?: string;
  /**
   * @example
   * 89616
   */
  id?: number;
  /**
   * @example
   * http://xxx/x
   */
  importUrl?: string;
  /**
   * @example
   * true
   */
  isStared?: boolean;
  /**
   * @example
   * true
   */
  issuesEnabled?: boolean;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  lastActivityAt?: string;
  /**
   * @example
   * true
   */
  mergeRequestsEnabled?: boolean;
  /**
   * @example
   * test-group-repo
   */
  name?: string;
  nameWithNamespace?: string;
  /**
   * @example
   * 100003
   */
  namespaceId?: boolean;
  /**
   * @example
   * test-group-repo
   */
  path?: string;
  /**
   * @example
   * codeup-test-org/test-group-repo
   */
  pathWithNamespace?: string;
  /**
   * @example
   * true
   */
  privateFlag?: boolean;
  /**
   * @example
   * false
   */
  snippetsEnabled?: boolean;
  /**
   * @example
   * git@xxx:xxx/test/test.git
   */
  sshUrl?: string;
  /**
   * @example
   * 0
   */
  starCount?: number;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  updatedAt?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: number;
  /**
   * @example
   * ""
   */
  webUrl?: string;
  /**
   * @example
   * true
   */
  wikiEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      archived: 'archived',
      commitCount: 'commitCount',
      createdAt: 'createdAt',
      creatorId: 'creatorId',
      description: 'description',
      httpUrl: 'httpUrl',
      id: 'id',
      importUrl: 'importUrl',
      isStared: 'isStared',
      issuesEnabled: 'issuesEnabled',
      lastActivityAt: 'lastActivityAt',
      mergeRequestsEnabled: 'mergeRequestsEnabled',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      namespaceId: 'namespaceId',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      privateFlag: 'privateFlag',
      snippetsEnabled: 'snippetsEnabled',
      sshUrl: 'sshUrl',
      starCount: 'starCount',
      updatedAt: 'updatedAt',
      visibilityLevel: 'visibilityLevel',
      webUrl: 'webUrl',
      wikiEnabled: 'wikiEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archived: 'boolean',
      commitCount: 'number',
      createdAt: 'string',
      creatorId: 'number',
      description: 'string',
      httpUrl: 'string',
      id: 'number',
      importUrl: 'string',
      isStared: 'boolean',
      issuesEnabled: 'boolean',
      lastActivityAt: 'string',
      mergeRequestsEnabled: 'boolean',
      name: 'string',
      nameWithNamespace: 'string',
      namespaceId: 'boolean',
      path: 'string',
      pathWithNamespace: 'string',
      privateFlag: 'boolean',
      snippetsEnabled: 'boolean',
      sshUrl: 'string',
      starCount: 'number',
      updatedAt: 'string',
      visibilityLevel: 'number',
      webUrl: 'string',
      wikiEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRepositoriesResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 9293CBDA-B5BC-5AD6-A8F4-C7873AC7A3DF
   */
  requestId?: string;
  result?: ListGroupRepositoriesResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListGroupRepositoriesResponseBodyResult },
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

