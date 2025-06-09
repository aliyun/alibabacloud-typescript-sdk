// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIssuesRequestFilter } from "./GetIssuesRequestFilter";
import { GetIssuesRequestTimeRange } from "./GetIssuesRequestTimeRange";


export class GetIssuesRequest extends $dara.Model {
  /**
   * @remarks
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
  filter?: GetIssuesRequestFilter;
  /**
   * @example
   * GUI-TEST1711072832000
   */
  name?: string;
  /**
   * @example
   * instances
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  orderType?: string;
  /**
   * @example
   * h5
   */
  os?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * FE_RUNNING
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetIssuesRequestTimeRange;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      filter: 'Filter',
      name: 'Name',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      status: 'Status',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      filter: GetIssuesRequestFilter,
      name: 'string',
      orderBy: 'string',
      orderType: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
      timeRange: GetIssuesRequestTimeRange,
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

