// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompareDetailResponseBodyResultCommitsAuthor extends $dara.Model {
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
   * 21396
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
   * Codeup
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

export class GetCompareDetailResponseBodyResultCommitsCommitter extends $dara.Model {
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
   * 43910
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
   * Codeup-commiter
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

export class GetCompareDetailResponseBodyResultCommits extends $dara.Model {
  author?: GetCompareDetailResponseBodyResultCommitsAuthor;
  /**
   * @example
   * username@example.com
   */
  authorEmail?: string;
  authorName?: string;
  /**
   * @example
   * 2023-01-03T15:41:26+08:00
   */
  authoredDate?: string;
  /**
   * @example
   * 1
   */
  commentsCount?: number;
  /**
   * @example
   * 2023-01-03T15:41:26+08:00
   */
  committedDate?: string;
  committer?: GetCompareDetailResponseBodyResultCommitsCommitter;
  /**
   * @example
   * username@example.com
   */
  committerEmail?: string;
  committerName?: string;
  /**
   * @example
   * 2023-01-03T15:41:26+08:00
   */
  createdAt?: string;
  /**
   * @example
   * b8f6f28520b1936aafe2e638373e19ccafa42b02
   */
  id?: string;
  /**
   * @example
   * ""
   */
  message?: string;
  parentIds?: string[];
  /**
   * @example
   * b8f6f285
   */
  shortId?: string;
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
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: GetCompareDetailResponseBodyResultCommitsAuthor,
      authorEmail: 'string',
      authorName: 'string',
      authoredDate: 'string',
      commentsCount: 'number',
      committedDate: 'string',
      committer: GetCompareDetailResponseBodyResultCommitsCommitter,
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

export class GetCompareDetailResponseBodyResultDiffs extends $dara.Model {
  /**
   * @example
   * 100644
   */
  aMode?: string;
  /**
   * @example
   * 100644
   */
  bMode?: string;
  /**
   * @example
   * false
   */
  deletedFile?: boolean;
  diff?: string;
  /**
   * @example
   * false
   */
  isBinary?: boolean;
  /**
   * @example
   * false
   */
  isNewLfs?: boolean;
  /**
   * @example
   * false
   */
  isOldLfs?: boolean;
  /**
   * @example
   * false
   */
  newFile?: boolean;
  /**
   * @example
   * cb75846da2df3d3d7f290c3569236fcf3dd17224
   */
  newId?: string;
  /**
   * @example
   * new_test.txt
   */
  newPath?: string;
  /**
   * @example
   * 6c268061a546378276559c713d0ad377d4dsjfh
   */
  oldId?: string;
  /**
   * @example
   * test.txt
   */
  oldPath?: string;
  /**
   * @example
   * false
   */
  renamedFile?: boolean;
  static names(): { [key: string]: string } {
    return {
      aMode: 'aMode',
      bMode: 'bMode',
      deletedFile: 'deletedFile',
      diff: 'diff',
      isBinary: 'isBinary',
      isNewLfs: 'isNewLfs',
      isOldLfs: 'isOldLfs',
      newFile: 'newFile',
      newId: 'newId',
      newPath: 'newPath',
      oldId: 'oldId',
      oldPath: 'oldPath',
      renamedFile: 'renamedFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aMode: 'string',
      bMode: 'string',
      deletedFile: 'boolean',
      diff: 'string',
      isBinary: 'boolean',
      isNewLfs: 'boolean',
      isOldLfs: 'boolean',
      newFile: 'boolean',
      newId: 'string',
      newPath: 'string',
      oldId: 'string',
      oldPath: 'string',
      renamedFile: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompareDetailResponseBodyResult extends $dara.Model {
  commits?: GetCompareDetailResponseBodyResultCommits[];
  diffs?: GetCompareDetailResponseBodyResultDiffs[];
  messages?: string[];
  static names(): { [key: string]: string } {
    return {
      commits: 'commits',
      diffs: 'diffs',
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commits: { 'type': 'array', 'itemType': GetCompareDetailResponseBodyResultCommits },
      diffs: { 'type': 'array', 'itemType': GetCompareDetailResponseBodyResultDiffs },
      messages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.commits)) {
      $dara.Model.validateArray(this.commits);
    }
    if(Array.isArray(this.diffs)) {
      $dara.Model.validateArray(this.diffs);
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCompareDetailResponseBody extends $dara.Model {
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
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: GetCompareDetailResponseBodyResult;
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
      result: GetCompareDetailResponseBodyResult,
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

