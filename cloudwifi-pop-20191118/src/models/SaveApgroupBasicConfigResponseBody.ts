// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveApgroupBasicConfigResponseBodyData extends $dara.Model {
  id?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

export class SaveApgroupBasicConfigResponseBody extends $dara.Model {
  data?: SaveApgroupBasicConfigResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  isSuccess?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SaveApgroupBasicConfigResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

