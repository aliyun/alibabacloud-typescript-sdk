// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterHealthCheckTaskResponseBodyDataResult } from "./ListClusterHealthCheckTaskResponseBodyDataResult";


export class ListClusterHealthCheckTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 0
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of health check tasks.
   */
  result?: ListClusterHealthCheckTaskResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 9
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': ListClusterHealthCheckTaskResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

