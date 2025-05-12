// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles } from "./ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles";


export class ListScanMaliciousFileByTaskResponseBody extends $dara.Model {
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
   * Indicates whether the API request is successful. Valid values:
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
   * The page number. Default value: 1.
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
   * The request ID.
   * 
   * @example
   * 52AE49C8-B91A-5C1A-821F-C34324B42F7C
   */
  requestId?: string;
  /**
   * @remarks
   * The queried malicious files.
   */
  scanMaliciousFiles?: ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scanMaliciousFiles: 'ScanMaliciousFiles',
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
      scanMaliciousFiles: { 'type': 'array', 'itemType': ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scanMaliciousFiles)) {
      $dara.Model.validateArray(this.scanMaliciousFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

