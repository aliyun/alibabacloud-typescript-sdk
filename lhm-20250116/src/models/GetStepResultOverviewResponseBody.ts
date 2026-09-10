// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStepResultOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of validated fields.
   * 
   * @example
   * 10
   */
  checkColumnCount?: number;
  /**
   * @remarks
   * The metric name of the target.
   * 
   * @example
   * amount
   */
  dstMetricName?: string;
  /**
   * @remarks
   * Indicates whether the source and target are consistent. Valid values:
   * - 0: Inconsistent.
   * - 1: Consistent.
   * 
   * @example
   * 0
   */
  isConsistent?: number;
  /**
   * @remarks
   * The number of validated metrics.
   * 
   * @example
   * 6
   */
  metricColumnCount?: number;
  /**
   * @remarks
   * The number of metrics that passed validation.
   * 
   * @example
   * 5
   */
  metricPassColumnCount?: number;
  /**
   * @remarks
   * The number of fields that passed validation.
   * 
   * @example
   * 8
   */
  passColumnCount?: number;
  /**
   * @remarks
   * The unique ID of the validation result.
   * 
   * @example
   * 30001
   */
  resultId?: string;
  /**
   * @remarks
   * The partition name of the source.
   * 
   * @example
   * ds=20260116
   */
  sourcePtName?: string;
  /**
   * @remarks
   * The table name of the source.
   * 
   * @example
   * table_demo
   */
  sourceTable?: string;
  /**
   * @remarks
   * The metric name of the source.
   * 
   * @example
   * amount
   */
  srcMetricName?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - 0: Created.
   * - 1: Running.
   * - 2: Completed.
   * - 3: Stopped.
   * - 4: Canceled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The partition name of the target.
   * 
   * @example
   * ds=20260116
   */
  targetPtName?: string;
  /**
   * @remarks
   * The table name of the target.
   * 
   * @example
   * table_demo
   */
  targetTable?: string;
  static names(): { [key: string]: string } {
    return {
      checkColumnCount: 'checkColumnCount',
      dstMetricName: 'dstMetricName',
      isConsistent: 'isConsistent',
      metricColumnCount: 'metricColumnCount',
      metricPassColumnCount: 'metricPassColumnCount',
      passColumnCount: 'passColumnCount',
      resultId: 'resultId',
      sourcePtName: 'sourcePtName',
      sourceTable: 'sourceTable',
      srcMetricName: 'srcMetricName',
      status: 'status',
      targetPtName: 'targetPtName',
      targetTable: 'targetTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkColumnCount: 'number',
      dstMetricName: 'string',
      isConsistent: 'number',
      metricColumnCount: 'number',
      metricPassColumnCount: 'number',
      passColumnCount: 'number',
      resultId: 'string',
      sourcePtName: 'string',
      sourceTable: 'string',
      srcMetricName: 'string',
      status: 'number',
      targetPtName: 'string',
      targetTable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStepResultOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetStepResultOverviewResponseBodyData;
  /**
   * @remarks
   * The fault message code.
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
   * not supported.pos 10960, line 327, column 26, token IDENTIFIER settings
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 512AF06E-3B95-5932-81D8-717B15143359
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed. Check errCode and errMessage for troubleshooting.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetStepResultOverviewResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

