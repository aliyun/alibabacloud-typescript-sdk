// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIssueShrinkRequestTimeRange extends $dara.Model {
  /**
   * @example
   * 2024-08-23T02:12:00Z
   */
  endTime?: number;
  /**
   * @example
   * Host
   */
  granularity?: number;
  /**
   * @example
   * minute
   */
  granularityUnit?: string;
  /**
   * @example
   * 2024-12-18 00:00:00
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      granularityUnit: 'GranularityUnit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      granularity: 'number',
      granularityUnit: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * AppKey
   * 
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h5Resource
   */
  bizModule?: string;
  /**
   * @example
   * 2963475858785631
   */
  digestHash?: string;
  filterShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h5
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetIssueShrinkRequestTimeRange;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      digestHash: 'DigestHash',
      filterShrink: 'Filter',
      os: 'Os',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      digestHash: 'string',
      filterShrink: 'string',
      os: 'string',
      timeRange: GetIssueShrinkRequestTimeRange,
    };
  }

  validate() {
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

