// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tasks to display per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource ID to which the task belongs, such as a site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * @example
   * 4080****3752512
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * site
   */
  resourceType?: string;
  /**
   * @remarks
   * The current status of the task. Valid values:
   * 
   * - in_progress: in progress.
   * - success: completed.
   * - fail: failed.
   * 
   * @example
   * success
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type. For example, the task type for applying for a free certificate is free_cert.
   * 
   * @example
   * free_cert
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceIds: 'string',
      resourceType: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

