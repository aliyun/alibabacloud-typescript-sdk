// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReferenceFile } from "./ReferenceFile";


export class Answer extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * Hello
   */
  content?: string;
  /**
   * @remarks
   * The reference sources of the answer.
   */
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

