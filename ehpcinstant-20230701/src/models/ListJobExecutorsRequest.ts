// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutorsRequest extends $dara.Model {
  /**
   * @example
   * job-xxx
   */
  jobId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

