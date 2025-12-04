// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
  /**
   * @example
   * Default
   */
  jobType?: string;
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
   * Errored
   */
  status?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      jobType: 'jobType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
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

