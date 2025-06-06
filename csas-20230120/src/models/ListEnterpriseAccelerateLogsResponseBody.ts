// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEnterpriseAccelerateLogsResponseBodyLogs } from "./ListEnterpriseAccelerateLogsResponseBodyLogs";


export class ListEnterpriseAccelerateLogsResponseBody extends $dara.Model {
  logs?: ListEnterpriseAccelerateLogsResponseBodyLogs[];
  /**
   * @example
   * 43F07A6A-294D-56FB-85EB-6AD00C5B60FF
   */
  requestId?: string;
  /**
   * @example
   * 120
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListEnterpriseAccelerateLogsResponseBodyLogs },
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

