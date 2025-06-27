// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of instances within the current account.
   * 
   * @example
   * 10
   */
  instanceTotalCount?: number;
  /**
   * @remarks
   * The total number of configured health check tasks.
   * 
   * @example
   * 20
   */
  monitorTaskTotalCount?: number;
  /**
   * @remarks
   * The quota on the number of health check tasks.
   * 
   * @example
   * 101
   */
  monitorTaskTotalQuota?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 199C3699-9A7B-41A1-BB5A-F1E862D3CB38
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTotalCount: 'InstanceTotalCount',
      monitorTaskTotalCount: 'MonitorTaskTotalCount',
      monitorTaskTotalQuota: 'MonitorTaskTotalQuota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTotalCount: 'number',
      monitorTaskTotalCount: 'number',
      monitorTaskTotalQuota: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

