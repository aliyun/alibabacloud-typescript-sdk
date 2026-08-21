// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMediaDistributionRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of CreationTime. The end time must be later than the start time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC). The maximum time span between the start time and end time is six months.
   * 
   * @example
   * 2017-01-11T12:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The statistical interval. Default value: day. Valid values:
   * - hour: by hour. Statistics are collected based on the calendar hours within the specified time range.
   * - day: by day. Statistics are collected based on the calendar days within the specified time range.
   * - week: by week. Statistics are collected based on the calendar weeks within the specified time range.
   * - month: by month. Statistics are collected based on the calendar months within the specified time range.
   * 
   * @example
   * day
   */
  interval?: string;
  /**
   * @remarks
   * The start time of CreationTime. Format: yyyy-MM-ddTHH:mm:ssZ (UTC). The maximum time span between the start time and end time is six months.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * - Standard: standard storage.
   * - IA: Infrequent Access.
   * - Archive: Archive storage.
   * - ColdArchive: Cold Archive storage.
   * - SourceIA: Infrequent Access for source files.
   * - SourceArchive: Archive storage for source files.
   * - SourceColdArchive: Cold Archive storage for source files.
   * - Changing: the media asset storage class is being changed.
   * - SourceChanging: the source file storage class is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      interval: 'Interval',
      startTime: 'StartTime',
      storageClass: 'StorageClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      interval: 'string',
      startTime: 'string',
      storageClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

