// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExecutionRiskyTasksResponseBodyRiskyTasks } from "./ListExecutionRiskyTasksResponseBodyRiskyTasks";


export class ListExecutionRiskyTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C04B668D-D2DD-4B40-B6E9-0E3C4F53D5B5
   */
  requestId?: string;
  /**
   * @remarks
   * The information about high-risk tasks.
   */
  riskyTasks?: ListExecutionRiskyTasksResponseBodyRiskyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskyTasks: 'RiskyTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskyTasks: { 'type': 'array', 'itemType': ListExecutionRiskyTasksResponseBodyRiskyTasks },
    };
  }

  validate() {
    if(Array.isArray(this.riskyTasks)) {
      $dara.Model.validateArray(this.riskyTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

