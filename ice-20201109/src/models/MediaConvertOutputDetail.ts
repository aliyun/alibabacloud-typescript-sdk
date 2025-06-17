// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetailResult } from "./MediaConvertOutputDetailResult";


export class MediaConvertOutputDetail extends $dara.Model {
  code?: string;
  createTime?: string;
  finishTime?: string;
  message?: string;
  name?: string;
  result?: MediaConvertOutputDetailResult;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      message: 'Message',
      name: 'Name',
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      finishTime: 'string',
      message: 'string',
      name: 'string',
      result: MediaConvertOutputDetailResult,
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

