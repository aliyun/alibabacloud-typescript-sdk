// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-04-10 11:42:06
   */
  createTime?: number;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * tenant/0000000000000000/
   */
  filePath?: string;
  /**
   * @remarks
   * The time of the first scan.
   * 
   * @example
   * 2023-04-10 11:42:06
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * remind
   */
  level?: string;
  /**
   * @remarks
   * The MD5 hash of the malicious file.
   * 
   * @example
   * e76c9759783cbbc9be0ff91ca3xxxxxx
   */
  maliciousMd5?: string;
  /**
   * @remarks
   * The type of the malicious sample.
   * 
   * @example
   * Suspected webshell code
   */
  maliciousName?: string;
  /**
   * @remarks
   * The ID of the image scan task.
   * 
   * @example
   * fe2d8980-de45-4f55-b57d-e438e6d2e972
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-04-10 11:42:06
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      filePath: 'FilePath',
      firstScanTime: 'FirstScanTime',
      level: 'Level',
      maliciousMd5: 'MaliciousMd5',
      maliciousName: 'MaliciousName',
      scanTaskId: 'ScanTaskId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      filePath: 'string',
      firstScanTime: 'number',
      level: 'string',
      maliciousMd5: 'string',
      maliciousName: 'string',
      scanTaskId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanMaliciousFileByTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - `true`: The API call was successful.
   * 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The current page number of the queried data. You can specify this parameter to determine the page from which the queried data is returned. Default value: 1.
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
   * The list of malicious files.
   */
  scanMaliciousFiles?: ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles[];
  /**
   * @remarks
   * The total number of entries.
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

