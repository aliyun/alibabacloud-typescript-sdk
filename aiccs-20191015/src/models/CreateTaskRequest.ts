// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequest extends $dara.Model {
  callString?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * JSON
   */
  callStringType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571****5678,0571****5679
   */
  caller?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 2
   */
  retryCount?: number;
  /**
   * @example
   * 1
   */
  retryFlag?: number;
  /**
   * @example
   * 2
   */
  retryInterval?: number;
  /**
   * @example
   * 200010,200011
   */
  retryStatusCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  robotId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  seatCount?: string;
  startNow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  workDay?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10:00-12:00,13:00-14:00
   */
  workTimeList?: string;
  static names(): { [key: string]: string } {
    return {
      callString: 'CallString',
      callStringType: 'CallStringType',
      caller: 'Caller',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retryCount: 'RetryCount',
      retryFlag: 'RetryFlag',
      retryInterval: 'RetryInterval',
      retryStatusCode: 'RetryStatusCode',
      robotId: 'RobotId',
      seatCount: 'SeatCount',
      startNow: 'StartNow',
      taskName: 'TaskName',
      workDay: 'WorkDay',
      workTimeList: 'WorkTimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callString: 'string',
      callStringType: 'string',
      caller: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retryCount: 'number',
      retryFlag: 'number',
      retryInterval: 'number',
      retryStatusCode: 'string',
      robotId: 'string',
      seatCount: 'string',
      startNow: 'boolean',
      taskName: 'string',
      workDay: 'string',
      workTimeList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

