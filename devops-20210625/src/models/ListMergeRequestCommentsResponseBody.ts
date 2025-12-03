// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMergeRequestCommentsResponseBodyResultAuthor extends $dara.Model {
  /**
   * @example
   * 284692704493684695
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
  id?: number;
  /**
   * @example
   * codeup
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
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
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
      aliyunPk: 'string',
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

export class ListMergeRequestCommentsResponseBodyResultChildCommentsAuthor extends $dara.Model {
  /**
   * @example
   * 204485087002425236
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
  id?: number;
  /**
   * @example
   * codeup
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
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
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
      aliyunPk: 'string',
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

export class ListMergeRequestCommentsResponseBodyResultChildCommentsFinalChildCommentsAuthor extends $dara.Model {
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
  id?: number;
  /**
   * @example
   * codeup
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
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
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
      aliyunPk: 'string',
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

export class ListMergeRequestCommentsResponseBodyResultChildCommentsFinalChildCommentsRelatedPatchSet extends $dara.Model {
  /**
   * @example
   * 1a072f5367c21f9de3464b8c0ee8546e47764d2d
   */
  commitId?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * 513fcfd81a9142d2bb0db4f72c0aa15b
   */
  patchSetBizId?: string;
  patchSetName?: string;
  /**
   * @example
   * 1
   */
  patchSetNo?: string;
  /**
   * @example
   * MERGE_SOURCE
   */
  relatedMergeItemType?: string;
  /**
   * @example
   * 1a072f53
   */
  shortId?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'commitId',
      createdAt: 'createdAt',
      patchSetBizId: 'patchSetBizId',
      patchSetName: 'patchSetName',
      patchSetNo: 'patchSetNo',
      relatedMergeItemType: 'relatedMergeItemType',
      shortId: 'shortId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      createdAt: 'string',
      patchSetBizId: 'string',
      patchSetName: 'string',
      patchSetNo: 'string',
      relatedMergeItemType: 'string',
      shortId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBodyResultChildCommentsFinalChildComments extends $dara.Model {
  author?: ListMergeRequestCommentsResponseBodyResultChildCommentsFinalChildCommentsAuthor;
  /**
   * @example
   * 5c399e3685e542a28db16d93e9f82abb
   */
  commentBizId?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  commentTime?: string;
  /**
   * @example
   * GLOBAL_COMMENT
   */
  commentType?: string;
  content?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * src/main/test.java
   */
  filePath?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  lastEditTime?: string;
  /**
   * @example
   * 3
   */
  lineNumber?: string;
  /**
   * @example
   * 4c5dcec6a8dc41e69c369737dadc1841
   */
  parentCommentBizId?: string;
  relatedPatchSet?: ListMergeRequestCommentsResponseBodyResultChildCommentsFinalChildCommentsRelatedPatchSet;
  /**
   * @example
   * false
   */
  resolved?: boolean;
  /**
   * @example
   * dcf2b23cebfc418f98dbd35e423d9fd3
   */
  rootCommentBizId?: string;
  /**
   * @example
   * OPENED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      commentBizId: 'commentBizId',
      commentTime: 'commentTime',
      commentType: 'commentType',
      content: 'content',
      deleted: 'deleted',
      filePath: 'filePath',
      lastEditTime: 'lastEditTime',
      lineNumber: 'lineNumber',
      parentCommentBizId: 'parentCommentBizId',
      relatedPatchSet: 'relatedPatchSet',
      resolved: 'resolved',
      rootCommentBizId: 'rootCommentBizId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: ListMergeRequestCommentsResponseBodyResultChildCommentsFinalChildCommentsAuthor,
      commentBizId: 'string',
      commentTime: 'string',
      commentType: 'string',
      content: 'string',
      deleted: 'boolean',
      filePath: 'string',
      lastEditTime: 'string',
      lineNumber: 'string',
      parentCommentBizId: 'string',
      relatedPatchSet: ListMergeRequestCommentsResponseBodyResultChildCommentsFinalChildCommentsRelatedPatchSet,
      resolved: 'boolean',
      rootCommentBizId: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.author && typeof (this.author as any).validate === 'function') {
      (this.author as any).validate();
    }
    if(this.relatedPatchSet && typeof (this.relatedPatchSet as any).validate === 'function') {
      (this.relatedPatchSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBodyResultChildCommentsRelatedPatchSet extends $dara.Model {
  /**
   * @example
   * 1a072f5367c21f9de3464b8c0ee8546e47764d2d
   */
  commitId?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * 513fcfd81a9142d2bb0db4f72c0aa15b
   */
  patchSetBizId?: string;
  patchSetName?: string;
  /**
   * @example
   * 1
   */
  patchSetNo?: string;
  /**
   * @example
   * MERGE_SOURCE
   */
  relatedMergeItemType?: string;
  /**
   * @example
   * 1a072f53
   */
  shortId?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'commitId',
      createdAt: 'createdAt',
      patchSetBizId: 'patchSetBizId',
      patchSetName: 'patchSetName',
      patchSetNo: 'patchSetNo',
      relatedMergeItemType: 'relatedMergeItemType',
      shortId: 'shortId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      createdAt: 'string',
      patchSetBizId: 'string',
      patchSetName: 'string',
      patchSetNo: 'string',
      relatedMergeItemType: 'string',
      shortId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBodyResultChildComments extends $dara.Model {
  author?: ListMergeRequestCommentsResponseBodyResultChildCommentsAuthor;
  /**
   * @example
   * 63f0e293357f48f9846ddc4dbbebd0e3
   */
  commentBizId?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  commentTime?: string;
  /**
   * @example
   * GLOBAL_COMMENT
   */
  commentType?: string;
  content?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * src/main/test.java
   */
  filePath?: string;
  finalChildComments?: ListMergeRequestCommentsResponseBodyResultChildCommentsFinalChildComments[];
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  lastEditTime?: string;
  /**
   * @example
   * 3
   */
  lineNumber?: string;
  /**
   * @example
   * 5c399e3685e542a28db16d93e9f82abb
   */
  parentCommentBizId?: string;
  relatedPatchSet?: ListMergeRequestCommentsResponseBodyResultChildCommentsRelatedPatchSet;
  /**
   * @example
   * false
   */
  resolved?: boolean;
  /**
   * @example
   * dcf2b23cebfc418f98dbd35e423d9fd3
   */
  rootCommentBizId?: string;
  /**
   * @example
   * OPENED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      commentBizId: 'commentBizId',
      commentTime: 'commentTime',
      commentType: 'commentType',
      content: 'content',
      deleted: 'deleted',
      filePath: 'filePath',
      finalChildComments: 'finalChildComments',
      lastEditTime: 'lastEditTime',
      lineNumber: 'lineNumber',
      parentCommentBizId: 'parentCommentBizId',
      relatedPatchSet: 'relatedPatchSet',
      resolved: 'resolved',
      rootCommentBizId: 'rootCommentBizId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: ListMergeRequestCommentsResponseBodyResultChildCommentsAuthor,
      commentBizId: 'string',
      commentTime: 'string',
      commentType: 'string',
      content: 'string',
      deleted: 'boolean',
      filePath: 'string',
      finalChildComments: { 'type': 'array', 'itemType': ListMergeRequestCommentsResponseBodyResultChildCommentsFinalChildComments },
      lastEditTime: 'string',
      lineNumber: 'string',
      parentCommentBizId: 'string',
      relatedPatchSet: ListMergeRequestCommentsResponseBodyResultChildCommentsRelatedPatchSet,
      resolved: 'boolean',
      rootCommentBizId: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.author && typeof (this.author as any).validate === 'function') {
      (this.author as any).validate();
    }
    if(Array.isArray(this.finalChildComments)) {
      $dara.Model.validateArray(this.finalChildComments);
    }
    if(this.relatedPatchSet && typeof (this.relatedPatchSet as any).validate === 'function') {
      (this.relatedPatchSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBodyResultRelatedPatchSet extends $dara.Model {
  /**
   * @example
   * 1a072f5367c21f9de3464b8c0ee8546e47764d2d
   */
  commitId?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * 513fcfd81a9142d2bb0db4f72c0aa15b
   */
  patchSetBizId?: string;
  patchSetName?: string;
  /**
   * @example
   * 1
   */
  patchSetNo?: string;
  /**
   * @example
   * MERGE_SOURCE
   */
  relatedMergeItemType?: string;
  /**
   * @example
   * 1a072f53
   */
  shortId?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'commitId',
      createdAt: 'createdAt',
      patchSetBizId: 'patchSetBizId',
      patchSetName: 'patchSetName',
      patchSetNo: 'patchSetNo',
      relatedMergeItemType: 'relatedMergeItemType',
      shortId: 'shortId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      createdAt: 'string',
      patchSetBizId: 'string',
      patchSetName: 'string',
      patchSetNo: 'string',
      relatedMergeItemType: 'string',
      shortId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBodyResult extends $dara.Model {
  author?: ListMergeRequestCommentsResponseBodyResultAuthor;
  childComments?: ListMergeRequestCommentsResponseBodyResultChildComments[];
  /**
   * @example
   * 5c399e3685e542a28db16d93e9f82abb
   */
  commentBizId?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  commentTime?: string;
  /**
   * @example
   * GLOBAL_COMMENT
   */
  commentType?: string;
  content?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * src/main/test.java
   */
  filePath?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  lastEditTime?: string;
  /**
   * @example
   * 3
   */
  lineNumber?: string;
  /**
   * @example
   * 4c5dcec6a8dc41e69c369737dadc1841
   */
  parentCommentBizId?: string;
  relatedPatchSet?: ListMergeRequestCommentsResponseBodyResultRelatedPatchSet;
  /**
   * @example
   * false
   */
  resolved?: boolean;
  /**
   * @example
   * dcf2b23cebfc418f98dbd35e423d9fd3
   */
  rootCommentBizId?: string;
  /**
   * @example
   * OPENED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      childComments: 'childComments',
      commentBizId: 'commentBizId',
      commentTime: 'commentTime',
      commentType: 'commentType',
      content: 'content',
      deleted: 'deleted',
      filePath: 'filePath',
      lastEditTime: 'lastEditTime',
      lineNumber: 'lineNumber',
      parentCommentBizId: 'parentCommentBizId',
      relatedPatchSet: 'relatedPatchSet',
      resolved: 'resolved',
      rootCommentBizId: 'rootCommentBizId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: ListMergeRequestCommentsResponseBodyResultAuthor,
      childComments: { 'type': 'array', 'itemType': ListMergeRequestCommentsResponseBodyResultChildComments },
      commentBizId: 'string',
      commentTime: 'string',
      commentType: 'string',
      content: 'string',
      deleted: 'boolean',
      filePath: 'string',
      lastEditTime: 'string',
      lineNumber: 'string',
      parentCommentBizId: 'string',
      relatedPatchSet: ListMergeRequestCommentsResponseBodyResultRelatedPatchSet,
      resolved: 'boolean',
      rootCommentBizId: 'string',
      state: 'string',
    };
  }

  validate() {
    if(this.author && typeof (this.author as any).validate === 'function') {
      (this.author as any).validate();
    }
    if(Array.isArray(this.childComments)) {
      $dara.Model.validateArray(this.childComments);
    }
    if(this.relatedPatchSet && typeof (this.relatedPatchSet as any).validate === 'function') {
      (this.relatedPatchSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestCommentsResponseBody extends $dara.Model {
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
   * 56C33A95-C04F-59F0-B3CD-E2A2EB9FADBB
   */
  requestId?: string;
  result?: ListMergeRequestCommentsResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListMergeRequestCommentsResponseBodyResult },
      success: 'boolean',
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

