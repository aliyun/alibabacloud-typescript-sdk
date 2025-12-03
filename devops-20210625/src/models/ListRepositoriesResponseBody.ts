// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoriesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 40
   */
  accessLevel?: number;
  /**
   * @example
   * false
   */
  archive?: boolean;
  avatarUrl?: string;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  createdAt?: string;
  description?: string;
  importStatus?: string;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  lastActivityAt?: string;
  /**
   * @example
   * codeupTest
   */
  name?: string;
  nameWithNamespace?: string;
  /**
   * @example
   * 745
   */
  namespaceId?: number;
  /**
   * @example
   * test-codeup
   */
  path?: string;
  /**
   * @example
   * codeup-test-org/test-codeup
   */
  pathWithNamespace?: string;
  /**
   * @example
   * false
   */
  star?: boolean;
  /**
   * @example
   * 0
   */
  starCount?: number;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  updatedAt?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: string;
  /**
   * @example
   * ""
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      accessLevel: 'accessLevel',
      archive: 'archive',
      avatarUrl: 'avatarUrl',
      createdAt: 'createdAt',
      description: 'description',
      importStatus: 'importStatus',
      lastActivityAt: 'lastActivityAt',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      namespaceId: 'namespaceId',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      star: 'star',
      starCount: 'starCount',
      updatedAt: 'updatedAt',
      visibilityLevel: 'visibilityLevel',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      accessLevel: 'number',
      archive: 'boolean',
      avatarUrl: 'string',
      createdAt: 'string',
      description: 'string',
      importStatus: 'string',
      lastActivityAt: 'string',
      name: 'string',
      nameWithNamespace: 'string',
      namespaceId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
      star: 'boolean',
      starCount: 'number',
      updatedAt: 'string',
      visibilityLevel: 'string',
      webUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponseBody extends $dara.Model {
  errorCode?: number;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * 4D6AF7CC-B43B-5454-86AB-023D25E44868
   */
  requestId?: string;
  result?: ListRepositoriesResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 149
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
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListRepositoriesResponseBodyResult },
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

