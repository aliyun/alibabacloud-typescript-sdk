// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The memory fragment content.
   * 
   * This parameter is required.
   * 
   * @example
   * 用户喜欢吃西红柿炒鸡蛋
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

