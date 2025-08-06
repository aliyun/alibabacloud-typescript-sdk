// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMediaDistributionRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The maximum time range to query is 6 months.
   * 
   * @example
   * 2017-01-11T12:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The statistical interval. Default value: day. Valid values:
   * 
   * *   hour: natural hour of the start and end time.
   * *   day: natural day of the start and end time.
   * *   week: natural week of the start and end time.
   * *   month: natural month of the start and end time.
   * 
   * @example
   * day
   */
  interval?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The maximum time range to query is 6 months.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The hierarchical storage type. Valid values:
   * 
   * *   Standard
   * *   IA
   * *   Archive
   * *   ColdArchive
   * *   SourceIA
   * *   SourceArchive
   * *   SourceColdArchive
   * *   Changing
   * *   SourceChanging
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

