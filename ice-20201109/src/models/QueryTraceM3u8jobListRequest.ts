// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceM3u8JobListRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for creation, in UNIX timestamp format.
   * 
   * @example
   * 1627357325
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * The start time for creation, in UNIX timestamp format.
   * 
   * @example
   * 1627357322
   */
  createTimeStart?: number;
  /**
   * @remarks
   * The job ID. You can obtain it from the response parameters returned when you submit a video tracing watermark m3u8 job.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The page number.
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
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      jobId: 'string',
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

