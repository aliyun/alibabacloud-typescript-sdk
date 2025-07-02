// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataDayGrowthSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsColdDataDayGrowthSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsColdDataSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSizeDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsColdDataSizeDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsEmptyFileCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCountDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsEmptyFileCountDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileDayGrowthCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsEmptyFileDayGrowthCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataDayGrowthSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsFreezeDataDayGrowthSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsFreezeDataSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataDayGrowthSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsHotDataDayGrowthSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsHotDataSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSizeDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsHotDataSizeDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsLargeFileCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCountDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsLargeFileCountDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileDayGrowthCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsLargeFileDayGrowthCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsMediumFileCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCountDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsMediumFileCountDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileDayGrowthCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsMediumFileDayGrowthCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsSmallFileCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCountDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsSmallFileCountDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileDayGrowthCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsSmallFileDayGrowthCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsTinyFileCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCountDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsTinyFileCountDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileDayGrowthCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsTinyFileDayGrowthCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataDayGrowthSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsTotalDataDayGrowthSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsTotalDataSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSizeDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsTotalDataSizeDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsTotalFileCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCountDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsTotalFileCountDayGrowthRatio";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileDayGrowthCount } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsTotalFileDayGrowthCount";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataDayGrowthSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsWarmDataDayGrowthSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSize } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsWarmDataSize";
import { GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSizeDayGrowthRatio } from "./GetDoctorHdfsdirectoryResponseBodyDataMetricsWarmDataSizeDayGrowthRatio";


export class GetDoctorHDFSDirectoryResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The daily increment of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataDayGrowthSize;
  /**
   * @remarks
   * The amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of cold data. Cold data refers to data that is not accessed for more than 30 days but is accessed in previous 90 days.
   */
  coldDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of empty files. Empty files are those with a size of 0 MB.
   */
  emptyFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileDayGrowthCount;
  /**
   * @remarks
   * The daily increment of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataDayGrowthSize;
  /**
   * @remarks
   * The amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of very cold data. Very cold data refers to data that is not accessed for more than 90 days.
   */
  freezeDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataDayGrowthSize;
  /**
   * @remarks
   * The amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of hot data. Hot data refers to data that is accessed in previous seven days.
   */
  hotDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of large files. Large files are those with a size greater than 1 GB.
   */
  largeFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileDayGrowthCount;
  /**
   * @remarks
   * The number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of medium files. Medium files are those with a size greater than or equal to 128 MB and less than or equal to 1 GB.
   */
  mediumFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileDayGrowthCount;
  /**
   * @remarks
   * The number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of small files. Small files are those with a size greater than or equal to 10 MB and less than 128 MB.
   */
  smallFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileDayGrowthCount;
  /**
   * @remarks
   * The number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the number of very small files. Very small files are those with a size greater than 0 MB and less than 10 MB.
   */
  tinyFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileDayGrowthCount;
  /**
   * @remarks
   * The daily incremental of the total amount of data.
   */
  totalDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataDayGrowthSize;
  /**
   * @remarks
   * The total amount of data.
   */
  totalDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the total data volume.
   */
  totalDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSizeDayGrowthRatio;
  /**
   * @remarks
   * The total number of files.
   */
  totalFileCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCount;
  /**
   * @remarks
   * The day-to-day growth rate of the total number of files.
   */
  totalFileCountDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCountDayGrowthRatio;
  /**
   * @remarks
   * The daily increment of the total number of files.
   */
  totalFileDayGrowthCount?: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileDayGrowthCount;
  /**
   * @remarks
   * The daily increment of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataDayGrowthSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataDayGrowthSize;
  /**
   * @remarks
   * The amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataSize?: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSize;
  /**
   * @remarks
   * The day-to-day growth rate of the amount of warm data. Warm data refers to data that is not accessed for more than 7 days but is accessed in previous 30 days.
   */
  warmDataSizeDayGrowthRatio?: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSizeDayGrowthRatio;
  static names(): { [key: string]: string } {
    return {
      coldDataDayGrowthSize: 'ColdDataDayGrowthSize',
      coldDataSize: 'ColdDataSize',
      coldDataSizeDayGrowthRatio: 'ColdDataSizeDayGrowthRatio',
      emptyFileCount: 'EmptyFileCount',
      emptyFileCountDayGrowthRatio: 'EmptyFileCountDayGrowthRatio',
      emptyFileDayGrowthCount: 'EmptyFileDayGrowthCount',
      freezeDataDayGrowthSize: 'FreezeDataDayGrowthSize',
      freezeDataSize: 'FreezeDataSize',
      freezeDataSizeDayGrowthRatio: 'FreezeDataSizeDayGrowthRatio',
      hotDataDayGrowthSize: 'HotDataDayGrowthSize',
      hotDataSize: 'HotDataSize',
      hotDataSizeDayGrowthRatio: 'HotDataSizeDayGrowthRatio',
      largeFileCount: 'LargeFileCount',
      largeFileCountDayGrowthRatio: 'LargeFileCountDayGrowthRatio',
      largeFileDayGrowthCount: 'LargeFileDayGrowthCount',
      mediumFileCount: 'MediumFileCount',
      mediumFileCountDayGrowthRatio: 'MediumFileCountDayGrowthRatio',
      mediumFileDayGrowthCount: 'MediumFileDayGrowthCount',
      smallFileCount: 'SmallFileCount',
      smallFileCountDayGrowthRatio: 'SmallFileCountDayGrowthRatio',
      smallFileDayGrowthCount: 'SmallFileDayGrowthCount',
      tinyFileCount: 'TinyFileCount',
      tinyFileCountDayGrowthRatio: 'TinyFileCountDayGrowthRatio',
      tinyFileDayGrowthCount: 'TinyFileDayGrowthCount',
      totalDataDayGrowthSize: 'TotalDataDayGrowthSize',
      totalDataSize: 'TotalDataSize',
      totalDataSizeDayGrowthRatio: 'TotalDataSizeDayGrowthRatio',
      totalFileCount: 'TotalFileCount',
      totalFileCountDayGrowthRatio: 'TotalFileCountDayGrowthRatio',
      totalFileDayGrowthCount: 'TotalFileDayGrowthCount',
      warmDataDayGrowthSize: 'WarmDataDayGrowthSize',
      warmDataSize: 'WarmDataSize',
      warmDataSizeDayGrowthRatio: 'WarmDataSizeDayGrowthRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataDayGrowthSize,
      coldDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSize,
      coldDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsColdDataSizeDayGrowthRatio,
      emptyFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCount,
      emptyFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileCountDayGrowthRatio,
      emptyFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsEmptyFileDayGrowthCount,
      freezeDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataDayGrowthSize,
      freezeDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSize,
      freezeDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsFreezeDataSizeDayGrowthRatio,
      hotDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataDayGrowthSize,
      hotDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSize,
      hotDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsHotDataSizeDayGrowthRatio,
      largeFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCount,
      largeFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileCountDayGrowthRatio,
      largeFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsLargeFileDayGrowthCount,
      mediumFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCount,
      mediumFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileCountDayGrowthRatio,
      mediumFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsMediumFileDayGrowthCount,
      smallFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCount,
      smallFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileCountDayGrowthRatio,
      smallFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsSmallFileDayGrowthCount,
      tinyFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCount,
      tinyFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileCountDayGrowthRatio,
      tinyFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsTinyFileDayGrowthCount,
      totalDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataDayGrowthSize,
      totalDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSize,
      totalDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalDataSizeDayGrowthRatio,
      totalFileCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCount,
      totalFileCountDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileCountDayGrowthRatio,
      totalFileDayGrowthCount: GetDoctorHDFSDirectoryResponseBodyDataMetricsTotalFileDayGrowthCount,
      warmDataDayGrowthSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataDayGrowthSize,
      warmDataSize: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSize,
      warmDataSizeDayGrowthRatio: GetDoctorHDFSDirectoryResponseBodyDataMetricsWarmDataSizeDayGrowthRatio,
    };
  }

  validate() {
    if(this.coldDataDayGrowthSize && typeof (this.coldDataDayGrowthSize as any).validate === 'function') {
      (this.coldDataDayGrowthSize as any).validate();
    }
    if(this.coldDataSize && typeof (this.coldDataSize as any).validate === 'function') {
      (this.coldDataSize as any).validate();
    }
    if(this.coldDataSizeDayGrowthRatio && typeof (this.coldDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.coldDataSizeDayGrowthRatio as any).validate();
    }
    if(this.emptyFileCount && typeof (this.emptyFileCount as any).validate === 'function') {
      (this.emptyFileCount as any).validate();
    }
    if(this.emptyFileCountDayGrowthRatio && typeof (this.emptyFileCountDayGrowthRatio as any).validate === 'function') {
      (this.emptyFileCountDayGrowthRatio as any).validate();
    }
    if(this.emptyFileDayGrowthCount && typeof (this.emptyFileDayGrowthCount as any).validate === 'function') {
      (this.emptyFileDayGrowthCount as any).validate();
    }
    if(this.freezeDataDayGrowthSize && typeof (this.freezeDataDayGrowthSize as any).validate === 'function') {
      (this.freezeDataDayGrowthSize as any).validate();
    }
    if(this.freezeDataSize && typeof (this.freezeDataSize as any).validate === 'function') {
      (this.freezeDataSize as any).validate();
    }
    if(this.freezeDataSizeDayGrowthRatio && typeof (this.freezeDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.freezeDataSizeDayGrowthRatio as any).validate();
    }
    if(this.hotDataDayGrowthSize && typeof (this.hotDataDayGrowthSize as any).validate === 'function') {
      (this.hotDataDayGrowthSize as any).validate();
    }
    if(this.hotDataSize && typeof (this.hotDataSize as any).validate === 'function') {
      (this.hotDataSize as any).validate();
    }
    if(this.hotDataSizeDayGrowthRatio && typeof (this.hotDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.hotDataSizeDayGrowthRatio as any).validate();
    }
    if(this.largeFileCount && typeof (this.largeFileCount as any).validate === 'function') {
      (this.largeFileCount as any).validate();
    }
    if(this.largeFileCountDayGrowthRatio && typeof (this.largeFileCountDayGrowthRatio as any).validate === 'function') {
      (this.largeFileCountDayGrowthRatio as any).validate();
    }
    if(this.largeFileDayGrowthCount && typeof (this.largeFileDayGrowthCount as any).validate === 'function') {
      (this.largeFileDayGrowthCount as any).validate();
    }
    if(this.mediumFileCount && typeof (this.mediumFileCount as any).validate === 'function') {
      (this.mediumFileCount as any).validate();
    }
    if(this.mediumFileCountDayGrowthRatio && typeof (this.mediumFileCountDayGrowthRatio as any).validate === 'function') {
      (this.mediumFileCountDayGrowthRatio as any).validate();
    }
    if(this.mediumFileDayGrowthCount && typeof (this.mediumFileDayGrowthCount as any).validate === 'function') {
      (this.mediumFileDayGrowthCount as any).validate();
    }
    if(this.smallFileCount && typeof (this.smallFileCount as any).validate === 'function') {
      (this.smallFileCount as any).validate();
    }
    if(this.smallFileCountDayGrowthRatio && typeof (this.smallFileCountDayGrowthRatio as any).validate === 'function') {
      (this.smallFileCountDayGrowthRatio as any).validate();
    }
    if(this.smallFileDayGrowthCount && typeof (this.smallFileDayGrowthCount as any).validate === 'function') {
      (this.smallFileDayGrowthCount as any).validate();
    }
    if(this.tinyFileCount && typeof (this.tinyFileCount as any).validate === 'function') {
      (this.tinyFileCount as any).validate();
    }
    if(this.tinyFileCountDayGrowthRatio && typeof (this.tinyFileCountDayGrowthRatio as any).validate === 'function') {
      (this.tinyFileCountDayGrowthRatio as any).validate();
    }
    if(this.tinyFileDayGrowthCount && typeof (this.tinyFileDayGrowthCount as any).validate === 'function') {
      (this.tinyFileDayGrowthCount as any).validate();
    }
    if(this.totalDataDayGrowthSize && typeof (this.totalDataDayGrowthSize as any).validate === 'function') {
      (this.totalDataDayGrowthSize as any).validate();
    }
    if(this.totalDataSize && typeof (this.totalDataSize as any).validate === 'function') {
      (this.totalDataSize as any).validate();
    }
    if(this.totalDataSizeDayGrowthRatio && typeof (this.totalDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.totalDataSizeDayGrowthRatio as any).validate();
    }
    if(this.totalFileCount && typeof (this.totalFileCount as any).validate === 'function') {
      (this.totalFileCount as any).validate();
    }
    if(this.totalFileCountDayGrowthRatio && typeof (this.totalFileCountDayGrowthRatio as any).validate === 'function') {
      (this.totalFileCountDayGrowthRatio as any).validate();
    }
    if(this.totalFileDayGrowthCount && typeof (this.totalFileDayGrowthCount as any).validate === 'function') {
      (this.totalFileDayGrowthCount as any).validate();
    }
    if(this.warmDataDayGrowthSize && typeof (this.warmDataDayGrowthSize as any).validate === 'function') {
      (this.warmDataDayGrowthSize as any).validate();
    }
    if(this.warmDataSize && typeof (this.warmDataSize as any).validate === 'function') {
      (this.warmDataSize as any).validate();
    }
    if(this.warmDataSizeDayGrowthRatio && typeof (this.warmDataSizeDayGrowthRatio as any).validate === 'function') {
      (this.warmDataSizeDayGrowthRatio as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

