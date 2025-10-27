// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMapRunResponseBodyItemCounts extends $dara.Model {
  /**
   * @example
   * 100
   */
  aborted?: number;
  /**
   * @example
   * 100
   */
  failed?: number;
  /**
   * @example
   * 100
   */
  pending?: number;
  /**
   * @example
   * 100
   */
  running?: number;
  /**
   * @example
   * 100
   */
  succeed?: number;
  /**
   * @example
   * 500
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      aborted: 'Aborted',
      failed: 'Failed',
      pending: 'Pending',
      running: 'Running',
      succeed: 'Succeed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aborted: 'number',
      failed: 'number',
      pending: 'number',
      running: 'number',
      succeed: 'number',
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

export class DescribeMapRunResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  concurrency?: number;
  /**
   * @example
   * my_exec_name
   */
  executionName?: string;
  itemCounts?: DescribeMapRunResponseBodyItemCounts;
  /**
   * @example
   * c39142f1345b196d678333c41f113000
   */
  mapRunName?: string;
  /**
   * @example
   * 3A44E113-9962-5B0B-AB92-14060EFE3164
   */
  requestId?: string;
  /**
   * @example
   * 2025-10-24T14:11:26+08:00
   */
  startedTime?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * 2025-10-24T14:11:28+08:00
   */
  stoppedTime?: string;
  /**
   * @example
   * 100
   */
  toleratedFailedCount?: number;
  /**
   * @example
   * 20
   */
  toleratedFailedPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      executionName: 'ExecutionName',
      itemCounts: 'ItemCounts',
      mapRunName: 'MapRunName',
      requestId: 'RequestId',
      startedTime: 'StartedTime',
      status: 'Status',
      stoppedTime: 'StoppedTime',
      toleratedFailedCount: 'ToleratedFailedCount',
      toleratedFailedPercentage: 'ToleratedFailedPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      executionName: 'string',
      itemCounts: DescribeMapRunResponseBodyItemCounts,
      mapRunName: 'string',
      requestId: 'string',
      startedTime: 'string',
      status: 'string',
      stoppedTime: 'string',
      toleratedFailedCount: 'number',
      toleratedFailedPercentage: 'number',
    };
  }

  validate() {
    if(this.itemCounts && typeof (this.itemCounts as any).validate === 'function') {
      (this.itemCounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

