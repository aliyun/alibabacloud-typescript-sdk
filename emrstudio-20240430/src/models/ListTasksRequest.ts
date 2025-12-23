// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @example
   * 123abc***
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  searchVal?: string;
  /**
   * @example
   * SHELL
   */
  taskType?: string;
  /**
   * @example
   * w-n72kong0832****
   */
  workflowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      searchVal: 'searchVal',
      taskType: 'taskType',
      workflowId: 'workflowId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      searchVal: 'string',
      taskType: 'string',
      workflowId: 'string',
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

