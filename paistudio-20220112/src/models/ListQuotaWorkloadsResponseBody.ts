// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueueInfo } from "./QueueInfo";


export class ListQuotaWorkloadsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 42F23B58-3684-5443-848A-8DA81FF99712
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances that match the filter conditions.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of workload information.
   */
  workloads?: QueueInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workloads: 'Workloads',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      workloads: { 'type': 'array', 'itemType': QueueInfo },
    };
  }

  validate() {
    if(Array.isArray(this.workloads)) {
      $dara.Model.validateArray(this.workloads);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

