// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommentListReportResponseBodyComments extends $dara.Model {
  content?: string;
  /**
   * @example
   * 1678442466000
   */
  createTime?: string;
  /**
   * @example
   * 012345
   */
  userid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      userid: 'Userid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      userid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommentListReportResponseBody extends $dara.Model {
  comments?: CommentListReportResponseBodyComments[];
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 1568442466000
   */
  nextCursor?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'comments',
      hasMore: 'hasMore',
      nextCursor: 'nextCursor',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: { 'type': 'array', 'itemType': CommentListReportResponseBodyComments },
      hasMore: 'boolean',
      nextCursor: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

