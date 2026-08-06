// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSemanticJobRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The job name. Use the Data.Name value from the CreateSemanticJob response or the Name value from a ListSemanticJobs list item.
   * 
   * This parameter is required.
   * 
   * @example
   * semantic-job-demo
   */
  jobName?: string;
  /**
   * @remarks
   * The page number, starting from 1. If this parameter is not specified or set to a value less than or equal to 0, page 1 is returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of run records to return per page. If this parameter is not specified or set to a value less than or equal to 0, the default value 50 is used. Maximum value: 200.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

