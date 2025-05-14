// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSnapshotUrlsRequest extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  jobId?: string;
  /**
   * @remarks
   * The order that you use to sort the query results. Valid values: Asc and Desc.
   * 
   * - Asc
   * 
   * - Desc
   * 
   * @example
   * Asc
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 30. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The authentication timeout period. Unit: seconds Default value: 3600. Maximum value: 129600 (36 hours).
   * 
   * @example
   * 3600
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

