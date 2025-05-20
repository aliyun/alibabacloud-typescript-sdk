// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearRecycleBinItem extends $dara.Model {
  asyncTaskId?: string;
  domainId?: string;
  driveId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
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

