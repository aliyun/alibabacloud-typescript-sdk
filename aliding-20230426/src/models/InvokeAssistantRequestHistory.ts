// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvokeAssistantRequestHistoryContent } from "./InvokeAssistantRequestHistoryContent";


export class InvokeAssistantRequestHistory extends $dara.Model {
  content?: InvokeAssistantRequestHistoryContent[];
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': InvokeAssistantRequestHistoryContent },
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

