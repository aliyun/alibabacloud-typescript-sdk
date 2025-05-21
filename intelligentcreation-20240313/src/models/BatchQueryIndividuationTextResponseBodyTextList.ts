// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryIndividuationTextResponseBodyTextList extends $dara.Model {
  content?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  errorMsg?: string;
  /**
   * @example
   * 2849286
   */
  itemId?: string;
  /**
   * @example
   * 812884915104530432
   */
  projectId?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 837074737851613184
   */
  taskId?: string;
  /**
   * @example
   * 110825
   */
  textId?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  updateTime?: string;
  /**
   * @example
   * 11
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      errorMsg: 'errorMsg',
      itemId: 'itemId',
      projectId: 'projectId',
      status: 'status',
      taskId: 'taskId',
      textId: 'textId',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      errorMsg: 'string',
      itemId: 'string',
      projectId: 'string',
      status: 'string',
      taskId: 'string',
      textId: 'string',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

