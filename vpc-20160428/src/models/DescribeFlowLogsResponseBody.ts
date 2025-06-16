// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFlowLogsResponseBodyFlowLogs } from "./DescribeFlowLogsResponseBodyFlowLogs";


export class DescribeFlowLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the flow logs.
   */
  flowLogs?: DescribeFlowLogsResponseBodyFlowLogs;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The number of flow logs that are queried.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      flowLogs: 'FlowLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowLogs: DescribeFlowLogsResponseBodyFlowLogs,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.flowLogs && typeof (this.flowLogs as any).validate === 'function') {
      (this.flowLogs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

