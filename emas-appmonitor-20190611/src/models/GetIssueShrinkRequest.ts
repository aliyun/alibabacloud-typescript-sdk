// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIssueShrinkRequestTimeRange } from "./GetIssueShrinkRequestTimeRange";


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

