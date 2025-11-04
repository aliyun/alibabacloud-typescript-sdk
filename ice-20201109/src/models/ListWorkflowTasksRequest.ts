// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range for filtering tasks by their creation time. Supports querying data from the last 90 days only.
   * 
   * @example
   * 2025-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * A keyword for fuzzy matching against the TaskInput, such as a file name or Media ID. Max length: 32 characters.
   */
  keyText?: string;
  /**
   * @remarks
   * The maximum number of media workflow instances to return. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * **************VRpbWUQARgBIpcBCgkA1bUtaAAAAAAKiQEDhAAAADFTMzg2NTY2NjU2MzM3NjU2NjYyMzkzMTYyMzI2MjYzNjY2**********
   */
  nextToken?: string;
  /**
   * @remarks
   * The start of the time range for filtering tasks by their creation time. Supports querying data from the last 90 days only.
   * 
   * @example
   * 2025-07-12T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The ID of the workflow template.[](https://ims.console.aliyun.com/settings/workflow/list)
   * 
   * @example
   * ******b4fb044839815d4f2cd8******
   */
  workflowId?: string;
  /**
   * @remarks
   * The name of the workflow template.
   * 
   * @example
   * example-workflow-****
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      keyText: 'KeyText',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startOfCreateTime: 'StartOfCreateTime',
      workflowId: 'WorkflowId',
      workflowName: 'WorkflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      keyText: 'string',
      maxResults: 'number',
      nextToken: 'string',
      startOfCreateTime: 'string',
      workflowId: 'string',
      workflowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

