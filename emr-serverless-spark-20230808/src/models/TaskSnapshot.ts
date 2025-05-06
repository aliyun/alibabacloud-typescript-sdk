// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Task } from "./Task";


export class TaskSnapshot extends $dara.Model {
  bizId?: string;
  commiter?: number;
  gmtCreated?: string;
  item?: Task;
  message?: string;
  taskBizId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      commiter: 'commiter',
      gmtCreated: 'gmtCreated',
      item: 'item',
      message: 'message',
      taskBizId: 'taskBizId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      commiter: 'number',
      gmtCreated: 'string',
      item: Task,
      message: 'string',
      taskBizId: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.item && typeof (this.item as any).validate === 'function') {
      (this.item as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

