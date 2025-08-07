// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorsRequestFilter extends $dara.Model {
  /**
   * @example
   * osVersion
   */
  key?: string;
  /**
   * @example
   * and
   */
  operator?: string;
  subFilters?: string[];
  values?: any[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      subFilters: 'SubFilters',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      subFilters: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.subFilters)) {
      $dara.Model.validateArray(this.subFilters);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorsRequestTimeRange extends $dara.Model {
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

