// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRobotTaskCallDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 130****0000
   */
  callee?: string;
  ownerId?: number;
  /**
   * @remarks
   * The timestamp of the time at which the call details you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-10-21 08:23:21
   */
  queryDate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](https://help.aliyun.com/document_detail/393531.html) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      ownerId: 'OwnerId',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      ownerId: 'number',
      queryDate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

