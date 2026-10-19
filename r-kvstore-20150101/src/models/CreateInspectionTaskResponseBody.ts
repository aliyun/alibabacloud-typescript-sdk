// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInspectionTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * tit-dca42f85c73644e0ab5c80ef641xxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateInspectionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task data.
   */
  data?: CreateInspectionTaskResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A931CE5-C926-5E09-B0EC-6299C4A6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateInspectionTaskResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

