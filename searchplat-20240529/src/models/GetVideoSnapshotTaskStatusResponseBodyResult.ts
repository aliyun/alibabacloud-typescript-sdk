// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVideoSnapshotTaskStatusResponseBodyResultData } from "./GetVideoSnapshotTaskStatusResponseBodyResultData";


export class GetVideoSnapshotTaskStatusResponseBodyResult extends $dara.Model {
  data?: GetVideoSnapshotTaskStatusResponseBodyResultData[];
  error?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      error: 'error',
      status: 'status',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetVideoSnapshotTaskStatusResponseBodyResultData },
      error: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

