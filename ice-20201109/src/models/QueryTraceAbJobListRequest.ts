// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceAbJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the creation time range for the query, in UNIX timestamp format.
   * 
   * @example
   * 1627357325
   */
  createTimeEnd?: number;
  /**
   * @remarks
   * The start of the creation time range for the query, in UNIX timestamp format.
   * 
   * @example
   * 1627357322
   */
  createTimeStart?: number;
  /**
   * @remarks
   * The job ID. You can obtain the value of this parameter from the response of the SubmitTraceAbJob operation.
   * 
   * @example
   * ****d80e4e4044975745c14b****
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
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The media ID for the trace watermark. You can obtain this from the response of the SubmitTraceAbJob operation.
   * 
   * @example
   * ****437bd2b51105d07b12a9****
   */
  traceMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      traceMediaId: 'TraceMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      traceMediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

