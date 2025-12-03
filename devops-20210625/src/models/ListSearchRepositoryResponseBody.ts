// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchRepositoryResponseBodyResultHighlightTextMap extends $dara.Model {
  /**
   * @example
   * xxx
   */
  creatorUserId?: string;
  description?: string;
  /**
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  /**
   * @example
   * xx
   */
  readMe?: string;
  /**
   * @example
   * codeup/test-repo
   */
  repoNameWithNamespace?: string;
  /**
   * @example
   * codeup/test-repo
   */
  repoPath?: string;
  static names(): { [key: string]: string } {
    return {
      creatorUserId: 'creatorUserId',
      description: 'description',
      organizationId: 'organizationId',
      readMe: 'readMe',
      repoNameWithNamespace: 'repoNameWithNamespace',
      repoPath: 'repoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorUserId: 'string',
      description: 'string',
      organizationId: 'string',
      readMe: 'string',
      repoNameWithNamespace: 'string',
      repoPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchRepositoryResponseBodyResultSource extends $dara.Model {
  /**
   * @example
   * 2022-10-10 10:10:10
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * 2022-11-11 11:11:11
   */
  lastActivityTime?: string;
  /**
   * @example
   * 62a94a8611fc0f0c9e2a7bc1
   */
  organizationId?: string;
  /**
   * @example
   * xxx
   */
  readMe?: string;
  /**
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @example
   * codeup/test-repo
   */
  repoPath?: string;
  /**
   * @example
   * 0
   */
  visibilityLevel?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      lastActivityTime: 'lastActivityTime',
      organizationId: 'organizationId',
      readMe: 'readMe',
      repoName: 'repoName',
      repoPath: 'repoPath',
      visibilityLevel: 'visibilityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      lastActivityTime: 'string',
      organizationId: 'string',
      readMe: 'string',
      repoName: 'string',
      repoPath: 'string',
      visibilityLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchRepositoryResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 60d54f3daccf2bbd6659f3ad/gitlabhq/master/config/environments/test.rb
   */
  docId?: string;
  highlightTextMap?: ListSearchRepositoryResponseBodyResultHighlightTextMap;
  source?: ListSearchRepositoryResponseBodyResultSource;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      highlightTextMap: 'highlightTextMap',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      highlightTextMap: ListSearchRepositoryResponseBodyResultHighlightTextMap,
      source: ListSearchRepositoryResponseBodyResultSource,
    };
  }

  validate() {
    if(this.highlightTextMap && typeof (this.highlightTextMap as any).validate === 'function') {
      (this.highlightTextMap as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchRepositoryResponseBody extends $dara.Model {
  /**
   * @example
   * Openapi.RequestError
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  result?: ListSearchRepositoryResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 30
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
      result: { 'type': 'array', 'itemType': ListSearchRepositoryResponseBodyResult },
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

