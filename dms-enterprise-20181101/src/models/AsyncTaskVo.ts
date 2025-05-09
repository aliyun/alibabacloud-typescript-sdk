// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncTaskVO extends $dara.Model {
  datasetId?: string;
  id?: number;
  remark?: string;
  taskName?: string;
  taskStatus?: number;
  taskType?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      id: 'Id',
      remark: 'Remark',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      id: 'number',
      remark: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskType: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

