// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStreamingJobsResponseBodyJobItems } from "./ListStreamingJobsResponseBodyJobItems";


export class ListStreamingJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried jobs.
   */
  jobItems?: ListStreamingJobsResponseBodyJobItems[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 2
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobItems: 'JobItems',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobItems: { 'type': 'array', 'itemType': ListStreamingJobsResponseBodyJobItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobItems)) {
      $dara.Model.validateArray(this.jobItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

