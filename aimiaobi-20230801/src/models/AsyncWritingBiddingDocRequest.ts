// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncWritingBiddingDocRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bidding company.
   * 
   * @example
   * comany name
   */
  companyKeyword?: string;
  /**
   * @remarks
   * The prompt.
   * 
   * @example
   * 自定义观点的输入Prompt
   */
  prompt?: string;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * @example
   * 7AA2AE16-D873-5C5F-9708-15396C382EB1
   */
  taskId?: string;
  /**
   * @remarks
   * [The ID of the workspace.](https://help.aliyun.com/document_detail/2782167.html)
   * 
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

