// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContextualFile } from "./ContextualFile";
import { ContextualMessage } from "./ContextualMessage";


export class ContextualAnswerRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the files involved in the current Q&A. It is recommended to use the return value of the ContextualRetrieval interface as input.
   */
  files?: ContextualFile[];
  /**
   * @remarks
   * Yes, the history of conversations and tool invocations. The latest message is at the end (index n-1), and the oldest message is at the beginning (index 0).
   * It must be in the form of user-assistant pairs, with a total count of 2*n+1, and the length of the latest question should not exceed 1000 characters.
   * The length of the historical conversation is limited to 100.
   * 
   * This parameter is required.
   */
  messages?: ContextualMessage[];
  /**
   * @remarks
   * Project name. For how to obtain it, see [Creating a Project](https://help.aliyun.com/zh/imm/getting-started/create-a-project-1?spm=a2c4g.11186623.help-menu-search-62354.d_0).
   * 
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

