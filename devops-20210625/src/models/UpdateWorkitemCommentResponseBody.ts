// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkitemCommentResponseBodyCommentUser extends $dara.Model {
  /**
   * @example
   * 1316458xxxxx41068
   */
  account?: string;
  /**
   * @example
   * https://tcs-devops.aliyuncs.com/thumbnail/112m7150e256dbba0d6456bafbb65c81f90d/w/200/h/200
   */
  avatar?: string;
  displayName?: string;
  /**
   * @example
   * 9144ef6b72d8exxxxx9e61a4d0
   */
  identifier?: string;
  nickName?: string;
  realName?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      avatar: 'avatar',
      displayName: 'displayName',
      identifier: 'identifier',
      nickName: 'nickName',
      realName: 'realName',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkitemCommentResponseBodyComment extends $dara.Model {
  content?: string;
  /**
   * @example
   * 1667205617061
   */
  createTime?: number;
  /**
   * @example
   * MARKDOWN/RICHTEXT
   */
  formatType?: string;
  /**
   * @example
   * 1964584
   */
  id?: string;
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
   * 2684432
   */
  parentId?: number;
  /**
   * @example
   * deafe5f33xxxxx6a259d8dafd
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
  user?: UpdateWorkitemCommentResponseBodyCommentUser;
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
      id: 'string',
      isTop: 'boolean',
      modifiedTime: 'number',
      parentId: 'number',
      targetIdentifier: 'string',
      targetType: 'string',
      topTime: 'number',
      user: UpdateWorkitemCommentResponseBodyCommentUser,
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

export class UpdateWorkitemCommentResponseBody extends $dara.Model {
  comment?: UpdateWorkitemCommentResponseBodyComment;
  /**
   * @example
   * InvalidParam.NotFound
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
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: UpdateWorkitemCommentResponseBodyComment,
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

