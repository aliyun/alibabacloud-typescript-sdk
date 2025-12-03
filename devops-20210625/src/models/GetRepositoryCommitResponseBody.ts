// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepositoryCommitResponseBodyResultAuthor extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c4ef67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 19927
   */
  id?: number;
  /**
   * @example
   * test-codeup
   */
  name?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * test-nickname
   */
  username?: string;
  /**
   * @example
   * ""
   */
  websiteUrl?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      name: 'name',
      state: 'state',
      username: 'username',
      websiteUrl: 'websiteUrl',
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
      websiteUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitResponseBodyResultCommitter extends $dara.Model {
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c4ef67f1bea827c4/w/100/h/100
   */
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 24661
   */
  id?: number;
  /**
   * @example
   * committer-codeup
   */
  name?: string;
  /**
   * @example
   * active
   */
  state?: string;
  /**
   * @example
   * nickname
   */
  username?: string;
  /**
   * @example
   * ""
   */
  websiteUrl?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'avatarUrl',
      email: 'email',
      id: 'id',
      name: 'name',
      state: 'state',
      username: 'username',
      websiteUrl: 'websiteUrl',
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
      websiteUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryCommitResponseBodyResultSignature extends $dara.Model {
  /**
   * @example
   * 34d2c47c7ce46a5c4639c5ffe208
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

export class GetRepositoryCommitResponseBodyResult extends $dara.Model {
  author?: GetRepositoryCommitResponseBodyResultAuthor;
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
   * 2022-03-18 15:00:00
   */
  authoredDate?: string;
  /**
   * @example
   * 1
   */
  commentsCount?: number;
  /**
   * @example
   * 2022-03-18 15:00:02
   */
  committedDate?: string;
  committer?: GetRepositoryCommitResponseBodyResultCommitter;
  /**
   * @example
   * username@example.com
   */
  committerEmail?: string;
  /**
   * @example
   * committer-codeup
   */
  committerName?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * ff4fb5ac6d1f44f452654336d2dba468ae6c8d04
   */
  id?: string;
  message?: string;
  parentIds?: string[];
  /**
   * @example
   * ff4fb5ac
   */
  shortId?: string;
  signature?: GetRepositoryCommitResponseBodyResultSignature;
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
      author: GetRepositoryCommitResponseBodyResultAuthor,
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      commentsCount: 'number',
      committedDate: 'string',
      committer: GetRepositoryCommitResponseBodyResultCommitter,
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: GetRepositoryCommitResponseBodyResultSignature,
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

export class GetRepositoryCommitResponseBody extends $dara.Model {
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
   * A7586FEB-E48D-5579-983F-74981FBFF627
   */
  requestId?: string;
  result?: GetRepositoryCommitResponseBodyResult;
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
      result: GetRepositoryCommitResponseBodyResult,
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

