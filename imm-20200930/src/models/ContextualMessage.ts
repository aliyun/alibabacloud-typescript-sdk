// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContextualFile } from "./ContextualFile";


export class ContextualMessage extends $dara.Model {
  /**
   * @example
   * 你好
   */
  content?: string;
  files?: ContextualFile[];
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      files: 'Files',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      files: { 'type': 'array', 'itemType': ContextualFile },
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

