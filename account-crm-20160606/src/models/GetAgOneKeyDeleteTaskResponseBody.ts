// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgOneKeyDeleteTaskResponseBodyTaskDto extends $dara.Model {
  deleteStatus?: string;
  existQuietPeriod?: boolean;
  quietPeriodEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      deleteStatus: 'DeleteStatus',
      existQuietPeriod: 'ExistQuietPeriod',
      quietPeriodEndTime: 'QuietPeriodEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteStatus: 'string',
      existQuietPeriod: 'boolean',
      quietPeriodEndTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgOneKeyDeleteTaskResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskDto?: GetAgOneKeyDeleteTaskResponseBodyTaskDto;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskDto: 'TaskDto',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskDto: GetAgOneKeyDeleteTaskResponseBodyTaskDto,
    };
  }

  validate() {
    if(this.taskDto && typeof (this.taskDto as any).validate === 'function') {
      (this.taskDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

