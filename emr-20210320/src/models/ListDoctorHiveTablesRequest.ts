// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDoctorHiveTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specify the date in the ISO 8601 standard. For example, 2023-01-01 represents January 1, 2023.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-01-01
   */
  dateTime?: string;
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
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The basis on which you want to sort the query results. Valid values:
   * 
   * *   partitionNum: the number of partitions.
   * *   totalFileCount: the total number of files.
   * *   largeFileCount: the number of large files. Large files are those with a size greater than 1 GB.
   * *   mediumFileCount: the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   * *   smallFileCount: the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   * *   tinyFileCount: the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   * *   emptyFileCount: the number of empty files. Empty files are those with a size of 0 MB.
   * *   largeFileRatio: the proportion of large files. Large files are those with a size greater than 1 GB.
   * *   mediumFileRatio: the proportion of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   * *   smallFileRatio: the proportion of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   * *   tinyFileRatio: the proportion of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   * *   emptyFileRatio: the proportion of empty files. Empty files are those with a size of 0 MB.
   * *   hotDataSize: the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   * *   WarmDataSize: the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   * *   coldDataSize: the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   * *   freezeDataSize: the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   * *   totalDataSize: the total amount of data.
   * *   hotDataRatio: the proportion of hot data. Hot data refers to data that is accessed in previous seven days.
   * *   WarmDataRatio: the proportion of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   * *   coldDataRatio: the proportion of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   * *   freezeDataRatio: the proportion of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   * *   totalFileDayGrowthCount: the daily increment of the total number of files.
   * *   largeFileDayGrowthCount: the daily increment of the number of large files. Large files are those with a size greater than 1 GB.
   * *   mediumFileDayGrowthCount: the daily increment of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   * *   smallFileDayGrowthCount: the daily increment of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   * *   tinyFileDayGrowthCount: the daily increment of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   * *   emptyFileDayGrowthCount: the daily increment of the number of empty files. Empty files are those with a size of 0 MB.
   * *   hotDataDayGrowthSize: the daily increment of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   * *   warmDataDayGrowthSize: the daily increment of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   * *   coldDataDayGrowthSize: the daily increment of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   * *   freezeDataDayGrowthSize: the daily increment of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   * *   totalDataDayGrowthSize: the daily increment of the amount of total data.
   * *   totalFileCountDayGrowthRatio: the day-to-day growth rate of the total number of files.
   * *   largeFileCountDayGrowthRatio: the day-to-day growth rate of the number of large files. Large files are those with a size greater than 1 GB.
   * *   mediumFileCountDayGrowthRatio: the day-to-day growth rate of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   * *   smallFileCountDayGrowthRatio: the day-to-day growth rate of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   * *   tinyFileCountDayGrowthRatio: the day-to-day growth rate of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   * *   emptyFileCountDayGrowthRatio: the day-to-day growth rate of the number of empty files. Empty files are those with a size of 0 MB.
   * *   hotDataSizeDayGrowthRatio: the day-to-day growth rate of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   * *   warmDataSizeDayGrowthRatio: the day-to-day growth rate of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   * *   coldDataSizeDayGrowthRatio: the day-to-day growth rate of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   * *   freezeDataSizeDayGrowthRatio: the day-to-day growth rate of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   * *   totalDataSizeDayGrowthRatio: the day-to-day growth rate of the total amount of data.
   * 
   * @example
   * totalFileCount
   */
  orderBy?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid value:
   * 
   * *   ASC: in ascending order
   * *   DESC: in descending order
   * 
   * @example
   * ASC
   */
  orderType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The table names, which are used to filter the query results.
   * 
   * @example
   * null
   */
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dateTime: 'DateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      regionId: 'RegionId',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      orderType: 'string',
      regionId: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

