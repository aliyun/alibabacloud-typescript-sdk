// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryCommitsResponseBodyResultAuthor extends $dara.Model {
  avatarUrl?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 7914
   */
  id?: number;
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

export class ListRepositoryCommitsResponseBodyResultCommitter extends $dara.Model {
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
   * 41031
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

export class ListRepositoryCommitsResponseBodyResultSignature extends $dara.Model {
  /**
   * @example
   * ”“
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

export class ListRepositoryCommitsResponseBodyResult extends $dara.Model {
  author?: ListRepositoryCommitsResponseBodyResultAuthor;
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
   * 2022-03-18 16:00:00
   */
  committedDate?: string;
  committer?: ListRepositoryCommitsResponseBodyResultCommitter;
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
   * de02b625ba8488f92eb204bcb3773a40c1b4ddac
   */
  id?: string;
  message?: string;
  parentIds?: string[];
  /**
   * @example
   * de02b625
   */
  shortId?: string;
  signature?: ListRepositoryCommitsResponseBodyResultSignature;
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
      author: ListRepositoryCommitsResponseBodyResultAuthor,
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      commentsCount: 'number',
      committedDate: 'string',
      committer: ListRepositoryCommitsResponseBodyResultCommitter,
      committerEmail: 'string',
      committerName: 'string',
      createdAt: 'string',
      id: 'string',
      message: 'string',
      parentIds: { 'type': 'array', 'itemType': 'string' },
      shortId: 'string',
      signature: ListRepositoryCommitsResponseBodyResultSignature,
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

export class ListRepositoryCommitsResponseBody extends $dara.Model {
  /**
   * @example
   * OpenApi.error
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * F1138237-CF7F-56BF-95D4-9AA937CCE8E5
   */
  requestId?: string;
  result?: ListRepositoryCommitsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 145
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
      result: { 'type': 'array', 'itemType': ListRepositoryCommitsResponseBodyResult },
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

