// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchEditQueueSpec } from "./BatchEditQueueSpec";


export class BatchEditWorkspaceQueuesBody extends $dara.Model {
  /**
   * @remarks
   * The list of queues to update. Each entry independently specifies the absolute target state of a queue. Queue names must be unique within the same request.
   * 
   * This parameter is required.
   */
  queues?: BatchEditQueueSpec[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * w-1234abcd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      queues: 'queues',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queues: { 'type': 'array', 'itemType': BatchEditQueueSpec },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

