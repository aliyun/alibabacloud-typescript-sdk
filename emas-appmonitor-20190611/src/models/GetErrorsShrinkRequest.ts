// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorsShrinkRequestTimeRange extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1740499200000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1739894400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
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

export class GetErrorsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crash
   */
  bizModule?: string;
  /**
   * @example
   * -3481243636390427020
   */
  digestHash?: string;
  filterShrink?: string;
  /**
   * @example
   * android
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetErrorsShrinkRequestTimeRange;
  /**
   * @remarks
   * utdid
   * 
   * @example
   * Z70g6V/MXJ8DABtD53eHzn4X
   */
  utdid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      digestHash: 'DigestHash',
      filterShrink: 'Filter',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      timeRange: 'TimeRange',
      utdid: 'Utdid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      digestHash: 'string',
      filterShrink: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      timeRange: GetErrorsShrinkRequestTimeRange,
      utdid: 'string',
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

