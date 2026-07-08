// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBiddingDocRequest extends $dara.Model {
  /**
   * @remarks
   * End creation time, in timestamp format.
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * Start creation time, in timestamp format.
   * 
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * null
   */
  maxResults?: number;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * Number of items per page. Default is 10.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * null
   */
  skip?: number;
  /**
   * @remarks
   * Defines the task name.
   * 
   * @example
   * 任务名称
   */
  taskName?: string;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * 0-waiting、1-running、2-success、3-pause、4-fail
   */
  taskStatus?: number;
  /**
   * @remarks
   * [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      size: 'Size',
      skip: 'Skip',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      maxResults: 'number',
      nextToken: 'string',
      size: 'number',
      skip: 'number',
      taskName: 'string',
      taskStatus: 'number',
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

