// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskCallChatsResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 说话内容
   * 
   * @example
   * 示例值示例值
   */
  content?: string;
  /**
   * @remarks
   * 说话时间
   * 
   * @example
   * 2022-01-13 14:56:46.604
   */
  createTime?: string;
  /**
   * @remarks
   * 说话号码
   * 
   * @example
   * 138*****265
   */
  fromNumber?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      fromNumber: 'FromNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      fromNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

