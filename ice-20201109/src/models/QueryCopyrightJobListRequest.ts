// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopyrightJobListRequest extends $dara.Model {
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
   * The job ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The watermark level, indicating the color channel for embedding. 0: U. 1: UV. 2: YUV.
   * 
   * @example
   * 0
   */
  level?: number;
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
      level: 'Level',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      jobId: 'string',
      level: 'number',
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

