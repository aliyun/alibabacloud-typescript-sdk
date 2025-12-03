// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkitemCommentResponseBodyCommentUser extends $dara.Model {
  /**
   * @example
   * 13164xxxxx41068
   */
  account?: string;
  /**
   * @example
   * https://xxxxx/thumbnail/112m7150e256dbba0d6456bafbb65c81f90d/w/200/h/200
   */
  avatar?: string;
  displayName?: string;
  /**
   * @example
   * 1e9903d8bxxxxxxe9df9286ef5
   */
  identifier?: string;
  nickName?: string;
  realName?: string;
  /**
   * @example
   * workitem
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      avatar: 'avatar',
      displayName: 'displayName',
      identifier: 'identifier',
      nickName: 'nickName',
      realName: 'realName',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      avatar: 'string',
      displayName: 'string',
      identifier: 'string',
      nickName: 'string',
      realName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkitemCommentResponseBodyComment extends $dara.Model {
  /**
   * @example
   * 26842
   */
  id?: number;
  content?: string;
  /**
   * @example
   * 1667202662000
   */
  createTime?: number;
  /**
   * @example
   * RICHTEXT/MARKDOWN
   */
  formatType?: string;
  /**
   * @example
   * true/false
   */
  isTop?: boolean;
  /**
   * @example
   * 1637995553000
   */
  modifiedTime?: number;
  /**
   * @example
   * 26842
   */
  parentId?: number;
  /**
   * @example
   * 79d523806bdxxxxx95612a5154
   */
  targetIdentifier?: string;
  /**
   * @example
   * workitem
   */
  targetType?: string;
  /**
   * @example
   * 1667202662000
   */
  topTime?: number;
  user?: CreateWorkitemCommentResponseBodyCommentUser;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      content: 'content',
      createTime: 'createTime',
      formatType: 'formatType',
      isTop: 'isTop',
      modifiedTime: 'modifiedTime',
      parentId: 'parentId',
      targetIdentifier: 'targetIdentifier',
      targetType: 'targetType',
      topTime: 'topTime',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      content: 'string',
      createTime: 'number',
      formatType: 'string',
      isTop: 'boolean',
      modifiedTime: 'number',
      parentId: 'number',
      targetIdentifier: 'string',
      targetType: 'string',
      topTime: 'number',
      user: CreateWorkitemCommentResponseBodyCommentUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkitemCommentResponseBody extends $dara.Model {
  comment?: CreateWorkitemCommentResponseBodyComment;
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: CreateWorkitemCommentResponseBodyComment,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.comment && typeof (this.comment as any).validate === 'function') {
      (this.comment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

