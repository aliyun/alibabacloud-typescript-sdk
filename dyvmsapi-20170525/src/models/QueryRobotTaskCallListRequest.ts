// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRobotTaskCallListRequest extends $dara.Model {
  /**
   * @remarks
   * The call result. Valid values:
   * 
   * *   **200002**: The line is busy.
   * *   **200005**: The called party cannot be connected.
   * *   **200010**: The phone of the called party is powered off.
   * *   **200011**: The called party is out of service.
   * *   **200012**: The call is lost.
   * 
   * @example
   * 200002
   */
  callResult?: string;
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 1300****0000
   */
  called?: string;
  /**
   * @remarks
   * The minimum number of conversation rounds in the call.
   * 
   * @example
   * 0
   */
  dialogCountFrom?: string;
  /**
   * @remarks
   * The maximum number of conversation rounds in the call.
   * 
   * @example
   * 5
   */
  dialogCountTo?: string;
  /**
   * @remarks
   * The minimum call duration.
   * 
   * @example
   * 0
   */
  durationFrom?: string;
  /**
   * @remarks
   * The maximum call duration.
   * 
   * @example
   * 60
   */
  durationTo?: string;
  /**
   * @remarks
   * The party who hangs up. Valid values:
   * 
   * *   **0**: the called party.
   * *   **1**: the robot.
   * 
   * @example
   * 1
   */
  hangupDirection?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the robocall task. You can call the [CreateRobotTask](https://help.aliyun.com/document_detail/393531.html) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1045001****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      callResult: 'CallResult',
      called: 'Called',
      dialogCountFrom: 'DialogCountFrom',
      dialogCountTo: 'DialogCountTo',
      durationFrom: 'DurationFrom',
      durationTo: 'DurationTo',
      hangupDirection: 'HangupDirection',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callResult: 'string',
      called: 'string',
      dialogCountFrom: 'string',
      dialogCountTo: 'string',
      durationFrom: 'string',
      durationTo: 'string',
      hangupDirection: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

