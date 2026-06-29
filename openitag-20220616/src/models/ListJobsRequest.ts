// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Task Type. Currently, only DOWNLOWD_MARKRESULT_FLOW is available.
   * 
   * @example
   * DOWNLOWD_MARKRESULT_FLOW
   */
  jobType?: string;
  /**
   * @remarks
   * The quantity of annotation results displayed per page in a paged query. The default value is 20.
   * 
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number of the annotation result list. The starting value is 1, and the default value is 1.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      jobType: 'JobType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
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

