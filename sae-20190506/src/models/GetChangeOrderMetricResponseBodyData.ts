// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeOrderMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  avgTimeCostMs?: number;
  /**
   * @remarks
   * The number of abnormal change orders.
   * 
   * @example
   * 1
   */
  error?: number;
  /**
   * @remarks
   * The percentage of change failures.
   * 
   * @example
   * 0.25
   */
  errorPercent?: number;
  maxTimeCostMs?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  name?: string;
  optimizeSuggestions?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  taskTimeCostMsAvg?: string;
  /**
   * @remarks
   * The total number of change orders.
   * 
   * @example
   * 4
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      avgTimeCostMs: 'AvgTimeCostMs',
      error: 'Error',
      errorPercent: 'ErrorPercent',
      maxTimeCostMs: 'MaxTimeCostMs',
      name: 'Name',
      optimizeSuggestions: 'OptimizeSuggestions',
      regionId: 'RegionId',
      taskTimeCostMsAvg: 'TaskTimeCostMsAvg',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      avgTimeCostMs: 'number',
      error: 'number',
      errorPercent: 'number',
      maxTimeCostMs: 'number',
      name: 'string',
      optimizeSuggestions: 'string',
      regionId: 'string',
      taskTimeCostMsAvg: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

