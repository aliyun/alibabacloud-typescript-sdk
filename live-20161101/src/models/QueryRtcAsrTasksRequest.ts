// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRtcAsrTasksRequest extends $dara.Model {
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the task that you want to query. If you do not specify this parameter, all running tasks under your UID are queried.
   * 
   * @example
   * asr-a6ac15e0-9118-4b4c-9e64-306163a0****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

