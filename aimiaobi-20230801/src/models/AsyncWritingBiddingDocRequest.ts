// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncWritingBiddingDocRequest extends $dara.Model {
  /**
   * @example
   * comany name
   */
  companyKeyword?: string;
  prompt?: string;
  /**
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      companyKeyword: 'CompanyKeyword',
      prompt: 'Prompt',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyKeyword: 'string',
      prompt: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

