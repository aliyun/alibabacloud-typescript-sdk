// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReferenceFile } from "./ReferenceFile";


export class Answer extends $dara.Model {
  /**
   * @example
   * 你好
   */
  content?: string;
  references?: ReferenceFile[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      references: 'References',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      references: { 'type': 'array', 'itemType': ReferenceFile },
    };
  }

  validate() {
    if(Array.isArray(this.references)) {
      $dara.Model.validateArray(this.references);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

