// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskListResponseBodyModelIntentTags extends $dara.Model {
  /**
   * @remarks
   * 意向标签描述
   * 
   * @example
   * 示例值示例值
   */
  intentDescription?: string;
  /**
   * @remarks
   * 意向标签ID
   * 
   * @example
   * 示例值示例值
   */
  intentTag?: string;
  static names(): { [key: string]: string } {
    return {
      intentDescription: 'IntentDescription',
      intentTag: 'IntentTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentDescription: 'string',
      intentTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

