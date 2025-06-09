// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIssueRequestFilter } from "./GetIssueRequestFilter";
import { GetIssueRequestTimeRange } from "./GetIssueRequestTimeRange";


export class GetIssueRequest extends $dara.Model {
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
  filter?: GetIssueRequestFilter;
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
  timeRange?: GetIssueRequestTimeRange;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      digestHash: 'DigestHash',
      filter: 'Filter',
      os: 'Os',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      digestHash: 'string',
      filter: GetIssueRequestFilter,
      os: 'string',
      timeRange: GetIssueRequestTimeRange,
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

