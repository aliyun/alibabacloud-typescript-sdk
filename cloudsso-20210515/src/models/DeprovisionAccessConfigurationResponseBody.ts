// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeprovisionAccessConfigurationResponseBodyTasks } from "./DeprovisionAccessConfigurationResponseBodyTasks";


export class DeprovisionAccessConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 584FE9D0-D1AC-5B19-A39C-8D244FC0538C
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  tasks?: DeprovisionAccessConfigurationResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DeprovisionAccessConfigurationResponseBodyTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

