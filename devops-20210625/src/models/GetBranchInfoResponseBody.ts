// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBranchInfoResponseBodyResultCommitAuthor extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 28056
   */
  id?: number;
  /**
   * @example
   * codeup-test
   */
  name?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * testtest
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      name: 'name',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      id: 'number',
      name: 'string',
      state: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBodyResultCommitCommitter extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 5035
   */
  id?: number;
  /**
   * @example
   * codeup-commit
   */
  name?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * commitcommit
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      name: 'name',
      state: 'state',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      email: 'string',
      id: 'number',
      name: 'string',
      state: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBodyResultCommitSignature extends $dara.Model {
  /**
   * @example
   * ""
   */
  gpgKeyId?: string;
  /**
   * @example
   * verified
   */
  verificationStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gpgKeyId: 'gpgKeyId',
      verificationStatus: 'verificationStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpgKeyId: 'string',
      verificationStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBodyResultCommit extends $dara.Model {
  author?: GetBranchInfoResponseBodyResultCommitAuthor;
  /**
   * @example
   * username@example.com
   */
  authorEmail?: string;
  authorName?: string;
  /**
   * @example
   * 2022-03-18 08:00:00
   */
  authoredDate?: string;
  /**
   * @example
   * 0
   */
  commentsCount?: number;
  /**
   * @example
   * 2022-03-18 09:00:00
   */
  committedDate?: string;
  committer?: GetBranchInfoResponseBodyResultCommitCommitter;
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
   * e0297d8fb0393c833a8531e7cc8832739e3cba6d
   */
  id?: string;
  message?: string;
  parentIds?: string[];
  /**
   * @example
   * e0297d8f
   */
  shortId?: string;
  signature?: GetBranchInfoResponseBodyResultCommitSignature;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      authorEmail: 'authorEmail',
      authorName: 'authorName',
      authoredDate: 'authoredDate',
      commentsCount: 'commentsCount',
      committedDate: 'committedDate',
      committer: 'committer',
      committerEmail: 'committerEmail',
      committerName: 'committerName',
      createdAt: 'createdAt',
      id: 'id',
      message: 'message',
      parentIds: 'parentIds',
      shortId: 'shortId',
      signature: 'signature',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: GetBranchInfoResponseBodyResultCommitAuthor,
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      commentsCount: 'number',
      committedDate: 'string',
      committer: GetBranchInfoResponseBodyResultCommitCommitter,
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: GetBranchInfoResponseBodyResultCommitSignature,
      title: 'string',
    };
  }

  validate() {
    if(this.author && typeof (this.author as any).validate === 'function') {
      (this.author as any).validate();
    }
    if(this.committer && typeof (this.committer as any).validate === 'function') {
      (this.committer as any).validate();
    }
    if(Array.isArray(this.parentIds)) {
      $dara.Model.validateArray(this.parentIds);
    }
    if(this.signature && typeof (this.signature as any).validate === 'function') {
      (this.signature as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBranchInfoResponseBodyResult extends $dara.Model {
  commit?: GetBranchInfoResponseBodyResultCommit;
  /**
   * @example
   * master
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
      commit: GetBranchInfoResponseBodyResultCommit,
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

export class GetBranchInfoResponseBody extends $dara.Model {
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
   * 6177543A-8D54-5736-A93B-E0195A1512CB
   */
  requestId?: string;
  result?: GetBranchInfoResponseBodyResult;
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
      result: GetBranchInfoResponseBodyResult,
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

