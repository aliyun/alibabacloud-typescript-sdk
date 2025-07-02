// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDeviceOtaTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  operationStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      operationStatus: 'OperationStatus',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationStatus: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

