// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for the task creation time filter. Only the last 90 days are supported. Specify the time in ISO 8601 format in UTC (ending with Z).
   * 
   * @example
   * 2025-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * The file name or media asset ID. This parameter supports fuzzy match for TaskInput and has a maximum length of 32 characters.
   * 
   * @example
   * ******7aa4cc4459ada8ef35f7******
   * or
   * **TestVideo***.flv
   */
  keyText?: string;
  /**
   * @remarks
   * The maximum number of media workflow task instances to return. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page in a continuous paging query. This parameter is not returned for the first page.
   * 
   * @example
   * **************VRpbWUQARgBIpcBCgkA1bUtaAAAAAAKiQEDhAAAADFTMzg2NTY2NjU2MzM3NjU2NjYyMzkzMTYyMzI2MjYzNjY2**********
   */
  nextToken?: string;
  /**
   * @remarks
   * The start time for the task creation time filter. Only the last 90 days are supported. Specify the time in ISO 8601 format in UTC (ending with Z).
   * 
   * @example
   * 2025-07-12T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The ID of the workflow template. You can view the template ID in the [Intelligent Media Services console](https://ims.console.aliyun.com/settings/workflow/list) by choosing Configuration Management > Workflow Templates.
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

