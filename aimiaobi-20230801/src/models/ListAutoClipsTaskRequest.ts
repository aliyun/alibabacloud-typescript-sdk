// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoClipsTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task end time.
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start time of the task.
   * 
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @remarks
   * Page number
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
   * Task name
   * 
   * @example
   * task001
   */
  taskName?: string;
  /**
   * @remarks
   * Task status
   * 
   * @example
   * 0
   */
  taskStatus?: number;
  /**
   * @remarks
   * Task type
   * 
   * @example
   * type001
   */
  taskType?: string;
  /**
   * @remarks
   * Model Studio workspace
   * 
   * @example
   * llm-2setzb9x4ewsd
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
      taskType: 'TaskType',
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
      taskType: 'string',
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

