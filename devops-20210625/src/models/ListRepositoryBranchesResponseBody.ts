// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryBranchesResponseBodyResultCommit extends $dara.Model {
  /**
   * @example
   * username@example.com
   */
  authorEmail?: string;
  /**
   * @example
   * test-codeup
   */
  authorName?: string;
  /**
   * @example
   * 2022-03-18 10:00:00
   */
  authoredDate?: string;
  /**
   * @example
   * 2022-03-18 11:00:00
   */
  committedDate?: string;
  /**
   * @example
   * username@example.com
   */
  committerEmail?: string;
  /**
   * @example
   * commit-codeup
   */
  committerName?: string;
  /**
   * @example
   * 2022-03-18 10:00:00
   */
  createdAt?: string;
  /**
   * @example
   * de02b625ba8488f92eb204bcb3773a40c1b4ddac
   */
  id?: string;
  message?: string;
  parentIds?: string[];
  /**
   * @example
   * e0297d8f
   */
  shortId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorEmail: 'authorEmail',
      authorName: 'authorName',
      authoredDate: 'authoredDate',
      committedDate: 'committedDate',
      committerEmail: 'committerEmail',
      committerName: 'committerName',
      createdAt: 'createdAt',
      id: 'id',
      message: 'message',
      parentIds: 'parentIds',
      shortId: 'shortId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      committedDate: 'string',
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parentIds)) {
      $dara.Model.validateArray(this.parentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponseBodyResult extends $dara.Model {
  commit?: ListRepositoryBranchesResponseBodyResultCommit;
  /**
   * @example
   * testBranch
   */
  name?: string;
  /**
   * @example
   * false
   */
  protected?: string;
  static names(): { [key: string]: string } {
    return {
      commit: 'commit',
      name: 'name',
      protected: 'protected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commit: ListRepositoryBranchesResponseBodyResultCommit,
      name: 'string',
      protected: 'string',
    };
  }

  validate() {
    if(this.commit && typeof (this.commit as any).validate === 'function') {
      (this.commit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryBranchesResponseBody extends $dara.Model {
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
   * 1F4F342D-493A-5B2C-B133-BA78B30FF834
   */
  requestId?: string;
  result?: ListRepositoryBranchesResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
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
      result: { 'type': 'array', 'itemType': ListRepositoryBranchesResponseBodyResult },
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

