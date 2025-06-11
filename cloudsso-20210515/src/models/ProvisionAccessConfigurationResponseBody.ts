// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ProvisionAccessConfigurationResponseBodyTasks } from "./ProvisionAccessConfigurationResponseBodyTasks";


export class ProvisionAccessConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DFDC16B2-4509-5FA6-9FA5-3CD35E4292FB
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  tasks?: ProvisionAccessConfigurationResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ProvisionAccessConfigurationResponseBodyTasks },
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

