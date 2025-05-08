// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssUsageDataRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the logical Object Storage Service (OSS) bucket.
   * 
   * @example
   * ens-sink-bucketzyp1656903494
   */
  bucket?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC. Format: 2010-01-21T09:50:23Z.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-12T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The aggregation granularity. Unit: minutes.
   * 
   * Default value: 5. Valid values: 5 to 1440.
   * 
   * @example
   * 10
   */
  period?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in UTC. Format: 2010-01-21T09:50:23Z.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-11T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endTime: 'EndTime',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endTime: 'string',
      period: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

