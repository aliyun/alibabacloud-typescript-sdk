// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMediaDistributionRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the creation time. The end time must be later than the start time. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The maximum time span between the start time and end time is six months.
   * 
   * @example
   * 2017-01-11T12:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The statistical interval. Default value: day. Valid values:
   * - hour: Hour. Statistics are collected based on the natural hours of the start time and end time.
   * - day: Day. Statistics are collected based on the natural days of the start time and end time.
   * - week: Week. Statistics are collected based on the natural weeks of the start time and end time.
   * - month: Month. Statistics are collected based on the natural months of the start time and end time.
   * 
   * @example
   * day
   */
  interval?: string;
  /**
   * @remarks
   * The start time of the creation time. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The maximum time span between the start time and end time is six months.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The storage class. Valid values:
   * - Standard: Standard storage.
   * - IA: Infrequent access.
   * - Archive: Archive storage.
   * - ColdArchive: Cold archive storage.
   * - SourceIA: Infrequent access for source files.
   * - SourceArchive: Archive storage for source files.
   * - SourceColdArchive: Cold archive storage for source files.
   * - Changing: The storage type of the media asset is being changed.
   * - SourceChanging: The storage type of the source file is being changed.
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

