// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertOutputDetail extends $dara.Model {
  code?: string;
  message?: string;
  name?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      name: 'Name',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      name: 'string',
      status: 'string',
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

