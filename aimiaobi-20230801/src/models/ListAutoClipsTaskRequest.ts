// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAutoClipsTaskRequest extends $dara.Model {
  /**
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * null
   */
  maxResults?: number;
  /**
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * null
   */
  skip?: number;
  /**
   * @example
   * task001
   */
  taskName?: string;
  /**
   * @example
   * 0
   */
  taskStatus?: number;
  /**
   * @example
   * type001
   */
  taskType?: string;
  /**
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

