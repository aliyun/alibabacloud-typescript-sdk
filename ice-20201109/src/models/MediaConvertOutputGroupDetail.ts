// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetail } from "./MediaConvertOutputDetail";


export class MediaConvertOutputGroupDetail extends $dara.Model {
  code?: string;
  createTime?: string;
  finishTime?: string;
  message?: string;
  name?: string;
  outputs?: MediaConvertOutputDetail[];
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      message: 'Message',
      name: 'Name',
      outputs: 'Outputs',
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
      outputs: { 'type': 'array', 'itemType': MediaConvertOutputDetail },
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outputs)) {
      $dara.Model.validateArray(this.outputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

