// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileSystemStatisticsResponseBodyFileSystemStatistics } from "./DescribeFileSystemStatisticsResponseBodyFileSystemStatistics";
import { DescribeFileSystemStatisticsResponseBodyFileSystems } from "./DescribeFileSystemStatisticsResponseBodyFileSystems";


export class DescribeFileSystemStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of file systems.
   */
  fileSystemStatistics?: DescribeFileSystemStatisticsResponseBodyFileSystemStatistics;
  /**
   * @remarks
   * The queried file systems.
   */
  fileSystems?: DescribeFileSystemStatisticsResponseBodyFileSystems;
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
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F088138-FD73-4B68-95CC-DFAD4D85****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of file system entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemStatistics: 'FileSystemStatistics',
      fileSystems: 'FileSystems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemStatistics: DescribeFileSystemStatisticsResponseBodyFileSystemStatistics,
      fileSystems: DescribeFileSystemStatisticsResponseBodyFileSystems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.fileSystemStatistics && typeof (this.fileSystemStatistics as any).validate === 'function') {
      (this.fileSystemStatistics as any).validate();
    }
    if(this.fileSystems && typeof (this.fileSystems as any).validate === 'function') {
      (this.fileSystems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

