// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopyrightJobListRequest extends $dara.Model {
  /**
   * @example
   * 1627357325
   */
  createTimeEnd?: number;
  /**
   * @example
   * 1627357322
   */
  createTimeStart?: number;
  /**
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @example
   * 0
   */
  level?: number;
  /**
   * @example
   * 0
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

