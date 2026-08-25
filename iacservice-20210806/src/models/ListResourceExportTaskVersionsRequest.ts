// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceExportTaskVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The export version number.
   * 
   * @example
   * v1
   */
  exportVersion?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy search on export version names is supported.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The export status. Valid values:
   * 
   * - Queue: queued
   * - Pending: preparing to run
   * - Success: succeeded
   * - Errored: failed
   * - Canceled: canceled
   * 
   * @example
   * Errored
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      exportVersion: 'exportVersion',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportVersion: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

