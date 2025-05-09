// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BackFillShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The running sequence of task flows for data backfill. Valid values:
   * 
   * *   **0**: reverse chronological order.
   * *   **1**: chronological order. This is the default value.
   * 
   * @example
   * 0
   */
  asc?: boolean;
  /**
   * @remarks
   * The date for the data to be backfilled. This parameter is required if you specify a date for data backfill.
   * 
   * @example
   * 2022-01-14
   */
  backFillDate?: string;
  /**
   * @remarks
   * The start date of the date range for the data to be backfilled. This parameter is required if you specify a date range for data backfill.
   * 
   * @example
   * 2022-01-14
   */
  backFillDateBegin?: string;
  /**
   * @remarks
   * The end date of the date range for the data to be backfilled. This parameter is required if you specify a date range for data backfill.
   * 
   * @example
   * 2022-09-29
   */
  backFillDateEnd?: string;
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 15***
   */
  dagId?: number;
  /**
   * @remarks
   * Filter condition, which specifies the list of node IDs in the task flow that do not need to supplement data.
   */
  filterNodeIdsShrink?: string;
  /**
   * @remarks
   * The ID of the historical task flow.
   * 
   * @example
   * 16***
   */
  historyDagId?: number;
  /**
   * @remarks
   * The interval at which data backfill is performed. Unit: hours. Minimum value: 1. Default value: 24.
   * 
   * @example
   * 24
   */
  interval?: number;
  /**
   * @remarks
   * Specifies whether to run descendant nodes. Default value: true.
   * 
   * @example
   * true
   */
  isTriggerSubTree?: boolean;
  /**
   * @remarks
   * The number of nodes for which you want to backfill data.
   */
  startNodeIdsShrink?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      backFillDate: 'BackFillDate',
      backFillDateBegin: 'BackFillDateBegin',
      backFillDateEnd: 'BackFillDateEnd',
      dagId: 'DagId',
      filterNodeIdsShrink: 'FilterNodeIds',
      historyDagId: 'HistoryDagId',
      interval: 'Interval',
      isTriggerSubTree: 'IsTriggerSubTree',
      startNodeIdsShrink: 'StartNodeIds',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      backFillDate: 'string',
      backFillDateBegin: 'string',
      backFillDateEnd: 'string',
      dagId: 'number',
      filterNodeIdsShrink: 'string',
      historyDagId: 'number',
      interval: 'number',
      isTriggerSubTree: 'boolean',
      startNodeIdsShrink: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

