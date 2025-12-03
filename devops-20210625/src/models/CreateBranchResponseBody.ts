// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBranchResponseBodyResultCommit extends $dara.Model {
  /**
   * @example
   * username@example.com
   */
  authorEmail?: string;
  authorName?: string;
  /**
   * @example
   * 2022-03-18 09:00:00
   */
  authoredDate?: string;
  /**
   * @example
   * 2022-03-18 10:00:00
   */
  committedDate?: string;
  /**
   * @example
   * username@example.com
   */
  committerEmail?: string;
  committerName?: string;
  /**
   * @example
   * 2022-03-18 10:00:00
   */
  createdAt?: string;
  /**
   * @example
   * ff4fb5ac6d1f44f452654336d2dba468ae6c8d04
   */
  id?: string;
  /**
   * @example
   * create branch
   */
  message?: string;
  parentIds?: string[];
  /**
   * @example
   * ff4fb5ac
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

export class CreateBranchResponseBodyResult extends $dara.Model {
  commit?: CreateBranchResponseBodyResultCommit;
  /**
   * @example
   * createBranch
   */
  name?: string;
  /**
   * @example
   * false
   */
  protected?: boolean;
  static names(): { [key: string]: string } {
    return {
      commit: 'commit',
      name: 'name',
      protected: 'protected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commit: CreateBranchResponseBodyResultCommit,
      name: 'string',
      protected: 'boolean',
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

export class CreateBranchResponseBody extends $dara.Model {
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
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  result?: CreateBranchResponseBodyResult;
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
      result: CreateBranchResponseBodyResult,
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

