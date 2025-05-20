// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchRequestRequests } from "./BatchRequestRequests";


export class BatchRequest extends $dara.Model {
  /**
   * @remarks
   * The child requests.
   * 
   * The number of child requests. Valid value: 1 to 100.
   * 
   * This parameter is required.
   */
  requests?: BatchRequestRequests[];
  /**
   * @remarks
   * The type of the resource that you want to manage. Valid values:
   * 
   * *   file: a file.
   * *   drive: an individual drive or a team drive.
   * *   user: a user.
   * *   group: a group.
   * *   membership: a group member.
   * *   share_link: a share.
   * *   async_task: an asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      requests: 'requests',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requests: { 'type': 'array', 'itemType': BatchRequestRequests },
      resource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.requests)) {
      $dara.Model.validateArray(this.requests);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

