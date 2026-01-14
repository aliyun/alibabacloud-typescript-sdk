// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CallNumberDetailRequest extends $dara.Model {
  /**
   * @remarks
   * 外呼编号ID
   * 
   * This parameter is required.
   * 
   * @example
   * 95
   */
  id?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 33
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ownerId: 'number',
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

