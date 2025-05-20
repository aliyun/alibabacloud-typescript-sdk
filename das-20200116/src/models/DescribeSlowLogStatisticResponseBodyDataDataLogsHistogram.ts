// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem } from "./DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem";


export class DescribeSlowLogStatisticResponseBodyDataDataLogsHistogram extends $dara.Model {
  avgLockTime?: number[];
  avgRowsExamined?: number[];
  avgRowsSent?: number[];
  avgRt?: number[];
  count?: number[];
  item?: DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem[];
  lockTime?: number[];
  maxLockTime?: number[];
  maxRowsExamined?: number[];
  maxRowsSent?: number[];
  maxRt?: number[];
  rowsExamined?: number[];
  rowsSent?: number[];
  rt?: number[];
  /**
   * @example
   * 7
   */
  total?: number;
  ts?: number[];
  tsEnd?: number[];
  static names(): { [key: string]: string } {
    return {
      avgLockTime: 'AvgLockTime',
      avgRowsExamined: 'AvgRowsExamined',
      avgRowsSent: 'AvgRowsSent',
      avgRt: 'AvgRt',
      count: 'Count',
      item: 'Item',
      lockTime: 'LockTime',
      maxLockTime: 'MaxLockTime',
      maxRowsExamined: 'MaxRowsExamined',
      maxRowsSent: 'MaxRowsSent',
      maxRt: 'MaxRt',
      rowsExamined: 'RowsExamined',
      rowsSent: 'RowsSent',
      rt: 'Rt',
      total: 'Total',
      ts: 'Ts',
      tsEnd: 'TsEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLockTime: { 'type': 'array', 'itemType': 'number' },
      avgRowsExamined: { 'type': 'array', 'itemType': 'number' },
      avgRowsSent: { 'type': 'array', 'itemType': 'number' },
      avgRt: { 'type': 'array', 'itemType': 'number' },
      count: { 'type': 'array', 'itemType': 'number' },
      item: { 'type': 'array', 'itemType': DescribeSlowLogStatisticResponseBodyDataDataLogsHistogramItem },
      lockTime: { 'type': 'array', 'itemType': 'number' },
      maxLockTime: { 'type': 'array', 'itemType': 'number' },
      maxRowsExamined: { 'type': 'array', 'itemType': 'number' },
      maxRowsSent: { 'type': 'array', 'itemType': 'number' },
      maxRt: { 'type': 'array', 'itemType': 'number' },
      rowsExamined: { 'type': 'array', 'itemType': 'number' },
      rowsSent: { 'type': 'array', 'itemType': 'number' },
      rt: { 'type': 'array', 'itemType': 'number' },
      total: 'number',
      ts: { 'type': 'array', 'itemType': 'number' },
      tsEnd: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.avgLockTime)) {
      $dara.Model.validateArray(this.avgLockTime);
    }
    if(Array.isArray(this.avgRowsExamined)) {
      $dara.Model.validateArray(this.avgRowsExamined);
    }
    if(Array.isArray(this.avgRowsSent)) {
      $dara.Model.validateArray(this.avgRowsSent);
    }
    if(Array.isArray(this.avgRt)) {
      $dara.Model.validateArray(this.avgRt);
    }
    if(Array.isArray(this.count)) {
      $dara.Model.validateArray(this.count);
    }
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    if(Array.isArray(this.lockTime)) {
      $dara.Model.validateArray(this.lockTime);
    }
    if(Array.isArray(this.maxLockTime)) {
      $dara.Model.validateArray(this.maxLockTime);
    }
    if(Array.isArray(this.maxRowsExamined)) {
      $dara.Model.validateArray(this.maxRowsExamined);
    }
    if(Array.isArray(this.maxRowsSent)) {
      $dara.Model.validateArray(this.maxRowsSent);
    }
    if(Array.isArray(this.maxRt)) {
      $dara.Model.validateArray(this.maxRt);
    }
    if(Array.isArray(this.rowsExamined)) {
      $dara.Model.validateArray(this.rowsExamined);
    }
    if(Array.isArray(this.rowsSent)) {
      $dara.Model.validateArray(this.rowsSent);
    }
    if(Array.isArray(this.rt)) {
      $dara.Model.validateArray(this.rt);
    }
    if(Array.isArray(this.ts)) {
      $dara.Model.validateArray(this.ts);
    }
    if(Array.isArray(this.tsEnd)) {
      $dara.Model.validateArray(this.tsEnd);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

