// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferRepositoryResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 30
   */
  accessLevel?: number;
  /**
   * @example
   * false
   */
  archived?: boolean;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  createdAt?: string;
  /**
   * @example
   * 19238
   */
  creatorId?: number;
  /**
   * @example
   * false
   */
  demoProject?: boolean;
  description?: string;
  /**
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @example
   * 19285
   */
  id?: number;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
   */
  lastActivityAt?: string;
  /**
   * @example
   * test-repo
   */
  name?: string;
  nameWithNamespace?: string;
  /**
   * @example
   * 100003
   */
  namespaceId?: number;
  /**
   * @example
   * test-repo
   */
  path?: string;
  /**
   * @example
   * codeup-test-org/test-create-codeup
   */
  pathWithNamespace?: string;
  /**
   * @example
   * 0
   */
  starCount?: number;
  /**
   * @example
   * true
   */
  starred?: boolean;
  /**
   * @example
   * 2022-01-14T21:08:26+08:00
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
  static names(): { [key: string]: string } {
    return {
      accessLevel: 'accessLevel',
      archived: 'archived',
      createdAt: 'createdAt',
      creatorId: 'creatorId',
      demoProject: 'demoProject',
      description: 'description',
      encrypted: 'encrypted',
      id: 'id',
      lastActivityAt: 'lastActivityAt',
      name: 'name',
      nameWithNamespace: 'nameWithNamespace',
      namespaceId: 'namespaceId',
      path: 'path',
      pathWithNamespace: 'pathWithNamespace',
      starCount: 'starCount',
      starred: 'starred',
      updatedAt: 'updatedAt',
      visibilityLevel: 'visibilityLevel',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevel: 'number',
      archived: 'boolean',
      createdAt: 'string',
      creatorId: 'number',
      demoProject: 'boolean',
      description: 'string',
      encrypted: 'boolean',
      id: 'number',
      lastActivityAt: 'string',
      name: 'string',
      nameWithNamespace: 'string',
      namespaceId: 'number',
      path: 'string',
      pathWithNamespace: 'string',
      starCount: 'number',
      starred: 'boolean',
      updatedAt: 'string',
      visibilityLevel: 'number',
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

export class TransferRepositoryResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: TransferRepositoryResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: TransferRepositoryResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

