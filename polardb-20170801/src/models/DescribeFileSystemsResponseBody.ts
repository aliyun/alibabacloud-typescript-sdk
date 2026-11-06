// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsResponseBodyFileSystems extends $dara.Model {
  /**
   * @remarks
   * The capacity of the file.
   * 
   * @example
   * 100GB
   */
  capacity?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * test.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The time when the file was last modified. The time is in the RFC 3339 UTC format.
   * 
   * @example
   * 2025-03-25T09:37:10Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The storage type of the file.
   * 
   * @example
   * SSD
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      fileName: 'FileName',
      lastModified: 'LastModified',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      fileName: 'string',
      lastModified: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the bucket.
   * 
   * @example
   * bucket-456
   */
  bucketId?: string;
  /**
   * @remarks
   * The total number of files that meet the specified conditions.
   * 
   * @example
   * 100
   */
  fileCount?: number;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * fs-123
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The list of files.
   */
  fileSystems?: DescribeFileSystemsResponseBodyFileSystems[];
  /**
   * @remarks
   * Indicates whether the results are truncated. If the value is true, you can use NextToken to query subsequent results.
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The maximum number of records returned for this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * nextToken456
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketId: 'BucketId',
      fileCount: 'FileCount',
      fileSystemId: 'FileSystemId',
      fileSystems: 'FileSystems',
      isTruncated: 'IsTruncated',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketId: 'string',
      fileCount: 'number',
      fileSystemId: 'string',
      fileSystems: { 'type': 'array', 'itemType': DescribeFileSystemsResponseBodyFileSystems },
      isTruncated: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileSystems)) {
      $dara.Model.validateArray(this.fileSystems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

