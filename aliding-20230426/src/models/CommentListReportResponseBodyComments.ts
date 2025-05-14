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

