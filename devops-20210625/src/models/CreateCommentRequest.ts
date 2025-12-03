// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCommentRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GLOBAL_COMMENT
   */
  commentType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @example
   * false
   */
  draft?: boolean;
  /**
   * @example
   * /src/main/test.java
   */
  filePath?: string;
  fromPachSetBizId?: string;
  /**
   * @example
   * 1
   */
  lineNumber?: number;
  /**
   * @example
   * 2666ac1ac53841b0ba1b042e383279cc
   */
  parentCommentBizId?: string;
  /**
   * @example
   * b7d8386be17c4ca68a07140db4836257
   */
  patchSetBizId?: string;
  /**
   * @example
   * false
   */
  resolved?: boolean;
  toPatchSetBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  localId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  repositoryIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      commentType: 'commentType',
      content: 'content',
      draft: 'draft',
      filePath: 'filePath',
      fromPachSetBizId: 'fromPachSetBizId',
      lineNumber: 'lineNumber',
      parentCommentBizId: 'parentCommentBizId',
      patchSetBizId: 'patchSetBizId',
      resolved: 'resolved',
      toPatchSetBizId: 'toPatchSetBizId',
      localId: 'localId',
      organizationId: 'organizationId',
      repositoryIdentity: 'repositoryIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      commentType: 'string',
      content: 'string',
      draft: 'boolean',
      filePath: 'string',
      fromPachSetBizId: 'string',
      lineNumber: 'number',
      parentCommentBizId: 'string',
      patchSetBizId: 'string',
      resolved: 'boolean',
      toPatchSetBizId: 'string',
      localId: 'number',
      organizationId: 'string',
      repositoryIdentity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

