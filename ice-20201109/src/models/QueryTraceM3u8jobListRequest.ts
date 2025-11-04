// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceM3u8JobListRequest extends $dara.Model {
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
   * The job ID. You can obtain the value of this parameter from the response of the SubmitTraceM3u8Job operation.
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
   * The number of entries to return on each page.
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

