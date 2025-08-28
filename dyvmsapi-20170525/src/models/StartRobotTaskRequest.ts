// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRobotTaskRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time scheduled for starting the robocall task, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2019-06-14 14:55:23
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](~~CreateRobotTask~~) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 104500****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduleTime: 'ScheduleTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduleTime: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

