// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommitWithMultipleFilesResponseBodyResultAuthor extends $dara.Model {
  /**
   * @example
   * 284692704493684695
   */
  aliyunPk?: string;
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
   * test-codeup
   */
  username?: string;
  /**
   * @example
   * ""
   */
  websiteUrl?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
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
      aliyunPk: 'string',
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

export class CreateCommitWithMultipleFilesResponseBodyResultCommitter extends $dara.Model {
  /**
   * @example
   * 235671547828975455
   */
  aliyunPk?: string;
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
   * committer-codeup
   */
  username?: string;
  /**
   * @example
   * ""
   */
  websiteUrl?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
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
      aliyunPk: 'string',
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

export class CreateCommitWithMultipleFilesResponseBodyResult extends $dara.Model {
  author?: CreateCommitWithMultipleFilesResponseBodyResultAuthor;
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
   * 2022-03-18 16:00:00
   */
  committedDate?: string;
  committer?: CreateCommitWithMultipleFilesResponseBodyResultCommitter;
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
  title?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      authorEmail: 'authorEmail',
      authorName: 'authorName',
      authoredDate: 'authoredDate',
      committedDate: 'committedDate',
      committer: 'committer',
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
      author: CreateCommitWithMultipleFilesResponseBodyResultAuthor,
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      committedDate: 'string',
      committer: CreateCommitWithMultipleFilesResponseBodyResultCommitter,
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
    if(this.author && typeof (this.author as any).validate === 'function') {
      (this.author as any).validate();
    }
    if(this.committer && typeof (this.committer as any).validate === 'function') {
      (this.committer as any).validate();
    }
    if(Array.isArray(this.parentIds)) {
      $dara.Model.validateArray(this.parentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommitWithMultipleFilesResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * A7586FEB-E48D-5579-983F-74981FBFF627
   */
  requestId?: string;
  result?: CreateCommitWithMultipleFilesResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      result: CreateCommitWithMultipleFilesResponseBodyResult,
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

