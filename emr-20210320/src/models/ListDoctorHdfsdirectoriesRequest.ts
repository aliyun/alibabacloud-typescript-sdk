// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHDFSDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The date. The value is in the ISO 8601 format. For example, 2023-01-01 represents January 1, 2023.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  dateTime?: string;
  /**
   * @remarks
   * The path of the directory. The directory depth cannot exceed five levels. If you do not specify this parameter, the analysis results of all directories are returned.
   * 
   * @example
   * /tmp/test
   */
  dirPath?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The property based on which to sort the query results. Valid values:
   * 
   * - totalFileCount: the total number of files.
   * 
   * - largeFileCount: the number of large files. A large file is 1 GB or larger.
   * 
   * - mediumFileCount: the number of medium-sized files. A medium-sized file is larger than 128 MB and smaller than 1 GB.
   * 
   * - smallFileCount: the number of small files. A small file is larger than 10 MB and less than or equal to 128 MB.
   * 
   * - tinyFileCount: the number of tiny files. A tiny file is larger than 0 MB and less than or equal to 10 MB.
   * 
   * - emptyFileCount: the number of empty files. An empty file is 0 MB in size.
   * 
   * - hotDataSize: the size of hot data. Hot data is data that was accessed in the last 7 days.
   * 
   * - warmDataSize: the size of warm data. Warm data is data that was not accessed in the last 7 days but was accessed in the last 30 days.
   * 
   * - coldDataSize: the size of cold data. Cold data is data that was not accessed in the last 30 days but was accessed in the last 90 days.
   * 
   * - freezeDataSize: the size of freeze data. Freeze data is data that was not accessed in the last 90 days.
   * 
   * - totalDataSize: the total data size.
   * 
   * - totalFileDayGrowthCount: the daily increase in the total number of files.
   * 
   * - largeFileDayGrowthCount: the daily increase in the number of large files. A large file is 1 GB or larger.
   * 
   * - mediumFileDayGrowthCount: the daily increase in the number of medium-sized files. A medium-sized file is larger than 128 MB and smaller than 1 GB.
   * 
   * - smallFileDayGrowthCount: the daily increase in the number of small files. A small file is larger than 10 MB and less than or equal to 128 MB.
   * 
   * - tinyFileDayGrowthCount: the daily increase in the number of tiny files. A tiny file is larger than 0 MB and less than or equal to 10 MB.
   * 
   * - emptyFileDayGrowthCount: the daily increase in the number of empty files. An empty file is 0 MB in size.
   * 
   * - hotDataDayGrowthSize: the daily increase in the size of hot data. Hot data is data that was accessed in the last 7 days.
   * 
   * - warmDataDayGrowthSize: the daily increase in the size of warm data. Warm data is data that was not accessed in the last 7 days but was accessed in the last 30 days.
   * 
   * - coldDataDayGrowthSize: the daily increase in the size of cold data. Cold data is data that was not accessed in the last 30 days but was accessed in the last 90 days.
   * 
   * - freezeDataDayGrowthSize: the daily increase in the size of freeze data. Freeze data is data that was not accessed in the last 90 days.
   * 
   * - totalDataDayGrowthSize: the daily increase in the total data size.
   * 
   * - totalFileCountDayGrowthRatio: the day-over-day growth ratio of the total number of files.
   * 
   * - largeFileCountDayGrowthRatio: the day-over-day growth ratio of the number of large files. A large file is 1 GB or larger.
   * 
   * - mediumFileCountDayGrowthRatio: the day-over-day growth ratio of the number of medium-sized files. A medium-sized file is larger than 128 MB and smaller than 1 GB.
   * 
   * - smallFileCountDayGrowthRatio: the day-over-day growth ratio of the number of small files. A small file is larger than 10 MB and less than or equal to 128 MB.
   * 
   * - tinyFileCountDayGrowthRatio: the day-over-day growth ratio of the number of tiny files. A tiny file is larger than 0 MB and less than or equal to 10 MB.
   * 
   * - emptyFileCountDayGrowthRatio: the day-over-day growth ratio of the number of empty files. An empty file is 0 MB in size.
   * 
   * @example
   * smallFileCount
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - ASC: ascending
   * 
   * - DESC: descending
   * 
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      dirPath: 'DirPath',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      dirPath: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

