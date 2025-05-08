// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceTestTaskResponseBodyExecutionDetails } from "./GetServiceTestTaskResponseBodyExecutionDetails";


export class GetServiceTestTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution details.
   */
  executionDetails?: GetServiceTestTaskResponseBodyExecutionDetails[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A361BA9E-xxxx-xxxx-xxxx-C26E5180456E
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the service test task. Valid values:
   * 
   * *   Running
   * *   Success
   * *    Failure
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * nametest
   */
  taskName?: string;
  /**
   * @remarks
   * The task execution region.
   * 
   * @example
   * cn-beijing
   */
  taskRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      executionDetails: 'ExecutionDetails',
      requestId: 'RequestId',
      status: 'Status',
      taskName: 'TaskName',
      taskRegionId: 'TaskRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionDetails: { 'type': 'array', 'itemType': GetServiceTestTaskResponseBodyExecutionDetails },
      requestId: 'string',
      status: 'string',
      taskName: 'string',
      taskRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executionDetails)) {
      $dara.Model.validateArray(this.executionDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

