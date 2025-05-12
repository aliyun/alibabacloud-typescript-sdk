// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListScanBaselineByTaskResponseBodyScanBaselines } from "./ListScanBaselineByTaskResponseBodyScanBaselines";


export class ListScanBaselineByTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the API request was successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5259118F-79E2-57E9-9AEA-551586F4FAED
   */
  requestId?: string;
  /**
   * @remarks
   * The scanned baseline risks.
   */
  scanBaselines?: ListScanBaselineByTaskResponseBodyScanBaselines[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scanBaselines: 'ScanBaselines',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      scanBaselines: { 'type': 'array', 'itemType': ListScanBaselineByTaskResponseBodyScanBaselines },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scanBaselines)) {
      $dara.Model.validateArray(this.scanBaselines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

