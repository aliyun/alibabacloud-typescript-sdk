// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVodUserUsageDetailDataExportTaskResponseBody extends $dara.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
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

