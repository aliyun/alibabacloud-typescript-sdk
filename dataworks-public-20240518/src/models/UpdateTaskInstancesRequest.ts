// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTaskInstancesRequestTaskInstances } from "./UpdateTaskInstancesRequestTaskInstances";


export class UpdateTaskInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The instances.
   */
  taskInstances?: UpdateTaskInstancesRequestTaskInstances[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      taskInstances: 'TaskInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      taskInstances: { 'type': 'array', 'itemType': UpdateTaskInstancesRequestTaskInstances },
    };
  }

  validate() {
    if(Array.isArray(this.taskInstances)) {
      $dara.Model.validateArray(this.taskInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

