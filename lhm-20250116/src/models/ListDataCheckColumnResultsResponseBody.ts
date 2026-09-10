// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCheckColumnResultsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual difference.
   * 
   * @example
   * 0.00
   */
  actualThreshold?: string;
  /**
   * @remarks
   * The execution result. Valid values:
   * - 0: no record.
   * - 1: passed.
   * - 2: failed.
   * 
   * @example
   * 0
   */
  checkResult?: number;
  /**
   * @remarks
   * The comparison rule.
   * 
   * @example
   * SUM
   */
  checkRule?: string;
  /**
   * @remarks
   * The alias of the destination.
   * 
   * @example
   * dst
   */
  dstAlias?: string;
  /**
   * @remarks
   * The field name of the destination.
   * 
   * @example
   * amount
   */
  dstColumnName?: string;
  /**
   * @remarks
   * The field type of the destination.
   * 
   * @example
   * decimal(38,18)
   */
  dstColumnType?: string;
  /**
   * @remarks
   * The metric key of the destination.
   * 
   * @example
   * dst_sum_amount
   */
  dstMetricColumn?: string;
  /**
   * @remarks
   * The result value of the destination field.
   * 
   * @example
   * 1000.00
   */
  dstResult?: string;
  /**
   * @remarks
   * The expected threshold.
   * 
   * @example
   * 0.00
   */
  expectThreshold?: string;
  /**
   * @remarks
   * The validation result. Valid values:
   * - 0: inconsistent.
   * - 1: consistent.
   * - 2: manually repaired.
   * 
   * @example
   * 0
   */
  isConsistent?: number;
  /**
   * @remarks
   * The alias of the source.
   * 
   * @example
   * src
   */
  srcAlias?: string;
  /**
   * @remarks
   * The field name of the source.
   * 
   * @example
   * amount
   */
  srcColumnName?: string;
  /**
   * @remarks
   * The field type of the source.
   * 
   * @example
   * decimal(38,18)
   */
  srcColumnType?: string;
  /**
   * @remarks
   * The metric key of the source.
   * 
   * @example
   * src_sum_amount
   */
  srcMetricColumn?: string;
  /**
   * @remarks
   * The result value of the source field.
   * 
   * @example
   * 1000.00
   */
  srcResult?: string;
  /**
   * @remarks
   * The step ID.
   * 
   * @example
   * 1
   */
  stepId?: number;
  static names(): { [key: string]: string } {
    return {
      actualThreshold: 'actualThreshold',
      checkResult: 'checkResult',
      checkRule: 'checkRule',
      dstAlias: 'dstAlias',
      dstColumnName: 'dstColumnName',
      dstColumnType: 'dstColumnType',
      dstMetricColumn: 'dstMetricColumn',
      dstResult: 'dstResult',
      expectThreshold: 'expectThreshold',
      isConsistent: 'isConsistent',
      srcAlias: 'srcAlias',
      srcColumnName: 'srcColumnName',
      srcColumnType: 'srcColumnType',
      srcMetricColumn: 'srcMetricColumn',
      srcResult: 'srcResult',
      stepId: 'stepId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualThreshold: 'string',
      checkResult: 'number',
      checkRule: 'string',
      dstAlias: 'string',
      dstColumnName: 'string',
      dstColumnType: 'string',
      dstMetricColumn: 'string',
      dstResult: 'string',
      expectThreshold: 'string',
      isConsistent: 'number',
      srcAlias: 'string',
      srcColumnName: 'string',
      srcColumnType: 'string',
      srcMetricColumn: 'string',
      srcResult: 'string',
      stepId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataCheckColumnResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: ListDataCheckColumnResultsResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * None
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * not supported.pos 3222, line 112, column 14, token IDENTIFIER settings
   */
  errMessage?: string;
  /**
   * @remarks
   * The page number that indicates the requested page.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 016D6CE5-51C6-5767-A8F9-D2818FC56509
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDataCheckColumnResultsResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

