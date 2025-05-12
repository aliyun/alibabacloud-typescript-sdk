// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceM3u8JobRequest extends $dara.Model {
  /**
   * @example
   * 1527441303
   */
  createTimeEnd?: number;
  /**
   * @example
   * 1527441300
   */
  createTimeStart?: number;
  /**
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
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

