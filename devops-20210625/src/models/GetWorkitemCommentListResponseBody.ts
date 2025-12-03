// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkitemCommentListResponseBodyCommentListUser extends $dara.Model {
  account?: string;
  avatar?: string;
  identifier?: string;
  nickName?: string;
  realName?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      avatar: 'avatar',
      identifier: 'identifier',
      nickName: 'nickName',
      realName: 'realName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      avatar: 'string',
      identifier: 'string',
      nickName: 'string',
      realName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkitemCommentListResponseBodyCommentList extends $dara.Model {
  /**
   * @example
   * 066961
   */
  content?: string;
  /**
   * @example
   * 1667205617061
   */
  createTime?: number;
  /**
   * @example
   * RICHTEXT/MARKDOWN
   */
  formatType?: string;
  /**
   * @example
   * 6573
   */
  id?: number;
  /**
   * @example
   * true/false
   */
  isTop?: boolean;
  /**
   * @example
   * 1646323200000
   */
  modifiedTime?: number;
  /**
   * @example
   * 1013131897677566
   */
  parentId?: number;
  /**
   * @example
   * 9144ef6b72d8exxxxx9e61a4d0
   */
  targetIdentifier?: string;
  /**
   * @example
   * workitem
   */
  targetType?: string;
  /**
   * @example
   * 1667205617089
   */
  topTime?: number;
  user?: GetWorkitemCommentListResponseBodyCommentListUser;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      formatType: 'formatType',
      id: 'id',
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
      content: 'string',
      createTime: 'number',
      formatType: 'string',
      id: 'number',
      isTop: 'boolean',
      modifiedTime: 'number',
      parentId: 'number',
      targetIdentifier: 'string',
      targetType: 'string',
      topTime: 'number',
      user: GetWorkitemCommentListResponseBodyCommentListUser,
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

export class GetWorkitemCommentListResponseBody extends $dara.Model {
  commentList?: GetWorkitemCommentListResponseBodyCommentList[];
  /**
   * @example
   * Openapi.RequestError
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
      commentList: 'commentList',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commentList: { 'type': 'array', 'itemType': GetWorkitemCommentListResponseBodyCommentList },
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commentList)) {
      $dara.Model.validateArray(this.commentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

