// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContextualFile } from "./ContextualFile";
import { ContextualMessage } from "./ContextualMessage";


export class ContextualAnswerRequest extends $dara.Model {
  files?: ContextualFile[];
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: ContextualMessage[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      messages: 'Messages',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ContextualFile },
      messages: { 'type': 'array', 'itemType': ContextualMessage },
      projectName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

