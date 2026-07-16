// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 4080****3752512
   */
  resourceIds?: string;
  /**
   * @example
   * site
   */
  resourceType?: string;
  /**
   * @example
   * success
   */
  taskStatus?: string;
  /**
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

