// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommentResponseBodyResultAuthor extends $dara.Model {
  /**
   * @example
   * 284692704493684695
   */
  aliyunPk?: string;
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

export class CreateCommentResponseBodyResultRelatedPatchSet extends $dara.Model {
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

export class CreateCommentResponseBodyResult extends $dara.Model {
  author?: CreateCommentResponseBodyResultAuthor;
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
  /**
   * @example
   * xxxx
   */
  content?: string;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * src/main/update.txt
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
  relatedPatchSet?: CreateCommentResponseBodyResultRelatedPatchSet;
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
      author: CreateCommentResponseBodyResultAuthor,
      commentBizId: 'string',
      commentTime: 'string',
      commentType: 'string',
      content: 'string',
      deleted: 'boolean',
      filePath: 'string',
      lastEditTime: 'string',
      lineNumber: 'string',
      parentCommentBizId: 'string',
      relatedPatchSet: CreateCommentResponseBodyResultRelatedPatchSet,
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

export class CreateCommentResponseBody extends $dara.Model {
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
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  result?: CreateCommentResponseBodyResult;
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
      result: CreateCommentResponseBodyResult,
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

