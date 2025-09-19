// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupFilesResponseBodyBackupFiles extends $dara.Model {
  /**
   * @remarks
   * The name of the anti-ransomware policy.
   * 
   * @example
   * Group 1
   */
  name?: string;
  /**
   * @remarks
   * The size of the backup file. Unit: bytes.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The path to the subdirectory of the backup file.
   * 
   * @example
   * Python27\\
   */
  subtree?: string;
  /**
   * @remarks
   * The type of the protected file. Valid values:
   * 
   * *   **file**: files
   * *   **dir**: folders
   * 
   * @example
   * dir
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      size: 'Size',
      subtree: 'Subtree',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      size: 'number',
      subtree: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of backup files returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of backup files returned.
   * 
   * @example
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the backup files returned.
   */
  backupFiles?: DescribeBackupFilesResponseBodyBackupFiles[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeBackupFilesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 00A60A6D-33E0-5D5A-9B7C-E5D4DCA88148
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupFiles: 'BackupFiles',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupFiles: { 'type': 'array', 'itemType': DescribeBackupFilesResponseBodyBackupFiles },
      pageInfo: DescribeBackupFilesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backupFiles)) {
      $dara.Model.validateArray(this.backupFiles);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

