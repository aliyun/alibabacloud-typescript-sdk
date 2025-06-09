// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetErrorsRequestFilter } from "./GetErrorsRequestFilter";
import { GetErrorsRequestTimeRange } from "./GetErrorsRequestTimeRange";


export class GetErrorsRequest extends $dara.Model {
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
  filter?: GetErrorsRequestFilter;
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
  timeRange?: GetErrorsRequestTimeRange;
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
      filter: 'Filter',
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
      filter: GetErrorsRequestFilter,
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      timeRange: GetErrorsRequestTimeRange,
      utdid: 'string',
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

