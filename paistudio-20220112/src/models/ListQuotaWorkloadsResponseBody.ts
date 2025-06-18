// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueueInfo } from "./QueueInfo";


export class ListQuotaWorkloadsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 42F23B58-3684-5443-848A-8DA81FF99712
   */
  requestId?: string;
  /**
   * @example
   * 23
   */
  totalCount?: number;
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

