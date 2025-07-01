// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemStatisticsResponseBodyFileSystemStatisticsFileSystemStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of expired file systems.
   * 
   * @example
   * 1
   */
  expiredCount?: number;
  /**
   * @remarks
   * The number of expiring file systems.
   * 
   * File systems whose expiration time is less than or equal to seven days away from the current time are counted.
   * 
   * @example
   * 1
   */
  expiringCount?: number;
  /**
   * @remarks
   * The type of the file system.
   * 
   * @example
   * standard
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The storage usage of the file system.
   * 
   * The value of this parameter is the maximum storage usage of the file system over the last hour.
   * 
   * Unit: bytes.
   * 
   * @example
   * 1611
   */
  meteredSize?: number;
  /**
   * @remarks
   * The number of file systems of the current type.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      expiredCount: 'ExpiredCount',
      expiringCount: 'ExpiringCount',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredCount: 'number',
      expiringCount: 'number',
      fileSystemType: 'string',
      meteredSize: 'number',
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

