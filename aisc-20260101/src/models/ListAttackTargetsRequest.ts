// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The upper bound (inclusive) of the first scan time range. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1735689600000
   */
  firstScanTimeEnd?: string;
  /**
   * @remarks
   * The lower bound (inclusive) of the first scan time range. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1735689600000
   */
  firstScanTimeStart?: string;
  /**
   * @remarks
   * Filters targets by the status of the most recent scan task.
   * 
   * @example
   * completed
   */
  lastScanStatus?: string;
  /**
   * @remarks
   * The upper bound (inclusive) of the last scan time range. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1735689600000
   */
  lastScanTimeEnd?: string;
  /**
   * @remarks
   * The lower bound (inclusive) of the last scan time range. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1735689600000
   */
  lastScanTimeStart?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Values less than 1 are normalized to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100. Values greater than 100 are clamped to 100. Values less than 1 return HTTP status code 400.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters targets by the exact business label of the model or agent provider. This parameter is decoupled from ConnectionMethod (technical protocol).
   * 
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @remarks
   * Filters targets by the risk level derived from the most recent completed scan task. Targets that have never been scanned do not have a risk level and are not matched by any value.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The field used for sorting. Only the following three aggregate fields are supported. Sorting is performed in memory. If this parameter is not specified, no additional sorting is applied.
   * 
   * @example
   * lastScanTime
   */
  sortField?: string;
  /**
   * @remarks
   * The sort order. Targets with null aggregate values are always placed last regardless of the sort order.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * Filters targets by name using fuzzy match (substring match). If this parameter is not specified, all targets are returned.
   * 
   * @example
   * Bailian
   */
  targetName?: string;
  /**
   * @remarks
   * Filters targets by the exact scan target type.
   * 
   * @example
   * model
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      firstScanTimeEnd: 'FirstScanTimeEnd',
      firstScanTimeStart: 'FirstScanTimeStart',
      lastScanStatus: 'LastScanStatus',
      lastScanTimeEnd: 'LastScanTimeEnd',
      lastScanTimeStart: 'LastScanTimeStart',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provider: 'Provider',
      riskLevel: 'RiskLevel',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      targetName: 'TargetName',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstScanTimeEnd: 'string',
      firstScanTimeStart: 'string',
      lastScanStatus: 'string',
      lastScanTimeEnd: 'string',
      lastScanTimeStart: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
      riskLevel: 'string',
      sortField: 'string',
      sortOrder: 'string',
      targetName: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

