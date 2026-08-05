// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfflineTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The list of task labels.
   */
  labels?: string[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 0
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * syh
   */
  taskName?: string;
  /**
   * @remarks
   * The task status.
   */
  taskStatus?: string[];
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      regionId: 'regionId',
      taskName: 'taskName',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskName: 'string',
      taskStatus: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.taskStatus)) {
      $dara.Model.validateArray(this.taskStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

