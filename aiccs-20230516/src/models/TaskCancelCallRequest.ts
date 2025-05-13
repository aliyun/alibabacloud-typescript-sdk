// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskCancelCallRequest extends $dara.Model {
  numbers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: string[];
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.numbers)) {
      $dara.Model.validateArray(this.numbers);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

